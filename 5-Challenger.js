let frutas = [], congelados = [], laticinios = [], limpeza = [], higiene = [];
let pergunta, adicionaLista, classifica, removeLista;
let indice;

pergunta = prompt("Você gostaria de adicionar algo a lista? (Sim ou Não)");

while(pergunta == "Sim" || pergunta == "sim"){

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
    else{
        alert("Categoria não especificada ou não existente. Tente novamente.");
    }

    pergunta = prompt("Você gostaria de adicionar algo a lista? (Sim ou Não) - Caso queira remover algum item digite Remover.");

    while(pergunta == "Remover" || pergunta == "remover"){

        alert(`Lista de produtos: Frutas = ${frutas}; Congelados = ${congelados}; Laticínios = ${laticinios}; Limpeza = ${limpeza}; Higiene = ${higiene}.`);
        removeLista = prompt("Escolha um produto para remover:");

        if(frutas.includes(removeLista)){

            indice = frutas.indexOf(removeLista); 
            frutas.splice(indice, 1);
            alert(`${removeLista} Removido com sucesso da lista!`);
        }
        else if(congelados.includes(removeLista)){

            indice = congelados.indexOf(removeLista); 
            congelados.splice(indice, 1);
            alert(`${removeLista} Removido com sucesso da lista!`);            
        }
        else if(laticinios.includes(removeLista)){

            indice = laticinios.indexOf(removeLista); 
            laticinios.splice(indice, 1);
            alert(`${removeLista} Removido com sucesso da lista!`);
        }
        else if(limpeza.includes(removeLista)){
            
            indice = limpeza.indexOf(removeLista); 
            limpeza.splice(indice, 1);
            alert(`${removeLista} Removido com sucesso da lista!`);
        }
        else if(higiene.includes(removeLista)){
            
            indice = higiene.indexOf(removeLista); 
            higiene.splice(indice, 1);
            alert(`${removeLista} Removido com sucesso da lista!`);
        }
        else{

            alert("O produto digitado não foi encontrado. Verifique ortografia e tente novamente.");
        }

        pergunta = prompt("Você gostaria de adicionar algo a lista? (Sim ou Não) - Caso queira remover algum item digite Remover.");
    }
}

alert(`Lista de produtos:|| Frutas = ${frutas} || Congelados = ${congelados} || Laticínios = ${laticinios} || Limpeza = ${limpeza} || Higiene = ${higiene} ||`);