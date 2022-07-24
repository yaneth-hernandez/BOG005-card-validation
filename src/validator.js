const validator = {
  isValid: (creditCardNumber) => {
   if(creditCardNumber != null && creditCardNumber!==''){
      const arrayReverse = creditCardNumber.split('').reverse()

      const indicesMultipliedByTwo = arrayReverse.map((num,index)=>{
         return index % 2 !== 0 ? num*2 : parseInt(num)
      });

      const addElem = indicesMultipliedByTwo.map((elem)=>{
            let arrayString = []
            let addArrayElemets = 0

            if(elem >= 10){
                arrayString = elem.toString().split('')
                let mapArrayString = arrayString.map((val)=>{return parseInt(val)})
                addArrayElemets = mapArrayString.reduce((a,b)=> a+b, 0)
                return addArrayElemets
            }else{
                return elem
            }
        })

     let cardValidation = addElem.reduce((a,b)=> a+b, 0)
     return cardValidation % 10 === 0
   }
    return false
  },

  maskify: (creditCardNumber) => {
    //busco la última posición del array
    let lastPosition = creditCardNumber.length

    //busco la nueva primera posición del array
    let newStartingPosition = creditCardNumber.length-4

    //Genero nuevo array
    let mostrar = creditCardNumber.split('').slice(newStartingPosition, lastPosition)

    let transformElement = creditCardNumber.split('').slice(0,newStartingPosition).map(()=>{
       return '#'
    })
    return  `${transformElement.join('')}${mostrar.join('')}`
  }
};

export default validator;
