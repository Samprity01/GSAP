function breaktext(){
    var h1=document.querySelector("h1")

    var h1text=h1.textContent

    var splittedtext=h1text.split("")

    var half=Math.floor(splittedtext.length/2)

    var clutter=""


    splittedtext.forEach(function(e,idx){
       if(idx<half){
        clutter+=`<span class="a">${e}</span>`
       }
       else{
       clutter+=`<span class="b">${e}</span>`
       }
    })
 
    h1.innerHTML=clutter
}

breaktext()

gsap.from("h1 .a",{
    y:80,
    duration:0.6,
    delay:0.5,
    stagger:0.15,
    opacity:0
})

gsap.from("h1 .b",{
    y:80,
    duration:0.6,
    delay:0.5,
    stagger:-0.15,
    opacity:0
})








 
