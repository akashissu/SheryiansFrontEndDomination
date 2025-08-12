//Only For One Element

// var h1text = document.querySelector("#firsth1").textContent


// var splitedText = h1text.split(" ")
// var clutter = ""

// splitedText.forEach(function(elem){
//     clutter += `<span>${elem}</span>`
// })

// document.querySelector("#firsth1").innerHTML = clutter


var allH1 = document.querySelectorAll("#page2 h1")

allH1.forEach(function(elem){

    var clutter = ""
    var h1Text = elem.textContent
    var splittedText = h1Text.split("")
    splittedText.forEach(function(e){
       clutter += `<span>${e}</span>`
    })
    elem.innerHTML = clutter

})


gsap.to("#page2 h1 span",{
    color:"#E3E3C4",
    stagger:0.1,
    scrollTrigger:{
        trigger:"#page2 h1",
        scroller:"body",
        markers:true,
        start:"top 50%",
        end:"top 0%",
        scrub:2
    }
})

