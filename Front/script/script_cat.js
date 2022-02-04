const submit  = document.querySelector("form"),
      cate    = document.querySelector("#text_cat"),
      msg     = document.querySelector(".msg");

function show_log(log, tempoS) {
  
  msg.classList.toggle("inv")
  msg.textContent = log;

  setTimeout( ()=>{
    msg.classList.toggle("inv");
  }, tempoS*1000);
}

submit.addEventListener("submit", () => {

  fetch("http://localhost:3000/api/cat",
    {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      type: 'cors',
      method: "POST",
      body: JSON.stringify({ categoria: cate.value })
    })
    .then(function (res) {
      res.json().then(( { mensagem } ) => {
        show_log(mensagem, 2.5);
        cate.value = "";
      })
    })
    .catch(function (res) { console.log(res) })
}
)

