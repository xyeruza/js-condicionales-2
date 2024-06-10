let verificar = document.querySelector("#verificar")

verificar.addEventListener('click',()=>{
    let input1 = document.querySelector("#input1").value
    let input2 = document.querySelector("#input2").value
    let input3 = document.querySelector("#input3").value

input1 = parseInt(input1)
input2 = parseInt(input2)
input3 = parseInt(input3)

let suma = input1 + input2 + input3

if (suma > 10) {
    document.querySelector("h3").innerHTML = "Llevas " + suma + ". Solo podes seleccionar 10!"
    }else{
        document.querySelector("h3").innerHTML = "Llevas " + suma + ". Dale segui asi!"
    }

})