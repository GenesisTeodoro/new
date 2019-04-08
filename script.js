var buttons = document.querySelectorAll(".button");

for(var i=0; i<buttons.length; i++){
    buttons[i].addEventListener("click", function click(){
        var numberDisplay = document.getElementById("Numbers");
        var memoryDisplay = document.getElementById("Memory");

        var clickButton = event.target || event.srcElement;
        
        clickButton.value == 'AC' ? clearDisplay() :
        clickButton.value == '←' ? backSpace() :
        clickButton.value == '=' ? equal() : 
        clickButton.value == 'BIN' ? convertBin() :
        clickButton.value == 'M+' ? mAdd(numberDisplay.value) :
        clickButton.value == 'M-' ? numberDisplay.value = memoryDisplay.value - numberDisplay.value :
        clickButton.value == 'MR' ? numberDisplay.value = memoryDisplay.value :
        clickButton.value == 'MC' ? memoryDisplay.value = "" : type();

        function clearDisplay(){
            numberDisplay.value = "";
        }

        function backSpace(){
            back = numberDisplay.value;
            numberDisplay.value = back.substring(0, back.length-1);
        }
        function equal(){
            let check = /\+{2,}|\-{2,}|\*{2,}|\/{2,}|\.{2,}|(\.)[0-9](\.)/;
            let check2 = /(\.)[+*/-]|[+*/-](\.)|\d{1,}/;
            check.test(numberDisplay.value) == true ? numberDisplay.value = 'Syntax Error': 
            check2.test(numberDisplay.value) == false ? numberDisplay.value = 'Syntax Error': 
            eval(numberDisplay.value);

            number = eval(numberDisplay.value).toString();
            number.length > 18 ? numberDisplay.value = parseFloat(number).toExponential(6) :
            numberDisplay.value = parseFloat(number);
            
            return clearNumbers=true;

        }
        function convertBin(){
            let check = /\D{1,}/;
            bin = parseInt(numberDisplay.value, 10);
            bin >= Math.pow(2,18) ? numberDisplay.value = 'Math Error' : 
            check.test(numberDisplay.value) == true ? numberDisplay.value = 'Syntax Error' :
            numberDisplay.value = bin.toString(2);

            return clearNumbers=true;
        }
        function type(){
            numbers = numberDisplay.value;
            numbers.length <= 18 ? numberDisplay.value += clickButton.value :
            numberDisplay.value != clickButton.value;
            if(clearNumbers==true){
                numberDisplay.value = '';
                clearNumbers=false;
                type();
            }
        }
        function mAdd(){
            number = numberDisplay.value;
            memoryDisplay.value = number;
            memory = parseInt(number) + parseInt(memoryDisplay.value);
            numberDisplay.value = memory;

            /*number.length > 5 ? memoryDisplay.value = parseFloat(number).toExponential(5) :
            '';*/
        }
    }); 
} 

