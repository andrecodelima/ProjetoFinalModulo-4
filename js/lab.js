// DEU ERRADO  
  // function estado(){

  //   var uf = $('#uf').val();
  //   var cidade = $('#cidade').val();

  //   var estado_cidade = {
  //     SP: ["São Paulo", "Guarulhos", "Campinas", "Santo André"],
  //     RJ: ["Rio de Janeiro", "São Gonçalo", "Duque de Caxias", "Nova Iguaçu"],

  //   };

  //   switch(uf){
  //     case "SP":
  //     //  alert(estado_cidade.SP[0]);
  //     cidade = estado_cidade.SP[0];
  //     break;

  //   }
  //   $('#cidade').val(cidade);

    
  // }

//   DEU CERTO

  function estado() {
    var uf = $('#uf').val();

    var estado_cidade = {
        SP: ["São Paulo", "Guarulhos", "Campinas", "Santo André"],
        RJ: ["Rio de Janeiro", "São Gonçalo", "Duque de Caxias", "Nova Iguaçu"],
        // Adicione outros estados e suas cidades aqui, se necessário
    };

    // Limpa as opções de cidade antes de adicionar novas
    $('#cidade').empty();

    switch (uf) {
        case "SP":
        case "RJ":
            estado_cidade[uf].forEach(function (cidade) {
                $('#cidade').append($('<option>', {
                    value: cidade,
                    text: cidade
                }));
            });
            break;
    }
}

$(document).ready(function () {
  estado();

  // Adiciona um evento onchange ao elemento de seleção de estado (#uf) para chamar a função estado() sempre que o estado for alterado
  $('#uf').change(function () {
      estado();
  });
});


// JEITO MAIS VERBOSO
switch (uf) {
    case "AC":
        estado_cidade.AC.forEach(function (cidade) {
            $('#cidade').append($('<option>', {
                value: cidade,
                text: cidade
            }));
        });
        break;
    case "AL":
        estado_cidade.AL.forEach(function (cidade) {
            $('#cidade').append($('<option>', {
                value: cidade,
                text: cidade
            }));
        });
        break;
    case "AP":
        estado_cidade.AP.forEach(function (cidade) {
            $('#cidade').append($('<option>', {
                value: cidade,
                text: cidade
            }));
        });
        break;
    case "AM":
        estado_cidade.AM.forEach(function (cidade) {
            $('#cidade').append($('<option>', {
                value: cidade,
                text: cidade
            }));
        });
        break;
    case "BA":
        estado_cidade.BA.forEach(function (cidade) {
            $('#cidade').append($('<option>', {
                value: cidade,
                text: cidade
            }));
        });
        break;
    case "CE":
        estado_cidade.CE.forEach(function (cidade) {
            $('#cidade').append($('<option>', {
                value: cidade,
                text: cidade
            }));
        });
        break;
    case "DF":
        estado_cidade.DF.forEach(function (cidade) {
            $('#cidade').append($('<option>', {
                value: cidade,
                text: cidade
            }));
        });
        break;
    case "ES":
        estado_cidade.ES.forEach(function (cidade) {
            $('#cidade').append($('<option>', {
                value: cidade,
                text: cidade
            }));
        });
        break;
    case "GO":
        estado_cidade.GO.forEach(function (cidade) {
            $('#cidade').append($('<option>', {
                value: cidade,
                text: cidade
            }));
        });
        break;
    case "MA":
        estado_cidade.MA.forEach(function (cidade) {
            $('#cidade').append($('<option>', {
                value: cidade,
                text: cidade
            }));
        });
        break;
    case "MT":
        estado_cidade.MT.forEach(function (cidade) {
            $('#cidade').append($('<option>', {
                value: cidade,
                text: cidade
            }));
        });
        break;
    case "MS":
        estado_cidade.MS.forEach(function (cidade) {
            $('#cidade').append($('<option>', {
                value: cidade,
                text: cidade
            }));
        });
        break;
    case "PA":
        estado_cidade.PA.forEach(function (cidade) {
            $('#cidade').append($('<option>', {
                value: cidade,
                text: cidade
            }));
        });
        break;
    case "PB":
        estado_cidade.PB.forEach(function (cidade) {
            $('#cidade').append($('<option>', {
                value: cidade,
                text: cidade
            }));
        });
        break;
    case "PR":
        estado_cidade.PR.forEach(function (cidade) {
            $('#cidade').append($('<option>', {
                value: cidade,
                text: cidade
            }));
        });
        break;
    case "PE":
        estado_cidade.PE.forEach(function (cidade) {
            $('#cidade').append($('<option>', {
                value: cidade,
                text: cidade
            }));
        });
        break;
    case "PI":
        estado_cidade.PI.forEach(function (cidade) {
            $('#cidade').append($('<option>', {
                value: cidade,
                text: cidade
            }));
        });
        break;
    case "RN":
        estado_cidade.RN.forEach(function (cidade) {
            $('#cidade').append($('<option>', {
                value: cidade,
                text: cidade
            }));
        });
        break;
    case "RS":
        estado_cidade.RS.forEach(function (cidade) {
            $('#cidade').append($('<option>', {
                value: cidade,
                text: cidade
            }));
        });
        break;
    case "RO":
        estado_cidade.RO.forEach(function (cidade) {
            $('#cidade').append($('<option>', {
                value: cidade,
                text: cidade
            }));
        });
        break;
    case "RR":
        estado_cidade.RR.forEach(function (cidade) {
            $('#cidade').append($('<option>', {
                value: cidade,
                text: cidade
            }));
        });
        break;
    case "SC":
        estado_cidade.SC.forEach(function (cidade) {
            $('#cidade').append($('<option>', {
                value: cidade,
                text: cidade
            }));
        });
        break;
    case "SE":
        estado_cidade.SE.forEach(function (cidade) {
            $('#cidade').append($('<option>', {
                value: cidade,
                text: cidade
            }));
        });
        break;
    case "TO":
        estado_cidade.TO.forEach(function (cidade) {
            $('#cidade').append($('<option>', {
                value: cidade,
                text: cidade
            }));
        });
        break;
}


