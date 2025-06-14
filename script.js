const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
let con=document.querySelector(".elem-con");
let fixed=document.querySelector("#fixed");
con.addEventListener("mouseenter",function(){
fixed.style.display="block"
})
con.addEventListener("mouseleave",function(){
    fixed.style.display="none"
    })
// let elem1=document.querySelector(".elem")
// elem1.addEventListener("mouseenter",function(){
//     let img=elem1.getAttribute("data-img")
//     fixed.style.backgroundImage=`url(${img})`
// })
let elems=document.querySelectorAll(".elem")
elems.forEach(function(e){
   e.addEventListener("mouseenter",function(){
        let image=e.getAttribute("data-img")
        fixed.style.backgroundImage=`url(${image})`

    })
console.log(e)})
    
let menu=document.querySelector("nav h3");
let full= document.querySelector("#full-scr")
let navimg=document.querySelector("nav img")
let flag=0;
menu.addEventListener("click",function(){
    if(flag==0){
        full.style.top=0
        navimg.style.opacity=0
        flag=1
    }
    else{
        
            full.style.top="-100%";
            navimg.style.opacity=1;
            flag=0;
        
    }
})

var loader =document.querySelector(".loader")
setTimeout(function(){
    loader.style.top="-100%"
},4000)
