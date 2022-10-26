"use strict";
const cabecera = document.getElementById('cabecera');
const titulo = document.createElement('h1');
titulo.textContent = 'Learning DOM';
cabecera === null || cabecera === void 0 ? void 0 : cabecera.append(titulo);
const personas = ['María'];
const lista = document.getElementById('listas');
for (let i = 0; i < personas.length; i++) {
    const li = document.createElement('li');
    li.textContent = personas[i];
    lista === null || lista === void 0 ? void 0 : lista.append(li);
}
