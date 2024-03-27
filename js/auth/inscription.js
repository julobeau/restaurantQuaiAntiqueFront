const btnValidation = document.getElementById("btn-validation-inscription");
const inputNom = document.getElementById("NomInput");
const inputPrenom = document.getElementById("PrenomInput");
const inputMail = document.getElementById("EmailInput");
const inputPassword = document.getElementById("passwordInput");
const inputvalidationPassword = document.getElementById("passwordValid");
const formInscription = document.getElementById("formulaireInscription")
btnValidation.disabled = true

// validation champs inscription

const validateForm = () => {
    const nomOk = validateRequired(inputNom);
    const prenomOk = validateRequired(inputPrenom);
    const mailOk = validateEmail(inputMail)
    const passwordOk = validatePassword(inputPassword)
    const validatePasswordOk = validateValidationPassword(inputvalidationPassword, inputPassword)

    if (nomOk && prenomOk && mailOk && passwordOk && validatePasswordOk){
        btnValidation.disabled = false
    }
    else{
        btnValidation.disabled = true
    }
}

const validateRequired = (input) => {
    if(input.value != ''){
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true
    }
    else{
        input.classList.add("is-invalid");
        input.classList.remove("is-valid");
        return false
    }
}

const validateEmail = (input) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const mailUser = input.value
    if(mailUser.match(emailRegex)){
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true
    }
    else{
        input.classList.add("is-invalid");
        input.classList.remove("is-valid");
        return false
    }
}

const validatePassword = (input) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/
    const passwordUser = input.value
    if(passwordUser.match(passwordRegex)){
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        return true
    }
    else{
        input.classList.add("is-invalid");
        input.classList.remove("is-valid");
        return false
    }
}

const validateValidationPassword = (validatePassword, password) => {
    if(validatePassword.value == password.value){
        validatePassword.classList.add("is-valid");
        validatePassword.classList.remove("is-invalid");
        return true
    }
    else{
        validatePassword.classList.add("is-invalid");
        validatePassword.classList.remove("is-valid");
        return false
    }
}

const inscrireUtilisateur = () => {
    let dataForm = new FormData(formInscription)

    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let raw = JSON.stringify({
        "firstName": dataForm.get("prenom"),
        "lastName": dataForm.get("nom"),
        "email": dataForm.get("email"),
        "password": dataForm.get("password")
    });

    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("http://127.0.0.1:8000/api/registration", requestOptions)
    .then(response => {
        if(response.ok){
            return response.json()
        }
        else{
            alert("Erreur lors de l'inscription")
        }
    })
    .then(result => {
        alert("Vous êtes inscrit!! Vous pouvez vous connecter.")
        document.location.href="/connexion"
    })
    
    .catch(error => console.log('error', error));
} 



inputNom.addEventListener("keyup", validateForm);
inputPrenom.addEventListener("keyup", validateForm);
inputMail.addEventListener("keyup", validateForm);
inputPassword.addEventListener("keyup", validateForm);
inputvalidationPassword.addEventListener("keyup", validateForm);
btnValidation.addEventListener("click", inscrireUtilisateur)
