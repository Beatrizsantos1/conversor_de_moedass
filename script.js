/*-----------------------------------------------------------------------------------------------------------
1 passo: conecetar o java script ok
2 passo: pegar o click do botão ok
3 passo: guardamos o valor digitado no imput numa variavel ok
4 passo: definir o valor do dolar e guardar numa variavel ok
5 passo: converter real para dolar ok
6 passo: pegar o valor digitado pelo o usario e o valor do dolar convertido e colocar no lugar OK
7 passo: formatar o numero OK
9 passo: selecionar euro ou dolar
10 passo: trocar automaticamente as moedas quando o usuario selecionar o tipo de moeda
11 passo: trocar automaticamente os nomes da moeda quando o usuario escolher o tipo moeda
12 passo: trocar automaticamente os valores da conversão quando o usuario escolher outro tipo de moeda
-----------------------------------------------------------------------------------------------------------*/

// 2 passso: pegando o botão do html e conectando no js, para pegar o click do botão
const convertButton = document.querySelector("#convert-button")
// 9 passso: pegando o select do html e conectando no js, para selecionar euro ou dolar
const selectConverter = document.querySelector("#select-converter")

const converterDe = document.querySelector("#converter-de")



// 2 passo: criando a função do click no botão
function clickButton() {
// 3 passso: pegando o imput do html e conectando no js, para guardar o valor digitado numa variavel 
const inputValue = document.querySelector("#input-value").value
//definindo os valores do dolar,euro e libra e guardando numa variavel 
const valueDolar = 4.96
const valueEuro = 5.32
const valueLibra = 6.20

    
    // convertendo REAL para as outras Moedas
    if (converterDe.value === "real-de" && selectConverter.value=== "dolar") {
        document.querySelector("#converted-value").innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValue / valueDolar)
        console.log(inputValue / valueDolar)
    }
    if (converterDe.value === "real-de" && selectConverter.value=== "euro") {
        document.querySelector("#converted-value").innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputValue / valueEuro)
        console.log(inputValue / valueEuro)
    }
    if (converterDe.value === "real-de" && selectConverter.value=== "libra") {
        document.querySelector("#converted-value").innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "GBP"
        }).format(inputValue / valueLibra)
        console.log(inputValue / valueLibra)
    }
    if (converterDe.value === "real-de" && selectConverter.value=== "real") {
        document.querySelector("#converted-value").innerHTML = new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL"
        }).format(inputValue)
        console.log(inputValue)
    }

    // convertendo DOLAR para as outras Moedas
    if (converterDe.value === "dolar-de" && selectConverter.value === "real") {
        document.querySelector("#converted-value").innerHTML = new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL"
        }).format(inputValue * valueDolar)
        console.log(inputValue * valueDolar)
        
    }
    if (converterDe.value === "dolar-de" && selectConverter.value === "euro") {
        document.querySelector("#converted-value").innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputValue * 0.93)
        console.log(inputValue * 0.93)
        
    }
    if (converterDe.value === "dolar-de" && selectConverter.value === "libra") {
        document.querySelector("#converted-value").innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "GBP"
        }).format(inputValue * 0.80)
        console.log(inputValue * 0.80)
    }
    if (converterDe.value === "dolar-de" && selectConverter.value === "dolar") {
        document.querySelector("#converted-value").innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValue)
        console.log(inputValue)
    }

    // convertendo EURO para as outras Moedas
    if (converterDe.value === "euro-de" && selectConverter.value === "real") {
        document.querySelector("#converted-value").innerHTML = new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL"
        }).format(inputValue * valueEuro)
        console.log(inputValue * valueEuro)
    } 
    if (converterDe.value === "euro-de" && selectConverter.value === "dolar") {
        document.querySelector("#converted-value").innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValue * 1.07)
        console.log(inputValue * 1.07)
    }
    if (converterDe.value === "euro-de" && selectConverter.value === "libra") {
        document.querySelector("#converted-value").innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "GBP"
        }).format(inputValue * 0.86)
        console.log(inputValue * 0.86)
    }
    if (converterDe.value === "euro-de" && selectConverter.value === "euro") {
        document.querySelector("#converted-value").innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputValue)
        console.log(inputValue)
    }

    // convertendo LIBRA para as outras Moedas
    if (converterDe.value === "libra-de" && selectConverter.value === "real") {
        document.querySelector("#converted-value").innerHTML = new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL"
        }).format(inputValue * valueLibra)
        console.log(inputValue * valueLibra)
    }
    if (converterDe.value === "libra-de" && selectConverter.value === "dolar") {
        document.querySelector("#converted-value").innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValue * 1.25)
        console.log(inputValue * 1.25)
    }
    if (converterDe.value === "libra-de" && selectConverter.value === "euro") {
        document.querySelector("#converted-value").innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputValue * 1.16)
        console.log(inputValue * 1.16)
    }
    if (converterDe.value === "libra-de" && selectConverter.value === "libra") {
        document.querySelector("#converted-value").innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "GBP"
        }).format(inputValue)
        console.log(inputValue)
    }

    document.querySelector("#value-convert").innerHTML= inputValue
    

    

}
// passo 10 e 11 criando a função para chamar o change
function changeSelectorPara() {
    if (selectConverter.value === "dolar") {
        //11 passo: trocando automaticamente os nomes da moeda quando o usuario escolher o tipo moeda
        document.querySelector("#paragraph-name-country").innerHTML = "Dolar"
        //10 passo: trocando automaticamente as imagens moedas quando o usuario selecionar o tipo de moeda
        document.querySelector("#conversion-image").src = "assets/estados-unidos (1) 1.png"
    }
    if (selectConverter.value === "euro") {
        //11 passo: trocando automaticamente os nomes da moeda quando o usuario escolher o tipo moeda
        document.querySelector("#paragraph-name-country").innerHTML = "Euro"
        //10 passo: trocando automaticamente as imagens moedas quando o usuario selecionar o tipo de moeda
        document.querySelector("#conversion-image").src = "assets/euro.png.png"

    }
    if (selectConverter.value === "libra") {
        document.querySelector("#paragraph-name-country").innerHTML = "Libra"
        document.querySelector("#conversion-image").src = "assets/libra 1.png"
    }
    if (selectConverter.value === "real") {
        document.querySelector("#paragraph-name-country").innerHTML = "Real"
        document.querySelector("#conversion-image").src = "assets/brasil 2.png"
        
    }
    // passo 12 chamando a função click para poder mudar automaticamente os valores da convesão quando o usuario escolher outra moeda
    clickButton();
}

