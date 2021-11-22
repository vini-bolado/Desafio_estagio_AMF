function fazGet(url)  {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText

}

function criaLinha(infos) {

    //quando estiver em duvida daconsole.log
        
   linha = document.createElement("tr");

   tdbairro = document.createElement("td");

   tdcep = document.createElement("td");

   tdcidade = document.createElement("td");

   tdrua = document.createElement("td");

   tdnome = document.createElement("td");

   tdnum = document.createElement("td");

   

    tdrua.innerHTML = infos.rua

    tdcidade.innerHTML = infos.cidade

    tdnome.innerHTML = infos.nome

    tdbairro.innerHTML = infos.bairro

    tdcep.innerHTML = infos.cep

    tdnum.innerHTML = infos.num

    //Disposição que vai aparecer na tabela

   linha.appendChild(tdbairro);
   linha.appendChild(tdcidade);
   linha.appendChild(tdrua);
   linha.appendChild(tdnome);
   linha.appendChild(tdcep);
   linha.appendChild(tdnum);


   return linha;
}

    //aqui a maneira de chamar a função com o sort para poder ordenar a tabela

function main(){
    
    let imoveis = fazGet("https://api.estagio.amfernandes.com.br/imoveis");
    let orden = JSON.parse(imoveis);
    let tabela = document.getElementById("tabela");

    
    
    orden.sort(function(a, b) {
        if(a.bairro < b.bairro){
            return -1;
        }   else{
            return true;
        }
    })
 
    let infos = orden;
    
    infos.forEach(element => {
        let linha = criaLinha(element);
        tabela.appendChild(linha);  
    });

}

function main2(){
    
    let imoveis = fazGet("https://api.estagio.amfernandes.com.br/imoveis");
    let orden = JSON.parse(imoveis);
    let tabela = document.getElementById("tabela");

    
    
    orden.sort(function(a, b) {
        if(a.cidade < b.cidade ){
            return -1;
        }   else{
            return true;
        }
        
    })

    let infos = orden;
    
    infos.forEach(element => {
        let linha = criaLinha(element);
        tabela.appendChild(linha);  
    });
}


function main3(){
    
    let imoveis = fazGet("https://api.estagio.amfernandes.com.br/imoveis");
    let orden = JSON.parse(imoveis);
    let tabela = document.getElementById("tabela");

    
    
    orden.sort(function(a, b) {
        if(a.rua < b.rua ){
            return -1;
        }   else{
            return true;
        }
    })

    let infos = orden;
    
    infos.forEach(element => {
        let linha = criaLinha(element);
        tabela.appendChild(linha);  
    });

}

function main4(){
    
    let imoveis = fazGet("https://api.estagio.amfernandes.com.br/imoveis");
    let orden = JSON.parse(imoveis);
    let tabela = document.getElementById("tabela");

    
    
    orden.sort(function(a, b) {
        if(a.nome < b.nome ){
            return -1;
        }   else{
            return true;
        }
    })

    let infos = orden;
    
    infos.forEach(element => {
        let linha = criaLinha(element);
        tabela.appendChild(linha);  
    });

 

}

function main5(){
    
    let imoveis = fazGet("https://api.estagio.amfernandes.com.br/imoveis");
    let orden = JSON.parse(imoveis);
    let tabela = document.getElementById("tabela");

    
    
    orden.sort(function(a, b) {
        if(a.cep < b.cep ){
            return -1;
        }   else{
            return true;
        }
    })

    let infos = orden;
    
    infos.forEach(element => {
        let linha = criaLinha(element);
        tabela.appendChild(linha);  
    });

 

}

function main6(){
    
    let imoveis = fazGet("https://api.estagio.amfernandes.com.br/imoveis");
    let orden = JSON.parse(imoveis);
    let tabela = document.getElementById("tabela");

    
    
    orden.sort(function(a, b) {
        if(a.num < b.num){
            return -1;
        }   else{
            return true;
        }
    })

    let infos = orden;
    
    infos.forEach(element => {
        let linha = criaLinha(element);
        tabela.appendChild(linha);  
    });

 

}


    
