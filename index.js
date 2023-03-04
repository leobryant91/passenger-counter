let saveEl = document.getElementById("save-el")
let countEL = docuemtn.getElementById("cpunt-el")

function increment() {
    count += 1
    countEl.textContent = count
    
    
}

function save() {
    let counterStr = count + " - "
    saveEl.textContent += countStr
countEl.textContent = 0
count = 0
}
