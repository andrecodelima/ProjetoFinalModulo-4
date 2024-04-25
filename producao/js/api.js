// CEP
$(document).ready(function () {
    $('#cep').blur(function () {
        var cep = $('#cep').val();
        $.ajax({
            url: `https://viacep.com.br/ws/${cep}/json/`,
            type: 'GET',
            dataType: 'json',
            success: function (data) {
                if (data.erro) {
                    $("#cepErro").html("Erro | Cep não encontrado").show();
                    $("#cep").css("border", "solid 3px red");
                    $("#cepSucesso").html("").hide();

                } else {
                    $('#logradouro').val(data.logradouro);
                    $('#bairro').val(data.bairro);
                    $('#cidade').val(data.localidade);
                    $('#estado').val(data.uf);

                    $("#cepErro").hide();
                    $("#cep").css("border", "solid 3px green");
                }
            },
            error: function (error) {
                console.error('Erro ao buscar o CEP:', error);
            }
        });
    });
});