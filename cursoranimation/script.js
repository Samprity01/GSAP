var  main=document.querySelector("#main")
var cursor=document.querySelector("#cursor")
var image=document.querySelector("#image")

main.addEventListener("mousemove",function(dets){
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        duration:1,
        ease:"back.out"
    })
})

image.addEventListener("mouseenter",function(){
    cursor.innerHTML="view more"
    gsap.to(cursor,{
        scale:4,
        bacckgroundColor:"#ffffff7c"
    })
})

image.addEventListener("mouseleave",function(){
    cursor.innerHTML=""
    gsap.to(cursor,{
        scale:1,
        bacckgroundColor: "#fff"
    })
})
