#!/bin/bash
# SCRIPT DE INICIALIZAÇÃO - Fati Semijoias Frontend

echo "============================================"
echo "🚀 FATI SEMIJOIAS - ANGULAR 19 + BOOTSTRAP 5"
echo "============================================"
echo ""

# Verificar se Node.js está instalado
if ! command -v node &> /dev/null; then
    echo "❌ Node.js não encontrado!"
    echo "Por favor, instale Node.js em: https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js instalado: $(node -v)"
echo "✅ NPM instalado: $(npm -v)"
echo ""

# Instalar dependências
echo "📦 Instalando dependências..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependências instaladas com sucesso!"
    echo ""
    echo "🎉 Setup completo!"
    echo ""
    echo "Próximo passo: Execute:"
    echo "  npm start"
    echo ""
    echo "Seu projeto abrirá em: http://localhost:4200/"
else
    echo "❌ Erro ao instalar dependências"
    exit 1
fi
