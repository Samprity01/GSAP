// gsap.from("#page2 h1",{
//     opacity:0,
//     duration:2,
//     x:500,
//     scrollTrigger:{
//         trigger:"#page2 h1",
//         scroller:"body",
//         markers:true,
//         start:"top 50%"
//     }
// })



// gsap.from("#page2 h1",{
//     opacity:0,
//     duration:2,
//     x:500,
//     scrollTrigger:{
//         trigger:"#page2 h1",
//         scroller:"body",
//         markers:true,
//         start:"top 50%"
//     }
// })

gsap.from("#page2 #box",{
    scale:0,
    opacity:0,
    duration:1,
    rotte:720,
    scrollTrigger:{
        trigger:"#page2 #box";
        scroller:"body",
        markers:true,
        start:"top 60%",
        end:"top 30%",
        scrub:true,  //smoothness
        pin:true
    }
})