function changeSelectorDe(){
    if (converterDe.value === "real-de") {
        document.querySelector("#paragraph-De").innerHTML = "Real"
        document.querySelector("#photo-De"). src= "assets/brasil 2.png"
    }
    if (converterDe.value === "dolar-de") {
        document.querySelector("#paragraph-De").innerHTML = "Dolar"
        document.querySelector("#photo-De"). src="assets/estados-unidos (1) 1.png"
    }
    if (converterDe.value === "euro-de") {
        document.querySelector("#paragraph-De").innerHTML = "Euro"
        document.querySelector("#photo-De"). src="assets/euro.png.png"
    }
    if (converterDe.value === "libra-de") {
        document.querySelector("#paragraph-De").innerHTML = "LIbra"
        document.querySelector("#photo-De"). src="assets/libra 1.png"
    }
    // passo 12 chamando a função click para poder mudar automaticamente os valores da convesão quando o usuario escolher outra moeda
    clickButton();
}

// 2 passo: criando o evento de click para pegar o click do botão
convertButton.addEventListener("click", clickButton)
// passo 10 e 11 usando o change para quando o usaurio escolher um tipo de moeda fazer a troca das imagens e do nome
selectConverter.addEventListener("change", changeSelectorPara)

converterDe.addEventListener("change", changeSelectorDe)


