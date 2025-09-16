## 📥 Clonar y ejecutar RorySecurity en tu VPS

Sigue estos pasos para instalar RorySecurity en tu servidor Linux (Ubuntu recomendado):

### 1. Clona el repositorio

```bash
git clone https://github.com/SkeldriaX/SkeldriaSecurity.git
cd SkeldriaSecurity
```

### 2. Instala las dependencias

Asegúrate de tener Node.js v16 o superior instalado. Luego ejecuta:

```bash
npm install
```

### 3. Configura el bot

Edita el archivo `config.json` con tu información personal:

```bash
nano config.json
```

Ejemplo de configuración:

```json
{
  "token": "TU_TOKEN_DEL_BOT",
  "clientID": "TU_CLIENT_ID",
  "prefix": "r!",
  "voiceCN": "ID_CANAL_VOZ",
  "FvxkYqnxXD": "ID_DEL_OWNER_1",
  "owner2name": "ID_DEL_OWNER_2",
  "GuildLogs": "ID_CANAL_LOGS",
  "messages": {
    "COOLDOWN_MESSAGE": "You are on `<duration>` cooldown!"
  }
}
```

Guarda y cierra el archivo (`Ctrl + O`, luego `Ctrl + X`).

### 4. Ejecuta el bot

```bash
node index.js
```

# Instalación automatica 

En esta sección encontraras la información de la instalación automatica de SkeldriaSecurity.

```bash
bash <(curl -S https://raw.githubusercontent.com/SkeldriaX/install/refs/heads/main/skeldriasecurity.sh)
```
