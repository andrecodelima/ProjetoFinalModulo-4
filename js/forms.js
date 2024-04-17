function teste() {
  alert();
}

function validaNome() {
  var nome = $("#nome").val().trim();
  const caracteresEspeciais = "!@#$%^&*()_+[]{}|;':\",.<>?";

  if (nome == "") {
    $("#nomeErro").html("Erro | Campo vazio").show();
    $("#nome").css("border", "solid 3px red");
    $('#nome"Sucesso').html("").hide();
  } else if (!isNaN(nome[0])) {
    $("#nomeErro").html("Erro | Campo inválido").show();
    $("#nome").css("border", "solid 3px red");
    $('#nome"Sucesso').html("").hide();
  } else if (caracteresEspeciais.includes(nome)) {
    $("#nomeErro").html("Erro | Campo inválido").show();
    $("#nome").css("border", "solid 3px red");
    $('#nome"Sucesso').html("").hide();
  } else {
    $("#nomeErro").html("").hide();
    $("#nomeSucesso").html("✔").show();
    $("#nome").css("border", "solid 3px green");
  }
}

function validaCpf() {
  var cpf = $("#cpf").val().trim();

  if (cpf == "") {
    $("#cpfErro").html("Erro | Campo vazio").show();
    $("#cpf").css("border", "solid 3px red");
    $('#cpfSucesso').html("").hide();
  }

  for (let i = 0; i < cpf.length; i++) {
    const char = cpf[i];
    if (isNaN(char)) {
      $("#cpfErro").html("Erro | Campo inválido").show();
      $("#cpf").css("border", "solid 3px red");
      $('#cpfSucesso').html("").hide();
    } else if (cpf.length < 11) {
      $("#cpfErro")
        .html("Erro | Quantidade de caracteres insuficientes")
        .show();
      $("#cpf").css("border", "solid 3px red");
      $('#cpfSucesso').html("").hide();
    } else {
      $("#cpfErro").html("").hide();
      $("#cpfSucesso").html("✔").show();
      $("#cpf").css("border", "solid 3px green");
    }
  }

  let cpf_parte1 = cpf.substring(0, 3);
  let cpf_parte2 = cpf.substring(3, 6);
  let cpf_parte3 = cpf.substring(6, 9);
  let cpf_parte4 = cpf.substring(9, 11);

  let cpfFormatado =
    cpf_parte1 + "." + cpf_parte2 + "." + cpf_parte3 + "-" + cpf_parte4;

  console.log(cpfFormatado);

  $("#cpf").val(cpfFormatado);
}

function validaDataNascimento() {
  var dataNascimento = $("#nascimento").val().trim();

  if (dataNascimento == "") {
    $("#dataErro").html("Erro | Campo vazio").show();
    $("#nascimento").css("border", "solid 3px red");
    $("#dataSucesso").html("").hide();
  }

  for (let i = 0; i < dataNascimento.length; i++) {
    const char = dataNascimento[i];
    if (isNaN(char)) {
      $("#dataErro").html("Erro | Campo inválido").show();
      $("#nascimento").css("border", "solid 3px red");
      $("#dataSucesso").html("").hide();
    } else if (dataNascimento.length < 8) {
      $("#dataErro")
        .html("Erro | Quantidade de caracteres insuficientes")
        .show();
      $("#nascimento").css("border", "solid 3px red");
      $("#dataSucesso").html("").hide();
    } else {
      $("#dataErro").html("").hide();
      $("#dataSucesso").html("✔").show();
      $("#nascimento").css("border", "solid 3px green");
    }
  }

  let nascimento_parte1 = dataNascimento.substring(0, 2);
  let nascimento_parte2 = dataNascimento.substring(2, 4);
  let nascimento_parte3 = dataNascimento.substring(4, 8);

  let nascimentoFormatado =
    nascimento_parte1 + "/" + nascimento_parte2 + "/" + nascimento_parte3;

  console.log(nascimentoFormatado);

  $("#nascimento").val(nascimentoFormatado);
}

