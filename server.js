const express = require("express");
const app = express();
const mongoose = require("mongoose");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const session = require("express-session");
const User = require("./models/User");

const PORT = 3000;

/*DATABASE CONNECTION*/

mongoose.connect("mongodb+srv://thenewestnewbie:PvYvU1xOdy0oUBtX@cluster0.zz3dym0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Conexión exitosa a la base de datos");
    }).catch((err) => {
    console.log("Error al conectar a la base de datos", err);
    });

/* PASSPORT CONFIGURATION */

passport.use(new LocalStrategy({
    usernameField: "username",
    passwordField: "password"
    }, async (username, password, done) => {
    const user = await User.findOne({ username });
    if (!user) {
        return done(null, false, { message: "Usuario no encontrado" });
    }

    if (!bcrypt.compareSync(password, user.password)) {
        return done(null, false, { message: "Contraseña incorrecta" });
    }

    return done(null, user);
    }
));

passport.serializeUser((user, done) => {
    done(null, user.uid);
    }
);

passport.deserializeUser(async (uid, done) => {
    const user = User.findOne({ uid });
    if(user){
        return done(null, user);
    }
    return done(null, false);
});

app.use(session({
    secret: "secret",
    resave: false,
    saveUninitialized: false
    }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(require("./server/router/router.js"));

app.use(express.static("client"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/client/index.html");
});

app.listen(PORT, () => {
    console.log(`Servidor esta corriendo en el puerto ${PORT}`);
    });