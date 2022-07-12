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

        if(validOrInvalidCardNumber === true){
            console.log(validator.maskify(creditCardNumber))
        }else{
            console.log(`Su tarjeta no es válida`)
        }
    })
}

eventClickValidate()

