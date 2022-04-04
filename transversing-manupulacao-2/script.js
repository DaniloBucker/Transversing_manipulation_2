/* const h1 = document.querySelector('h1');
//const animaisLista = document.querySelector('.animais-lista')
//console.log(h1.innerHTML)
//console.log(h1.outerHTML)

//h1.outerHTML = '<p>Novo Título</p>';

//console.log(animaisLista.innerHTML);

const lista = document.querySelector('.animais-lista');
//console.log(lista.parentElement);
//console.log(lista.nextElementSibling);
//console.log(lista.previousElementSibling)
///console.log(lista.children [--lista.children.length])
//console.log(lista.querySelectorAll('li')) //todas as li's
///console.log(lista.querySelector('li:last-child')) //último filho
//console.log(lista.childNodes);
///console.log(lista.previousSibling)
//console.log(lista.firstChild); // primeiro node child
//console.log(lista.childNodes); // todos os node child

const animais = document.querySelector('.animais');

const novoH1 = document.createElement('h1');
//console.log(novoH1);
novoH1.innerText = 'Novo Título';

novoH1.classList.add('titulo');


animais.appendChild(novoH1);
const contato = document.querySelector('.contato');
const titulo = contato.querySelector('.titulo');

const mapa = document.querySelector('.mapa');

mapa.appendChild(novoH1)

//contato.appendChild(lista);
//contato.insertBefore(animais, titulo)
//contato.removeChild(titulo)
contato.replaceChild(lista, titulo)
//contato.replaceChild(mapa, titulo);

//contato.insertBefore(animais, mapa); */

/* const h1 = document.querySelector('h1')
//const titulo2 = document.querySelector('h1')

// titulo, titulo2 e h1 são iguais
const faq = document.querySelector('.faq')

const cloneH1 = h1.cloneNode(true)
cloneH1.classList.add('azul')
faq.appendChild(cloneH1);
//contato.appendChild(cloneTitulo); */

// Duplique o menu e adicione-o em copy
const menu = document.querySelector('.menu')
const copy = document.querySelector('.copy')
const cloneMenu = menu.cloneNode(true)
copy.appendChild(cloneMenu);

// Selecione o primeiro DT da dl de Faq
const faq = document.querySelector('.faq')
const primeiroDt = faq.querySelector('dt')

// Selecione o DD referente ao primeiro DT
const proximoDD = primeiroDt.nextElementSibling;
console.log(proximoDD)
// Substitua o conteudo html de .faq prki de .animais
const animais = document.querySelector('.animais');
faq.innerHTML = animais.innerHTML
//faq.innerHTML = ''