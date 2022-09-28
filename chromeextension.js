let inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const myleads = []
let ulEl = document.getElementById("ul-el")
let container = document.getElementById("container")
let createEl = document.getElementById("create-el")

// Using event listeners and functions 
// Using innerhtml to modify dom

inputBtn.addEventListener("click", function () {
    myleads.push(inputEl.value)
    renderleads()

})
function renderleads() {
    let listitems = ""

    for (let i = 0; i < myleads.length; i++) {
        // listitems += "<li><a target='_blank' href='" + myleads[i] + "'>" + myleads[i] + "</a></li>"
        // template string
        listitems += `<li>
        <a target='_blank' href=${myleads[i]} >
         ${myleads[i]}

        </a>
        </li>`
    }

    ulEl.innerHTML = listitems
    inputEl.value = "";
}
// Using document.createlement function
// createEl.addEventListener("click", function create() {
//     for (let i = 0; i < myleads.length; i++) {
//         const li = document.createElement("li")
//         li.textContent = myleads[i]
//         ulEl.append(li)


//

// Using innerhtml to modify DOM
// container.innerHTML = " <button onclick='buy()'>Buy!</button>"

// function buy() {
//     container.innerHTML += "<p>Thank you for buying</p>"
// }