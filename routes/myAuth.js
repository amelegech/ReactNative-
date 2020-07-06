const express = require('express') ;
const router = express.Router();


router.post('/newRegister', (req, res, next)=>{
    res.send('new user is registerd !')
})


module.exports = router;