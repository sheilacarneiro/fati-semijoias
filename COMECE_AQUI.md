# 🚀 INSTRUÇÕES RÁPIDAS - COMECE AQUI!

## ⚡ 3 Passos Simples para Começar

### 1️⃣ Abra o Terminal e Navegue até a Pasta
```bash
cd "C:\Users\mshei\OneDrive\Documentos\Project - Sheila\Project\fatisemijoias\front-fatisemijoias"
```

### 2️⃣ Instale as Dependências
```bash
npm install
```
⏱️ **Aguarde 5-15 minutos** (primeira vez é mais lenta)

### 3️⃣ Inicie o Servidor
```bash
npm start
```
✨ **Pronto!** O projeto abrirá automaticamente em `http://localhost:4200/`

---

## 📁 Onde Editar o Código?

### Para Adicionar Conteúdo HTML:
📄 `src/app/pages/home/home.component.html` - Conteúdo da Home

### Para Estilizar com Bootstrap:
```html
<div class="container mt-5">
  <div class="row">
    <div class="col-md-6">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Meu Card</h5>
          <p>Conteúdo aqui...</p>
          <button class="btn btn-primary">Clique</button>
        </div>
      </div>
    </div>
  </div>
</div>
```

### Para Adicionar Estilos Globais:
📄 `src/styles.scss` - Estilos globais com Bootstrap (`@use`)

### Para Adicionar Estilos do Componente:
📄 `src/app/components/header/header.component.scss` - Estilos do Header
📄 `src/app/pages/home/home.component.scss` - Estilos da Home

---

## 🎨 Bootstrap Classes Principais

| Classe | Uso |
|--------|-----|
| `.container` | Contêiner com largura máxima |
| `.container-fluid` | Contêiner 100% de largura |
| `.row` | Linha do grid |
| `.col-md-6` | Coluna que ocupa 6/12 em telas médias |
| `.btn btn-primary` | Botão primário |
| `.card` | Card/Caixa de conteúdo |
| `.navbar` | Barra de navegação |
| `.mt-5` | Margem superior (margin-top) |
| `.p-4` | Padding (espaçamento interno) |
| `.text-center` | Texto centralizado |
| `.shadow` | Sombra |

---

## 📱 Testar Responsividade

1. Abra o navegador
2. Pressione **F12** para abrir DevTools
3. Clique no ícone de dispositivo (canto superior esquerdo)
4. Teste em diferentes tamanhos

---

## 🆘 Problemas?

### "npm command not found"
Instale Node.js: https://nodejs.org/

### "Port 4200 already in use"
Use outra porta:
```bash
ng serve --port 4201
```

### "node_modules corrompido"
```bash
rm -rf node_modules package-lock.json
npm install
```

---

## 📚 Arquivos Importantes

```
├── package.json              ← Dependências
├── angular.json              ← Config Angular
├── src/
│   ├── styles.scss          ← ⭐ ESTILO GLOBAL (EDITAR)
│   ├── index.html           ← HTML PRINCIPAL
│   └── app/
│       ├── components/
│       │   ├── header/              ← Header com logo e menu
│       │   └── product-card/        ← Card reutilizável de produto
│       ├── pages/
│       │   ├── home/                ← Página Home
│       │   └── category/            ← Página base de categorias
│       ├── services/
│       │   └── mock-products.service.ts
│       └── models/
│           └── product.ts
```

---

## 🎯 Checklist Rápido

- [ ] Instalei Node.js
- [ ] Abri a pasta do projeto
- [ ] Executei `npm install`
- [ ] Executei `npm start`
- [ ] O projeto abriu em `http://localhost:4200/`
- [ ] Consegui navegar entre as categorias e ver os cards

---

## 💡 Dicas Importantes

✅ **Salve o arquivo** - As mudanças são recompiladas automaticamente  
✅ **Abra o Console** (F12) - Veja erros e avisos  
✅ **Use Ctrl+Shift+R** - Recarregue a página se não vir as mudanças  
✅ **Bootstrap é responsivo** - Teste em diferentes tamanhos!
✅ **WhatsApp** - O botão “Tenho interesse” abre com mensagem pré-preenchida
✅ **Logo** - Coloque sua logo em `src/assets/logo-fatisemijoias.jpg`

---

## 🎉 Parabéns!

Seu projeto **Angular 19 + Bootstrap 5** está pronto! 🚀

Próximo passo: Execute `npm start` e comece a criar!

---

**Versão:** 1.0.0  
**Angular:** 19.0.0  
**Bootstrap:** 5.3.3  
**Data:** Fevereiro 2026
