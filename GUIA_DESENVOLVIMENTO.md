# 📖 Guia Completo - Angular 19 + Bootstrap 5

## 🎯 O que foi criado?

Um projeto **Angular 19** completamente configurado com **Bootstrap 5**, seguindo as melhores práticas da documentação oficial do Angular.

## ✅ Checklist de Configuração Concluída

- ✅ Instalação do Angular 19 (versão mais recente)
- ✅ Configuração de roteamento
- ✅ SCSS como pré-processador padrão
- ✅ Bootstrap 5 integrado
- ✅ Estilos globais com Bootstrap importado
- ✅ Componentes Angular standalone (padrão moderno)
- ✅ TypeScript com configuração estrita
- ✅ Estrutura de projeto profissional
- ✅ Configurações de ambiente (dev e prod)
- ✅ Testes unitários configurados
- ✅ Acessibilidade web implementada
- ✅ Responsividade garantida

## 📦 Como Usar o Projeto

### 1️⃣ Instalar Dependências

Antes de tudo, instale todas as dependências do projeto:

```bash
npm install
```

Este comando irá:
- Instalar Angular 19 e todas as ferramentas
- Instalar Bootstrap 5
- Instalar RxJS e outras dependências
- Criar a pasta `node_modules/`

**⏱️ Tempo estimado:** 5-10 minutos (primeira instalação)

### 2️⃣ Iniciar o Servidor de Desenvolvimento

```bash
npm start
```

O projeto abrirá automaticamente em `http://localhost:4200/`

Você verá:
- ✅ Uma navbar responsiva com Bootstrap
- ✅ Conteúdo principal com cards Bootstrap
- ✅ Footer com estilo
- ✅ Design totalmente responsivo

### 3️⃣ Fazer Alterações

Qualquer mudança que você fizer nos arquivos será recompilada automaticamente:

**Exemplos de arquivos para editar:**
- `src/app/app.component.html` - Template (estrutura HTML)
- `src/app/app.component.scss` - Estilos do componente
- `src/styles.scss` - Estilos globais
- `src/app/app.component.ts` - Lógica do componente

### 4️⃣ Criar um Build para Produção

```bash
npm run build-prod
```

Os arquivos compilados ficarão em `/dist/fatisemijoias/`

## 🎨 Bootstrap - Como Usar

### Classes Bootstrap Principais

```html
<!-- Grid System (responsivo) -->
<div class="container">
  <div class="row">
    <div class="col-md-6">Coluna 1</div>
    <div class="col-md-6">Coluna 2</div>
  </div>
</div>

<!-- Botões -->
<button class="btn btn-primary">Botão Primário</button>
<button class="btn btn-secondary">Botão Secundário</button>

<!-- Cards -->
<div class="card">
  <div class="card-body">
    <h5 class="card-title">Título</h5>
    <p class="card-text">Conteúdo</p>
  </div>
</div>

<!-- Navbar -->
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">Logo</a>
</nav>

<!-- Espaçamento -->
<div class="mt-5 mb-3 p-4">Conteúdo com margem e padding</div>
```

### Importar SCSS do Bootstrap em Componentes

Se precisar usar mixins do Bootstrap em um componente específico:

```scss
// Em qualquer arquivo .scss
@import 'bootstrap/scss/bootstrap';

// Agora você pode usar mixins
@media (min-width: map-get($grid-breakpoints, 'lg')) {
  .meu-elemento {
    // estilos
  }
}
```

## 📁 Estrutura de Arquivos Explicada

