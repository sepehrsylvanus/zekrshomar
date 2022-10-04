let firstNum = 0;
let saveInfo = document.getElementById('save')

function count() {
    firstNum += 1;
    let count = document.getElementById('count')
    count.textContent = firstNum
}

function save() {
    saveInfo.textContent += firstNum + " - "

}
function makeZero() {
    firstNum = 0
    let count = document.getElementById('count')
    count.textContent = 0
}