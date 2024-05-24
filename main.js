const fundo1 = document.getElementsByTagName('div')[1];
const fundo2 = document.getElementsByTagName('div')[2];
const fundo3 = document.getElementsByTagName('div')[3];
const fundo4 = document.getElementsByTagName('div')[4];

const l1 = document.getElementsByTagName('li')[0];
const l2 = document.getElementsByTagName('li')[1];
const l3 = document.getElementsByTagName('li')[2];
const l4 = document.getElementsByTagName('li')[3];

fundo1.addEventListener('mouseenter', li1_fundo_entrar);
fundo1.addEventListener('mouseout', li1_fundo_sair);
l1.addEventListener('mouseenter', li1_fundo_entrar);
l1.addEventListener('mouseout', li1_fundo_sair);
fundo2.addEventListener('mouseenter', li2_fundo_entrar);
fundo2.addEventListener('mouseout', li2_fundo_sair);
l2.addEventListener('mouseenter', li2_fundo_entrar);
l2.addEventListener('mouseout', li2_fundo_sair);
fundo3.addEventListener('mouseenter', li3_fundo_entrar);
fundo3.addEventListener('mouseout', li3_fundo_sair);
l3.addEventListener('mouseenter', li3_fundo_entrar);
l3.addEventListener('mouseout', li3_fundo_sair);
fundo4.addEventListener('mouseenter', li4_fundo_entrar);
fundo4.addEventListener('mouseout', li4_fundo_sair);
l4.addEventListener('mouseenter', li4_fundo_entrar);
l4.addEventListener('mouseout', li4_fundo_sair);

function li1_fundo_entrar() {
    fundo1.style.background = "#a0a0a0";
    fundo1.style.borderRadius = '20px';
    fundo1.style.transition = '0.5s all ease';
}

function li1_fundo_sair() {
    fundo1.style.background = "";
    fundo1.style.borderRadius = '';
    fundo1.style.transition = '0.5s all ease';
}

function li2_fundo_entrar() {
    fundo2.style.background = "#a0a0a0";
    fundo2.style.borderRadius = '20px';
    fundo2.style.transition = '0.5s all ease';
}

function li2_fundo_sair() {
    fundo2.style.background = "";
    fundo2.style.borderRadius = '';
    fundo2.style.transition = '0.5s all ease';
}

function li3_fundo_entrar() {
    fundo3.style.background = "#a0a0a0";
    fundo3.style.borderRadius = '20px';
    fundo3.style.transition = '0.5s all ease';
}

function li3_fundo_sair() {
    fundo3.style.background = "";
    fundo3.style.borderRadius = '';
    fundo3.style.transition = '0.5s all ease';
}

function li4_fundo_entrar() {
    fundo4.style.background = "#a0a0a0";
    fundo4.style.borderRadius = '20px';
    fundo4.style.transition = '0.5s all ease';
}

function li4_fundo_sair() {
    fundo4.style.background = "";
    fundo4.style.borderRadius = '';
    fundo4.style.transition = '0.5s all ease';
}