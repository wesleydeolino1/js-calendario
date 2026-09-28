let mes = document.querySelector("#mes");
let meses = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
for(let m = 0; m < meses.length; m++){
    mes.innerHTML += `<option class="text-black">${meses[m]}</option>`
}
for(let d = 1; d <= 31; d++){
    dia.innerHTML += `<option class="text-black">${d}</option>`
}

function descobrirNome(){
    let nome = ""
    if(mes.value == "Jan"){
        nome = "Pedrinho"
    } else if(mes.value == "Fev"){
        nome = "Betão"
    }

    if(dia.value == 1){
        nome += "Treina Bumbum"
    } else if(dia.value == 2){
        nome = " Mata Frango"
    }

    alert(`Seu nome é: ${nome}`)
}
