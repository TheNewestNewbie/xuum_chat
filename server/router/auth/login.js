const User = require("../../../models/User");
const passport = require("passport");
const bcrypt = require("bcrypt");

const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(401).json({ status: "error" , message: "Usuario no encontrado" });
        }

        if (!bcrypt.compareSync(password, user.password)) {
            return res.status(401).json({ status: "error" , message: "Contraseña incorrecta" });
        }
        return req.login(user, (err) => {
            if (err) {
                return res.status(500).json({ status: "error" , message: "Error en el servidor" });
            }
            return res.status(200).json({ status: "ok" , message: "Usuario logueado" });
        });
    }catch (error) {
        res.status(500).json({ message: "Error en el servidor" });
    }
};
module.exports = login;
