function teste() {
  alert();
}

function validaNome() {
  var nome = $("#nome").val().trim();
  const caracteresEspeciais = "!@#$%^&*()_+[]{}|;':\",.<>?";

  if (nome == "") {
    $("#nomeErro").html("Erro | Campo vazio").show();
    $("#nome").css("border", "solid 3px red");

  }else {

  for (let i = 0; i < nome.length; i++) {
    const char = nome[i];
    if (!isNaN(nome[i])) {
      $("#nomeErro").html("Erro | Campo vazio").show();
      $("#nome").css("border", "solid 3px red");

    } else if (caracteresEspeciais.includes(nome[i])) {
      $("#nomeErro").html("Erro | Campo vazio").show();
      $("#nome").css("border", "solid 3px red");

    } else {
      $("#nomeErro").hide();
      $("#nome").css("border", "solid 3px green");
    }

  }
}
}

function validaCpf() {
  var cpf = $("#cpf").val().trim();
  const caracteresEspeciais = "!@#$%^&*()_+[]{}|;':\",.<>?";

  if (cpf == "") {
    $("#cpfErro").html("Erro | Campo vazio").show();
    $("#cpf").css("border", "solid 3px red");
  }

  for (let i = 0; i < cpf.length; i++) {
    const char = cpf[i];
    if (isNaN(char)) {
      $("#cpfErro").html("Erro | Campo inválido").show();
      $("#cpf").css("border", "solid 3px red");
    } else if (cpf.length < 11) {
      $("#cpfErro").html("Erro | Quantidade de caracteres insuficientes").show();
      $("#cpf").css("border", "solid 3px red");
    }else if (caracteresEspeciais.includes(cpf[i])) {
      $("#cpfErro").html("Erro | Campo inválido").show();
      $("#cpf").css("border", "solid 3px red");
    }else {
      $("#cpfErro").hide();
      $("#cpf").css("border", "solid 3px green");

      let cpf_parte1 = cpf.substring(0, 3);
      let cpf_parte2 = cpf.substring(3, 6);
      let cpf_parte3 = cpf.substring(6, 9);
      let cpf_parte4 = cpf.substring(9, 11);

      let cpfFormatado =
        cpf_parte1 + "." + cpf_parte2 + "." + cpf_parte3 + "-" + cpf_parte4;

      console.log(cpfFormatado);

      $("#cpf").val(cpfFormatado);
    }
  }

  
}

function validaDataNascimento() {
  var dataNascimento = $("#nascimento").val().trim();
  const caracteresEspeciais = "!@#$%^&*()_+[]{}|;':\",.<>?";

  if (dataNascimento == "") {
    $("#dataErro").html("Erro | Campo vazio").show();
    $("#nascimento").css("border", "solid 3px red");
  }

  for (let i = 0; i < dataNascimento.length; i++) {
    const char = dataNascimento[i];
    if (isNaN(char)) {
      $("#dataErro").html("Erro | Campo inválido").show();
      $("#nascimento").css("border", "solid 3px red");

    } else if (dataNascimento.length < 8) {
      $("#dataErro").html("Erro | Quantidade de caracteres insuficientes").show();
      $("#nascimento").css("border", "solid 3px red");

    }else if (caracteresEspeciais.includes(dataNascimento[i])) {
      $("#dataErro").html("Erro | Campo inválido").show();
      $("#nascimento").css("border", "solid 3px red");

    } else {
      $("#nascimento").css("border", "solid 3px green");
      $("#dataErro").hide();

      let nascimento_parte1 = dataNascimento.substring(0, 2);
      let nascimento_parte2 = dataNascimento.substring(2, 4);
      let nascimento_parte3 = dataNascimento.substring(4, 8);

      let nascimentoFormatado =
        nascimento_parte1 + "/" + nascimento_parte2 + "/" + nascimento_parte3;

      console.log(nascimentoFormatado);

      $("#nascimento").val(nascimentoFormatado);
    }
  }

  
}

function validaGenero() {
  var genero = $("#genero").val().trim();

  switch (genero) {
    case "masculino":
      $("#genero").val(genero);
      $("#generoErro").hide();
      $("#genero").css("border", "solid 3px green");
      break;

    case "feminino":
      $("#genero").val(genero);
      $("#generoErro").hide();
      $("#genero").css("border", "solid 3px green");
      break;

    case "":
      $("#genero").val(genero);
      $("#generoErro").html("Erro | Campo vazio").show();
      $("#genero").css("border", "solid 3px red");
      break;

    default:
      $("#genero").val(genero);
      $("#generoErro").html("Erro | Campo vazio").show();
      $("#genero").css("border", "solid 3px red");
      break;
  }
}

