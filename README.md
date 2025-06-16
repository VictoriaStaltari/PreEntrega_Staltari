# Proyecto Final - Backend | Coderhouse

Este proyecto es una API RESTful para la gestión de usuarios, mascotas y adopciones, desarrollada con Node.js, Express y MongoDB. Incluye documentación con Swagger, tests funcionales y una imagen Docker lista para usar.

---

## Tecnologías Utilizadas

* Node.js
* Express
* MongoDB (Mongoose)
* Docker
* Swagger (documentación)
* Jest + Supertest (tests funcionales)
* Dotenv

---

## Instalación Local

1. Clonar el repositorio:

```bash
git clone https://github.com/VictoriaStaltari/PreEntrega_Staltari.git
cd PreEntrega_Staltari
```

2. Instalar dependencias:

```bash
npm install
```

3. Crear archivo `.env` con el siguiente contenido:

```env
MONGO_URL=mongodb+srv://victoriastaltari:coder123@cluster0.vietl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
PORT=3000
```

4. Ejecutar en modo desarrollo:

```bash
npm run dev
```

---

## Tests Funcionales

Para correr los tests funcionales de los endpoints del router `adoption.router.js`, ejecutar:

```bash
npm test
```

Estos tests cubren casos exitosos y de error para todas las rutas de adopciones.

---

## Documentación Swagger

La documentación del módulo de usuarios se encuentra disponible en:

```
http://localhost:3000/api-docs
```

Allí podés visualizar y testear los endpoints directamente desde el navegador.

---

## Docker

La imagen de este proyecto está disponible en Docker Hub:
[Docker Hub - victoriastaltari/preentrega-staltari](https://hub.docker.com/r/victoriastaltari/preentrega-staltari)

### Ejecutar la imagen:

```bash
docker pull victoriastaltari/preentrega-staltari:latest
docker run -p 3000:3000 victoriastaltari/preentrega-staltari
```

### Acceder a la API:

* [http://localhost:3000/api/users](http://localhost:3000/api/users)
* [http://localhost:3000/api/pets](http://localhost:3000/api/pets)
* [http://localhost:3000/api/adoptions](http://localhost:3000/api/adoptions)
* [http://localhost:3000/api-docs](http://localhost:3000/api-docs) (Swagger UI)

---

## Autor

Victoria Staltari
[GitHub](https://github.com/VictoriaStaltari)