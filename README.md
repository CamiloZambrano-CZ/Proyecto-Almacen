
Asignatura: Construcción de Software  
Evaluación 1: Trabajo 1  
Estudiante: Camilo Alexis Zambrano Contreras

---


*Requisitos Previos

Node.js v18 o superior instalado.
Cuenta en Google Firebase para la creación del proyecto y la base de datos Firestore.

---

*Instrucciones de Instalación y Ejecución

1. Clonar el repositorio
```bash
git clone <URL_DEL_REPOSITORIO>
cd form-app31-08
```

2. Instalar dependencias
```bash
npm install
```

3. Configurar variables de entorno
Crea un archivo llamado `.env` en la raíz del proyecto tomando como base el archivo `.env.example`:

En Windows (PowerShell):
```powershell
Copy-Item .env.example .env
```

Abre el archivo `.env` y completa las variables con las credenciales de tu proyecto de Firebase:
```env
VITE_FIREBASE_API_KEY=tu_api_key
VITE_FIREBASE_AUTH_DOMAIN=tu_proyecto.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=tu_project_id
VITE_FIREBASE_STORAGE_BUCKET=tu_proyecto.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=tu_messaging_sender_id
VITE_FIREBASE_APP_ID=tu_app_id
```

*Importante: El archivo `.env` jamás debe subirse a Git ni compartirse públicamente.

4. Ejecutar el proyecto en modo desarrollo
```bash
npm run dev
```
Abre la URL local en tu navegador (por defecto `http://localhost:5173`).

5. Compilar para producción (opcional)
```bash
npm run build
```
Los archivos optimizados se generarán en la carpeta `dist/`.