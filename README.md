# banderas_backend

Inicio del proyecto
- `npm install`
- `Configurar variables de entorno, creando los siguientes ficheros`
- `.env.development.local`
  
      VITE_PORT=3100
      VITE_API_URL=http://localhost/banderas_backend/public/api
      VITE_PUBLIC_PATH=/
      VITE_DROP_CONSOLE=false
      VITE_USE_PWA=false
      VITE_TOKEN_KEY=banderas_backend_token
      VITE_LEGACY=false
      VITE_APP_HASH=banderas_backend
      VITE_GLOB_APP_TITLE=banderas_backend
      VITE_GLOB_APP_SHORT_NAME=banderas_backend
      VITE_BUILD_COMPRESS=gzip

- `.env.production.local`

        VITE_PORT=3100
        VITE_API_URL=/public/api
        VITE_PUBLIC_PATH=/
        VITE_DROP_CONSOLE=false
        VITE_USE_PWA=false
        VITE_TOKEN_KEY=banderas_backend_token
        VITE_LEGACY=false
        VITE_APP_HASH=banderas_backend
        VITE_GLOB_APP_TITLE=banderas_backend
        VITE_GLOB_APP_SHORT_NAME=banderas_backend
        VITE_BUILD_COMPRESS=gzip



