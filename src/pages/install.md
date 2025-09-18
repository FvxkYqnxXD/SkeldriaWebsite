# 🌐 SkeldriaWebsite  
Repositorio oficial del sitio web de **SkeldriaX**

[![Licencia](https://img.shields.io/github/license/SkeldriaX/SkeldriaWebsite)](https://github.com/SkeldriaX/SkeldriaWebsite/blob/main/LICENSE)

---

## 🚀 ¿Qué es SkeldriaWebsite?

Este repositorio contiene el código fuente del sitio web oficial de SkeldriaX. Puedes usarlo como plantilla para tus propios proyectos o contribuir al desarrollo del ecosistema Skeldria.

---

## 🧰 Recursos disponibles

Actualmente, SkeldriaX está desarrollando **SkeldriaMOTD** y ya cuenta con los siguientes bots activos:

- 🤖 [SkeldriaBot](https://github.com/SkeldriaX/SkeldriaBot)  
- 🔐 [SkeldriaSecurity](https://github.com/SkeldriaX/SkeldriaSecurity)

---

## 📦 Instalación rápida

### Clona el repositorio:
```bash
git clone https://github.com/SkeldriaX/SkeldriaWebsite
```

### Instala dependencias:
```bash
npm install && npm run build
```

### Inicia el servidor local:
```bash
npm run serve
```

---

## ⚙️ Ejecutar con PM2

Para mantener el sitio activo en segundo plano:

```bash
pm2 start npm --name "SkeldriaX" -- run serve
```

### Configurar inicio automático en producción:
```bash
pm2 startup
pm2 save
```

---

## 🌀 Instalación automatizada

Puedes iniciar todo con un solo comando usando `curl`:

```bash
bash <(curl -s https://raw.githubusercontent.com/SkeldriaX/install/refs/heads/main/skeldriawebsite.sh)
```


Wget:
```
bash <(wget -qO- https://raw.githubusercontent.com/SkeldriaX/install/refs/heads/main/skeldriawebsite.sh)

```
