document.querySelector("#button").onclick = function (){
    let temp = Number (document.querySelector("#temp").value);
    let escala = document.querySelector("#escala").value;
    let escalaDese = document.querySelector("#escalaDese").value;
    let resultado;
    let tempDese = document.querySelector("#tempDese");

    if(escala=='C'){
        if(escalaDese=='F'){
            resultado=temp*(9/5)+32;
        }else if(escalaDese=='K'){
            resultado=temp+273.15;
        }else if(escalaDese=='R'){
            resultado=temp*(9/5)+491.67;
        }else if(escalaDese=='C'){
            resultado=temp;
        }
    }else if(escala=='F'){
        if(escalaDese=='F'){
            resultado=temp;
        }else if(escalaDese=='K'){
            resultado=(temp-32)*(5/9)+273.15;
        }else if(escalaDese=='R'){
            resultado=temp+459.67;
        }else if(escalaDese=='C'){
            resultado=(temp-32)*(5/9);
        }
    }else if(escala=='K'){
        if(escalaDese=='F'){
            resultado=(temp-273.15)*(9/5)+32;
        }else if(escalaDese=='K'){
            resultado=temp;
        }else if(escalaDese=='R'){
            resultado=temp*(9/5);
        }else if(escalaDese=='C'){
            resultado=temp-273.15;
        }
    }else if(escala=='R'){
        if(escalaDese=='F'){
            resultado=temp-459.67;
        }else if(escalaDese=='K'){
            resultado=temp*5/9;
        }else if(escalaDese=='R'){
            resultado=temp;
        }else if(escalaDese=='C'){
            resultado=(temp-491.67)*(5/9);
        }
    }
    tempDese.setAttribute("placeholder", +resultado.toFixed(3));
    return false;
}