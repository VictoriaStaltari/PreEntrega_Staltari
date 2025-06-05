import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API AdoptMe',
            version: '1.0.0',
            description: 'Documentación de endpoints del proyecto AdoptMe',
        },
    },
    apis: ['./src/routes/*.js'],
};

const specs = swaggerJSDoc(options);

export const swaggerDocs = (app) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
};
