const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}
const estatisticas = document.querySelectorAll("[data-estatistica]")
const ajuste = document.querySelectorAll("[data-controle]");

function manipulaDados(operacao, controle){
    const peca = controle.querySelector("[data-contador]");

    if(operacao === '-'){
        peca.value = parseInt(peca.value) - 1;
    }else if(operacao === '+'){
        peca.value = parseInt(peca.value) + 1;
    }
}

function atualizaEstatisticas(peca, operacao){
    estatisticas.forEach((elemento) =>{
        if(operacao === "+"){
            elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
        }else if(operacao === "-"){
            elemento.textContent = parseInt(elemento.textContent) - pecas[peca][elemento.dataset.estatistica]
        }
    });
}

ajuste.forEach((elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
        atualizaEstatisticas(evento.target.dataset.peca, evento.target.dataset.controle);
    });
});

let botao = document.querySelector("[data-botao]");
let dropdown = document.querySelector("[data-lista]");

botao.addEventListener("click", () => {
    if(dropdown.style.display === "grid"){
        dropdown.style.display = "none";
    }else{
        dropdown.style.display = "grid";
    }
});

function mudaCor(cor){
    let imagem = document.querySelector(".robo");
    imagem.setAttribute("src", `img/Robotron 2000 - ${cor}/Robotron 2000 - ${cor}.png`);
}

const cores = document.querySelectorAll("[data-cor]");

cores.forEach((elemento) => {
    let cor = elemento.dataset.cor;
    elemento.addEventListener("click", () =>{
        let imagem = document.querySelector(".robo");
        imagem.setAttribute("src", `img/Robotron 2000 - ${cor}/Robotron 2000 - ${cor}.png`);
    });
});
