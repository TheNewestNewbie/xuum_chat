# XUUM CHAT en Node.js

Este repositorio contiene el código fuente para una aplicación de chat desarrollada en Node.js, utilizando tecnologías como Express, Socket.io, Passport y Mongoose.

## Descripción

La aplicación de chat permite a los usuarios registrarse, iniciar sesión y comunicarse en tiempo real a través de salas de chat. Utiliza autenticación con Passport y gestión de datos con Mongoose para interactuar con una base de datos MongoDB.

## Características

- Registro de usuarios con validación de datos.
- Inicio de sesión seguro utilizando Passport.
- Comunicación en tiempo real utilizando Socket.io.
- Creación y gestión de salas de chat.
- Envío y recepción de mensajes en tiempo real.

## Requisitos

- Node.js instalado en tu máquina.
- MongoDB instalado localmente o acceso a una instancia de MongoDB en la nube.

## Instalación

1. Clona el repositorio: `git clone https://github.com/tu_usuario/chat-app-node.git`
2. Instala las dependencias: `npm install`
3. Configura las variables de entorno en un archivo `.env` (ver `env.example` para referencia).
4. Inicia la aplicación: `npm start`

## Contribución

Si deseas contribuir a este proyecto, por favor sigue estos pasos:

1. Haz un fork del proyecto.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y haz commits (`git commit -am 'Añade nueva funcionalidad'`).
4. Sube tus cambios a la rama (`git push origin feature/nueva-funcionalidad`).
5. Envía un pull request.

## Documentación Adicional

Para más detalles sobre cómo funciona cada parte de la aplicación, consulta la documentación oficial de cada tecnología utilizada:

- [Node.js](https://nodejs.org/en/docs/)
- [Express.js](https://expressjs.com/)
- [Passport.js](http://www.passportjs.org/docs/)
- [Socket.io](https://socket.io/docs/)
- [Mongoose](https://mongoosejs.com/docs/)

## Licencia

Este proyecto está bajo la Licencia MIT. Para más detalles, consulta el archivo LICENSE.