```
front-fatisemijoias/
│
├── src/                          # Código-fonte da aplicação
│   ├── app/
│   │   ├── app.component.ts      # Componente raiz (lógica)
│   │   ├── app.component.html    # Template raiz (HTML)
│   │   ├── app.component.scss    # Estilos do componente
│   │   ├── app.config.ts         # Configuração da app
│   │   ├── app.routes.ts         # Rotas da aplicação
│   │   └── app.component.spec.ts # Testes
│   │
│   ├── assets/                   # Imagens, fontes, etc
│   ├── environments/             # Configurações por ambiente
│   │   ├── environment.ts        # Dev
│   │   └── environment.prod.ts   # Produção
│   │
│   ├── index.html                # Arquivo HTML principal
│   ├── main.ts                   # Ponto de entrada
│   └── styles.scss               # ⭐ ESTILOS GLOBAIS (Bootstrap!)
│
├── angular.json                  # Config do Angular CLI
├── tsconfig.json                 # Config TypeScript
├── package.json                  # Dependências
├── karma.conf.js                 # Config dos testes
├── .editorconfig                 # Padronização de código
├── .gitignore                    # Arquivos ignorados pelo Git
└── README.md                     # Documentação
```

## 🎯 Fluxo de Desenvolvimento

### 1. Criar um novo componente

```bash
ng generate component components/navbar
```

Isso criará:
- `src/app/components/navbar/navbar.component.ts`
- `src/app/components/navbar/navbar.component.html`
- `src/app/components/navbar/navbar.component.scss`
- `src/app/components/navbar/navbar.component.spec.ts`

### 2. Usar o componente

```typescript
// Em app.component.ts
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, RouterOutlet],
  // ...
})
```

### 3. Adicionar estilos Bootstrap

```html
<!-- Em um template -->
<div class="container mt-5">
  <div class="row">
    <div class="col-lg-8 mx-auto">
      <div class="card shadow">
        <div class="card-body">
          <h1>Título</h1>
          <p>Conteúdo com Bootstrap!</p>
        </div>
      </div>
    </div>
  </div>
</div>
```

## 🚀 Comandos Principais

| Comando | Descrição |
|---------|-----------|
| `npm start` | Inicia servidor de dev |
| `npm run build-prod` | Build para produção |
| `npm test` | Executa testes |
| `ng generate component` | Cria novo componente |
| `ng generate service` | Cria novo serviço |
| `ng generate module` | Cria novo módulo |

## 💡 Boas Práticas

### ✅ Faça:
- Use componentes standalone (moderno)
- Sempre use TypeScript strict mode
- Organize componentes em pastas
- Use serviços para compartilhar dados
- Implemente OnInit e OnDestroy
- Teste seus componentes

### ❌ Evite:
- NgModule (componentes standalone são preferidos)
- Qualquer, any, unknown sem necessidade
- Lógica de negócio em componentes
- Estilos inline desnecessários
- Deixar subscriptions vazando

## 🔧 Variáveis do Bootstrap

As cores padrão do Bootstrap podem ser customizadas. Veja em `src/styles.scss`:

```scss
$brand-primary: #6f42c1;
$brand-secondary: #e83e8c;
$brand-accent: #ff6b6b;
```

Modifique estas variáveis para mudar o tema do projeto!

## 📱 Testando Responsividade

No navegador:
1. Abra as Developer Tools (F12)
2. Clique no ícone de dispositivo
3. Teste em diferentes tamanhos de tela

## 🧪 Executando Testes

```bash
npm test
```

Isso abrirá o Karma Test Runner no navegador.

## 🆘 Problemas Comuns

### "ng command not found"
```bash
npm install -g @angular/cli@latest
```

### "Port 4200 already in use"
```bash
ng serve --port 4201
```

### "node_modules corrompido"
```bash
rm -rf node_modules package-lock.json
npm install
```

## 📚 Recursos de Aprendizado

- [Angular Docs](https://angular.io)
- [Bootstrap Docs](https://getbootstrap.com)
- [SCSS Guide](https://sass-lang.com)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

## 🎉 Próximos Passos

1. ✅ Explore a estrutura do projeto
2. ✅ Faça alterações no `app.component.html`
3. ✅ Customize as cores em `src/styles.scss`
4. ✅ Crie novos componentes com `ng generate`
5. ✅ Integre com uma API backend
6. ✅ Faça deploy em produção

---

**Parabéns! Seu projeto Angular 19 + Bootstrap está pronto! 🚀**
