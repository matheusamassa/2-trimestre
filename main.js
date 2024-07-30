
const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você tem a oportunidade de conhecer qualquer pessoa, viva ou morta. Quem você escolhe?",
        alternativas: [
            {
                texto: "Uma figura histórica famosa.",
                afirmacao: "Você tem um interesse profundo pela história e pelas pessoas que moldaram o mundo."
            },
            {
                texto: "Um parente ou amigo querido que já faleceu.",
                afirmacao: "Você valoriza suas relações pessoais e gostaria de ter mais um momento com alguém especial."
            }
        ]
    },
    {
        enunciado: "Você ganha um ingresso para qualquer evento no mundo. Qual você escolhe?",
        alternativas: [
            {
                texto: "Um grande festival de música.",
                afirmacao: "Você ama música e quer vivenciar a energia de um grande festival ao vivo."
            },
            {
                texto: "Uma importante conferência de tecnologia.",
                afirmacao: "Você é apaixonado por tecnologia e quer estar na vanguarda das novas inovações."
            }
        ]
    },
    {
        enunciado: "Você encontra uma lâmpada mágica que concede um poder. Qual você escolhe?",
        alternativas: [
            {
                texto: "A habilidade de curar qualquer doença.",
                afirmacao: "Você quer ajudar as pessoas e fazer do mundo um lugar mais saudável."
            },
            {
                texto: "A habilidade de controlar o clima.",
                afirmacao: "Você quer proteger o meio ambiente e garantir um futuro sustentável para o planeta."
            }
        ]
    },
    {
        enunciado: "Você pode escolher um novo talento para dominar. Qual você escolhe?",
        alternativas: [
            {
                texto: "Ser um mestre na culinária.",
                afirmacao: "Você adora criar e experimentar novas receitas na cozinha."
            },
            {
                texto: "Ser um escritor talentoso.",
                afirmacao: "Você tem uma paixão por contar histórias e quer cativar as pessoas com suas palavras."
            }
        ]
    },
    {
        enunciado: "Você pode viver um dia como qualquer animal. Qual você escolhe?",
        alternativas: [
            {
                texto: "Uma águia, para voar pelos céus.",
                afirmacao: "Você é fascinado pela liberdade de voar e quer ver o mundo de cima."
            },
            {
                texto: "Um golfinho, para explorar o oceano.",
                afirmacao: "Você ama o mar e quer nadar livremente nas profundezas do oceano."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
