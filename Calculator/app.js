const txt1 = document.getElementById("txt1")
const resbox = document.getElementById("resbox")
const Btn = document.querySelectorAll("#Btn")

for (let i = 0; i < Btn.length; i++) {
    Btn[i].addEventListener("click",()=>{
        txt1.innerHTML += Btn[i].innerHTML;
        resbox.innerHTML = eval(txt1.innerHTML)
    })
}
// [1,2,3,4,5,6]

