var dis=document.querySelector("#display");
function press(element){
    console.log(dis.innerText)
    if(dis.innerText=="0"){
        dis.innerText=element;
    }
    else{
        dis.innerText+=element;
    }
}
function clr(){
    dis.innerText=0;
}
var temp=0;
function setOP(operator){
    temp= dis.innerText + operator;
    dis.innerText=0
}

function calculate(){
    if (temp!=0){
        temp+= dis.innerText;
        temp=eval(temp);
        dis.innerText=temp
    }
    else{
        dis.innerText=0
    }
}