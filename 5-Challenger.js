let frutas = [], congelados = [], laticinios = [], limpeza = [], higiene = [];
let pergunta, adicionaLista, classifica;

pergunta = prompt("Você gostaria de adicionar algo a lista? (Sim ou Não)");

while(pergunta == "Sim"){
    adicionaLista = prompt("Digite o produto que você gostaria de adicionar:");
    classifica = prompt("Classifique o produto adicionado (1 - frutas, 2-congelados, 3-laticinios, 4- limpeza, 5-higiene):")

    if(classifica == "1"){
        frutas.push(adicionaLista);
    }
    else if (classifica == "2"){
        congelados.push(adicionaLista);
    }
    else if (classifica == "3"){
        laticinios.push(adicionaLista);
    }
    else if (classifica == "4"){
        limpeza.push(adicionaLista);
    }
    else if (classifica == "5"){
        higiene.push(adicionaLista);
    }
    pergunta = prompt("Você gostaria de adicionar algo a lista? (Sim ou Não)");
}

alert(`Lista de produtos: Frutas = ${frutas}; Congelados = ${congelados}; Laticínios = ${laticinios}; Limpeza = ${limpeza}; Higiene = ${higiene}.`);