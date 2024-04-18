function teste() {
    alert('asas');
}

// LOGIN

function login() {
    // event.preventDefault(); // Evita o envio do formulário

    const storedUsername = localStorage.getItem('usuario');
    const storedPassword = localStorage.getItem('senha');

    const inputUsername = document.getElementById('usuario').value;
    const inputPassword = document.getElementById('senha').value;

    if (inputUsername == '' || inputPassword == '') {
        $("#usuarioErro").html("Erro | Campo vazio").show();
        $("#senhaErro").html("Erro | Campo vazio").show();

    } else if (inputUsername === storedUsername && inputPassword === storedPassword) {
        $("#usuarioErro").hide();
        $("#senhaErro").hide()
        alert('Login Bem-Sucedido. Você será redirecionado em 2 segundos.')

        $("#usuario").val('');
        $("#senha").val('');

        setTimeout(function () {
            window.location.href = "../../index.html";
        }, 2000);

        return true;

    } else {
        $("#usuarioErro").html("Erro | Usuário ou senha incorretos").show();
        $("#usuario").css("border", "solid 3px red");
        $("#senha").css("border", "solid 3px red");

    }
}

localStorage.setItem('usuario', 'Step');
localStorage.setItem('senha', '123');

function limpar() {
    $("#usuario").val('');
    $("#senha").val('');
}


function pag_trabalhe_conosco() {
    window.location.href = "./pages/trabalhe conosco/trabalhe_conosco.html";
}