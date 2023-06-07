const currentOperand = document.querySelector(".current-operand");
const previousOperand = document.querySelector(".previous-operand");
const numberBtns = document.querySelectorAll("[data-number]");
const operationBtns = document.querySelectorAll("[data-operand");
var currentBtnValue = 0;
var previousBtnValue = 0;
var result = 0;
var operand;
var num;
const equals = document.querySelector("[data-equals");
const AC = document.querySelector('[data-ac]');
const DEL = document.querySelector("[data-delete");
const point = document.querySelector("[data-point = '.']");
var pointValue;


numberBtns.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        num = btn.getAttribute("data-number");
        
        // only 8 digits are allowed
        if(currentOperand.innerText.length<8){
            currentOperand.innerText += num;
            currentBtnValue = currentOperand.innerText;
            // console.log(currentBtnValue);
        }else{
            return;
        }
        // console.log(`Current = ${currentBtnValue} ,previous = ${previousBtnValue}`);
    })
    
})

point.addEventListener('click',(e)=>{
    pointValue= point.getAttribute("data-point");
    if(currentBtnValue == ''){
        currentBtnValue += pointValue
        currentOperand.innerText = currentBtnValue;
    }
    else if(currentBtnValue.split('').includes('.')){
        return
    }else{
        currentBtnValue += pointValue
        currentOperand.innerText = currentBtnValue;
    }
    
})

operationBtns.forEach((op)=>{
    op.addEventListener("click",(e)=>{
        operand = op.getAttribute("data-operand");
        if(currentOperand.innerText.length>=1){
            
            previousOperand.innerText = currentBtnValue + operand;
            currentOperand.innerText = '';
            previousBtnValue = currentBtnValue;
        }
        else{
            return
        }
        
    })
})

equals.addEventListener('click',(e)=>{
    if(operand === '+'){
        result = add(Number(currentBtnValue),Number(previousBtnValue));
        currentOperand.innerText = result;
        previousOperand.innerText = '';
        previousBtnValue = 0;
        currentBtnValue =  result;     
    }
    else if(operand === '-'){
        result = sub(Number(currentBtnValue),Number(previousBtnValue));
        currentOperand.innerText = result;
        previousOperand.innerText = '';
        previousBtnValue = 0;
        currentBtnValue =  result;
    }
    else if(operand === '*'){
        result = mul(Number(currentBtnValue),Number(previousBtnValue));
        currentOperand.innerText = result;
        previousOperand.innerText = '';
        previousBtnValue = 0;
        currentBtnValue =  result;
    }
    else if(operand === '÷'){
        if(currentBtnValue == '0')
        {
            currentOperand.innerText = 'ERROR';
            previousOperand.innerText = '';
        }
        else{
            result = div(Number(currentBtnValue),Number(previousBtnValue));
            currentOperand.innerText = Math.round(result * 100)/100;
            previousOperand.innerText = '';
            previousBtnValue = 0;
            currentBtnValue =  Math.round(result * 100)/100;
        }
        
    }
    else{
        return;
    }
})

AC.addEventListener('click',(e)=>{
    currentOperand.innerText = '';
    previousOperand.innerText = '';
    currentBtnValue = 0;
    previousBtnValue = 0;
});

DEL.addEventListener('click',(e)=>{
    currentOperand.textContent = currentOperand.textContent.toString().slice(0, -1)
    currentBtnValue = currentOperand.textContent;
})
function add(currentBtnValue,previousBtnValue){
    return parseFloat(previousBtnValue + currentBtnValue);
}

function sub(currentBtnValue,previousBtnValue){
    return parseFloat(previousBtnValue - currentBtnValue);
}

function mul(currentBtnValue,previousBtnValue){
    return parseFloat(previousBtnValue * currentBtnValue);
}

function div(currentBtnValue,previousBtnValue){
    return parseFloat(previousBtnValue / currentBtnValue);
}


// Keyboard Listener

document.addEventListener('keydown',(e)=>{
    // console.log(e.key);
    if(e.key >= 0 && e.key <=9)
    {
        if(currentOperand.innerText.length<8){
            currentOperand.innerText += e.key;
            currentBtnValue = currentOperand.innerText;
            // console.log(currentBtnValue);
            // console.log(`Current = ${currentBtnValue} ,previous = ${previousBtnValue}`);
        }else{
            return;
        }
    }
    else if(e.key=='+' ||e.key=='-' || e.key=='*' ||e.key=='/'){
        operand = e.key;
        if(currentOperand.innerText.length>=1){
            if(operand == '/'){
                previousOperand.innerText = currentBtnValue + '÷';
                currentOperand.innerText = '';
                previousBtnValue = currentBtnValue;
                // console.log(`Current = ${currentBtnValue} ,previous = ${previousBtnValue}`);
            }
            else{
                previousOperand.innerText = currentBtnValue + operand;
                currentOperand.innerText = '';
                previousBtnValue = currentBtnValue;
                // console.log(`Current = ${currentBtnValue} ,previous = ${previousBtnValue}`);
            }
           
        }
        else{
            return
        }
    }
    else if(e.key == '.'){
        if(currentBtnValue == ''){
            currentBtnValue += e.key
            currentOperand.innerText = currentBtnValue;
        }
        else if(currentBtnValue.split('').includes('.')){
            return
        }else{
            currentBtnValue += e.key
            currentOperand.innerText = currentBtnValue;
        }
    }
    else if(e.key == '='){
        if(operand === '+'){
            result = add(Number(currentBtnValue),Number(previousBtnValue));
            currentOperand.innerText = result;
            previousOperand.innerText = '';
            previousBtnValue = 0;
            currentBtnValue =  result;     
        }
        else if(operand === '-'){
            result = sub(Number(currentBtnValue),Number(previousBtnValue));
            currentOperand.innerText = result;
            previousOperand.innerText = '';
            previousBtnValue = 0;
            currentBtnValue =  result;
        }
        else if(operand === '*'){
            result = mul(Number(currentBtnValue),Number(previousBtnValue));
            currentOperand.innerText = result;
            previousOperand.innerText = '';
            previousBtnValue = 0;
            currentBtnValue =  result;
            
        }
        else if(operand === '/'){
            if(currentBtnValue == '0')
            {
                currentOperand.innerText = 'ERROR';
                previousOperand.innerText = '';
            }
            else{
                result = div(Number(currentBtnValue),Number(previousBtnValue));
                currentOperand.innerText = Math.round(result * 100)/100;
                previousOperand.innerText = '';
                previousBtnValue = 0;
                currentBtnValue =  Math.round(result * 100)/100;
                
            }
            
        }
        else{
            return;
        }
    }
    else if(e.key == 'Escape'){
        currentOperand.innerText = '';
        previousOperand.innerText = '';
        currentBtnValue = 0;
        previousBtnValue = 0;
    }
    else if(e.key == 'Backspace'){
        currentOperand.textContent = currentOperand.textContent.toString().slice(0, -1)
        currentBtnValue = currentOperand.textContent;
    }
    else{
        return;
    }
})