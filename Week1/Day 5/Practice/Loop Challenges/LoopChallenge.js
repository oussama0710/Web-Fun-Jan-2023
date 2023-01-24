function odds(){
    for(var i=1;i<=20;i++){
        if(i%2!=0){
            console.log(i);
        }
    }
    console.log("odds");
}
odds();
console.log("-------------------------------------");
function dec3(){
    for(var i=100;i>=0;i--){
        if(i%3==0){
            console.log(i)
        }
    }
    console.log("dec3");
}
dec3();
console.log("-------------------------------------");

function sequence(){
    var i=4;
    while(i>=-3.5){
        console.log(i);
        i-=1.5;
    }
    console.log("sequence");
}
sequence();
console.log("-------------------------------------");
function sigma(){
    for(var i=1;i<=100;i++){
        i+=i;
    }
    console.log(i);
    console.log("sigma");
}
sigma();
console.log("-------------------------------------");
function factorial(){
    for(var i=1;i<=12;i++){
        i*=i;
    }
    console.log(i);
    console.log("factorial");
}
factorial();