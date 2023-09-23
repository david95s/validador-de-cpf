import $outSideGetData from './getdata.js';




export default class ValidarCpf {
  constructor(element, evento) {
    this.element = element;
    this.evento = evento;
    this.inpput = document.querySelector("input");

  }

  limpar(cpf){
    return cpf.replace(/\D/g, '');
  }

  construir(cpf){
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "$1.$2.$3-$4")
  }

  formatar(cpf){
    const cpfLimpo = this.limpar(cpf);
    const cpfBuilded = this.construir(cpfLimpo);
    return cpfBuilded;
  }

  validar(cpf){
    const matchCpf = cpf.match(/(?:\d{3}[-.\s]?){3}\d{2}/g);
    // Index 0, pq se eu digitar dois cpfs validos
    // retornar um array com 2 cpfs, mas sempre valido o primeiro;
      return (matchCpf && matchCpf[0] === cpf);
  }


  initZoeiraCpf(dados){
    const myModal = document.querySelector(".dad");


    if(myModal){
      const charFirst =  + dados[0];
      const charSecond =  + dados[1];
      const charthird =  + dados[2];
      const total = charFirst + charSecond + charthird;
      myModal.classList.add("ativo")

      $outSideGetData(total);
    }


  }

  validarNaMudanca(cpfElement){
    if(this.validar(cpfElement.value)){
      cpfElement.value = this.formatar(cpfElement.value);
      cpfElement.classList.remove('erro');
      cpfElement.classList.add('valido');
      cpfElement.nextElementSibling.classList.remove("ativar");
      this.initZoeiraCpf(cpfElement.value);
    }else{
      cpfElement.classList.add('erro');
      cpfElement.classList.remove('valido');
      cpfElement.nextElementSibling.classList.add("ativar");
    }
  }


  adicionarErroSpan() {
    const erroElement = document.createElement('span');
    erroElement.classList.add('erro-text');
    erroElement.innerText = 'CPF Inválido';


    this.inpput.parentElement.insertBefore(erroElement, this.inpput.nextElementSibling)
    // this.element.parentElement.appendChild(erroElement);  
  }

  adicionarEvento() {
    this.element.addEventListener(this.evento, (e) => {
      e.preventDefault();
      this.validarNaMudanca(this.inpput);
    });
  }

  
  iniciar(){
    this.adicionarEvento();
    this.adicionarErroSpan();

    return this;
  }

}
