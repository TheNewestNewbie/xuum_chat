function showLogin() {
    document.getElementById("login").style.display = "block";
    document.getElementById("register").style.display = "none";
    document.querySelector(".tab.active").classList.remove("active");
    document.querySelector(".tabs").children[0].classList.add("active");
}

function showRegister() {
    document.getElementById("login").style.display = "none";
    document.getElementById("register").style.display = "block";
    document.querySelector(".tab.active").classList.remove("active");
    document.querySelector(".tabs").children[1].classList.add("active");
}

// Mostrar login por defecto
showLogin();

document.getElementById("loginForm").addEventListener("submit", async function (event) {
    event.preventDefault();
    const username = document.getElementById("registerUsername").value;
    const password = document.getElementById("registerPassword").value;

    if (username.length < 4 || password.length < 4) {
        return alert("El usuario y la contraseña deben tener al menos 4 caracteres");
    }

    try {
        const response = await fetch("/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        });

        if (!response.ok) {
            throw new Error('Error en la solicitud de registro');
        }

        const data = await response.json();
        if(data.status === "error") {
            return alert(data.message);
        }else {
            alert("Usuario logeado");
            //showApp();
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Hubo un problema al logear el usuario');
    }
});

document.getElementById("registerForm").addEventListener("submit", async function (event) {
    event.preventDefault();
    const username = document.getElementById("registerUsername").value;
    const password = document.getElementById("registerPassword").value;

    if (username.length < 4 || password.length < 4) {
        return alert("El usuario y la contraseña deben tener al menos 4 caracteres");
    }

    try {
        const response = await fetch("/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        });

        if (!response.ok) {
            throw new Error('Error en la solicitud de registro');
        }

        const data = await response.json();
        if(data.status === "error") {
            return alert(data.message);
        }else {
            alert("Usuario registrado");
            //showApp();
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Hubo un problema al registrar el usuario');
    }
});
