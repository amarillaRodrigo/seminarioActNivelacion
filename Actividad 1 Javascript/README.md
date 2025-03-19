# Mi Sitio Web

Este sitio permite a los usuarios ingresar texto en una caja de texto y mostrarlo en una alerta al presionar la tecla Enter. 
Además, incluye un botón que alterna el color de la caja de texto y del texto al hacer clic.

## Estructura del Proyecto

El proyecto tiene la siguiente estructura de archivos:

```
mi-sitio-web
├── public
│   ├── index.html       # Estructura HTML del sitio web
│   ├── styles.css       # Estilos CSS para el sitio web
│   └── app.js           # Código JavaScript para la interacción del usuario
├── src
│   ├── app.js           # Punto de entrada de la aplicación Express
│   └── routes
│       └── index.js     # Definición de rutas de la aplicación
├── package.json          # Configuración de npm y dependencias
├── .gitignore            # Archivos y carpetas a ignorar por Git
└── README.md             # Documentación del proyecto
```

## Instalación

1. Clona el repositorio en tu máquina local.
2. Navega al directorio del proyecto.
3. Ejecuta `npm install` para instalar las dependencias.

## Ejecución

Para ejecutar la aplicación, utiliza el siguiente comando:

```
node src/app.js
```

Luego, abre tu navegador y visita `http://localhost:3000` para ver el sitio web en acción.