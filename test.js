// localStorage.setItem("myleads", "evans")

// console.log(localStorage.getItem("myleads"))
// localStorage.clear()

let myleads = '["ww.co.ke"]'

myleads = JSON.parse(myleads)

myleads.push("www.kcc.co.ke")


myleads = JSON.stringify(myleads)

console.log(typeof (myleads))