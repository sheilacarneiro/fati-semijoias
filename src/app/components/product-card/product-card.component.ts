import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input({ required: true }) product!: Product;
  @Output() interest = new EventEmitter<Product>();
  selectedIndex = 0;

  get currentImage(): string {
    const list = this.product.photos?.length ? this.product.photos! : [this.product.imageUrl];
    const img = list[this.selectedIndex] ?? list[0];
    return this.resolveImage(img);
  }

  resolveImage(url: string): string {
    if (!url) return '';
    if (url.startsWith('data:')) {
      return url;
    }
    const path = url.startsWith('/') ? url.substring(1) : url;
    return path;
  }

  selectPhoto(i: number): void {
    this.selectedIndex = i;
  }

  formatBRL(value: number): string {
    try {
      return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
    } catch {
      const v = Math.round(value * 100) / 100;
      return `R$ ${v.toFixed(2).replace('.', ',')}`;
    }
  }
}
