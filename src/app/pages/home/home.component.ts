import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Product } from '../../models/product';
import { MockProductsService } from '../../services/mock-products.service';
import { ProductCardComponent } from '../../components/product-card/product-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, ProductCardComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  bestSellers: Product[] = [];
  highlights: Product[] = [];

  constructor(private svc: MockProductsService) {}

  ngOnInit(): void {
    this.bestSellers = this.svc.getBestSellers();
    this.highlights = this.svc.getHighlights();
  }

  onInterest(product: Product): void {
    const msg = `Olá! Tenho interesse na joia "${product.name}" da categoria ${product.category} da Fati Semijoias.`;
    const url = `https://wa.me/+5511992528769?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  }
}
