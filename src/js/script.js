let livro = document.getElementById("livro");

livro.addEventListener('click', function(){
    letWindow = window.open( 'https://www.amazon.com.br/Harry-Potter-Pedra-Filosofal-Rowling/dp/8532530788/ref=sr_1_2?crid=2PGRGG2KF3OY0&keywords=harry+potter&qid=1648671166&sprefix=harry+potter%2Caps%2C731&sr=8-2' );
})

let div_filme = document.getElementById("div_filme");
let filme = document.getElementById("filme");
let icone_fechar = document.getElementById("icone_fechar");

filme.addEventListener('click', function(){
    div_filme.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/9fIObnIGMlI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    setTimeout(() => {  icone_fechar.innerHTML ='<img src="src/image/fechar.png"/>'; }, 2000);
    
})

icone_fechar.addEventListener('click', function(){
    div_filme.parentNode.removeChild(div_filme)
    icone_fechar.parentNode.removeChild(icone_fechar)
})


