
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("entries-el")

let count = 0
let tempCount = 0
let entries = "Previous entries: "

function incrementCount () {
    count += 1
    tempCount += 1
    countEl.innerText = count
  
}

function incrementCountCourse () {
    
    count += 1
    countEl.innerText = count
  
}

function save (){
    
    let newSave = tempCount + " - "
    entries += newSave
    saveEl.innerText = entries
    tempCount = 0
}

function saveCourse (){
    let newSave = count + " - "
    entries += newSave
    saveEl.innerText = entries
    countEl.innerText = 0
    count = 0
}