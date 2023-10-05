const { Router } = require('express');
const UserService = require('./../../services/user.service')

const router = Router();
const user = new UserService();

router.get('/', async (req, res, next) =>{
    try{
        const findAll = await user.find()
        res.send('hola')
    }catch(error){
        next(error)
    }
})

module.exports = router;