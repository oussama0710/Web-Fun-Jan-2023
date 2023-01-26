var Cookie=document.querySelector(".coockieBox")
var redD=document.querySelector(".red")
var blueD=document.querySelector(".blue")

var redD2=document.querySelector(".red2")
var blueD2=document.querySelector(".blue2")

var redD3=document.querySelector(".red3")
var blueD3=document.querySelector(".blue3")

var redD4=document.querySelector(".red4")
var blueD4=document.querySelector(".blue4")
function alerterBurbank(){
    alert("you clicked on Burbank")
}
function alerterChicago(){
    alert("you clicked on Chicago")
}
function alerterDallas(){
    alert("you clicked on Dallas")
}
function DeleteCookie(){
    Cookie.remove()
}
function pickUnit(element){
    if(element.value== "°F"){
        redD.innerText= (Math.ceil(parseInt(redD.innerText)*1.8+32)).toString() +"°";
        blueD.innerText= (Math.ceil(parseInt(blueD.innerText)*1.8 + 32)).toString() +"°";
        redD2.innerText= (Math.ceil(parseInt(redD2.innerText)*1.8+32)).toString() +"°";
        blueD2.innerText= (Math.ceil(parseInt(blueD2.innerText)*1.8 + 32)).toString() +"°";
        redD3.innerText= (Math.ceil(parseInt(redD3.innerText)*1.8+32)).toString() +"°";
        blueD3.innerText= (Math.ceil(parseInt(blueD3.innerText)*1.8 + 32)).toString() +"°";
        redD4.innerText= (Math.ceil(parseInt(redD4.innerText)*1.8+32)).toString() +"°";
        blueD4.innerText= (Math.ceil(parseInt(blueD4.innerText)*1.8 + 32)).toString() +"°";
    }else if(element.value== "°C"){
        redD.innerText= (Math.ceil((parseInt(redD.innerText)-32)/1.8)).toString() +"°";
        blueD.innerText= (Math.ceil((parseInt(blueD.innerText)-32)/1.8)).toString() +"°";
        redD2.innerText= (Math.ceil((parseInt(redD2.innerText)-32)/1.8)).toString() +"°";
        blueD2.innerText= (Math.ceil((parseInt(blueD2.innerText)-32)/1.8)).toString() +"°";
        redD3.innerText= (Math.ceil((parseInt(redD3.innerText)-32)/1.8)).toString() +"°";
        blueD3.innerText= (Math.ceil((parseInt(blueD3.innerText)-32)/1.8)).toString() +"°";
        redD4.innerText= (Math.ceil((parseInt(redD4.innerText)-32)/1.8)).toString() +"°";
        blueD4.innerText= (Math.ceil((parseInt(blueD4.innerText)-32)/1.8)).toString() +"°";
    }
}