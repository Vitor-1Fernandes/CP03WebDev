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
var processadori7 = {
    id: 'processadori7',
    cat: 'Componente',
    disp: false
}
var placadevideo = {
    id: 'placadevideo',
    cat: 'Componente',
    disp: false
}
var precos = {
    inverte: true
}

const produtos = [mouse, teclado, display, fonte, arduino, ram, ssd, processador, processadori7, placadevideo, mousepad, gabinete,]


const btn = document.getElementById('btn');
const btnpreco = document.getElementById('btnpreco');

btn.addEventListener('click', function(event)
{
  event.preventDefault();
  const categoria = document.getElementById('categoria').value;
  const disponibilidade = document.getElementById('disponibilidade').checked;
  for (let i = 0; i < (produtos.length); i++)
    {
     document.getElementById(produtos[i].id).style.display = 'flex';
    }
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
    if (categoria == 'cat3'){
        for (let i = 0; i < (produtos.length); i++)
        {
         if (produtos[i].cat != 'Periférico'){
         document.getElementById(produtos[i].id).style.display = 'none';}
        }
    }
    let total = 0
    for (let i = 0; i < (produtos.length); i++)
    {
        if (document.getElementById(produtos[i].id).style.display == 'none'){
        total++}
    }
    console.log(total)
    if (total == (produtos.length)){
    document.getElementById(nenhumdisp.id).style.display = 'flex';}
});
btnpreco.addEventListener('click', function(event)
{ 
  event.preventDefault();

  if(precos.inverte == true){
  article.style.flexDirection = 'row';
  article.style.flexWrap = 'wrap';
  btnpreco.innerHTML = "Ordenar Preço: do Menor para o  Maior";
  precos.inverte = (!precos.inverte);}
  else{
  article.style.flexDirection = 'row-reverse';
  article.style.flexWrap = 'wrap-reverse';
  btnpreco.innerHTML = "Ordenar Preço: do Maior para o  Menor";
  precos.inverte = (!precos.inverte);}
  


})
