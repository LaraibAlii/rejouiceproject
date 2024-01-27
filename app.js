var page=document.querySelector(".page1-container")
var cur=document.querySelector(".cur")

function cursormove(){
    page.addEventListener("mouseenter",function(){
        gsap.to(cur,{
            scale:1
        })
    })
    page.addEventListener("mouseleave",function(){
        gsap.to(cur,{
            scale:0
        })
    })
    page.addEventListener("mousemove",function(dets){
        gsap.to(cur,{
      x:dets.x,
      y:dets.y,
      
        })
    })
    
}
cursormove()
gsap.to(".page1-container h1",{
    y:-50,
    opacity:1,
    delay:0.5,
    duration:0.9,
    stagger:0.3
    
})
gsap.to(".ent p",{
    y:-20,
    opacity:1,
    delay:0.5,
    duration:0.9,
    stagger:0.3
    
})
gsap.from(".page3 .page3-top",{
    scale:0.9,
    opacity:0,
    delay:2.8,
    duration:0.5,
})
