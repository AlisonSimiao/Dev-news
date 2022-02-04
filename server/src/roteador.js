const   express = require("express"),
        cors    = require("cors");

const verifica_noticias = require("./intermediario");
const { noticias, categorias, categoriaPost, noticiaPost } = require("./controladores/controller");


const rotas = express();
rotas.use( express.json() )
rotas.use( cors() );
rotas.use( verifica_noticias);

rotas.get("/api/noticias",noticias);
rotas.get("/api/cat",categorias);

// POST
rotas.post("/api/cat",categoriaPost);
rotas.post("/api/noticia",noticiaPost);

module.exports = rotas;