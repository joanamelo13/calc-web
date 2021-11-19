function clean(){
    document.getElementById('resultado').innerHTML = "";
}

function goback(){
    var result = document.getElementById('resultado').innerHTML;
    
    document.getElementById('resultado').innerHTML = result.substring(0, result.length -1);
}

function insert(numb){
    var digit = document.getElementById('resultado').innerHTML;
    
    if(digit.length < 8){
        document.getElementById('resultado').innerHTML = digit + numb;
    }
}

function calculate(){
    var result = document.getElementById('resultado').innerHTML;
    
    if(result){
        document.getElementById('resultado').innerHTML = eval(result);
    }
    
    else{
        document.getElementById('resultado').innerHTML = "ERROR";
    }

}
