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
        console.log(`Current = ${currentBtnValue} ,previous = ${previousBtnValue}`);
    })
    
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
    }
    else if(operand === '-'){
        result = sub(Number(currentBtnValue),Number(previousBtnValue));
        currentOperand.innerText = result;
        previousOperand.innerText = '';
    }
    else if(operand === '*'){
        result = mul(Number(currentBtnValue),Number(previousBtnValue));
        currentOperand.innerText = result;
        previousOperand.innerText = '';
    }
    else if(operand === '÷'){
        if(currentBtnValue == '0' || previousBtnValue == '1')
        {
            currentOperand.innerText = 'ERROR';
            previousOperand.innerText = '';
        }
        else{
            result = div(Number(currentBtnValue),Number(previousBtnValue));
            currentOperand.innerText = result;
            previousOperand.innerText = '';
        }
        
    }
    else{
        return;
    }
})

AC.addEventListener('click',(e)=>{
    currentOperand.innerText = '';
    previousOperand.innerText = '';
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
