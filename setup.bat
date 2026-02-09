@echo off
REM Script de inicialização para Windows - Fati Semijoias Frontend

echo.
echo ============================================
echo 🚀 FATI SEMIJOIAS - ANGULAR 19 + BOOTSTRAP 5
echo ============================================
echo.

REM Verificar se Node.js está instalado
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Node.js não encontrado!
    echo Por favor, instale Node.js em: https://nodejs.org/
    pause
    exit /b 1
)

echo ✅ Node.js instalado: 
node -v

echo ✅ NPM instalado: 
npm -v
echo.

REM Instalar dependências
echo 📦 Instalando dependências...
echo Por favor, aguarde...
echo.

call npm install

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ✅ Dependências instaladas com sucesso!
    echo.
    echo 🎉 Setup completo!
    echo.
    echo Próximo passo: Execute no terminal:
    echo   npm start
    echo.
    echo Seu projeto abrirá em: http://localhost:4200/
    echo.
    pause
) else (
    echo.
    echo ❌ Erro ao instalar dependências
    echo Por favor, tente novamente ou consulte o README.md
    pause
    exit /b 1
)
