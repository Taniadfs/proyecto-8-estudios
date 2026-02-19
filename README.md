# API REST - Estudios de Yoga y Pilates

API REST para la gestión de estudios de yoga y pilates y sus clases. Permite realizar operaciones CRUD sobre estudios y clases, con soporte de subida de imágenes a Cloudinary.

## Estructura del proyecto

```
proyecto-8-estudios/
├── src/
│   ├── api/
│   │   ├── controllers/
│   │   │   ├── estudios.js
│   │   │   └── clases.js
│   │   ├── models/
│   │   │   ├── estudio.js
│   │   │   └── clase.js
│   │   └── routes/
│   │       ├── estudios.js
│   │       └── clases.js
│   ├── config/
│   │   ├── db.js
│   │   └── cloudinary.js
│   ├── middlewares/
│   │   └── upload.js
│   └── seeds/
│       ├── estudiosSeed.js
│       └── clasesSeed.js
├── .env
├── .gitignore
├── index.js
└── package.json
```

## Tecnologías

- Node.js
- Express
- MongoDB + Mongoose
- Cloudinary
- Multer
- dotenv

## Instalación

```sh
npm install
```

## Variables de entorno

Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:

```
PORT=3000
MONGODB_URI=tu_uri_de_mongodb
CLOUDINARY_CLOUD_NAME=tu_cloud_name
CLOUDINARY_API_KEY=tu_api_key
CLOUDINARY_API_SECRET=tu_api_secret
```

## Seeds

Para poblar la base de datos con datos de prueba:

```sh
node src/seeds/estudiosSeed.js
node src/seeds/clasesSeed.js
```

## Uso

```sh
npm run dev
```

## Endpoints

### Estudios

| Método | Ruta              | Descripción                |
| ------ | ----------------- | -------------------------- |
| GET    | /api/estudios     | Obtener todos los estudios |
| GET    | /api/estudios/:id | Obtener un estudio por id  |
| POST   | /api/estudios     | Crear un estudio           |
| PUT    | /api/estudios/:id | Actualizar un estudio      |
| DELETE | /api/estudios/:id | Eliminar un estudio        |

### Clases

| Método | Ruta            | Descripción              |
| ------ | --------------- | ------------------------ |
| GET    | /api/clases     | Obtener todas las clases |
| GET    | /api/clases/:id | Obtener una clase por id |
| POST   | /api/clases     | Crear una clase          |
| PUT    | /api/clases/:id | Actualizar una clase     |
| DELETE | /api/clases/:id | Eliminar una clase       |

## Autor

**Tania D'Angelo**

- Github: [@Taniadfs](https://github.com/Taniadfs)