function validaEmail() {
  var email = $("#email").val().trim();
  const caracteresEspeciais = "!#$%^&*()_+[]{}|;':\",<>?";
  const formatoEmail_1 = "@";

  if (email == "") {
    $("#emailErro").html("Erro | Campo vazio").show();
    $("#email").css("border", "solid 3px red");

  }else{

  for (let i = 0; i < email.length; i++) {
    const char = email[i];

    if(caracteresEspeciais.includes(email[i])) {
    $("#emailErro").html("Erro | Campo inválido").show();
    $("#email").css("border", "solid 3px red");

  } else if (email.length <= 2) {
    $("#emailErro").html("Erro | Quantidade de caracteres insuficientes").show();
    $("#email").css("border", "solid 3px red");

  } else if (!email.includes(formatoEmail_1)) {
    $("#emailErro").html("Erro | Formato de e-mail inválido").show();
    $("#email").css("border", "solid 3px red");

  } else {
    let emailCom = email.replace(formatoEmail_1, formatoEmail_1 + ".com");
    $("#email").val(emailCom);

    $("#emailErro").hide();
    $("#email").css("border", "solid 3px green");
  }

}
}
}

function validaDD() {
  var dd = $("#dd").val().trim();

  if (dd == "") {
    $("#ddErro").html("Erro | Campo vazio").show();
    $("#dd").css("border", "solid 3px red");
    $("#ddSucesso").html("").hide();
  }

  for (let i = 0; i < dd.length; i++) {
    const char = dd[i];
    if (isNaN(char)) {
      $("#ddErro").html("Erro | Campo inválido").show();
      $("#dd").css("border", "solid 3px red");
      $("#ddSucesso").html("").hide();
    } else if (cpf.length < 2) {
      $("#ddErro").html("Erro | Campo inválido").show();
      $("#dd").css("border", "solid 3px red");
      $("#ddSucesso").html("").hide();
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
    $("#celSucesso").html("").hide();
  }

  for (let i = 0; i < celular.length; i++) {
    const char = celular[i];
    if (isNaN(char)) {
      $("#celErro").html("Erro | Campo vazio").show();
      $("#celular").css("border", "solid 3px red");
      $("#celSucesso").html("").hide();
    } else if (cpf.length < 2) {
      $("#celErro").html("Erro | Campo vazio").show();
      $("#celular").css("border", "solid 3px red");
      $("#celSucesso").html("").hide();
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
    $("#cepSucesso").html("").hide();
  }

  for (let i = 0; i < cep.length; i++) {
    const char = cep[i];
    if (isNaN(char)) {
      $("#cepErro").html("Erro | Campo vazio").show();
      $("#cep").css("border", "solid 3px red");
      $("#cepSucesso").html("").hide();
    } else if (cpf.length < 8) {
      $("#cepErro").html("Erro | Campo vazio").show();
      $("#cep").css("border", "solid 3px red");
      $("#cepSucesso").html("").hide();
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
  var endereco = $("#endereco").val().trim();

  if (endereco == "") {
    $("#enderecoErro").html("Erro | Campo vazio").show();
    $("#endereco").css("border", "solid 3px red");
    $("#enderecoSucesso").html("").hide();
  } else if (!isNaN(endereco[0])) {
    $("#enderecoErro").html("Erro | Campo inválido").show();
    $("#endereco").css("border", "solid 3px red");
    $("#enderecoSucesso").html("").hide();
  } else {
    $("#enderecoErro").html("").hide();
    $("#enderecoSucesso").html("✔").show();
    $("#endereco").css("border", "solid 3px green");
  }
}

function estado() {
  var uf = $("#uf").val();

  var estado_cidade = {
    SP: ["São Paulo", "Guarulhos", "Campinas", "Santo André"],
    RJ: ["Rio de Janeiro", "São Gonçalo", "Duque de Caxias", "Nova Iguaçu"],
    MG: ["Belo Horizonte", "Uberlândia", "Contagem", "Juiz de Fora"],
    RS: ["Porto Alegre", "Caxias do Sul", "Pelotas", "Canoas"],
    PR: ["Curitiba", "Londrina", "Maringá", "Ponta Grossa"],
    SC: ["Florianópolis", "Joinville", "Blumenau", "Criciúma"],
    BA: ["Salvador", "Feira de Santana", "Vitória da Conquista", "Camaçari"],
    CE: ["Fortaleza", "Caucaia", "Juazeiro do Norte", "Maracanaú"],
    PE: ["Recife", "Jaboatão dos Guararapes", "Olinda", "Caruaru"],
    PA: ["Belém", "Ananindeua", "Santarém", "Marabá"],
    AM: ["Manaus", "Parintins", "Itacoatiara", "Manacapuru"],
    GO: ["Goiânia", "Aparecida de Goiânia", "Anápolis", "Luziânia"],
    MT: ["Cuiabá", "Várzea Grande", "Rondonópolis", "Sinop"],
    MS: ["Campo Grande", "Dourados", "Três Lagoas", "Corumbá"],
    ES: ["Vitória", "Vila Velha", "Serra", "Cariacica"],
    RN: ["Natal", "Mossoró", "Parnamirim", "São Gonçalo do Amarante"],
    PB: ["João Pessoa", "Campina Grande", "Santa Rita", "Patos"],
    AL: ["Maceió", "Arapiraca", "Rio Largo", "Palmeira dos Índios"],
    SE: ["Aracaju", "Nossa Senhora do Socorro", "Lagarto", "Itabaiana"],
    PI: ["Teresina", "Parnaíba", "Picos", "Campo Maior"],
    MA: ["São Luís", "Imperatriz", "Timon", "Caxias"],
    RO: ["Porto Velho", "Ji-Paraná", "Ariquemes", "Vilhena"],
    TO: ["Palmas", "Araguaína", "Gurupi", "Porto Nacional"],
    AC: ["Rio Branco", "Cruzeiro do Sul", "Sena Madureira", "Tarauacá"],
    RR: ["Boa Vista", "Caracaraí", "Rorainópolis", "Bonfim"],
    AP: ["Macapá", "Santana", "Laranjal do Jari", "Oiapoque"],
  };

  $("#cidade").empty();

  switch (uf) {
    case "AC":
    case "AL":
    case "AP":
    case "AM":
    case "BA":
    case "CE":
    case "DF":
    case "ES":
    case "GO":
    case "MA":
    case "MT":
    case "MS":
    case "PA":
    case "PB":
    case "PR":
    case "PE":
    case "PI":
    case "RJ":
    case "RN":
    case "RS":
    case "RO":
    case "RR":
    case "SC":
    case "SP":
    case "SE":
    case "TO":
      estado_cidade[uf].forEach(function (cidade) {
        $("#cidade").append(
          $("<option>", {
            value: cidade,
            text: cidade,
          })
        );
        $("#ufErro").html("Erro | Campo vazio").hide();
        $("#ufSucesso").html("").show();
        $("#uf").css("border", "solid 3px green");
        $("#cidade").css("border", "solid 3px green");
      });
      break;
  }
}

function experiencia() {
  var experiencia = $("#experiencia").val().trim();

  if (experiencia == "") {
    $("#expErro").html("Erro | Campo vazio").show();
    $("#expSucesso").html("").hide();
    $("#experiencia").css("border", "solid 3px red");
  }

  for (let i = 0; i < experiencia.length; i++) {
    const char = experiencia[i];
    if (isNaN(char)) {
      $("#expErro").html("Erro | Campo inválido").show();
      $("#expSucesso").html("").hide();
      $("#experiencia").css("border", "solid 3px red");
    } else if (experiencia.length == 0) {
      $("#expErro").html("Erro | Campo inválido").show();
      $("#expSucesso").html("").hide();
      $("#experiencia").css("border", "solid 3px red");
    } else {
      $("#expErro").html("").hide();
      $("#expSucesso").html("✔").show();
      $("#experiencia").css("border", "solid 3px green");
    }
  }
}

$(document).ready(function () {
  estado();

  // Adiciona um evento onchange ao elemento de seleção de estado (#uf) para chamar a função estado() sempre que o estado for alterado
  $("#uf").change(function () {
    estado();
  });
});

function salvar() {

  // validaNome();
  // validaCpf();
  // validaDataNascimento();
  // validaGenero();
  validaEmail();
  // validaDD();
  // validaCelular();
  // validaCep();
  // validaEndereco();
  // experiencia();
  // validaGenero();
}

// var formulario  = $('#formulario')
function limpar() {
  form.reset($("#form"));
}
