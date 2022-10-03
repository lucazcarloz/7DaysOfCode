let chute, aleatorio;
let j = 3;

aleatorio = (Math.floor(Math.random() * (10 - 0 + 1) + 0));

while((j != 0) && (j != 10)){
    chute = prompt("Chute um número entre 0 e 10:");

    if(chute != aleatorio){
        j = j-1;
        alert(`Tentativas restantes:${j}`);
    }
    else{
        j = 10;
    }
}

if(j === 0){
    alert("Suas tentativas acabaram. Não foi dessa vez. :/");
}
else if(j === 10){
    alert("Parabéns, você adivinhou!");
}

