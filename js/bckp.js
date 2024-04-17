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