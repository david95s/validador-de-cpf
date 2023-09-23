export default function createHtml(objtDAte){
    const {id, nome, idade, musica, sonho, estudos} = objtDAte;

    const modal = document.querySelector(".dad");
    const theDiv = document.createElement("div");
    
    const button =  document.createElement("button");

    button.classList.add("glow-on-hover", "btn-inside-modal");
    button.innerText = "Tentar outro CPF";

    

    button.addEventListener("click", (e)=>{
        e.preventDefault();
        modal.classList.remove("ativo");
    })

    theDiv.innerHTML = `
    <img src="img/image${id}.jpg" alt="" class="img">
    <section class="dados">

        <div class="first">
        <p class="icon">
            <i class="fa far fa-user"></i>
        </p>
        <p>
            <span class="title">Nome</span>
            <br>
            <span>${nome}</span>
        </p>
        </div>

        <div>
        <p class="icon" >
            <i class="fa fas fa-birthday-cake"></i>
        </p>
        <p>
            <span class="title">Idade:</span>
            <br>
            <span>${idade}</span>
        </p>
        </div>

        <div>
        <p class="icon">
            <i class="fa fas fa-music"></i>
        </p>
        <p>
            <span class="title">Musica:</span>
            <br>
            <span>${musica}</span>
        </p>
        </div>

        <div>
        <p class="icon">
            <i class="fa fas fa-rocket"></i>
        </p>
        <p>
            <span class="title">Sonho:</span>
            <br>
            <span>${sonho}</span>
        </p>

        </div>
        <div>
        <p class="icon">
            <i class="fa fas fa-book"></i>
        </p>
        <p>
            <span class="title">Formação:</span>
            <br>
            <span>${estudos}</span>
        </p>
        </div>
    </section>
    `;

    theDiv.appendChild(button);

    return theDiv;

}