function alerta(){ 
    var inputguildValue = document.getElementById("guild").value
    var minlevel = parseInt(document.getElementById("numero").value)
    axios.get("https://dev.tibiadata.com/v4/guild/" + inputguildValue)
        .then(function(response){
            var guildname = response.data["guild"]["members"]
            console.log(guildname)

            for(var valor of response.data["guild"]["members"]){
                if(valor["level"] >= minlevel){
                    console.log(valor["name"])
                    output = document.createElement('h1')
                    output.id = "outputname"
                    if (valor["status"] == "online"){
                        output.textContent = valor["name"]+"("+valor["level"]+")"+"("+ valor["vocation"]+")"+"("+valor["status"]+")"   
                        output.style.color = "green"
                    }else if(valor["status"] == "offline"){
                        output.textContent = valor["name"]+"("+valor["level"]+")"+"("+ valor["vocation"]+")"+"("+valor["status"]+")"
                        output.style.color = "red"
                    }

                    document.body.appendChild(output)
                }
            }
        })
        .catch(function(response){
            console.error("Erro no request"+response)
        })
}

//Jão