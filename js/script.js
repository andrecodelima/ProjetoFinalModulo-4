function teste() {
    alert('asas');
}

// LOGIN

function login() {
    // event.preventDefault(); // Evita o envio do formulário

    const storedUsername = localStorage.getItem('usuario');
    const storedPassword = localStorage.getItem('senha');

    const inputUsername = $('#usuario').val();
    const inputPassword = $('#senha').val();

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

$(document).ready(function () {
    $("#usuario").focus(function () {
        $("#dica-usuario").fadeIn();
      });

      $("#senha").focus(function () {
        $("#dica-senha").fadeIn();
      });
});

localStorage.setItem('usuario', 'Step');
localStorage.setItem('senha', '123');

function limpar() {
    $("#usuario").val('');
    $("#senha").val('');
}


function pag_trabalhe_conosco() {
    window.location.href = "./pages/trabalhe conosco/trabalhe_conosco.html";
}

// function retornarPortifolio(){
//     window.location.href = "../projetos/projetos.html#foto1";
// }


function Modal(imagem){
    switch (imagem) {
        case 'foto1':
            window.location.href = "../projetos/modal_01.html";
            break;
        case 'foto2':
            window.location.href = "../projetos/modal_02.html";
            break;
        case 'foto3':
            window.location.href = "../projetos/modal_03.html";
            break;
        case 'foto4':
            window.location.href = "../projetos/modal_04.html";
            break;
        case 'foto5':
            window.location.href = "../projetos/modal_05.html";
            break;
        case 'foto6':
            window.location.href = "../projetos/modal_06.html";
            break;
        case 'foto7':
            window.location.href = "../projetos/modal_07.html";
            break;
        case 'foto8':
            window.location.href = "../projetos/modal_08.html";
            break;
        case 'foto9':
            window.location.href = "../projetos/modal_09.html";
            break;
        default:
             
            break;
    }
}

function retornarPortifolio(id) {
    switch (id) {
        case 'foto1':
            window.location.href = "../projetos/projetos.html#1";
            break;
        case 'foto2':
            window.location.href = "../projetos/projetos.html#2";
            break;
        case 'foto3':
            window.location.href = "../projetos/projetos.html#3";
            break;
        case 'foto4':
            window.location.href = "../projetos/projetos.html#4";
            break;
        case 'foto5':
            window.location.href = "../projetos/projetos.html#5";
            break;
        case 'foto6':
            window.location.href = "../projetos/projetos.html#6";
            break;
        case 'foto7':
            window.location.href = "../projetos/projetos.html#7";
            break;
        case 'foto8':
            window.location.href = "../projetos/projetos.html#8";
            break;
        case 'foto9':
            window.location.href = "../projetos/projetos.html#9";
            break;
        default:
            // Caso nenhum caso corresponda, não faça nada
            break;
    }
}

