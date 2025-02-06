let body = document.querySelector("body");



let usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));
if (usuarioLogado != null) {
    console.log("Usuário logado:", usuarioLogado.usuario);
} else {
    console.log("Nenhum usuário logado.");
}

let colocarUsuario = document.querySelector("#nomeUSuarioLogado");
colocarUsuario.innerHTML = usuarioLogado.usuario;


async function pesquisar(){

    let criateDivPai = document.querySelector(".noticiasBuscadas");
    criateDivPai.innerHTML = "";

    let textInputRegiao = document.querySelector("#inputBusca").value;
    const url = `https://newsapi.org/v2/top-headlines?country=${textInputRegiao}&apiKey=67a14065d07d4179b60837b4a94ff78b`;
    
    let response = await fetch(url);
    
    if(response.ok){
        let data = await response.json();
        let regiao = document.querySelector("#regiaoBuscada");
    
        

        let numeroInteiroAleatorio = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
        let artigo = data['articles'][numeroInteiroAleatorio];

        if(data['articles'].length == 0){
            regiao.innerHTML = "nao ha noticias nesta regiao";
        } else {
            let criateh1Filho = document.createElement("h1");
            let criateh3Filho = document.createElement("h3");
            let img = document.createElement("img");

            img.src = artigo['urlToImage'];
             



            criateh1Filho.innerHTML = artigo['title'];   
            criateh3Filho.innerHTML = artigo['description'];   
            
            criateDivPai.appendChild(criateh1Filho);
            criateDivPai.appendChild(criateh3Filho);
            criateDivPai.appendChild(img);

            regiao.innerHTML = textInputRegiao;
        }
    

    }

    if (!response.ok) {
        console.error('Erro ao buscar as noticias na função pesquisar');
    }
    
}

function buscar(){
    let btn = document.querySelector("#buscar");
    btn.addEventListener("click", function(){
        pesquisar();
    })  
}

let mudarCor = document.querySelector("#mudarCor");
mudarCor.addEventListener("click", ()=>{
    body.classList.toggle("claro");
});

buscar();
