let soPodeLogarUmaVez = 0;
let body = document.querySelector("body");


function pegarDadosLogin(){
    todosA = document.querySelectorAll("a");

    let inputUsu = document.querySelector("#inputUsuario").value;
    let inputSen = document.querySelector("#inputSenha").value;
    let resultado = document.querySelector("#resultadoLogin");

    let achou = 0;

    for(let i = 0; i < Usuarios.length; i++){
        if(inputUsu === Usuarios[i].usuario && inputSen === Usuarios[i].senha){
            achou = 1;
            Usuarios[i].contaEscolhida = 1;
            
            localStorage.setItem("usuarioLogado", JSON.stringify(Usuarios[i])); // aqui joga no localStorage
            break;
        }
    }
    let usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));
            
    
    if(soPodeLogarUmaVez == 0){
        if(achou == 1){
            resultado.innerHTML = "Login efetuado";
            resultado.innerHTML += `<br>Ola! <span><b>${usuarioLogado.usuario}<b></span><br><a href="../TrabalhoInterfaceWeb/Pesquisa/Pesquisa.html" target="_blank">Ir para Pesquisas</a>`;
            soPodeLogarUmaVez = 1;
        } else {
            resultado.innerHTML = "Login nao efetuado";
            
        }
    }

}

function criarConta(){
    let inputUsu = document.querySelector("#inputUsuario").value;
    let inputSen = document.querySelector("#inputSenha").value;

    if(inputSen != "" && inputUsu != ""){    
        let novoUsuario = {"usuario": inputUsu, "senha": inputSen, "contaEscolhida": 0};
        Usuarios.push(novoUsuario);
    }

    for(let i = 0; i < Usuarios.length; i++){
        console.log(Usuarios[i].usuario+" "+Usuarios[i].senha+" "+Usuarios[i].contaEscolhida);
    }

}   


let mudarCor = document.querySelector("#mudarCor");
mudarCor.addEventListener("click", ()=>{
    body.classList.toggle("claro");
});

let logar = document.querySelector("#logar");
logar.addEventListener("click", pegarDadosLogin);

let criarCadastro = document.querySelector("#cadastrar");
criarCadastro.addEventListener("click", criarConta);


