# Fati Semijoias - Frontend

Bem-vindo ao projeto frontend da **Fati Semijoias**! Este é um projeto Angular moderno seguindo as melhores práticas e padrões de desenvolvimento.

## 📋 Descrição do Projeto

Este é o frontend da aplicação de e-commerce da Fati Semijoias, desenvolvido com:
- **Angular 19** - Framework frontend moderno
- **Bootstrap 5** - Framework CSS para design responsivo
- **SCSS** - Pré-processador CSS avançado
- **TypeScript** - Linguagem tipada para JavaScript

## 🚀 Configuração e Instalação

### Pré-requisitos

Antes de começar, certifique-se de ter instalado:
- **Node.js** (versão 18.x ou superior): [Download](https://nodejs.org/)
- **npm** (geralmente vem com Node.js)
- **Angular CLI** (versão 19): Será instalado como dependência do projeto

### Passos para Instalação

1. **Clone o repositório** (ou navegue até a pasta do projeto):
   ```bash
   cd front-fatisemijoias
   ```

2. **Instale as dependências do projeto**:
   ```bash
   npm install
   ```

   Este comando instalará:
   - Angular Framework e ferramentas
   - Bootstrap 5
   - RxJS (library de programação reativa)
   - Todas as outras dependências necessárias

## 🏃 Executar o Projeto

### Modo de Desenvolvimento

Para iniciar o servidor de desenvolvimento:

```bash
npm start
```

Ou usando Angular CLI diretamente:

```bash
ng serve --open
```

O aplicativo será aberto automaticamente em `http://localhost:4200/`

### Modo Watch (Reconstrução automática)

Para reconstruir o projeto automaticamente quando há mudanças:

```bash
npm run watch
```

Ou:

```bash
ng build --watch --configuration development
```

## 🔨 Build e Produção

### Build para Produção

Para criar um build otimizado para produção:

```bash
npm run build-prod
```

Ou:

```bash
ng build --configuration production
```

Os arquivos compilados estarão em `/dist/fatisemijoias/`

### Build para Desenvolvimento

Para um build rápido de desenvolvimento:

```bash
npm run build
```

## 📁 Estrutura do Projeto

```
front-fatisemijoias/
├── src/
│   ├── app/
│   │   ├── app.component.ts       # Componente raiz
│   │   ├── app.component.html     # Template do componente
│   │   ├── app.component.scss     # Estilos do componente
│   │   ├── app.config.ts          # Configuração da aplicação
│   │   └── app.routes.ts          # Rotas da aplicação
│   ├── assets/                    # Arquivos estáticos (imagens, etc)
│   ├── environments/              # Configurações por ambiente
│   ├── index.html                 # Arquivo HTML principal
│   ├── main.ts                    # Ponto de entrada da aplicação
│   └── styles.scss                # Estilos globais
├── angular.json                   # Configuração do Angular CLI
├── tsconfig.json                  # Configuração do TypeScript
├── tsconfig.app.json              # Config TypeScript para app
├── tsconfig.spec.json             # Config TypeScript para testes
├── package.json                   # Dependências do projeto
└── README.md                      # Este arquivo
```

## 🎨 Estilos e Bootstrap

### Importação do Bootstrap

O Bootstrap 5 está totalmente integrado ao projeto através do arquivo `src/styles.scss`:

```scss
@use "bootstrap/scss/bootstrap";
```

### Variáveis Customizadas

As seguintes variáveis foram definidas no arquivo global de estilos:

```scss
$brand-primary: #6f42c1;
$brand-secondary: #e83e8c;
$brand-accent: #ff6b6b;
```

### Arquivo de Estilos Globais

O arquivo `src/styles.scss` contém:
- ✅ Importação do Bootstrap (método moderno `@use`)
- ✅ Variáveis de marca personalizadas
- ✅ Estilos globais e utilitários
- ✅ Customizações de componentes Bootstrap
- ✅ Animações e efeitos
- ✅ Resposividade aprimorada
- ✅ Acessibilidade

## 🧩 Componentes Criados

- Header (logo e navegação) — [header.component.ts](file:///c:/Users/mshei/OneDrive/Documentos/Project%20-%20Sheila/Project/fatisemijoias/front-fatisemijoias/src/app/components/header/header.component.ts)
- Home (banner e apresentação) — [home.component.ts](file:///c:/Users/mshei/OneDrive/Documentos/Project%20-%20Sheila/Project/fatisemijoias/front-fatisemijoias/src/app/pages/home/home.component.ts)
- ProductCard (card reutilizável) — [product-card.component.ts](file:///c:/Users/mshei/OneDrive/Documentos/Project%20-%20Sheila/Project/fatisemijoias/front-fatisemijoias/src/app/components/product-card/product-card.component.ts)
- Category Base (grid por categoria) — [category-base.component.ts](file:///c:/Users/mshei/OneDrive/Documentos/Project%20-%20Sheila/Project/fatisemijoias/front-fatisemijoias/src/app/pages/category/category-base.component.ts)
- Serviço de dados mockados — [mock-products.service.ts](file:///c:/Users/mshei/OneDrive/Documentos/Project%20-%20Sheila/Project/fatisemijoias/front-fatisemijoias/src/app/services/mock-products.service.ts)

## 🔗 Rotas

- / — Home
- /categorias/brincos
- /categorias/aneis
- /categorias/correntes
- /categorias/pulseiras
- /categorias/pingentes

## 📲 WhatsApp

- Botão “Tenho interesse” abre WhatsApp com mensagem pré-preenchida usando `https://wa.me/551199258799?text=...`
- Para direcionar para um número específico, altere a URL para `https://wa.me/SEU_NUMERO?text=...` (formato: DDI+DDD+Número, ex: 5511999999999)

## 🖼️ Logo

- Adicione o arquivo da logo em `src/assets/logo-fatisemijoias.jpg`
- O header referencia `assets/logo-fatisemijoias.jpg` automaticamente

## 🔜 Próximos Passos

1. Substituir placeholders de imagens por arquivos reais em `src/assets/`
2. Adicionar páginas institucionais: Sobre, Contato
3. Configurar SEO básico (meta tags) em `src/index.html`
4. Preparar estrutura para futura API (services e interfaces)
5. Criar testes unitários para componentes principais

### Componente AppComponent

O arquivo `src/app/app.component.scss` contém estilos específicos do componente com:
- Customizações da navbar
- Estilos de cards
- Efeitos hover
- Media queries para responsividade

## 🧪 Testes

Para executar os testes unitários:

```bash
npm test
```

Ou:

```bash
ng test
```

## 📱 Responsividade

O projeto está totalmente configurado para ser responsivo usando:
- **Bootstrap Grid System** - Sistema de grid de 12 colunas
- **Media Queries** - Breakpoints personalizados
- **Viewport Meta Tag** - Configurado em `index.html`

### Breakpoints do Bootstrap

- **xs**: < 576px (dispositivos pequenos)
- **sm**: ≥ 576px (dispositivos pequenos)
- **md**: ≥ 768px (tablets)
- **lg**: ≥ 992px (desktops)
- **xl**: ≥ 1200px (desktops maiores)
- **xxl**: ≥ 1400px (desktops muito grandes)

## 🔧 Configuração do TypeScript

O projeto utiliza configurações estritas do TypeScript:
- `strict: true` - Verificação de tipos rigorosa
- `noImplicitAny: true` - Requer tipos explícitos
- `strictNullChecks: true` - Verificação rigorosa de null
- `strictFunctionTypes: true` - Verificação rigorosa de funções

## 📦 Dependências Principais

| Dependência | Versão | Descrição |
|---|---|---|
| @angular/core | 19.0.0 | Framework Angular |
| @angular/common | 19.0.0 | Módulos comuns do Angular |
| @angular/router | 19.0.0 | Roteamento do Angular |
| bootstrap | 5.3.3 | Framework CSS |
| rxjs | 7.8.1 | Programação reativa |
| typescript | 5.6.2 | Linguagem tipada |

## 🌐 Compatibilidade de Navegadores

Este projeto suporta:
- ✅ Chrome (últimas 2 versões)
- ✅ Firefox (últimas 2 versões)
- ✅ Safari (últimas 2 versões)
- ✅ Edge (últimas 2 versões)

## 🤝 Boas Práticas Implementadas

1. **Componentes Standalone** - Componentes Angular moderno sem NgModule
2. **SCSS Organizado** - Variáveis, mixins e estrutura clara
3. **TypeScript Strict** - Tipagem rigorosa para melhor qualidade
4. **Responsive Design** - Mobile-first com Bootstrap
5. **Acessibilidade** - Semântica HTML e suporte a WCAG
6. **SEO** - Meta tags e estrutura semântica

## 📚 Referências Úteis

- [Documentação do Angular](https://angular.io/docs)
- [Documentação do Bootstrap 5](https://getbootstrap.com/docs/5.3/)
- [Documentação do SCSS](https://sass-lang.com/documentation)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## 🚨 Troubleshooting

### Erro: "ng command not found"
```bash
# Instale o Angular CLI globalmente
npm install -g @angular/cli@latest

# Ou use npx
npx ng serve
```

### Porta 4200 já em uso
```bash
# Use uma porta diferente
ng serve --port 4201
```

### Problemas de dependências
```bash
# Limpe a pasta node_modules e reinstale
rm -rf node_modules package-lock.json
npm install
```

## 👨‍💻 Contribuição

Para contribuir com o projeto:
1. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
2. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
3. Push para a branch (`git push origin feature/AmazingFeature`)
4. Abra um Pull Request

## 📄 Licença

Este projeto é propriedade da Fati Semijoias. Todos os direitos reservados.

## 📞 Suporte

Para dúvidas ou sugestões sobre o projeto, entre em contato com a equipe de desenvolvimento.

---

**Desenvolvido com ❤️ para Fati Semijoias**

Última atualização: Fevereiro 2026
