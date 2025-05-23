mouse = {
    id: 'mouse',
    cat: 'Periférico',
    disp: false
}
var teclado = {
    id: 'teclado',
    cat: 'Periférico',
    disp: false
}
var display = {
    id: 'display',
    cat: 'Componente',
    disp: true
}
var fonte = {
    id: 'fonte',
    cat: 'Componente',
    disp: true
}
var arduino = {
    id: 'arduino',
    cat: 'Componente',
    disp: true
}
var ram = {
    id: 'ram',
    cat: 'Componente',
    disp: true
}
var ssd = {
    id: 'ssd',
    cat: 'Componente',
    disp: true
}
var processador = {
    id: 'processador',
    cat: 'Componente',
    disp: false
}
var mousepad = {
    id: 'mousepad',
    cat: 'Acessório',
    disp: true
}
var gabinete = {
    id: 'gabinete',
    cat: 'Acessório',
    disp: false
}

const produtos = [mouse, teclado, display, fonte, arduino, ram, ssd, processador, mousepad, gabinete]


const btn = document.getElementById('btn');
const mousec = document.getElementById('mouse')

btn.addEventListener('click', function(event)
{
  event.preventDefault();
  const categoria = document.getElementById('categoria').value;
  const disponibilidade = document.getElementById('disponibilidade').checked;
  if (disponibilidade){
        for (let i = 0; i < (produtos.length); i++)
        {
         if (!produtos[i].disp){
         document.getElementById(produtos[i].id).style.display = 'none';}
        }
    }
    if (categoria == 'cat1'){
        for (let i = 0; i < (produtos.length); i++)
        {
         if (produtos[i].cat != 'Acessório'){
         document.getElementById(produtos[i].id).style.display = 'none';}
        }
    }
     if (categoria == 'cat2'){
        for (let i = 0; i < (produtos.length); i++)
        {
         if (produtos[i].cat != 'Componente'){
         document.getElementById(produtos[i].id).style.display = 'none';}
        }
    }
    if (categoria == 'cat3'){
        for (let i = 0; i < (produtos.length); i++)
        {
         if (produtos[i].cat != 'Periférico'){
         document.getElementById(produtos[i].id).style.display = 'none';}
        }
    }

});



