let $corpo = document.getElementById("corpo");


async function pegaNoticias() {
    const resposta = await fetch("http://localhost:3000/api/noticias");
    const n = await resposta.json();
    return n;
}


pegaNoticias().then( (res)=>{
    console.log(res);
    for( noticia of res ){
        $corpo.innerHTML += `<div class='noticia'>
                                <div class='titulo'>
                                    <h1>${noticia.title ?? noticia.titulo }</h1>
                                    <hr width='30%'>
                                </div>
                                <span>${noticia.intro}</span>
                                <p class='cat'>${noticia.type ?? noticia.categoria}</p>
                            </div>`
    } 
    
} );
