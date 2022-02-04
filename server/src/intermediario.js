function verifica_noticias(req, res, next) {
    const { titulo, intro , categoria } = req.body;

    switch( req.method){
        case 'POST':
            if( req.originalUrl == '/api/cat' && !categoria){
                return res.status(400).send({mensagem: "o parametro categoria é obrigatorio"});
            }
            else if( req.originalUrl == '/api/noticia' && ( !titulo || !categoria || !intro )){
                return res.status(400).send( {mensagem: "os parametros { titulo, categoria, intro } são obrigatorios"});
            }
    }
    
    next();
}

module.exports = verifica_noticias;