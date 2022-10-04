var x, y, escolha, resultado;


function adicao(x,y){
    
    return parseFloat(x) + parseFloat(y);
}

function multiplica(x,y){

    return parseFloat(x) * parseFloat(y);
}

function subtrai(x,y){

    return parseFloat(x) - parseFloat(y);
}

function divide(x,y){

    return parseFloat(x) / parseFloat(y);
}

function numeros(){
    x = prompt("Digite o primeiro valor da operação.");
    y = prompt("Digite o segundo valor da operação.");
}

//"Menu" da Calculadora
escolha = prompt("Obrigado por usar a calculadora! Escolha a operação desejada (A - Adição || M - Multiplicação || S - Subtração || D - Divisão || Sair - caso queria sair do programa):");

//Operações da Calculadora
while(escolha != "Sair"){

    switch(escolha){

    case 'A':
        numeros();
        resultado = adicao(x,y);
        alert(resultado);
    break;

    case 'M':
        numeros();
        resultado = multiplica(x,y);
        alert(resultado);
    break;

    case 'S':
        numeros();
        resultado = subtrai(x,y);
        alert(resultado);
    break;

    case 'D':
        numeros();
        resultado = divide(x,y);
        alert(resultado);
    break;
    }

    escolha = prompt("Obrigado por usar a calculadora! Escolha a operação desejada (A - Adição || M - Multiplicação || S - Subtração || D - Divisão || Sair - caso queria sair do programa):");
}

if(escolha == "Sair"){
    alert("Até a próxima!");
}