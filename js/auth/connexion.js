const mailInput = document.getElementById("EmailInput")
const passwordInput = document.getElementById("passwordInput")
const btnSignin = document.getElementById("btnSingin")

const checkCredentials = () => {
    //Ici il faudra appeler l'API pour vérifier les credentials en bdd

    if (mailInput.value == "test@mail.com" && passwordInput.value == "123"){
         //Il faudra récupérer le vrai token
        const token = "lkjsdngfmlqmdslkllksdfpqlmlmùlskdlklk"
        //Placer ce token en cookie
        setToken(token)

        setCookie(RoleCookieName, "client", 7)

        window.location.replace("/")
    }
    else if (mailInput.value == "test@mail.com"){
        passwordInput.classList.add("is-invalid")
    }
    else{
        passwordInput.classList.add("is-invalid")
        mailInput.classList.add("is-invalid")
    }
}

btnSignin.addEventListener("click", checkCredentials)