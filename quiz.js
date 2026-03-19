// Array que guarda todas as perguntas do quiz
const perguntas = [

{
// texto da pergunta
pergunta: "Qual é a capital de Roraima?",

// lista com as opções de resposta
opcoes: ["Boa Vista","Macapá","São Bento"],

// índice da resposta correta
// 0 significa a primeira opção do array
correta: 0
},

{
pergunta: "Qual é a capital do Acre?",
opcoes: ["Manaus","Rio Branco","Belém"],
correta: 1
},

{
    pergunta: "Qual é a capital do Sergipe?",
    opcoes: ["Porto de Galinhas", "Aracajé", "Aracaju"],
    correta: 2
},

{
pergunta: "Qual é a capital de Belize?",
opcoes: ["Belize City","Belmopan","San Ignacio"],
correta: 1
},

{
pergunta: "Qual é a capital de Montana (EUA)?",
opcoes: ["Billings","Helena","Bozeman"],
correta: 1
},

{
pergunta: "Qual é a capital da Namíbia?",
opcoes: ["Windhoek","Walvis Bay","Swakopmund"],
correta: 0
},

{
pergunta: "Qual é a capital de Vermont (EUA)?",
opcoes: ["Montpelier","Burlington","Rutland"],
correta: 0
},

{
pergunta: "Qual é a capital do Laos?",
opcoes: ["Luang Prabang","Vientiane","Savannakhet"],
correta: 1
},

{
pergunta: "Qual é a capital de Wyoming (EUA)?",
opcoes: ["Cheyenne","Casper","Laramie"],
correta: 0
},

{
pergunta: "Qual é a capital de Brunei?",
opcoes: ["Bandar Seri Begawan","Kuala Belait","Tutong"],
correta: 0
},

{
pergunta: "Qual é a capital de Dakota do Sul (EUA)?",
opcoes: ["Sioux Falls","Pierre","Rapid City"],
correta: 1
},

{
pergunta: "Qual é a capital de Montenegro?",
opcoes: ["Budva","Podgorica","Kotor"],
correta: 1
},

{
pergunta: "Qual é a capital do Alasca (EUA)?",
opcoes: ["Anchorage","Juneau","Fairbanks"],
correta: 1
},

{
pergunta: "Qual é a capital de Madagascar?",
opcoes: ["Toamasina","Antananarivo","Mahajanga"],
correta: 1
},

{
pergunta: "Qual é a capital do Novo México (EUA)?",
opcoes: ["Santa Fe","Albuquerque","Roswell"],
correta: 0
},

{
pergunta: "Qual é a capital do Suriname?",
opcoes: ["Paramaribo","Nieuw Nickerie","Lelydorp"],
correta: 0
},

{
pergunta: "Qual é a capital de Idaho (EUA)?",
opcoes: ["Boise","Idaho Falls","Twin Falls"],
correta: 0
},

{
pergunta: "Qual é a capital de Timor-Leste?",
opcoes: ["Baucau","Dili","Maliana"],
correta: 1
},

{
pergunta: "Qual é a capital de Nebraska (EUA)?",
opcoes: ["Omaha","Lincoln","Grand Island"],
correta: 1
},

{
pergunta: "Qual é a capital de Burkina Faso?",
opcoes: ["Bobo-Dioulasso","Ouagadougou","Koudougou"],
correta: 1
},
]

// variável que guarda qual pergunta estamos mostrando
let atual = 0;


// função que coloca a pergunta na tela
function mostrarPergunta(){

// pega o elemento do HTML que tem id "pergunta"
// e escreve o texto da pergunta atual
document.getElementById("pergunta").innerText = perguntas[atual].pergunta;


// coloca as opções nos botões

document.getElementById("op1").innerText = perguntas[atual].opcoes[0];

document.getElementById("op2").innerText = perguntas[atual].opcoes[1];

document.getElementById("op3").innerText = perguntas[atual].opcoes[2];

}


// função chamada quando o usuário clica em um botão
function responder(opcao){

// verifica se a opção clicada é a correta
if(opcao == perguntas[atual].correta){

// escreve mensagem de acerto
document.getElementById("resultado").innerText = "Certa resposta!";

}else{

// escreve mensagem de erro
document.getElementById("resultado").innerText = "Resposta incorreta!";

}


// passa pra próxima pergunta
atual++;


// verifica se ainda existem perguntas no array
if(atual < perguntas.length){

// mostra a próxima pergunta
mostrarPergunta();

}else{

// se não tiver mais perguntas, termina o quiz
document.getElementById("pergunta").innerText = "Quiz finalizado!";

}

}


// chama a função quando a página abre
// isso faz a primeira pergunta aparecer
mostrarPergunta();