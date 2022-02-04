let $select = document.getElementById("select_cat");

fetch("http://localhost:3000/api/cat")
    .then((res)=> {
      res.json().then(( categorias ) => {
        for(val of categorias){
            op = document.createElement("option");
            op.value = val;
            op.innerHTML = val;
            $select.appendChild(op);
        }
      })
    })
    .catch(function (res) { console.log(res) })

const submit    = document.querySelector("form"),
    titulo      = document.querySelector("#text_title"),
    text_noticia= document.querySelector("#text_texto"),
    msg         = document.querySelector(".msg");

submit.addEventListener("submit", (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/api/noticia",
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        type: 'cors',
        method: "POST",
        body: JSON.stringify({
                                titulo: titulo.value,
                                intro:  text_noticia.value,
                                categoria: $select.value
                                    
                            })
      })
      .then(function (res) {
        res.json().then(( { mensagem } ) => {
          show_log(mensagem, 2.5);
          console.log({
            titulo: titulo.value,
            intro:  text_noticia.value,
            categoria: $select.value
                
        })
          titulo.value = text_noticia.value = $select.value = "";
          
        })
      })
      .catch(function (res) { console.log(res) })
  }
  )

function show_log(log, tempoS) {
  
  msg.classList.toggle("inv")
  msg.textContent = log;

  setTimeout( ()=>{
    msg.classList.toggle("inv");
  }, tempoS*1000);
}