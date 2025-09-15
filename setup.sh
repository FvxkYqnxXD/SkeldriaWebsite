#!/bin/bash
# Script de instalación y despliegue con PM2 para SkeldriaXWebsite
# Soporte: fvxkyqnx@francodev.fun
# https://francodev.fun

# Preguntar nombre para el proceso en PM2
read -p "👉 Ingresa el nombre que deseas asignar al servidor en PM2: " APP_NAME

# Clonar repositorio
echo "🚀 Clonando repositorio..."
git clone https://github.com/SkeldriaX/SkeldriaWebsite.git

cd SkeldriaWebsite || { echo "❌ Error: no se pudo entrar al directorio SkeldriaWebsite"; exit 1; }

# Instalar dependencias y construir
echo "📦 Instalando dependencias..."
npm install

echo "🔨 Construyendo el proyecto..."
npm run build

# Iniciar con PM2
echo "🌐 Iniciando servidor con PM2..."
pm2 start npm --name "$APP_NAME" -- run serve

# Configurar PM2 para iniciar en producción
echo "💾 Guardando configuración de PM2..."
pm2 startup -u $(whoami) --hp $HOME
pm2 save

echo "✅ El servidor '$APP_NAME' ya está corriendo en PM2."
echo "👉 Comandos útiles:"
echo "   pm2 list        # ver procesos"
echo "   pm2 logs $APP_NAME  # ver logs del servidor"
echo "   pm2 stop $APP_NAME  # detener el servidor"
echo "   pm2 restart $APP_NAME  # reiniciar el servidor"
echo "   Script por: https://github.com/FvxkYqnxXD"
echo "   Contacto/Soporte: skeldriax.francodev.fun"
echo "   Donaciones para SkeldriaX: https://skeldriax.dev/donaciones/"