function validaEmail() {
  var email = $("#email").val().trim();
  const caracteresEspeciais = "!@#$%^&*()_+[]{}|;':\",.<>?";
  const formatoEmail_1 = "@";

  if (email == "") {
    $("#emailErro").html("Erro | Campo vazio").show();
    $("#email").css("border", "solid 3px red");
    $("#emailSucesso").html("").hide();
  } else if (caracteresEspeciais.includes(email)) {
    $("#emailErro").html("Erro | Campo inválido").show();
    $("#email").css("border", "solid 3px red");
    $("#emailSucesso").html("").hide();
  } else if (email.length <= 2) {
    $("#emailErro")
      .html("Erro | Quantidade de caracteres insuficientes")
      .show();
    $("#email").css("border", "solid 3px red");
    $("#emailSucesso").html("").hide();
  } else if (!email.includes(formatoEmail_1)) {
    $("#emailErro").html("Erro | Formato de e-mail inválido").show();
    $("#email").css("border", "solid 3px red");
    $("#emailSucesso").html("").hide();
  } else {

    let emailCom = email.replace(formatoEmail_1, formatoEmail_1 + '.com');
    $("#email").val(emailCom);

    $("#emailErro").html("").hide();
    $("#emailSucesso").html("✔").show();
    $("#email").css("border", "solid 3px green");
  }
}

function validaDD() {
    var dd = $("#dd").val().trim();
  
    if (dd == "") {
      $("#ddErro").html("Erro | Campo vazio").show();
      $("#dd").css("border", "solid 3px red");
      $('#ddSucesso').html("").hide();
    }
  
    for (let i = 0; i < dd.length; i++) {
      const char = dd[i];
      if (isNaN(char)) {
        $("#ddErro").html("Erro | Campo inválido").show();
        $("#dd").css("border", "solid 3px red");
        $('#ddSucesso').html("").hide();
      } else if (cpf.length < 2) {
        $("#ddErro").html("Erro | Campo inválido").show();
        $("#dd").css("border", "solid 3px red");
        $('#ddSucesso').html("").hide();
      } else {
        $("#ddErro").html("").hide();
        $("#ddSucesso").html("✔").show();
        $("#dd").css("border", "solid 3px green");
      }
    }
  
  }

  function validaCelular() {
    var celular = $("#celular").val().trim();
  
    if (celular == "") {
      $("#celErro").html("Erro | Campo vazio").show();
      $("#celular").css("border", "solid 3px red");
      $('#celSucesso').html("").hide();
    }
  
    for (let i = 0; i < celular.length; i++) {
      const char = celular[i];
      if (isNaN(char)) {
        $("#celErro").html("Erro | Campo vazio").show();
        $("#celular").css("border", "solid 3px red");
        $('#celSucesso').html("").hide();
      } else if (cpf.length < 2) {
        $("#celErro").html("Erro | Campo vazio").show();
        $("#celular").css("border", "solid 3px red");
        $('#celSucesso').html("").hide();
      } else {
        $("#celErro").html("").hide();
        $("#celSucesso").html("✔").show();
        $("#celular").css("border", "solid 3px green");
      }
    }
  
  }

  function validaCep() {
    var cep = $("#cep").val().trim();
  
    if (cep == "") {
      $("#cepErro").html("Erro | Campo vazio").show();
      $("#cep").css("border", "solid 3px red");
      $('#cepSucesso').html("").hide();
    }
  
    for (let i = 0; i < cep.length; i++) {
      const char = cep[i];
      if (isNaN(char)) {
        $("#cepErro").html("Erro | Campo vazio").show();
        $("#cep").css("border", "solid 3px red");
        $('#cepSucesso').html("").hide();
      } else if (cpf.length < 8) {
        $("#cepErro").html("Erro | Campo vazio").show();
        $("#cep").css("border", "solid 3px red");
        $('#cepSucesso').html("").hide();
      } else {
        $("#cepErro").html("").hide();
        $("#cep").css("border", "solid 3px green");
        $("#cepSucesso").html("✔").show();
      }

      let cep_parte1 = cep.substring(0, 5);
      let cep_parte2 = cep.substring(5, 8);

      let cepFormatado = cep_parte1 + "-" + cep_parte2;

      console.log(cepFormatado);

      $("#cep").val(cepFormatado);
    }
  
  }

  function validaEndereco() {
    var endereco = $("#cep").val().trim();
  
    if (cep == "") {
      $("#cepErro").html("Erro | Campo vazio").show();
      $("#cep").css("border", "solid 3px red");
      $('#cepSucesso').html("").hide();
    }
  
  
  }

function salvar() {
  //   validaNome();
  //   validaCpf();
  //   validaDataNascimento();
//   validaEmail();
// validaDD();
// validaCelular();
validaCep();
validaEndereco();
}

// var formulario  = $('#formulario')
function limpar() {
  form.reset($("#form"));
}
