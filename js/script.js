import ValidarCpf from './validar-cpf.js';

const cpf = document.querySelector('#cpf');
const btn = document.querySelector(".to-get");


console.log("Meu dados FORAM ACESSADOS")
const validarCpf = new ValidarCpf(btn, "click").iniciar();
