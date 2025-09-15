---
sidebar_position: 3
title: SkeldriaMOTD
---

# SkeldriaMOTD

**SkeldriaMOTD** es un plugin ligero y personalizable para servidores proxy de Minecraft (Velocity y BungeeCord). Permite mostrar un mensaje del día (MOTD) atractivo y dinámico cuando los jugadores ven tu servidor en la lista de servidores.

## ✨ Características

- ✅ Doble línea de MOTD
- 🎨 Soporte completo para colores HEX/RGB
- 🔄 Actualización dinámica sin reiniciar el proxy
- 📦 Compatible con Velocity y BungeeCord
- 🧩 Configuración sencilla en YAML

## 📁 Instalación

1. Descarga el archivo `.jar` desde [GitHub Releases](https://github.com/SkeldriaX/SkeldriaMOTD/releases).
2. Coloca el archivo en la carpeta `plugins` de tu proxy.
3. Reinicia el servidor o usa el comando de recarga si está disponible.

## ⚙️ Configuración

El archivo `config.yml` incluye opciones como:

```yaml
motd:
  line1: "&aBienvenido a &bSkeldriaX &7- &eServidor Oficial"
  line2: "&f¡Explora, construye y diviértete!"
  hex_support: true
```

Puedes usar códigos de color estándar (`&a`, `&b`, etc.) o valores HEX como `#FF5733` si tu proxy lo permite.

## 🧪 Compatibilidad

| Proxy       | Compatible | Notas                     |
|-------------|------------|---------------------------|
| Velocity    | ✅         | Soporte completo          |
| BungeeCord  | ✅         | Requiere Java 11+         |
| Waterfall   | ⚠️         | Funciona, pero no testeado|

## 🛠️ Contribuciones

Este plugin es open-source. Puedes contribuir con:

- Pull requests para nuevas funciones
- Reportes de errores en GitHub Issues
- Traducciones del archivo de configuración

## 📎 Enlaces útiles

- 🔗 [Repositorio en GitHub](https://github.com/SkeldriaX/SkeldriaMOTD)
- 📄 [Licencia MIT](https://github.com/SkeldriaX/SkeldriaMOTD/blob/main/LICENSE)
- 💬 [Comunidad en Discord](https://discord.gg/skeldriax)
