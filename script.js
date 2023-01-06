/*  
                        // método fetch é assíncrono e retorna uma promisse

    var consultaCEP = fetch(`https://viacep.com.br/ws/01001250/json/`)
//  console.log(consultaCEP) 

        .then(resposta => resposta.json()) //formata em objeto p/ poder ser acessado
        .then(r => {
            if(r.erro){ // Isso significa que o CEP consultado não foi encontrado na base de dados.
                throw Error(`Esse CEP não existe.`)
            } else {
                console.log(r) // pega o erro e exibe na tela

            }
        })
        // método para quando a promessa é rejeitada
        .catch(erro => console.log(erro))

        .finally(mensagem => console.log('processamento concluído.'))
            // independente da resposta da promessa esse será o resultado.
        
/* RAPIDINHO: nas especificações do site viacep.com há um adendo acerca da validação do CEP no qual contém as infos de que mesmo sendo um formato válido, isto é, 
com 8 números porém inexistente, o retorno de erro será verificado como true, significando que o CEP não foi encontrado na base de dados. */

// cada instância de .then() retorna uma nova promessa
// exceções não tratadas muitas vezes passam sem aviso e fica muito mais difícil de debugar.
// Não há como utilizar o try/catch quando usamos o .then(), pois a computação só será efetuada após o retorno do objeto-Promise.

//Uma função declarada como async significa que o valor de retorno da função será, "por baixo dos panos", uma Promise.



async function buscaEndereco(cep) {
    var mensagemErro = document.getElementById('erro');
    mensagemErro.innerHTML = "";

    try {                   // é específico de função assíncrona
                            //o JavaScript vai aguardar até que a Promise finalize
        var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        console.log(consultaCEP) 

        var consultaCEPConvertida = await consultaCEP.json();
        console.log(consultaCEPConvertida) 


        if (consultaCEPConvertida.erro) {
            throw Error('CEP não existente!');
        }

        var cidade = document.getElementById('cidade');
        var logradouro = document.getElementById('endereco');
        var estado = document.getElementById('estado');

        cidade.value = consultaCEPConvertida.localidade;
        logradouro.value = consultaCEPConvertida.logradouro;
        estado.value = consultaCEPConvertida.uf;

        console.log(consultaCEPConvertida);
        return consultaCEPConvertida;

    } catch (erro) {
        mensagemErro.innerHTML = `<p>CEP inválido. Tente novamente!</p>`
        console.log(erro);
    }
}

var cep = document.getElementById('cep');
cep.addEventListener("focusout", () => buscaEndereco(cep.value));