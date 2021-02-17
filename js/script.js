function verificaEmail() {
    const email = document.querySelector("#email").value;
    const alerta = document.querySelector("#alerta");
    const alertaInput = document.querySelector("#email");
    
    if (email === "" || email.indexOf("@") === -1 || email.indexOf(".") === -1) {
        alerta.classList.add("alert");
        alertaInput.classList.add("alert-input");
    } else {
        alert("Email Válido");
        document.location.reload(true);
    }
}

function verificaEmail2() {
    const email = document.querySelector("#email2").value;
    const alerta = document.querySelector("#alerta2");
    const alertaInput = document.querySelector("#email2");
    
    if (email === "" || email.indexOf("@") === -1 || email.indexOf(".") === -1) {
        alerta.classList.add("alert");
        alertaInput.classList.add("alert-input");
    } else {
        alert("Email Válido");
        document.location.reload(true);
    }
}

function menuMobile() {
    const menu = document.getElementById("links");

    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}
