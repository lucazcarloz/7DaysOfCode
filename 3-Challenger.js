let segundaEscolha, terceiraEscolha, resposta="Sim", i=0, j=0;
let tecnologia = [1,2];

let primeiraEscolha = prompt("Escolha sua área: 1-BackEnd; 2-FrontEnd.");

if(primeiraEscolha === "1"){
    segundaEscolha = prompt("Digite uma opção para aprender entre: C# ou Java.");  
    
    if(segundaEscolha === "C#"){
       terceiraEscolha = prompt(`Você deseja se especializar em ${segundaEscolha} ou seguir para FullStack?`);
    }
    else if(segundaEscolha === "Java"){
        terceiraEscolha = prompt(`Você deseja se especializar em ${segundaEscolha} ou seguir para FullStack?`);
    }
}

else if(primeiraEscolha === "2"){
    segundaEscolha = prompt("Digite uma opção para aprender entre: React ou Vue.");

    if(segundaEscolha === "React"){
        terceiraEscolha = prompt(`Você deseja se especializar em ${segundaEscolha} ou seguir para FullStack?`);
     }
     else if(segundaEscolha === "Vue"){
         terceiraEscolha = prompt(`Você deseja se especializar em ${segundaEscolha} ou seguir para FullStack?`);
     }
}

while(resposta === "Sim"){

    tecnologia[i] = prompt("Digite uma tecnologia que você gostaria de aprender:"); 
    
    resposta = prompt("Existe mais alguma tecnologia que você queira aprender? - Apenas Sim ou Não para resposta -");

    ++i;
}

alert(`Você chegou aqui com interesse em ${segundaEscolha}. E resolveu seguir para ${terceiraEscolha}.`);

alert("Lista de tecnologias que você gostaria de aprender:")

alert(`Tecnologias: ${tecnologia}`);


