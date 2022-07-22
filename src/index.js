import validator from './validator.js';

//console.log(validator);

const catalogs = {
  cardValidation : document.getElementById('validate-card-id'),
  catalogClothes: document.getElementById('catalog-clothes-id'),
  catalogShoes: document.getElementById('catalog-shoes-id'),

  getCatalogs: (category) => {
    return document.getElementById(`catalog-${category}-id`)
  },

  hideCatalogs: (category)=>{
    let catalogCategories = catalogs.getCatalogs(category.toLowerCase())
    catalogCategories.classList.remove(`show-catalog-${category.toLowerCase()}`)
  },

  showCatalogs:(category)=>{
    let catalogCategories = catalogs.getCatalogs(category.toLowerCase())
    catalogCategories.classList.toggle(`show-catalog-${category.toLowerCase()}`)
  },

  showCardValidation:()=>{
     catalogs.cardValidation.classList.toggle('validate-card-show')
  },

  hideCardValidation:()=>{
    catalogs.cardValidation.classList.remove('validate-card-show')
  },
}


const chooseCategories = (event) => {
  const category = event.target.textContent;

  showOrHideNavBar()
  catalogs.hideCatalogs('Clothes')
  catalogs.hideCatalogs('Shoes')
  catalogs.hideCardValidation()
  catalogs.showCatalogs(category)

}

const showOrHideNavBar = ()=>{
  const visibleNavBarr = document.getElementById('nav-bar-elements-id')
  visibleNavBarr.classList.toggle('show-nav-bar-elements')
}

const eventNavBarr = ()=>{
  const btnProduct = document.getElementById('product-id')
  btnProduct.addEventListener('click', showOrHideNavBar)

  const btnCloseBarr = document.getElementById('btn-close-nav-barr-id')
  btnCloseBarr.addEventListener('click', showOrHideNavBar)

  const btnClothes = document.getElementById('clothes-category')
  btnClothes.addEventListener('click',(event)=>{
    chooseCategories(event)
  })
  const btnShoes = document.getElementById('shoes-category')
  btnShoes.addEventListener('click',(event)=>{
    chooseCategories(event)
  })
}

const actionEventsInCatalogs = (event, category) =>{
  const currentElementOfTheEvent = event.target.id
    catalogs.hideCatalogs(category)

  if(currentElementOfTheEvent.includes('img')){
    catalogs.showCardValidation()
  }
}

const eventsInCatalogs = ()=> {
  const eventCloseCatalogClothes = catalogs.catalogClothes
  eventCloseCatalogClothes.addEventListener('click',(e)=>{
    actionEventsInCatalogs(e, 'clothes')
  })

  const eventCloseCatalogShoes = catalogs.catalogShoes
  eventCloseCatalogShoes.addEventListener('click',(e)=>{
    actionEventsInCatalogs(e, 'shoes')
  })
}

const getNumberValue = () =>{
    const input = document.getElementById('tdc')
    let getValue = input.value
    let valueArray = getValue

    return valueArray
}

const keepMessageValidate = ()=>{
  const creditCardNumber = getNumberValue()
  const validOrInvalidCardNumber = validator.isValid(creditCardNumber)
  const keepMessage = document.getElementById('show-number-id')


  if(validOrInvalidCardNumber){
    keepMessage.textContent = `Su número de tarjeta ${validator.maskify(creditCardNumber)} ha sido validada con éxito`

  }else{
    keepMessage.textContent = `Su tarjeta no es válida`

  }
}

const eventClickValidate = ()=> {
const btnValidate = document.getElementById('btn-validate')
    btnValidate.addEventListener('click',()=>{
        // const creditCardNumber = getNumberValue()
        // const validOrInvalidCardNumber = validator.isValid(creditCardNumber)
        //
        // if(validOrInvalidCardNumber){
        //     return validator.maskify(creditCardNumber)
        // }else{
        //     return `Su tarjeta no es válida`
        // }
      keepMessageValidate()
    })
}
//tarjeta válida: 676767676


window.addEventListener('load',eventNavBarr(),eventsInCatalogs(), eventClickValidate())

