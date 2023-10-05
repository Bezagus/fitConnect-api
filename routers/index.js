const { Router } = require ('express');

const userRouter = require('./routers/user.router')

function routersApp(app){
    const routers = Router();
    app.use('/api/v1', routers);

    routers.use('/user', userRouter)
}

module.exports = routersApp