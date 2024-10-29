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
    let c = 0 
    for (i = 1; i < array.length; i++) {
        let j = i - 1
        valor_atual = array[i]
        while (j >= 0 && valor_atual < array[j]) {
            array[j + 1] = array[j]
            j--
        }
        array[j + 1] = valor_atual
        c++
    }
    res2.innerHTML = `Array Ordenado: [ ${array} ] ,ele realizou em: ${c} movimentos`
})

inverter.addEventListener('click', () => {
    for (i = 1; i < array.length; i++) {
        let j = i - 1
        valor_atual = array[i]
        while (j >= 0 && valor_atual > array[j]) {
            array[j + 1] = array[j]
            j--
        }
        array[j + 1] = valor_atual
    }
    res3.innerHTML = `Array Invertido: [ ${array} ]`
})