---
sidebar_position: 2
title: SkeldriaSB
---

# SkeldriaSB

**SkeldriaSB** es un plugin avanzado de *scoreboard* para servidores de Minecraft. Diseñado para ofrecer una experiencia visual atractiva y altamente personalizable, este plugin está en constante desarrollo y evolución.

## 🚧 Estado del proyecto

Actualmente en fase **beta**, SkeldriaSB ya incluye funciones básicas de scoreboard y está preparado para recibir nuevas características como soporte HEX, integración con PlaceholderAPI y layouts dinámicos.

## ✨ Características (actuales y previstas)

- 🎨 Soporte para colores HEX/RGB
- 🔗 Integración con [PlaceholderAPI](https://www.spigotmc.org/resources/placeholderapi.6245/)
- 📊 Scoreboards dinámicos por mundo, grupo o evento
- 🔄 Actualización en tiempo real sin reinicio
- 🧩 Configuración modular en YAML
- 🖼️ Layouts personalizables con animaciones (en desarrollo)
- 🌐 Soporte multilenguaje

## 📁 Instalación

1. Descarga el `.jar` desde [GitHub Releases](https://github.com/SkeldriaX/SkeldriaSB/releases).
2. Coloca el archivo en la carpeta `plugins` de tu servidor Spigot/Paper.
3. Reinicia el servidor para generar los archivos de configuración.

## ⚙️ Configuración básica

```yaml
scoreboard:
  enabled: true
  title: "&bSkeldriaX &7| &fServidor Oficial"
  lines:
    - "&aJugadores: %online%"
    - "&eRango: %player_rank%"
    - "&fPing: %player_ping%"
  update_interval: 5
  hex_support: true
```

Puedes usar placeholders de PlaceholderAPI para mostrar datos dinámicos como el nombre del jugador, su rango, ping, etc.

## 🧪 Compatibilidad

| Plataforma | Compatible | Notas                     |
|------------|------------|---------------------------|
| Spigot     | ✅         | Soporte completo          |
| Paper      | ✅         | Recomendado               |
| Purpur     | ⚠️         | Funciona, pero no testeado|

## 🛠️ Contribuciones

Este plugin es open-source y agradece la colaboración de la comunidad. Puedes contribuir con:

- Nuevas ideas y sugerencias
- Traducciones del archivo de configuración
- Pull requests para nuevas funciones
- Reportes de errores en GitHub Issues

## 📎 Enlaces útiles

- 🔗 [Repositorio en GitHub](https://github.com/SkeldriaX/SkeldriaSB)
- 📄 [Licencia MIT](https://github.com/SkeldriaX/SkeldriaSB/blob/main/LICENSE)
- 💬 [Comunidad en Discord](https://discord.gg/skeldriax)
