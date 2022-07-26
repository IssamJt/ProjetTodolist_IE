let sectionT = document.querySelector('#sectionT')
let inputA = document.querySelector('input')
let btnA = document.querySelector('button')

btnA.addEventListener('click', function(){
    let div = document.createElement('div')
    div.className = 'divN'
    let p = document.createElement('p')
    p.innerText = inputA.value
    let divbtn = document.createElement('div')
    divbtn.className = 'divbtn'
    let btn1 = document.createElement('button')
    let btn2 = document.createElement('button')
    let btn3 = document.createElement('button')
    let btn4 = document.createElement('button')
    divbtn.insertAdjacentElement('afterbegin', btn1)
    divbtn.insertAdjacentElement('afterbegin', btn2)
    divbtn.insertAdjacentElement('afterbegin', btn3)
    divbtn.insertAdjacentElement('afterbegin', btn4)
    inputA.value = ''
    div.insertAdjacentElement('afterbegin', divbtn)
    div.insertAdjacentElement('afterbegin', p)
    sectionT.insertAdjacentElement('beforeend', div)

})