// BARRA DE PROGRESSO

$(document).ready(function () {
    estado();
  
    // Adiciona um evento onchange ao elemento de seleção de estado (#uf) para chamar a função estado() sempre que o estado for alterado
    $('#uf').change(function () {
      estado();
    });
    
    $('#file1, #file2, #file3').change(function() {
      // Simule o envio das fotos (substitua isso pelo seu código real de envio)
      // Aqui, estou usando um setTimeout para simular o progresso
      var totalFiles = 3;
      var uploadedFiles = 0;
  
      function simulateUpload() {
        uploadedFiles++;
        var percentComplete = (uploadedFiles / totalFiles) * 100;
        $('.progress-bar').css('width', percentComplete + '%').attr('aria-valuenow', percentComplete);
        $('.progress-bar').text(percentComplete.toFixed(2) + '%');
  
        if (uploadedFiles === totalFiles) {
          // Todas as fotos foram enviadas
          console.log('Todas as fotos foram enviadas com sucesso!');
        } else {
          // Simule o próximo upload
          setTimeout(simulateUpload, 1000);
        }
      }
  
      // Inicie o primeiro upload simulado
      simulateUpload();
    });
    
  });

  function salvar() {

    try{
    validaNome();
    validaCpf();
    validaDataNascimento();
    validaGenero();
    validaGenero();
    validaEmail();
    validaDD();
    validaCelular();
    validaCep();
    validaEndereco();
    validaExperiencia();
    
    if (ValidacoesConcluidas()) {
      limparDados();
  }
  } catch (error) {
  // Se ocorrer qualquer exceção durante as validações, trate-a aqui
    alert("Erro ao salvar:", error);
  }
  
    }
  
    function ValidacoesConcluidas() {
      // Implemente a lógica para verificar se todas as validações foram bem-sucedidas
      // Por exemplo, você pode usar variáveis de controle ou flags
      // Retorne true se todas as validações passaram, caso contrário, retorne false
      return true; // Altere conforme sua necessidade
  }
  
  function limparDados() {
      // Implemente a lógica para limpar os dados aqui
      console.log("Dados limpos com sucesso!");
  }