// Variávis Globais

const caracteres = /^[a-zA-Z\\s]+$/;
const numeros = /^\d+$/;

// Nome
function validarNome() {
  var nome = $("#nome").val().trim();

  if (nome == "") {
    $("#nomeErro").html("Erro | Campo vazio").show();
    $("#nome").css("border", "solid 3px red");
    return false;
  } else if (!caracteres.test(nome)) {
    $("#nomeErro").html("Erro | Use apenas letras e espaços").show();
    $("#nome").css("border", "solid 3px red");
    return false;
  } else {
    $("#nomeErro").hide();
    $("#nome").css("border", "solid 3px green");
    $("#dica-nome").hide();
  }
}

// CPF
function validarCpf() {
  var cpf = $("#cpf").val().trim();

  if (cpf == "") {
    $("#cpfErro").html("Erro | Campo vazio").show();
    $("#cpf").css("border", "solid 3px red");
    return false;
  } else if (cpf.length < 11) {
    $("#cpfErro").html("Erro |  Quantidade de caracteres insuficientes").show();
    $("#cpf").css("border", "solid 3px red");
    return false;
  } else {
    $("#cpfErro").hide();
    $("#cpf").css("border", "solid 3px green");
    $("#dica-cpf").hide();
  }
}

// DATA DE NASCIMENTO

function validarDataNascimento() {
  var data = $("#data").val().trim();

  if (data == "") {
    $("#dataErro").html("Erro | Campo vazio").show();
    $("#data").css("border", "solid 3px red");
    return false;
  } else if (data.length < 8) {
    $("#dataErro")
      .html("Erro |  Quantidade de caracteres insuficientes")
      .show();
    $("#data").css("border", "solid 3px red");
    return false;
  } else if (parseInt(data.substr(6)) < 1910) {
    $("#dataErro").html("Erro | Data inválida").show();
    $("#data").css("border", "solid 3px red");
  } else {
    $("#dataErro").hide();
    $("#data").css("border", "solid 3px green");
    $("#dica-data").hide();
  }
}
// GÊNERO
function validarGenero() {
  var genero = $("#genero").val().trim();

  switch (genero) {
    case "masculino":
      $("#genero").val(genero);
      $("#genero").css("border", "solid 3px green");
      $("#generoErro").hide();
      $("#dica-genero").hide();
      break;

    case "feminino":
      $("#genero").val(genero);
      $("#genero").css("border", "solid 3px green");
      $("#generoErro").hide();
      $("#dica-genero").hide();
      break;

    case "":
      $("#genero").val(genero);
      $("#generoErro").html("Erro | Campo vazio").show();
      $("#genero").css("border", "solid 3px red");
      break;

    default:
      $("#genero").val(genero);
      $("#generoErro").html("Erro").show();
      $("#genero").css("border", "solid 3px red");
      break;
  }
}

function validarEmail() {
  var email = $("#email").val().trim();

  if (email == "") {
    $("#emailErro").html("Erro | Campo vazio").show();
    $("#email").css("border", "solid 3px red");
  } else if (!caracteres.test(email[0])) {
    $("#emailErro").html("Erro | Campo inválido").show();
    $("#email").css("border", "solid 3px red");
    return false;
  } else {
    $("#emailErro").hide();
    $("#email").css("border", "solid 3px green");
    $("#dica-email").hide();
  }
}

// CELULAR
function validarCelular() {
  var celular = $("#celular").val().trim();

  if (celular == "") {
    $("#celErro").html("Erro | Campo vazio").show();
    $("#celular").css("border", "solid 3px red");
    $("#celSucesso").html("").hide();
  } else if (celular.length < 11) {
    $("#celErro").html("Erro | Campo vazio").show();
    $("#celular").css("border", "solid 3px red");
    $("#celSucesso").html("").hide();
  } else {
    $("#celErro").hide();
    $("#celular").css("border", "solid 3px green");
    $("#dica-celular").hide();
  }
}

// CEP
function validarCep() {
  var cep = $("#cep").val().trim();

  if (cep == "") {
    $("#cepErro").html("Erro | Campo vazio").show();
    $("#cep").css("border", "solid 3px red");
    $("#cepSucesso").html("").hide();
  }
}

