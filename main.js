const arrow = document.querySelector(".arrow")
const h3 = document.querySelector("h3")
const h4 = document.querySelector("h4")

h3.addEventListener("click" , () => {
    h4.classList.toggle("active")
    arrow.classList.toggle("rotate")
    h3.classList.toggle("different")
})

const piko = document.querySelector(".piko")
const p = document.querySelector("p")
const h6 = document.querySelector("h6")

p.addEventListener("click" , () => {
    h6.classList.toggle("act")
    piko.classList.toggle("piko")
    p.classList.toggle("diff")
})



const riko = document.querySelector(".riko")
const lala = document.querySelector(".lala")
const loli = document.querySelector(".loli")

lala.addEventListener("click" , () => {
    loli.classList.toggle("kaxa")
    riko.classList.toggle("gio")
    lala.classList.toggle("vaja")
})



const saso = document.querySelector(".saso")
const can = document.querySelector(".can")
const  bobo = document.querySelector(".bobo")

can.addEventListener("click" , () => {
    bobo.classList.toggle("rati")
    saso.classList.toggle("nika")
    can.classList.toggle("dato")
})

const kiko = document.querySelector(".kiko")
const you = document.querySelector(".you")
const  tate = document.querySelector(".tate")

you.addEventListener("click" , () => {
    tate.classList.toggle("lia")
    kiko.classList.toggle("ana")
    you.classList.toggle("kato")
})