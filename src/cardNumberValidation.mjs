import validator from './validator.js';

//console.log(validator);

const cardNumberValidation = {
  keepMessage : document.getElementById('show-number-id'),
  cardValidationFrom : document.getElementById('validate-card-id'),
  btnValidate : document.getElementById('btn-validate'),
  btnCloseValidate : document.getElementById('close-validate-card-id'),
  
  generateValidationMessage : (cardNumber)=>{
        let validOrInvalidCardNumber = validator.isValid(cardNumber)
        if(validOrInvalidCardNumber){
          cardNumberValidation.keepMessage.value = `Su número de tarjeta ${validator.maskify(cardNumber)} ha sido validada con éxito`
        }else{
          cardNumberValidation.keepMessage.value = `Su tarjeta no es válida`
        }
   },

  showCardValidation:()=>{
    cardNumberValidation.cardValidationFrom.classList.toggle('validate-card-show')
  },

  hideCardValidation:()=>{
    cardNumberValidation.cardValidationFrom.classList.remove('validate-card-show')
  },

  eventClickValidate : ()=> {
    cardNumberValidation.btnValidate.addEventListener('click',()=>{
      const cardNumber = document.getElementById('tdc').value
       cardNumberValidation.generateValidationMessage(cardNumber)
   })
  },

  eventCloseValidationWindow:function () {
    cardNumberValidation.btnCloseValidate.addEventListener('click',cardNumberValidation.hideCardValidation)
  }
}

export default cardNumberValidation
//tarjeta válida: 676767676





