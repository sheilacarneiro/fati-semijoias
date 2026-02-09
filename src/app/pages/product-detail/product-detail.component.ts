import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Product } from '../../models/product';
import { MockProductsService } from '../../services/mock-products.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: Product | undefined;
  selectedImage: string = '';

  constructor(
    private route: ActivatedRoute,
    private svc: MockProductsService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.product = this.svc.getProductById(id);
        if (this.product) {
          this.selectedImage = this.product.photos?.[0] || this.product.imageUrl;
        }
      }
    });
  }

  selectImage(url: string): void {
    this.selectedImage = url;
  }

  resolveImage(url: string): string {
    if (!url) return '';
    // Se for URL de dados (svg placeholder), retorna como está
    if (url.startsWith('data:')) {
      return url;
    }
    
    const path = url.startsWith('/') ? url.substring(1) : url;
    return path;
  }

  formatBRL(value: number): string {
    try {
      return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
    } catch {
      const v = Math.round(value * 100) / 100;
      return `R$ ${v.toFixed(2).replace('.', ',')}`;
    }
  }

  onInterest(): void {
    if (!this.product) return;
    const msg = `Olá! Tenho interesse na joia "${this.product.name}" da categoria ${this.product.category} da Fati Semijoias.`;
    const url = `https://wa.me/551199258799?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  }
}
