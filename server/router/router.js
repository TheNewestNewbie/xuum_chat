const router = require('express').Router();
const auth  = require('./auth/router.js');

router.use('/auth', auth);

const isLogged = (req, res, next) => {
    if(req.isAuthenticated()){
        return next();
    }
    return res.status(401).json({ status: "error" , message: "No autorizado" });
}

router.get("/islogged", isLogged , (req, res) => {
    res.status(200).json({ status: "ok" , message: "Usuario logueado" });
});

module.exports = router;