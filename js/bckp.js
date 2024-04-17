function teste(){
    alert();
}


function validaNome() {
    var nome = $('#nome').val().trim();
    const caracteresEspeciais = "!@#$%^&*()_+[]{}|;':\",.<>?";

    if (nome == '') {
        $('#nomeErro').html("Erro | Campo vazio").show(); 
        $("#nome").css('border', 'solid 3px red');
        $('#nome"Sucesso').html('').hide();
    } else if (!isNaN(nome[0])) {
        $('#nomeErro').html("Erro | Campo inválido").show(); 
        $("#nome").css('border', 'solid 3px red');
        $('#nome"Sucesso').html('').hide();  
    } else if (caracteresEspeciais.includes(nome)) {
        $('#nomeErro').html("Erro | Campo inválido").show();
        $("#nome").css('border', 'solid 3px red'); 
        $('#nome"Sucesso').html('').hide();  
    } else {
        $('#nomeErro').html('').hide();  
        $('#nomeSucesso').html('✔').show();  
        $("#nome").css('border', 'solid 3px green');
    }
    
}

function validaCpf() {
    var cpf = $('#cpf').val().trim();
    const alfabeto = "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z";
    const caracteresEspeciais = "!@#$%^&*()_+[]{}|;':\",.<>?";

    if(cpf == '') {
        $('#cpfErro').html("Erro | Campo vazio").show(); 
        $("#cpf").css('border', 'solid 3px red');
        $('#cpf"Sucesso').html('').hide();

    }else if((alfabeto.includes(cpf))){
        $('#cpfErro').html("Erro | Campo inválido").show(); 
        $("#cpf").css('border', 'solid 3px red');
        $('#cpf"Sucesso').html('').hide();

    }else if(caracteresEspeciais.includes(cpf)){
        $('#cpfErro').html("Erro | Campo inválido").show(); 
        $("#cpf").css('border', 'solid 3px red');
        $('#cpf"Sucesso').html('').hide();
    }else{
        $('#cpfErro').html('').hide();  
        $('#cpfSucesso').html('✔').show();  
        $("#cpf").css('border', 'solid 3px green');
        
        let cpf_parte1 = cpf.substring(0,3);
        let cpf_parte2 = cpf.substring(3,6);
        let cpf_parte3 = cpf.substring(6,9);
        let cpf_parte4 = cpf.substring(9,11);

        let cpfFormatado = (cpf_parte1 + "." + cpf_parte2 + "." + cpf_parte3 + "-" + cpf_parte4)

        console.log(cpfFormatado);

        $("#cpf").val(cpfFormatado);
    }
    
}

function validaDataNascimento() {
    var dataNascimento = $('#nascimento').val().trim();
    const alfabeto = "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z";
    const caracteresEspeciais = "!@#$%^&*()_+[]{}|;':\",.<>?";

    if(dataNascimento == '') {
        $('#dataErro').html("Erro | Campo vazio").show(); 
        $("#nascimento").css('border', 'solid 3px red');
        $('#dataSucesso').html('').hide();
    
    } 
    for (let i = 0; i < dataNascimento.length; i++) {
        const char = dataNascimento[i];
        if (isNaN(char)) {
            $('#dataErro').html("Erro | Campo inválido").show(); 
            $("#nascimento").css('border', 'solid 3px red');
            $('#dataSucesso').html('').hide();
            return false; // Contém um caractere não numérico
        }
    }
     
    
    
}
 
function salvar() {
    // validaNome();
    validaCpf();
    validaDataNascimento();
}

// var formulario  = $('#formulario')
function limpar(){
    form.reset($('#form'))

}

function estado() {
    var uf = $('#uf').val();
  
    var estado_cidade = {
      SP: ["São Paulo", "Guarulhos", "Campinas", "Santo André"],
    };
  
    $('#cidade').empty();
    $('#cidade').append($('<option>', {
      value: '',
      text: 'Selecione uma cidade'
    }));
  
    switch (uf) {
      case "SP":
        estado_cidade.SP.forEach(function (cidade) {
          $('#cidade').append($('<option>', {
            value: cidade,
            text: cidade
          }));
        });
        break;
      // Adicione outros casos para os demais estados conforme necessário
    }
  }
  

///////////////////////////////////////////////////////////////////////////////
<select class="form-select form-select-lg mb-3" name="estados-brasil" id="uf" onchange="estado()">
              <option value=""></option>
              <option value="AC">Acre</option>
              <option value="AL">Alagoas</option>
              <option value="AP">Amapá</option>
              <option value="AM">Amazonas</option>
              <option value="BA">Bahia</option>
              <option value="CE">Ceará</option>
              <option value="DF">Distrito Federal</option>
              <option value="ES">Espírito Santo</option>
              <option value="GO">Goiás</option>
              <option value="MA">Maranhão</option>
              <option value="MT">Mato Grosso</option>
              <option value="MS">Mato Grosso do Sul</option>
              <option value="MG">Minas Gerais</option>
              <option value="PA">Pará</option>
              <option value="PB">Paraíba</option>
              <option value="PR">Paraná</option>
              <option value="PE">Pernambuco</option>
              <option value="PI">Piauí</option>
              <option value="RJ">Rio de Janeiro</option>
              <option value="RN">Rio Grande do Norte</option>
              <option value="RS">Rio Grande do Sul</option>
              <option value="RO">Rondônia</option>
              <option value="RR">Roraima</option>
              <option value="SC">Santa Catarina</option>
              <option value="SP">São Paulo</option>
              <option value="SE">Sergipe</option>
              <option value="TO">Tocantins</option>
</select>

///////////////////////////////////////////////////////////////////////////////////

var uf = $('#uf').val();

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

switch (uf) {
  case 'SP':
    alert(estado_cidade.SP);
    break;
  case 'RJ':
    alert(estado_cidade.RJ);
    break;
  // ... (other cases for different states)
  default:
    alert('Estado não encontrado na lista.');
}
