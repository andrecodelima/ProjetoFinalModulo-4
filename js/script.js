function teste(){
    alert();
}

$(document).ready(function() {
    // Adicione um listener para o evento 'submit' do formulário
    $('#formulario').submit(function(event) {
        // Evite o comportamento padrão do formulário (recarregar a página)
        event.preventDefault();
        // Chame a função validaNome()
        validaNome();
    });
});


function validaNome() {
    var nome = $('#nome').val().trim();
    const caracteresEspeciais = "!@#$%^&*()_+[]{}|;':\",.<>?";

    if (nome == '') {
        $('#nomeErro').html("Erro | Campo vazio");
    }  
}

 

function salvar(){
    validaNome();
    
}

// var formulario  = $('#formulario')
function limpar(){
    form.reset($('#formulario'))

}