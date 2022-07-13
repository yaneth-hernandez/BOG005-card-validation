import validator from './validator.js';

//console.log(validator);

const getNumberValue = () =>{
    const input = document.getElementById('tdc')
    let getValue = input.value
        
    let valueArray = getValue
    
    return valueArray
}

const eventClickValidate = ()=> {
const btnValidate = document.getElementById('btn-validate')
    btnValidate.addEventListener('click',()=>{
        const creditCardNumber = getNumberValue()
        const validOrInvalidCardNumber = validator.isValid(creditCardNumber)
        
        if(validOrInvalidCardNumber){
            return validator.maskify(creditCardNumber)
        }else{
            return `Su tarjeta no es válida`
        }
    })
}

window.addEventListener('load', eventClickValidate())

