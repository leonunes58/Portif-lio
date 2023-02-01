const btnPergunta1 = document.querySelector('.btn-ativar1');
const btnPergunta2 = document.querySelector('.btn-ativar2');
const btnPergunta3 = document.querySelector('.btn-ativar3');
const btnPergunta4 = document.querySelector('.btn-ativar4');
const btnPergunta5 = document.querySelector('.btn-ativar5');
const btnPergunta6 = document.querySelector('.btn-ativar6');
const btnPergunta7 = document.querySelector('.btn-ativar7');
const resposta1 = document.querySelector('.resposta1');
const resposta2 = document.querySelector('.resposta2');
const resposta3 = document.querySelector('.resposta3');
const resposta4 = document.querySelector('.resposta4');
const resposta5 = document.querySelector('.resposta5');
const resposta6 = document.querySelector('.resposta6');
const resposta7 = document.querySelector('.resposta7');

btnPergunta1.addEventListener('click', () => {
    if(resposta1.classList.contains('resposta1-desativada')) {
        resposta1.classList.toggle('resposta1-desativada');
        btnPergunta1.classList.toggle('animacao-button-ativar');
    } else {
        btnPergunta1.classList.remove('animacao-button-ativar');
        resposta1.classList.add('resposta1-desativada');
    }
}) 

btnPergunta2.addEventListener('click', () => {
    if(resposta2.classList.contains('resposta2-desativada')) {
        resposta2.classList.toggle('resposta2-desativada');
        btnPergunta2.classList.toggle('animacao-button-ativar');
        resposta1.classList.add('resposta1-desativada');
        btnPergunta1.classList.remove('animacao-button-ativar');
    } else {
        btnPergunta2.classList.remove('animacao-button-ativar');
        resposta2.classList.add('resposta2-desativada');
    }
}) 

btnPergunta3.addEventListener('click', () => {
    if(resposta3.classList.contains('resposta3-desativada')) {
        resposta3.classList.toggle('resposta3-desativada');
        btnPergunta3.classList.toggle('animacao-button-ativar');
        btnPergunta2.classList.remove('animacao-button-ativar');
        resposta2.classList.add('resposta2-desativada');
    } else {
        btnPergunta3.classList.remove('animacao-button-ativar');
        resposta3.classList.add('resposta3-desativada');
    }
}) 

btnPergunta4.addEventListener('click', () => {
    if(resposta4.classList.contains('resposta4-desativada')) {
        resposta4.classList.toggle('resposta4-desativada');
        btnPergunta4.classList.toggle('animacao-button-ativar');
        btnPergunta3.classList.remove('animacao-button-ativar');
        resposta3.classList.add('resposta3-desativada');
    } else {
        btnPergunta4.classList.remove('animacao-button-ativar');
        resposta4.classList.add('resposta4-desativada');
    }
}) 

btnPergunta5.addEventListener('click', () => {
    if(resposta5.classList.contains('resposta5-desativada')) {
        resposta5.classList.toggle('resposta5-desativada');
        btnPergunta5.classList.toggle('animacao-button-ativar');
        btnPergunta4.classList.remove('animacao-button-ativar');
        resposta4.classList.add('resposta4-desativada');
    } else {
        btnPergunta5.classList.remove('animacao-button-ativar');
        resposta5.classList.add('resposta5-desativada');
    }
}) 

btnPergunta6.addEventListener('click', () => {
    if(resposta6.classList.contains('resposta6-desativada')) {
        resposta6.classList.toggle('resposta6-desativada');
        btnPergunta6.classList.toggle('animacao-button-ativar');
        btnPergunta5.classList.remove('animacao-button-ativar');
        resposta5.classList.add('resposta5-desativada');
    } else {
        btnPergunta6.classList.remove('animacao-button-ativar');
        resposta6.classList.add('resposta6-desativada');
    }
}) 

btnPergunta7.addEventListener('click', () => {
    if(resposta7.classList.contains('resposta7-desativada')) {
        resposta7.classList.toggle('resposta7-desativada');
        btnPergunta7.classList.toggle('animacao-button-ativar');
        btnPergunta6.classList.remove('animacao-button-ativar');
        resposta6.classList.add('resposta6-desativada');
    } else {
        btnPergunta7.classList.remove('animacao-button-ativar');
        resposta7.classList.add('resposta7-desativada');
    }
}) 