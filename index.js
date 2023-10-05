const express = require('express');
const routersApp = require('./routers/');
const cors = require('cors');
const { logErrors, errorHandler, boomErrorhandler, ormErrorHandler } = require('./middlewares/error.handler')

const { port } = require('./config/config');

const app = express();

const corsOption = {
    origin: 'http://localhost:3001/',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
};

app.use(cors(corsOption));

routersApp(app);

app.use(logErrors);
app.use(ormErrorHandler);
app.use(boomErrorhandler);
app.use(errorHandler);

app.listen(port, ()=>{
    console.log(`%listining port ${port}`)
});