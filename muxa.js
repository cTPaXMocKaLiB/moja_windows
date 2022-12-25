let x = document.querySelector(".close")
let ok = document.querySelector(".ok")
let windowError = document.querySelector(".window")
let body = document.querySelector("body")
let error1 = document.querySelector(".error")
let error2 = document.querySelector(".error1")
let error3 = document.querySelector(".error2")
let error4 = document.querySelector(".error3")
let error5 = document.querySelector(".error4")
let muxaE = document.querySelector(".muxa")
let power = document.querySelector(".btn")
let startup = document.querySelector(".startup")
let load = document.querySelector(".loadscreen")
let bottom = document.querySelector(".menu")
let after = document.querySelector(".after") 
let popupMenu = document.querySelector(".startMenu") 
let menuButton = document.querySelector(".startBtn") 
let js = document.querySelector(".js") 
let jsON = false;
let jsIN = document.querySelector(".jsscreen")
let jsInp = document.querySelector(".jsConsole")
let jsOUT = document.querySelector(".jsConsoleOutput")
let consoleBtn = document.querySelector(".consoleButton")
let isMenuOpen = false;
let sounds = [error1, error2, error3, error4, error5]
let r = Math.floor(Math.random() * sounds.length )
let jsInpValue = jsInp.value

//muxa :')
function error() {
    sounds[4].play()
}

function muxa() {
    muxaE.play()
}

//____________________________________________________
power.addEventListener("click", function(e) {
    e.preventDefault()
    startup.volume = 0.1;
    startup.play()
    load.style.transition = "all 1s"
    for (let i = 0; i < 101; i++) {

         load.style.opacity+=0.01
    }
    bottom.style.display = "flex"
    js.style.display = "flex"
    setTimeout(() => {
        after.style.display = "block"
        load.style.display = "none"
        error()
    }, 4000);
})
x.addEventListener("click", function(e) {
    e.preventDefault()
    windowError.style.display = "none"
    sounds[r].play()
})

ok.addEventListener("click", function(e) {
    e.preventDefault()
    windowError.style.display = "none"
    sounds[r].play()
})

menuButton.addEventListener("click", function(e) {
    if (isMenuOpen == false) {
        e.preventDefault()
        popupMenu.style.display = "flex"
        isMenuOpen = true
    } else {
        popupMenu.style.display = "none"
        isMenuOpen = false;
    }
})

js.addEventListener("dblclick", function(e) {
    e.preventDefault()
    if (jsON == false) {
        jsIN.style.display = "block" 
        jsON = true;
    }
    else {
        jsON = false;
        jsIN.style.display = "none"
    }
})

consoleBtn.addEventListener("click", function(e) {
    e.preventDefault()
    jsInpValue = jsInp.value
    jsOUT.textContent = eval(jsInpValue)
})