function LeerArchivoPalabras(){
    fetch("words.json")
    .then(function(resp){
        //Transformamos de texto plano a formato JSON
        return resp.json()
    })
    .then(function(respJSON){
        //console.log(respJSON)
        players = respJSON
    })
    .catch(function(err){
        console.log(err)
    })

}

LeerArchivoPalabras()



function validarDatos(e){
   
    e.preventDefault()
}