const cabecera = document.getElementById('cabecera');
const titulo = document.createElement('h1');
titulo.textContent = 'Learning DOM';
cabecera?.append(titulo);

const personas: string[] = ['María'];

const lista = document.getElementById('listas');

for (let i = 0; i < personas.length; i++) {
  const li = document.createElement('li');
  li.textContent = personas[i];
  lista?.append(li);
}
