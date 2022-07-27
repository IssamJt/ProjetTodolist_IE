let sectionT = document.querySelector('#sectionT')
let inputA = document.querySelector('input')
let btnA = document.querySelector('button')
let h1 = document.querySelector('h1')
let btntous = document.querySelector('#trier').querySelectorAll('button')[0]
let btnencours = document.querySelector('#trier').querySelectorAll('button')[1]
let btnfinii = document.querySelector('#trier').querySelectorAll('button')[2]


//quand je clique sur le boutin h1('trier') cela m'affiche les trois bouton pour pouvoir trier
h1.addEventListener('click', function(){
    btntous.className = ''
    btnencours.className = ''
    btnfinii.className = ''
})

// c'est un addevenlistener qui permet de tout commencer car cest le bouton qui permet de creer les div
btnA.addEventListener('click', function(){

    //je creer les div 
    let div = document.createElement('div')
    div.className = 'divN'
    div.id = 'encours'

    //je crrer les p
    let p = document.createElement('p')
    p.innerText = inputA.value
    inputA.value = ''


    //div ou y aura les bouton 
    let divbtn = document.createElement('div')
    divbtn.className = 'divbtn'

    let btnsupprimer = document.createElement('button')
    btnsupprimer.innerText = 'supprimer'

    let btnmodifier = document.createElement('button')
    btnmodifier.innerText = 'modifier'

    let btnfini = document.createElement('button')
    btnfini.innerText = 'fini'
    btnfini.id = 'btnfini'

    divbtn.insertAdjacentElement('afterbegin', btnsupprimer)
    divbtn.insertAdjacentElement('afterbegin', btnmodifier)
    divbtn.insertAdjacentElement('afterbegin', btnfini)


    div.insertAdjacentElement('afterbegin', divbtn)
    div.insertAdjacentElement('afterbegin', p)
    sectionT.insertAdjacentElement('beforeend', div)


    //le bouton qui permet de confirmer la modification du p
    let btnok = document.createElement('button')
    let inputmodifier = document.createElement('input')


    btnmodifier.addEventListener('click', function(){
        //quand je clique sur le bouton modier , il disparait direcrement grace au display none
        btnmodifier.className = 'displaynone'
        btnfini.className = 'displaynone'


        inputmodifier.className = 'inputmodifier'

        btnok.innerText = 'ok'
        btnok.className = 'ok'

        //en appuyant sur le bouton modifier j'insert imediatement l'input pour pouvoir ecrire la modification et le bouton pour confirmer
        btnfini.insertAdjacentElement('afterend', btnok)
        btnfini.insertAdjacentElement('afterend', inputmodifier)

        btnok.addEventListener('click', function(){
            p.innerText = inputmodifier.value
            inputmodifier.value = ''
            btnok.className = 'displaynone'
            inputmodifier.className = 'displaynone'
            btnmodifier.className = ''
            btnfini.className = ''

            
        })

    })
    btnsupprimer.addEventListener('click', function(){
        btnmodifier.className = 'displaynone'
        btnsupprimer.className = 'displaynone'
        btnfini.className = 'displaynone'
        btnok.className = 'displaynone'
        inputmodifier.className = 'displaynone'
        
        let jeveuxsupprimer = document.createElement('button')
        jeveuxsupprimer.className = 'sup'
        jeveuxsupprimer.innerText = 'je veux supprimer'

        let jeveuxpassupprimer = document.createElement('button')
        jeveuxpassupprimer.className = 'sup'
        jeveuxpassupprimer.innerText = 'je ne veux pas supprimer'

        divbtn.insertAdjacentElement('beforeend', jeveuxsupprimer)
        divbtn.insertAdjacentElement('beforeend', jeveuxpassupprimer)
        jeveuxsupprimer.addEventListener('click', function(){
            div.className = 'displaynone'
            div.id = 'supprimer'
        })
        jeveuxpassupprimer.addEventListener('click', function(){
            btnmodifier.className = ''
            btnsupprimer.className = ''
            btnfini.className = ''
            
            jeveuxsupprimer.className = 'displaynone'
            jeveuxpassupprimer.className = 'displaynone'
        })
    })
    btnfini.addEventListener('click', function(){
        btnfini.innerText = 'terminé'
        div.className = 'color'
        // div.id = 'fini'
        btnmodifier.className ='displaynone'
        

        btnfini.addEventListener('dblclick', function(){
            btnfini.innerText = 'fini'
            div.className = 'divN'
            btnmodifier.className =''

        })
    })


    let btnf = document.querySelectorAll('#btnfini')
    let btnfl = Array.from(btnf)


 


   
        
    
            btnfinii.addEventListener('click', function(){
                for (let i = 0; i < btnfl.length; i++) {
                if(btnfl[i].innerText == 'fini'){
                    let parent = btnfl[i].parentElement
                    parent.parentElement.className = 'displaynone'
                    btnA.addEventListener('click', function(){
                        if(parent.parentElement.className == 'displaynone'){
                            parent.parentElement.className = 'divN'
                        }
                        else if(btnfl[i].innerText == 'terminé'){
                            parent.parentElement.className = 'color'

                        }
                    })

                    

                }
                else if(btnfl[i].innerText == 'terminé'){
                    let parent = btnfl[i].parentElement
                    parent.parentElement.className = 'color'
                    if(parent.parentElement.id == 'supprimer'){
                        parent.parentElement.className = 'displaynone'
            
                    }

                    btnfl[i].addEventListener('dblclick', function(){
                        btnfl[i].innerText = 'fini'
                        div.className = 'divN'
                        btnmodifier.className =''
            
                    })
                }
            }
            })
    
            btnencours.addEventListener('click', function(){

                for (let i = 0; i < btnfl.length; i++) {
                    if(btnfl[i].innerText == 'terminé'){
                        let parent = btnfl[i].parentElement
                        parent.parentElement.className = 'displaynone'

                        btnA.addEventListener('click', function(){
                            
                            if(btnfl[i].innerText == 'fini'){
                                parent.parentElement.className = 'divN'
    
                            }
                        })

                        btnfini.addEventListener('click', function(){
                            for (let i = 0; i < btnfl.length; i++){
                                    if(btnfl[i].innerText == 'terminé'){
                                        let parent = btnfl[i].parentElement
                                        parent.parentElement.className = 'displaynone'
                                }
                            }
                        })
    
                    }
                    else if(btnfl[i].innerText == 'fini'){
                        let parent = btnfl[i].parentElement
                        parent.parentElement.className = 'divN'
                    }
                }
            })

            btntous.addEventListener('click', function(){
                for (let i = 0; i < btnfl.length; i++) {

                    let parent = btnfl[i].parentElement
                    if(parent.parentElement.className == 'displaynone'){
                        parent.parentElement.className = 'divN'
                    }
                    else if(btnfl[i].innerText == 'terminé'){
                        parent.parentElement.className = 'color'
                    }   
                    if(parent.parentElement.id == 'supprimer'){
                        parent.parentElement.className = 'displaynone'
            
                    }                 
                }
            })
        
    



    

})


