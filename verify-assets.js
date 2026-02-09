
const fs = require('fs');
const path = require('path');

// Caminho para o arquivo de serviço e pasta de assets
const servicePath = path.join(__dirname, 'src/app/services/mock-products.service.ts');
const assetsRoot = path.join(__dirname, 'src');

console.log('Iniciando verificação de assets...');

try {
  // Ler o arquivo de serviço
  const content = fs.readFileSync(servicePath, 'utf8');
  
  // Extrair todos os caminhos de imagem (assets/...)
  const regex = /['"](assets\/[^'"]+)['"]/g;
  let match;
  const paths = [];
  
  while ((match = regex.exec(content)) !== null) {
    paths.push(match[1]);
  }
  
  console.log(`Encontrados ${paths.length} caminhos de imagem no serviço.`);
  
  let errors = 0;
  
  paths.forEach(imgRelPath => {
    // Construir caminho absoluto no sistema de arquivos
    // imgRelPath é algo como "assets/brincos/file.png"
    // assetsRoot é ".../src"
    // fullPath será ".../src/assets/brincos/file.png"
    const fullPath = path.join(assetsRoot, imgRelPath);
    
    // 1. Verificar se o arquivo existe
    if (!fs.existsSync(fullPath)) {
      console.error(`[ERRO] Arquivo não encontrado: ${imgRelPath}`);
      errors++;
    } else {
      // 2. Verificar case-sensitivity (Windows é case-insensitive, mas WebServer pode não ser)
      const dir = path.dirname(fullPath);
      const filename = path.basename(fullPath);
      const filesInDir = fs.readdirSync(dir);
      
      const exactMatch = filesInDir.find(f => f === filename);
      
      if (!exactMatch) {
         // Se encontrou via existsSync mas não no readdir, é problema de case
         const caseMatch = filesInDir.find(f => f.toLowerCase() === filename.toLowerCase());
         if (caseMatch) {
             console.error(`[ERRO CASE] Caminho: ${filename} | Arquivo real: ${caseMatch}`);
             console.log(`Sugestão: Alterar para ${path.join(path.dirname(imgRelPath), caseMatch).replace(/\\/g, '/')}`);
             errors++;
         } else {
             console.error(`[ERRO ESTRANHO] Arquivo existe mas não listado: ${imgRelPath}`);
         }
      } else {
        console.log(`[OK] ${imgRelPath}`);
      }
    }
  });
  
  if (errors === 0) {
    console.log('\nTodos os arquivos foram verificados e estão corretos!');
  } else {
    console.log(`\nEncontrados ${errors} erros.`);
    process.exit(1);
  }

} catch (err) {
  console.error('Erro fatal:', err);
}
