document.getElementById('result-soma').onclick = () => {

    let a = +document.getElementById('valorA-soma').value
    let b = +document.getElementById('valorB-soma').value

    if (Boolean(a) === false) {
        document.getElementById('result-show-soma').innerHTML = `Não deixe nenhum dos campos vazios...`

    } else if (Boolean(b) === false){
        document.getElementById('result-show-soma').innerHTML = `Não deixe nenhum dos campos vazios...`

    } else {
        document.getElementById('result-show-soma').innerHTML = `Resultado = ${a + b}`
    }


}


document.getElementById('result-sub').onclick = () => {

    let a = +document.getElementById('valorA-sub').value
    let b = +document.getElementById('valorB-sub').value


    if (Boolean(a) === false) {
        document.getElementById('result-show-sub').innerHTML = `Não deixe nenhum dos campos vazios...`

    } else if (Boolean(b) === false) {
        document.getElementById('result-show-sub').innerHTML = `Não deixe nenhum dos campos vazios...`

    } else {
        document.getElementById('result-show-sub').innerHTML = `Resultado = ${a - b}`
    }


}


document.getElementById('result-mult').onclick = () => {

    let a = +document.getElementById('valorA-mult').value
    let b = +document.getElementById('valorB-mult').value


    if (Boolean(a) === false) {
        document.getElementById('result-show-mult').innerHTML = `Não deixe nenhum dos campos vazios...`

    } else if (Boolean(b) === false) {
        document.getElementById('result-show-mult').innerHTML = `Não deixe nenhum dos campos vazios...`

    } else {
        document.getElementById('result-show-mult').innerHTML = `Resultado = ${a * b}`
    }


}


document.getElementById('result-div').onclick = () => {

    let a = +document.getElementById('valorA-div').value
    let b = +document.getElementById('valorB-div').value


    if (Boolean(a) === false) {
        document.getElementById('result-show-div').innerHTML = `Não deixe nenhum dos campos vazios...`

    } else if (Boolean(b) === false) {
        document.getElementById('result-show-div').innerHTML = `Não deixe nenhum dos campos vazios...`

    } else {
        document.getElementById('result-show-div').innerHTML = `Resultado = ${a / b}`
    }


}