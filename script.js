const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "O Bradesco Seguros, é uma seguradora pertencente a Organização Bradesco. Foi criado em 1983 a partir da aquisição, pelo banco Bradesco, da companhia Atlântica Boavista de Seguros. Responda estas perguntas e veja o seu nível de conhecimento sobre esta empresa, qual é a cidade onde a sede foi transferida sua sede em 1953?",
        alternativas: [
            {
                texto: "Bradesco transfere sua sede para a Cidade de Deus, em Osasco (SP).",
                afirmacao: "1° Certa.",
            },
            {
                texto: "Bradesco transfere sua sede para a São Domingos, em curitiba (PR).",
                afirmacao: "1° errdada.",
            }
        ]
    },
    {
        enunciado: "Qual é o nome da premiação ganhada?",
        alternativas: [
            {
                texto: "2019 – Prêmio The Winner Words.",
                afirmacao: "2° certa.",
            },
            {
                texto: "2019 – Prêmio The Summer Words.",
                afirmacao: "2° errada.",
            }
        ]
    },
    {
        enunciado: "Verdadeiro ou Falso?: Bradesco e Bradesco Seguros tornam-se patrocinadores oficiais dos Jogos Olímpicos e Paralímpicos Rio 2016",
        alternativas: [
            {
                texto: "Falso",
                afirmacao: "3° errada."
            },
            {
                texto: "Verdadeiro",
                afirmacao: "3° certa."
            }
        ]
    },
    {
        enunciado: "Verdadeiro ou Falso?: Ivan Gontijo assume a Presidência do Grupo Bradesco Seguros.",
        alternativas: [
            {
                texto: "Falso",
                afirmacao: "4° certa."
            },
            {
                texto: "Verdadeiro",
                afirmacao: "4° errada."
            }
        ]
    },
    {
        enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda da IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz? ",
        alternativas: [
            {
                texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
                afirmacao: "Infelizmente passou a utilizar a IA para fazer todas suas tarefas e agora se sente dependente da IA para tudo."
            },
            {
                texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
                afirmacao: "Percebeu que toda IA reproduz orientações baseadas na empresa que programou e muito do que o chat escrevia não refletia o que pensava e por isso sabe que os textos gerados pela IA devem servir como auxílio e não resultado final. "
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
