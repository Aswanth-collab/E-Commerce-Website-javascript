var cancel1 = document.getElementById("cancel1")
var offerbar = document.querySelector(".offerbar")
cancel1.addEventListener("click",()=>{
    offerbar.style.display = "none"
})

//

var cancel2 = document.getElementById("cancel2");
var sidenav = document.querySelector(".sidenav")
cancel2.addEventListener("click",()=>{
    sidenav.style.left = -450+"px"
})
var threebar = document.getElementById("threebar");
threebar.addEventListener("click",()=>{
    sidenav.style.left = 0+"px"
})
//
var right = document.getElementById("right")
var scroll1 = document.querySelector(".scroll")
margin = 0
right.addEventListener("click",()=>{
    margin = margin+100;
    if(margin>200){
        margin=0
    }
    scroll1.style.marginLeft = -+margin+"vw"
})
var left = document.getElementById("left")
margin = 0
left.addEventListener("click",()=>{
    margin = margin-100
    if(margin<0){
        margin=200
    }
    scroll1.style.marginLeft = -+margin+"vw"
})
var likebuttons=document.querySelectorAll(".like-button")

likebuttons.forEach((btn)=>{
    btn.addEventListener("click",function(e){
        
        
        if(e.target.src.indexOf("blackheart")>0)
        {
            console.log("jkjk");
            e.target.src="img/icons/redheart.png"
        }
        else{
            e.target.src="img/icons/blackheart.png"
        }
    })
})

window.addEventListener("scroll",function(){
    var elements = this.document.querySelectorAll(".initial-scroll-animate")
    elements.forEach((el)=>{
        windowHeight = window.innerHeight
     var elbound = el.getBoundingClientRect()
   

     console.log(windowHeight)
     console.log(elbound.top)
     if(windowHeight>elbound.top-100){
        console.log("Hi")
    el.classList.remove("reveal-scroll-animate")

    }
    
})
    
})