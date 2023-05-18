

let gerarConcelhos = async () =>{
    const url = 'https://api.adviceslip.com/advice'
    const concelhosObtidos = await  fetch(url);
    return await concelhosObtidos.json();
}

// método de como pegar qualquer concelho
let pegarConcelhoGeral = async (id) =>{
    const url = `https://api.adviceslip.com/advice/${id}`;
    const IdsObtidos = await fetch(url);
    return await IdsObtidos.json();
}

// pegando específicamente o concelho
let pegarConcelhoAtual = async () => {
    const concelhos = await gerarConcelhos();
    const concelho = await pegarConcelhoGeral(concelhos.slip.id);
    const textoConcelho = concelho.slip.advice;
    let exibirTexto = document.getElementById("text");
    exibirTexto.innerHTML = textoConcelho;
}
pegarConcelhoAtual()

let botao = document.getElementById('botao').addEventListener('click',pegarConcelhoAtual )