function isNumber(n){
    return Number(n) === n;
}


const description = document.getElementById('descrizione_spesa')
const ammount = document.getElementById('ammontare_spesa')
const listContainer = document.getElementById('list-container')

function createDivs() {
    let back = document.createElement('div')
    let desc = document.createElement('div')
    let ammo = document.createElement('div')

    back.classList.add('input-field')

    desc.classList.add('field-desc')
    desc.innerHTML = description.value
    back.appendChild(desc)

    ammo.classList.add('field-ammount')
    ammo.innerHTML = ammount.value
    back.appendChild(ammo)

    return back
}

function addExpense(){
    if(ammount.value === '' && !isNumber(ammount.value))
        alert('Inserire una cifra valida!')
    else{

        //add expense in the list
        let li = document.createElement('li')
        li.appendChild(createDivs())
        listContainer.appendChild(li)
        

        //add remove expense span
        const span = document.createElement('span')
        span.innerHTML = '\u00d7'
        li.appendChild(span)   
    }
    description.value = ''
    ammount.value = ''
    saveData()
}


listContainer.addEventListener('click', (e)=>{
    //remove Task
    if (e.target.tagName === 'SPAN'){
        e.target.parentElement.remove()
        saveData()
    } 
},false)


function saveData() {
    localStorage.setItem('data', listContainer.innerHTML)
}

function showTasks() {
    listContainer.innerHTML = localStorage.getItem('data')
}

showTasks()