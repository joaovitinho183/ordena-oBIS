let res = document.createElement('res')
res.setAttribute('div', 'res')
let res2 = document.createElement('res2')
res.setAttribute('div', 'res2')
let res3 = document.createElement('res3')
res.setAttribute('div', 'res3')



let array = []
let gerar = document.getElementById('gerar')
let ordenar = document.getElementById('ordenar')
let inverter = document.getElementById('inverter')

gerar.after(res)
ordenar.after(res2)
inverter.after(res3)

gerar.addEventListener('click', () => {
    let tamanho = parseInt(document.getElementById('tamanho').value)

    for (let i = 0; i < tamanho; i++) {
        array[i] = random(tamanho, 1)
    }
    res.innerHTML = `Números gerados [ ${array} ]`

    function random(max, min) {
        let valorA = Math.floor(Math.random() * (max - min + 1) + min)
        return valorA
    }

})
ordenar.addEventListener('click', () => {
    let aux = 0
    let c1 = 0
    let c2 = 0
    for (let i = array.length; i > 0; i--) {
        for (let j = 0; j < array.length - 1; j++) {
            if (array[j] > array[j + 1]) {
                aux = array[j]
                array[j] = array[j + 1]
                array[j + 1] = aux
            }
            c2++
        }
        c1++
    }
    let soma = c1 + c2
    res2.innerHTML = `Array Ordenado: [ ${array} ] ,ele realizou em: ${soma} movimentos`
})
inverter.addEventListener('click', () => {
    let aux = 0

    for (let i = array.length; i > 0; i--) {
        for (let j = 0; j < array.length - 1; j++) {
            if (array[j] < array[j + 1]) {
                aux = array[j]
                array[j] = array[j + 1]
                array[j + 1] = aux
            }
        }
    }
    res3.innerHTML = `Array Invertido: [ ${array} ]`
})