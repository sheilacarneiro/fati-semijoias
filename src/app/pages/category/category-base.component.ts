import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { MockProductsService } from '../../services/mock-products.service';
import { Category, Product } from '../../models/product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-base',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './category-base.component.html',
  styleUrls: ['./category-base.component.scss']
})
export class CategoryBaseComponent {
  @Input({ required: true }) category!: Category;
  products: Product[] = [];

  constructor(private svc: MockProductsService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const cat = (this.route.snapshot.data['category'] ?? this.category) as Category;
    this.category = cat;
    this.products = this.svc.getByCategory(cat);
  }

  onInterest(product: Product): void {
    const msg = `Olá! Tenho interesse na joia "${product.name}" da categoria ${product.category} da Fati Semijoias.`;
    const url = `https://wa.me/+5511992528769?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  }
}
