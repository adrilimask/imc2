const calcularIMC = (event) => {
    event.preventDefault();

    const inputPeso = document.querySelector("#peso");
    const inputAltura = document.querySelector("#altura");
    const inputNome = document.querySelector("#nome");
    const inputGenero = document.querySelector("input[name='genero']:checked");

    const resposta = document.querySelector("#resposta");

    const nome = inputNome.value;
    const peso = inputPeso.value;
    const altura = inputAltura.value;
    const genero = inputGenero.value;
    
    inputNome.classList.remove("error");
    inputPeso.classList.remove("error");
    inputAltura.classList.remove("error");
    resposta.classList.remove("resposta-error");

    let error = false;

    if (!nome){
        error = true;
        inputNome.classList.add("error");
    }

    if (!peso){
        error = true;
        inputPeso.classList.add("error");
    }

    if (!altura){
        error = true;
        inputAltura.classList.add("error");
    }

    if (error) {
        resposta.classList.add("resposta-error");
        resposta.innerHTML = "Por favor, preencha todos os campos!";
        return;
    }

    const imc = peso / (altura * altura);

    let situacao;

    if(genero === "homem"){
        if (imc >= 40){
            situacao = "Obesidade Mórbida";
        } else if (imc >= 30 && imc < 40) {
            situacao = "Obesidade Moderada";
        } else if (imc >= 25 && imc < 30) {
            situacao = "Obesidade Leve";
        } else if (imc >= 20 && imc < 25) {
            situacao = "Normal";
        } else {
            situacao = "Abaixo do Normal";
        }
    }

    if(genero === "mulher"){
        if (imc >= 39){
            situacao = "Obesidade Mórbida";
        } else if (imc >= 29 && imc < 39) {
            situacao = "Obesidade Moderada";
        } else if (imc >= 24 && imc < 29) {
            situacao = "Obesidade Leve";
        } else if (imc >= 19 && imc < 24) {
            situacao = "Normal";
        } else {
            situacao = "Abaixo do Normal";
        }
    }

    resposta.innerHTML = `O seu IMC é: ${imc.toFixed(2)} kg/m² (${situacao})`;

    const item = document.createElement("li");
    item.innerHTML = `${nome} - ${imc.toFixed(2)} kg/m² - ${situacao}`;

    const lista = document.querySelector("#lista");
    lista.appendChild(item);

    const form = document.querySelector("form");
    form.reset();

  }