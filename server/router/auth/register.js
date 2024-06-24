const User = require("../../../models/User");
const bcrypt = require("bcrypt");

const register = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        console.log(username , password)
        if (user) {
            return res.json({ status: "error" , message: "Usuario ya existe" });
        }

        const newUser = new User({ username, password: bcrypt.hashSync(password, 10)});
        await newUser.save();
        if (newUser) {
            return req.login(newUser, (err) => {
                if (err) {
                    return res.json({ status: "error" , message: "Error en el servidor" });
                }
                return res.json({ status: "ok" , message: "Usuario registrado" });
            });
        }else {
            return res.json({ status: "error" , message: "Error en el servidor" });
        }

    } catch (error) {
        console.log(error)
        res.json({ message: "Error en el servidor: " +error });
    }
}

module.exports = register;