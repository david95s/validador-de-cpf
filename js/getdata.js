import createHtml from "./create-html.js";

export default function getData(numberId){
    const myUrl = "charactersapi.json"

    const main = document.querySelector(".main-modal");


    if(main){
        function criarHtml(retu){
            main.innerHTML = ""
            const div = createHtml(retu[0]);
            const thebtn = document.querySelector(".btn-inside-modal");
            main.insertBefore(div, thebtn);

        }
        
        async function testando(numberTo27){
            const data = await fetch(myUrl);
            const json = await data.json();
        
            
            const retu = json.filter(item=> item.id === numberTo27);
            
            criarHtml(retu)
        
        }
        
        testando(numberId);
    }
  
}