// Número
function validarNumero() {
  var numero = $("#numero").val().trim();

  if (numero == "") {
    $("#numeroErro").html("Erro | Campo vazio").show();
    $("#numero").css("border", "solid 3px red");
    $("#numeroSucesso").html("").hide();
    return false;
  } else if (numero.length == 0) {
    $("#numeroErro").html("Erro | Campo vazio").show();
    $("#numero").css("border", "solid 3px red");
    $("#numeroSucesso").html("").hide();
    return false;
  } else {
    $("#numeroErro").hide();
    $("#numero").css("border", "solid 3px green");
    $("#dica-numero").hide();
    return true;
  }
}

// Experiência
function validarExperiencia() {
  var experiencia = $("#experiencia").val().trim();

  if (experiencia == "") {
    $("#expErro").html("Erro | Campo vazio").show();
    $("#experiencia").css("border", "solid 3px red");
    return false;
  } else if (experiencia == 0) {
    $("#expErro").html("Erro | Tempo de experiência insuficiente").show();
    $("#experiencia").css("border", "solid 3px red");
    return false;
  } else {
    $("#expErro").hide();
    $("#experiencia").css("border", "solid 3px green");
    $("#dica-experiencia").hide();
    return true;
  }
}

// Ativação
$(document).ready(function () {
  // nome
  $("#nome").focus(function () {
    $("#dica-nome").fadeIn();
  });

  $("#nome").blur(validarNome);

  // cpf
  $("#cpf").focus(function () {
    $("#dica-cpf").fadeIn();
  });

  $("#cpf").blur(validarCpf);

  // data
  $("#data").focus(function () {
    $("#dica-data").fadeIn();
  });

  $("#data").blur(validarDataNascimento);

  // genero
  $("#genero").focus(function () {
    $("#dica-genero").fadeIn();
  });

  $("#genero").blur(validarGenero);

  // email
  $("#email").focus(function () {
    $("#dica-email").fadeIn();
  });

  $("#email").blur(validarEmail);

  $("#form").submit(function () {
    var nomeValido = validarNome();
    if (!nomeValido) {
      return false;
    }
  });

  // celular
  $("#celular").focus(function () {
    $("#dica-celular").fadeIn();
  });

  $("#celular").blur(validarCelular);

  // Cep
  $("#cep").focus(function () {
    $("#dica-cep").fadeIn();
  });

  $("#cep").blur(validarCep);

  // Número
  $("#numero").focus(function () {
    $("#dica-numero").fadeIn();
  });

  $("#numero").blur(validarNumero);

  // Experiência
  $("#experiencia").focus(function () {
    $("#dica-experiencia").fadeIn();
  });

  $("#experiencia").blur(validarExperiencia);
});

// MÁSCARAS
$("#cpf").mask("000.000.000-00", { reverse: true });
$("#data").mask("00/00/0000");
$("#celular").mask("(00) 00000-0000");
$("#cep").mask("00000-000");

function salvarFormulario() {
  validarNome();
  validarCpf();
  validarDataNascimento();
  validarGenero();
  validarEmail();
  validarCelular();
  validarCep();
  validarNumero();
  validarExperiencia();
}

function limparFormulario() {
  form.reset($("#form"));

  $("#nomeErro").hide();
  $("#cpfErro").hide();
  $("#dataErro").hide();
  $("#generoErro").hide();
  $("#emailErro").hide();
  $("#celErro").hide();
  $("#cepErro").hide();
  $("#numeroErro").hide();
  $("#expErro").hide();

  $("#nome").css("border", "solid 3px #D6D6D6");
  $("#cpf").css("border", "solid 3px #D6D6D6");
  $("#data").css("border", "solid 3px #D6D6D6");
  $("#genero").css("border", "solid 3px #D6D6D6");
  $("#email").css("border", "solid 3px #D6D6D6");
  $("#celular").css("border", "solid 3px #D6D6D6");
  $("#cep").css("border", "solid 3px #D6D6D6");
  $("#numero").css("border", "solid 3px #D6D6D6");
  $("#experiencia").css("border", "solid 3px #D6D6D6");
}
