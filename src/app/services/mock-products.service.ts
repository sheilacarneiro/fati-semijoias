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
          this.make('nb1', 'Argola Grande', 'Brinco argola grande', category, 15.0, ['assets/brincos/cadastrar-loja/brinco-argola-grande.png']),
          this.make('nb2', 'Bolinha Preta', 'Brinco bolinha preta', category, 15.0, ['assets/brincos/cadastrar-loja/brinco-bolinha-preta.png']),
          this.make('nb3', 'Borboletinha', 'Brinco borboletinha delicado', category, 15.0, ['assets/brincos/cadastrar-loja/brinco-borbolettinhaa.png']),
          this.make('nb4', 'Botão', 'Brinco botão clássico', category, 15.0, ['assets/brincos/cadastrar-loja/brinco-botao.png']),
          this.make('nb5', 'Pedra Amarela', 'Brinco com pedra amarela', category, 15.0, ['assets/brincos/cadastrar-loja/brinco-com-pedra-amarelo.png']),
          this.make('nb6', 'Pedra Branca', 'Brinco com pedra branca', category, 15.0, ['assets/brincos/cadastrar-loja/brinco-com-pedra-branco.png']),
          this.make('nb7', 'Pedra Brilhante', 'Brinco com pedra brilhante', category, 15.0, ['assets/brincos/cadastrar-loja/brinco-com-pedra-brilhante.png']),
          this.make('nb8', 'Pedra Rosa', 'Brinco com pedra rosa', category, 15.0, ['assets/brincos/cadastrar-loja/brinco-com-pedra-rosa.png']),
          this.make('nb9', 'Pedra Roxo Rosa', 'Brinco com pedra roxo rosa', category, 15.0, ['assets/brincos/cadastrar-loja/brinco-com-pedra-roxo-rosa.png']),
          this.make('nb10', 'Pedra Roxo', 'Brinco com pedra roxa', category, 15.0, ['assets/brincos/cadastrar-loja/brinco-com-pedra-roxo.png']),
          this.make('nb11', 'Pedra Verde', 'Brinco com pedra verde', category, 15.0, ['assets/brincos/cadastrar-loja/brinco-com-pedra-verde.png']),
          this.make('nb12', 'Brinco Pedra', 'Brinco com pedra', category, 15.0, ['assets/brincos/cadastrar-loja/brinco-com-pedra.png']),
          this.make('nb13', 'Infantil', 'Brinco infantil', category, 15.0, ['assets/brincos/cadastrar-loja/brinco-infantil.png']),
          this.make('nb14', 'Ponto de Luz', 'Brinco ponto de luz pequeno', category, 15.0, ['assets/brincos/cadastrar-loja/brinco-pequeno-luz01.png']),
          this.make('nb15', 'Brinco Verde', 'Brinco verde', category, 15.0, ['assets/brincos/cadastrar-loja/brincosverde.png']),
          this.make('nb16', 'Segundo Furo Prata', 'Brinco segundo furo prata', category, 15.0, ['assets/brincos/cadastrar-loja/segundo--prata.png']),
          this.make('nb17', 'Segundo Furo Amarelo', 'Brinco segundo furo amarelo', category, 15.0, ['assets/brincos/cadastrar-loja/segundo-furo-amarelo.png']),
          this.make('nb18', 'Segundo Furo Amarelo 2', 'Brinco segundo furo amarelo', category, 15.0, ['assets/brincos/cadastrar-loja/segundo-furo-amarelo0.png']),
          this.make('nb19', 'Segundo Furo Rosa', 'Brinco segundo furo rosa', category, 15.0, ['assets/brincos/cadastrar-loja/segundo-furo-rosa.png']),
        ];
      case 'Anéis':
        return [
          this.make('a1', 'Anel Rosa Prata', 'Anel prata com pedra rosa', category, 20.0, ['assets/aneis/anel-rosa-prata-lindo.png']),
          this.make('a2', 'Aparador Aliança', 'Aparador de aliança', category, 70.0, ['assets/aneis/aparador-alinhanca.png']),
          this.make('a3', 'Aliança Prata', 'Aliança prata trabalhada', category, 80.0, ['assets/aneis/alinhanca.png']),
          this.make('a4', 'Anel Vermelho', 'Anel prata com pedra vermelha', category, 20.0, ['assets/aneis/anel-vermelho-prata.png']),
        ];
      case 'Correntes':
        return [
          this.make('c1', 'Colar Prata', 'Colar prata delicado', category, 35.0, ['assets/correntes/colar-prata.png']),
          this.make('c2', 'Corrente Masculina', 'Corrente masculina grossa', category, 45.0, ['assets/correntes/corrente-masculinha.png']),
          this.make('c3', 'Conjunto Corrente', 'Conjunto de corrente elegante', category, 80.0, ['assets/correntes/conjunto-corrente.png']),
          this.make('nc1', 'Corrente Dourada Fina', 'Corrente Dourada Fina', category, 30.0, ['assets/brincos/cadastrar-loja/corrente-dourado.png']),
          this.make('nc2', 'Corrente Dourada', 'Corrente dourada clássica', category, 30.0, ['assets/brincos/cadastrar-loja/corrente-dourado00.png']),
          this.make('nc3', 'Colar Prateado com Pedra Amarela Cristal', 'Colar Prateado com Pedra Amarela Cristal', category, 45.0, ['assets/brincos/cadastrar-loja/corrente-pingente-amarelo.png']),
          this.make('nc4', 'Colar Prateado com Pedra Amarela', 'Colar prateado com pedra amarela', category, 45.0, ['assets/brincos/cadastrar-loja/corrente-pingente-amarelo01.png']),
          this.make('nc5', 'Colar Prata com Coração Lapidado', 'Colar Prata com Coração Lapidado', category, 50.0, ['assets/brincos/cadastrar-loja/corrente-pingente.png']),
          this.make('nc6', 'Corrente Prata Masculina/Feminina', 'Corrente Prata Masculina/Feminina', category, 40.0, ['assets/brincos/cadastrar-loja/corrente-pingente0.png']),
        ];
      case 'Pulseiras':
        return [
          this.make('p1', 'Pulseira Prata', 'Pulseira prata linda', category, 20.0, ['assets/pulseiras/pulseira-prata-linda.png']),
          this.make('p2', 'Pulseira Dourada', 'Pulseira dourada clássica', category, 35.0, ['assets/pulseiras/pulseira-dourada.png']),
          this.make('p3', 'Bracelete Prata', 'Bracelete prata moderno', category, 55.0, ['assets/brincos/cadastrar-loja/bracelete-prata.png']),
          this.make('p4', 'Pulseira Fina', 'Pulseira fina dourada', category, 15.0, ['assets/brincos/cadastrar-loja/pulseira-fina-dourada.png']),
          this.make('np2', 'Bracelete', 'Bracelete elegante', category, 45.0, ['assets/brincos/cadastrar-loja/bracelete.png']),
          this.make('np3', 'Pulseira Branca', 'Pulseira branca', category, 15.0, ['assets/brincos/cadastrar-loja/pulseira-branca.png']),
          this.make('np4', 'Pulseira Dourada Trabalhada', 'Pulseira dourada trabalhada', category, 15.0, ['assets/brincos/cadastrar-loja/pulseira-dourada-trabalhada.png']),
          this.make('np6', 'Pulseira Fina Dourada 2', 'Pulseira fina dourada', category, 30.0, ['assets/brincos/cadastrar-loja/pulseira-fina-dourada00.png']),
          this.make('np7', 'Pulseira Fina', 'Pulseira fina delicada', category, 15.0, ['assets/brincos/cadastrar-loja/pulseira-fina00.png']),
          this.make('np8', 'Pulseira Fina 2', 'Pulseira fina delicada', category, 15.0, ['assets/brincos/cadastrar-loja/pulseira-fina01.png']),
          this.make('np9', 'Pulseira Prata Lisa', 'Pulseira prata lisa', category, 15.0, ['assets/brincos/cadastrar-loja/pulseira-prata-lisa00.png']),
          this.make('np10', 'Pulseira Prata', 'Pulseira prata', category, 15.0, ['assets/brincos/cadastrar-loja/pulseira-prata.png']),
          this.make('np11', 'Pulseira Prata 2', 'Pulseira prata', category, 15.0, ['assets/brincos/cadastrar-loja/pulseira-prata00.png']),
          this.make('np12', 'Pulseira Preta', 'Pulseira preta', category, 15.0, ['assets/brincos/cadastrar-loja/pulseira-preta.png']),
        ];
      case 'Pingentes':
        return [
          this.make('pg1', 'Pingente Dourado', 'Pingente dourado trabalhado', category, 15.0, ['assets/pingentes/pingente-dourado.png']),
          this.make('pg2', 'Pingente Sol', 'Pingente em formato de sol', category, 15.0, ['assets/pingentes/pingente-sol.png']),
          this.make('pg3', 'Pingente Patinha', 'Pingente de patinha fofo', category, 15.0, ['assets/pingentes/pingente-patinha.png']),
          this.make('npg1', 'Pingente Pena', 'Pingente pena', category, 15.0, ['assets/brincos/cadastrar-loja/pincente-pena00.png']),
          this.make('npg2', 'Pingente Vazado', 'Pingente vazado', category, 15.0, ['assets/brincos/cadastrar-loja/pingente-vazado.png']),
          this.make('npg3', 'Pingente Borboleta', 'Pingente borboleta', category, 15.0, ['assets/brincos/cadastrar-loja/pingenteborboleta.png']),
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
