---
sidebar_position: 3
title: SkeldriaTP
---

# SkeldriaTP

**SkeldriaTP** es un plugin de teletransporte personalizado para servidores de Minecraft. Su objetivo es ofrecer una experiencia fluida, segura y configurable para comandos de TP entre jugadores, ubicaciones y mundos.

## ✨ Características

- 🔄 Comandos de teletransporte entre jugadores (`/tp`, `/tpa`, `/tpaccept`)
- ⏳ Soporte para cooldowns y delays configurables
- 🔐 Sistema de permisos por grupo o rango
- 📜 Mensajes personalizables en múltiples idiomas
- 🧩 Configuración modular en YAML
- 🚫 Protección contra spam y abuso de TP

## 📁 Instalación

1. Descarga el archivo `.jar` desde [GitHub Releases](https://github.com/SkeldriaX/SkeldriaTP/releases).
2. Coloca el archivo en la carpeta `plugins` de tu servidor Spigot/Paper.
3. Reinicia el servidor para generar los archivos de configuración.

## ⚙️ Configuración básica

```yaml
teleport:
  enabled: true
  cooldown: 10
  delay: 3
  cancel_on_move: true
  messages:
    request_sent: "&aSolicitud de TP enviada a %target%"
    request_received: "&e%player% quiere teletransportarse a ti. Usa &a/tpaccept &epara aceptar."
    teleporting: "&bTeletransportando en %seconds% segundos..."
    cancelled: "&cTeletransporte cancelado por movimiento."
```

## 🔐 Permisos

| Permiso                  | Descripción                          |
|--------------------------|--------------------------------------|
| `skeldriatp.tp`          | Permite usar `/tp` directo           |
| `skeldriatp.tpa`         | Permite enviar solicitudes de TP     |
| `skeldriatp.tpaccept`    | Permite aceptar solicitudes          |
| `skeldriatp.bypass`      | Ignora cooldowns y delays            |

Puedes usar plugins como LuckPerms para asignar estos permisos por grupo o rango.

## 🧪 Compatibilidad

| Plataforma | Compatible | Notas                     |
|------------|------------|---------------------------|
| Spigot     | ✅         | Soporte completo          |
| Paper      | ✅         | Recomendado               |
| Purpur     | ⚠️         | Funciona, pero no testeado|

## 🛠️ Contribuciones

Este plugin es open-source. Puedes colaborar con:

- Nuevas funciones y mejoras
- Traducciones del archivo de mensajes
- Reportes de errores en GitHub Issues
- Pull requests en el repositorio

## 📎 Enlaces útiles

- 🔗 [Repositorio en GitHub](https://github.com/SkeldriaX/SkeldriaTP)
- 📄 [Licencia MIT](https://github.com/SkeldriaX/SkeldriaTP/blob/main/LICENSE)
- 💬 [Comunidad en Discord](https://discord.gg/skeldriax)
