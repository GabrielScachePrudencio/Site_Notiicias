let body = document.querySelector("body");

let usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));
if (usuarioLogado) {
    console.log("Usuário logado:", usuarioLogado.usuario);
} else {
    console.log("Nenhum usuário logado.");
}

let colocarUsuario = document.querySelector("#nomeUSuarioLogado");
colocarUsuario.innerHTML = usuarioLogado.usuario;

async function exibirTodas(){
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=67a14065d07d4179b60837b4a94ff78b`;
    let response = await fetch(url);

    if(response.ok){
        let data = await response.json();
        for(let i = 0; i < 10; i++){
            let artigo = data['articles'][i];

            let criateDivPai = document.querySelector(".todasNoticias");
            let criateh1Filho = document.createElement("h1");
            let criateh3Filho = document.createElement("h3");
            
            let img = document.createElement("img");

            img.src = artigo['urlToImage'];
             
            
            criateh1Filho.innerHTML = artigo['title'];   // Acessando o título do artigo
            criateh3Filho.innerHTML = artigo['description'];   // Acessando a descrição do artigo

            img.style.marginBottom = "5%";

            criateDivPai.appendChild(criateh1Filho);
            criateDivPai.appendChild(criateh3Filho);
            criateDivPai.appendChild(img);

        }
    }
    if (!response.ok) {
        console.error('Erro ao buscar as notícias na função exibir');
    }
    
}

let mudarCor = document.querySelector("#mudarCor");
mudarCor.addEventListener("click", ()=>{
    body.classList.toggle("claro");
});
exibirTodas();