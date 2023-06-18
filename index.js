var botontransmitir = document.getElementById('transmitir')
var tablaResultados = document.getElementById('TablaResultados')

botontransmitir.addEventListener('click',function(){
    tablaResultados.innerHTML=""
    var autor= document.getElementById('nombre-autor')
    var usoautor=autor.value
    //alert(usoautor)
    fetch('https://openlibrary.org/search/authors.json?q='+usoautor)
    .then(res=>res.json())
    .then(resJson=>{
        var documentos = resJson['docs']
        for(let i =0; i<documentos.length;i++){
            var obra = documentos[i]
            tablaResultados.innerHTML += "<tr>"+
                                                "<th scope =\"row\">"+i+"</td>"+
                                                "<td>"+obra['key']+"</td>"+
                                                "<td>"+obra['type']+"</td>"+
                                                "<td>"+obra['name']+"</td>"+
                                                "<td>"+obra['_version_']+"</td>"+
                                            "</tr>"
        }
    })
})