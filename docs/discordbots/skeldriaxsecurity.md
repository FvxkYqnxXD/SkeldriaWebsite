---
sidebar_position: 2
---

# 🛡️ SkeldriaSecurity

**SkeldriaSecurity** es un bot de seguridad para servidores de Discord, diseñado para proteger comunidades de ataques, abusos y comportamientos maliciosos. Es completamente **Open Source** y está construido sobre **Discord.js v14**, lo que lo hace altamente personalizable y fácil de integrar.

---

## 🚀 Características principales

- 🔒 **Protección contra raids y spam**  
  Detecta y bloquea usuarios que intentan atacar el servidor mediante mensajes masivos, menciones excesivas o creación de canales.

- 🧠 **Sistema de cuarentena inteligente**  
  Aísla automáticamente a usuarios sospechosos en un rol de cuarentena con permisos limitados.

- 🔁 **Modo de recuperación**  
  Permite restaurar roles, canales y configuraciones después de un incidente de seguridad.

- 📜 **Registro de eventos (Logs)**  
  Guarda un historial detallado de acciones como baneos, expulsiones, cambios de roles y más.

- ⚙️ **Configuración modular**  
  Puedes activar o desactivar módulos según las necesidades de tu servidor.

- 🧩 **Integración con otros bots**  
  Compatible con bots de moderación, música y automatización.

---

## 📦 Instalación

```bash
git clone https://github.com/SkeldriaX/SkeldriaSecurity.git
cd SkeldriaSecurity
npm install
```

Configura tu archivo `.env` con el token de tu bot y los IDs necesarios.

---

## 🧪 Comandos útiles

| Comando | Descripción |
|--------|-------------|
| `/setup` | Inicia la configuración del bot en tu servidor |
| `/quarantine @usuario` | Mueve al usuario al rol de cuarentena |
| `/recover` | Restaura configuraciones anteriores |
| `/logs` | Muestra los últimos eventos registrados |
| `/help` | Lista todos los comandos disponibles |

---

## 🔧 Requisitos

- Node.js v18+
- Permisos de administrador en el servidor
- Token de bot de Discord

---

## 🤝 Contribuciones

Este bot es mantenido por la comunidad. Puedes contribuir con nuevas funciones, mejoras de seguridad o documentación. ¡Toda ayuda es bienvenida!

```bash
git checkout -b feature/nueva-funcion
git commit -m "Agrega nueva función de detección de spam"
git push origin feature/nueva-funcion
```

---

## 📄 Licencia

Este proyecto está bajo la licencia **MIT**. Puedes usarlo, modificarlo y distribuirlo libremente.

---

## 🌐 Enlaces útiles

- [Repositorio en GitHub](https://github.com/SkeldriaX/SkeldriaSecurity)
- [Discord.js Documentation](https://discord.js.org/)
- [Guía de seguridad en Discord](https://support.discord.com/hc/es/articles/360044103071)

---
