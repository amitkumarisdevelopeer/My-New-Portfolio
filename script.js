var on=document.querySelector("#three #on")
var off=document.querySelector("#three #off")
var page1=document.querySelector("#page1")
var nav=document.querySelector("#nav")
var text=document.querySelector("#one a")
var left=document.querySelector("#left")
var right=document.querySelector("#right")
var h1=document.querySelector("#right h1")
var p=document.querySelector("#right p")
var page2=document.querySelector("#page2")
var cross=document.querySelector("#cross")
var menu=document.querySelector("#menu")
var page11=document.querySelector("#page11")

menu.addEventListener("click",function(){
    menu.style.display="none"
    cross.style.display="block"
    page11.style.scale="1"
})
cross.addEventListener("click",function(){
    menu.style.display="block"
    cross.style.display="none"
    page11.style.scale="0"
})


on.addEventListener("click",function(){
    page1.style.backgroundColor="black"
    left.style.backgroundColor="black"
    right.style.backgroundColor="black"
    page2.style.backgroundColor="black"
    h1.style.color="white"
    p.style.color="white"
    nav.style.backgroundColor="#64D6D2"

    // text.style.color="red"
    off.style.opacity="1"
    on.style.opacity="0"

})

off.addEventListener("click",function(){
    page1.style.backgroundColor="white"
    left.style.backgroundColor="#F5F5F5"
    right.style.backgroundColor="#F5F5F5"
    page2.style.backgroundColor="white"
    h1.style.color="#1B1B1B"
    p.style.color="#1B1B1B"
    text.style.color="black"
    nav.style.backgroundColor="#D9E5E7"
    off.style.opacity="0"
    on.style.opacity="1"

})