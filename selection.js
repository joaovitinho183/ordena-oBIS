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
    let c1 = 0
    for (i = 0; i < array.length; i++) {
        menor = i
        c1++
        for (j = i + 1; j < array.length; j++) {
            if (array[j] < array[menor]) {
                menor = j
            }
        }
        if (i != menor) {
            valor_atual = array[i]
            array[i] = array[menor]
            array[menor] = valor_atual
        }
    }
    let soma = c1 + c2
    res2.innerHTML = `Array Ordenado: [ ${array} ] ,ele realizou em: ${soma} movimentos`
})
inverter.addEventListener('click', () => {
    for (i = 0; i < array.length; i++) {
        menor = i
        for (j = i + 1; j < array.length; j++) {
            if (array[j] > array[menor]) {
                menor = j
            }
        }
        if (i != menor) {
            valor_atual = array[i]
            array[i] = array[menor]
            array[menor] = valor_atual
        }
    }
    res3.innerHTML = `Array Invertido: [ ${array} ]`
})