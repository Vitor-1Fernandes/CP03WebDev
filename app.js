const produtos = [
    { id: 'mouse', cat: 'Periférico', disp: false },
    { id: 'teclado', cat: 'Periférico', disp: false },
    { id: 'display', cat: 'Componente', disp: true },
    { id: 'fonte', cat: 'Componente', disp: true },
    { id: 'arduino', cat: 'Componente', disp: true },
    { id: 'ram', cat: 'Componente', disp: true },
    { id: 'ssd', cat: 'Componente', disp: true },
    { id: 'processador', cat: 'Componente', disp: false },
    { id: 'mousepad', cat: 'Acessório', disp: true },
    { id: 'gabinete', cat: 'Acessório', disp: false },
    { id: 'processadori7', cat: 'Componente', disp: false },
    { id: 'placadevideo', cat: 'Componente', disp: false }
];

const precos = {
    inverte: true
};

const apagarClick = document.getElementById('btnapagar');
const filtroClick = document.getElementById('btnfiltro');
const precoClick = document.getElementById('btnpreco');

apagarClick.addEventListener('click', function (event) {
    event.preventDefault();
    document.querySelector('form').reset();
    for (let i = 0; i < produtos.length; i++) {
        document.getElementById(produtos[i].id).style.display = 'flex';
    }
    document.getElementById('nenhumdisp').style.display = 'none'; 
});

filtroClick.addEventListener('click', function filtrar(event) {
    event.preventDefault();
    const categoria = document.getElementById('categoria').value;
    const disponibilidade = document.getElementById('disponibilidade').checked;

    for (let i = 0; i < produtos.length; i++) {
        document.getElementById(produtos[i].id).style.display = 'flex';
    }

    if (disponibilidade) {
        for (let i = 0; i < produtos.length; i++) {
            if (!produtos[i].disp) {
                document.getElementById(produtos[i].id).style.display = 'none';
            }
        }
    }

    if (categoria == 'cat1') {
        for (let i = 0; i < produtos.length; i++) {
            if (produtos[i].cat != 'Acessório') {
                document.getElementById(produtos[i].id).style.display = 'none';
            }
        }
    }

    if (categoria == 'cat2') {
        for (let i = 0; i < produtos.length; i++) {
            if (produtos[i].cat != 'Componente') {
                document.getElementById(produtos[i].id).style.display = 'none';
            }
        }
    }

    if (categoria == 'cat3') {
        for (let i = 0; i < produtos.length; i++) {
            if (produtos[i].cat != 'Periférico') {
                document.getElementById(produtos[i].id).style.display = 'none';
            }
        }
    }

    let total = 0;
    for (let i = 0; i < produtos.length; i++) {
        if (document.getElementById(produtos[i].id).style.display == 'none') {
            total++;
        }
    }

    if (total == produtos.length) {
        document.getElementById('nenhumdisp').style.display = 'flex'; 
    } else {
        document.getElementById('nenhumdisp').style.display = 'none'; 
    }
});

precoClick.addEventListener('click', function (event) {
    event.preventDefault();

    const article = document.getElementById('article');
    const btnpreco = document.getElementById('btnpreco');

    if (precos.inverte === true) {
        article.style.flexDirection = 'row';
        article.style.flexWrap = 'wrap';
        btnpreco.innerHTML = "Ordenar Preço: do Menor para o  Maior";
        precos.inverte = false;
    } else {
        article.style.flexDirection = 'row-reverse';
        article.style.flexWrap = 'wrap-reverse';
        btnpreco.innerHTML = "Ordenar Preço: do Maior para o  Menor";
        precos.inverte = true;
    }
});
