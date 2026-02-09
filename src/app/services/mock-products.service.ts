import { Injectable } from '@angular/core';
import { Product, Category } from '../models/product';

@Injectable({ providedIn: 'root' })
export class MockProductsService {
  private placeholder(category: Category, name: string): string {
    const label = (name || category).slice(0, 24);
    const svg =
      `<svg xmlns='http://www.w3.org/2000/svg' width='600' height='600'>` +
      `<defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop offset='0%' stop-color='#6f42c1'/><stop offset='100%' stop-color='#e83e8c'/></linearGradient></defs>` +
      `<rect width='100%' height='100%' fill='url(#g)'/>` +
      `<text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='white' font-family='Segoe UI, Arial' font-size='36' font-weight='700'>${label}</text>` +
      `</svg>`;
    return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
  }

  private make(
    id: string,
    name: string,
    description: string,
    category: Category,
    price: number,
    photos?: string[]
  ): Product {
    return {
      id,
      name,
      description,
      category,
      imageUrl: photos?.[0] ?? this.placeholder(category, name),
      price,
      photos: photos ?? [this.placeholder(category, `${name} 1`), this.placeholder(category, `${name} 2`)],
    };
  }

  getByCategory(category: Category): Product[] {
    switch (category) {
      case 'Brincos':
        return [
          this.make('b1', 'Argola Dourada', 'Argola clássica dourada', category, 15.0, ['assets/brincos/argola-dourada.png']),
          this.make('b2', 'Pérola Pequena', 'Brinco de pérola delicado', category, 15.0, ['assets/brincos/prata/brinco-perola-pequeno.png']),
          this.make('b3', 'Coração Dourado', 'Brinco coração dourado', category, 15.0, ['assets/brincos/brinco-coracao-dourado.png']),
          this.make('b4', 'Borboleta Dourada', 'Brinco borboleta médio', category, 15.0, ['assets/brincos/brinco-borboleta-dourado-medio.png']),
          this.make('b5', 'Florzinha', 'Brinco florzinha delicado', category, 15.0, ['assets/brincos/brinco-florzinha.png']),
        ];
      case 'Anéis':
        return [
          this.make('a1', 'Anel Rosa Prata', 'Anel prata com pedra rosa', category, 15.0, ['assets/aneis/anel-rosa-prata-lindo.png']),
          this.make('a2', 'Aparador Aliança', 'Aparador de aliança', category, 15.0, ['assets/aneis/aparador-alinhanca.png']),
          this.make('a3', 'Aliança Prata', 'Aliança prata trabalhada', category, 15.0, ['assets/aneis/alinhanca.png']),
          this.make('a4', 'Anel Vermelho', 'Anel prata com pedra vermelha', category, 15.0, ['assets/aneis/anel-vermelho-prata.png']),
        ];
      case 'Correntes':
        return [
          this.make('c1', 'Colar Prata', 'Colar prata delicado', category, 15.0, ['assets/correntes/colar-prata.png']),
          this.make('c2', 'Corrente Masculina', 'Corrente masculina grossa', category, 15.0, ['assets/correntes/corrente-masculinha.png']),
          this.make('c3', 'Conjunto Corrente', 'Conjunto de corrente elegante', category, 15.0, ['assets/correntes/conjunto-corrente.png']),
        ];
      case 'Pulseiras':
        return [
          this.make('p1', 'Pulseira Prata', 'Pulseira prata linda', category, 15.0, ['assets/pulseiras/pulseira-prata-linda.png']),
          this.make('p2', 'Pulseira Dourada', 'Pulseira dourada clássica', category, 15.0, ['assets/pulseiras/pulseira-dourada.png']),
          this.make('p3', 'Bracelete Prata', 'Bracelete prata moderno', category, 15.0, ['assets/brincos/cadastrar-loja/bracelete-prata.png']),
          this.make('p4', 'Pulseira Fina', 'Pulseira fina dourada', category, 15.0, ['assets/brincos/cadastrar-loja/pulseira-fina-dourada.png']),
        ];
      case 'Pingentes':
        return [
          this.make('pg1', 'Pingente Dourado', 'Pingente dourado trabalhado', category, 15.0, ['assets/pingentes/pingente-dourado.png']),
          this.make('pg2', 'Pingente Sol', 'Pingente em formato de sol', category, 15.0, ['assets/pingentes/pingente-sol.png']),
          this.make('pg3', 'Pingente Patinha', 'Pingente de patinha fofo', category, 15.0, ['assets/pingentes/pingente-patinha.png']),
        ];
    }
  }

  getBestSellers(): Product[] {
    return [
      ...this.getByCategory('Brincos').slice(0, 2),
      ...this.getByCategory('Anéis').slice(0, 2),
      ...this.getByCategory('Correntes').slice(0, 1),
    ];
  }

  getHighlights(): Product[] {
    return [
      ...this.getByCategory('Pulseiras').slice(0, 2),
      ...this.getByCategory('Pingentes').slice(0, 2),
      ...this.getByCategory('Brincos').slice(2, 3),
    ];
  }

  getProductById(id: string): Product | undefined {
    const allProducts = [
      ...this.getByCategory('Brincos'),
      ...this.getByCategory('Anéis'),
      ...this.getByCategory('Correntes'),
      ...this.getByCategory('Pulseiras'),
      ...this.getByCategory('Pingentes'),
    ];
    return allProducts.find(p => p.id === id);
  }
}
