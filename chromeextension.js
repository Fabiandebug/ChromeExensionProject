let inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
let myleads = []
let ulEl = document.getElementById("ul-el")
let container = document.getElementById("container")
let createEl = document.getElementById("create-el")
let deletebtn = document.getElementById("delete-btn")
let savetabbtn = document.getElementById("savetab-btn")

// Using event listeners and functions 
// Using innerhtml to modify dom

const leadsfromlocalstorage = JSON.parse(localStorage.getItem("myleads"))
if (leadsfromlocalstorage) {
    myleads = leadsfromlocalstorage
    renderdata(myleads)
}

inputBtn.addEventListener("click", function () {
    myleads.push(inputEl.value)
    inputEl.value = ""

    localStorage.setItem("myleads", JSON.stringify(myleads))
    renderdata(myleads)
})

savetabbtn.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {

        myleads.push(tabs[0].url)
        localStorage.setItem("myleads", JSON.stringify(myleads))
        renderdata(myleads)
    })
})
deletebtn.addEventListener("dblclick", function () {
    localStorage.clear()
    myleads = []
    renderdata(myleads)

})
function renderdata(leads) {
    let listitems = ""

    for (let i = 0; i < leads.length; i++) {
        // listitems += "<li><a target='_blank' href='" + myleads[i] + "'>" + myleads[i] + "</a></li>"
        // template string
        listitems += `<li>
        <a target='_blank' href=${leads[i]} >
         ${leads[i]}

        </a>
        </li>`
    }

    ulEl.innerHTML = listitems

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