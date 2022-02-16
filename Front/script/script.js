const  $corpo = document.getElementById("corpo"),
        input = document.querySelector("input");

input.addEventListener("change", (e)=>{
    pegaNoticias(input.value);
});

async function pegaNoticias(search="") {
    const resposta = await fetch("http://localhost:3000/api/noticias?search="+search);
    const noticias = await resposta.json();
    
    $corpo.innerHTML= "";
    for( noticia of noticias ){
        $corpo.innerHTML += `<div class='noticia' >
                                <div class='titulo'>
                                    <h1>${noticia.title ?? noticia.titulo }</h1>
                                    <hr width='30%'>
                                </div>
                                <span>${noticia.intro}</span>
                                <p class='cat'>${noticia.type ?? noticia.categoria}</p>
                                <div class='close' id='${ noticia.id }'>X</div>
                            </div>`
    } 
    const close = document.querySelectorAll(".close");
    close.forEach((x)=>{
        x.addEventListener("click", async (e)=>{
            const resposta = await fetch("http://localhost:3000/api/noticia/"+x.id, 
                                        {
                                            method: 'DELETE',
                                        }
                                        );
        
            const noticias = await resposta.json();
            console.log(resposta,noticias);
            pegaNoticias();
        });
    })
    
    
} 

window.onload = ()=>{
    pegaNoticias();
}


