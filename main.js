function clickButton(btn){
    let number = btn.innerHTML;
    let result = document.getElementById("window");
    let lastNumber = result.innerHTML.substr( -1, 1);

    if (number == "AC") {
        result.innerHTML = "";
    } else if (number == "=") {
        if (result.innerHTML == "") {
            result.innerHTML = "";
        } else
            result.innerHTML = eval(result.innerHTML);
    } else if (result.innerHTML == "") {
        if (number == "00" || number == "+" || number == "-" || number == "*" || number == "/" || number == "." ) {
            result.innerHTML = "";
        } else {
            result.innerHTML += number;
        }
    } else if (result.innerHTML == "0") {
        if(number == "0" || number == "00") {
            result.innerHTML = "0";
        } else if (number == "1" || number == "2" || number == "3" || number == "4" || number == "5" || number == "6" || number == "7" || number == "8" || number == "9"){
            result.innerHTML = number;
        } else {
            result.innerHTML += number;
        }
    } else if(lastNumber == "+" || lastNumber == "-" || lastNumber == "*" || lastNumber == "/" || lastNumber == ".") {
        if (number == "+" || number == "-" || number == "*" || number == "/" || number == ".") {
            lastNumber = number;
        } else if (number == "0" || number == "00") {
            lastNumber = lastNumber;
        } else {
             result.innerHTML += number;
        }
    }else {
        result.innerHTML += number;
    }
}




    
