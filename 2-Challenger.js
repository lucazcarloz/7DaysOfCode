const nome = prompt("Digite o seu nome:");
const idade = prompt("Digite a sua idade:");
const linguagem = prompt ("Qual linguagem de programação você está estudando?");

const msg = `Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`;
alert(msg);

const pergunta = prompt(`Você gosta de estudar ${linguagem}? (1 - Sim; 2 - Não)`);

if (pergunta === '1'){
    alert("Muito bom! Continue estudando e você terá muito sucesso.");
}
else if (pergunta === '2'){
    alert("Ahh que pena... Já tentou aprender outras linguagens?");
}
else{
    alert("Apenas 1 ou 2 é válido como resposta! Recarregando a página...");
    location.reload();
}
