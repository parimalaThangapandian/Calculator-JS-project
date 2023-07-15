var a="";
function clearvar() {
    a="0";
    document.getElementById("p1").innerHTML= "0";
}
 

function display(value) {
    a+=value;
    document.getElementById("p1").innerHTML=a;
}
 

function calculate() {
    var p = a;
    var q = eval(p);
    document.getElementById("p1").innerHTML=q;
    a=q;
}
function back(){
    if(a.length!=1){
    a=a.slice(0,-1)
    document.getElementById("p1").innerHTML=a;
    }
    else{
        a="0"
        document.getElementById("p1").innerHTML=a;
    }
}