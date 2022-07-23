import validator from './validator.js';

//console.log(validator);

window.onload=()=>{
  navigationBar.eventNavBarr()
  catalogs.eventsInCatalogs()
  cardNumberValidation.eventClickValidate()
  cardNumberValidation.eventCloseValidationWindow()
}

const navigationBar ={
  visibleNavBarr : document.getElementById('nav-bar-elements-id'),
  btnProduct : document.getElementById('product-id'),
  btnCloseBarr : document.getElementById('btn-close-nav-barr-id'),
  btnClothes : document.getElementById('clothes-category'),
  btnShoes : document.getElementById('shoes-category'),

    showOrHideNavBar : ()=>{
      navigationBar.visibleNavBarr.classList.toggle('show-nav-bar-elements')
    },
    chooseCategoriesInNavBarr : (event) => {
      const category = event.target.textContent;

      navigationBar.showOrHideNavBar()
      catalogs.hideCatalogs('Clothes')
      catalogs.hideCatalogs('Shoes')
      cardNumberValidation.hideCardValidation()
      catalogs.showCatalogs(category)
  },
  eventNavBarr : ()=> {
     navigationBar.btnProduct.addEventListener('click', navigationBar.showOrHideNavBar)

     navigationBar.btnCloseBarr.addEventListener('click', navigationBar.showOrHideNavBar)

     navigationBar.btnClothes.addEventListener('click', (event) => {
       navigationBar.chooseCategoriesInNavBarr(event)
    })

     navigationBar.btnShoes.addEventListener('click', (event) => {
      navigationBar.chooseCategoriesInNavBarr(event)
    })
  },
}


const catalogs = {
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

  actionForEventsInCatalogs :(event, category) =>{
    const currentElementOfTheEvent = event.target.id
    catalogs.hideCatalogs(category)

    if(currentElementOfTheEvent.includes('img')){
      cardNumberValidation.showCardValidation()
    }
  },

   eventsInCatalogs : ()=> {
    const eventCloseCatalogClothes = catalogs.catalogClothes
    eventCloseCatalogClothes.addEventListener('click',(e)=>{
      catalogs.actionForEventsInCatalogs(e, 'clothes')
    })

    const eventCloseCatalogShoes = catalogs.catalogShoes
    eventCloseCatalogShoes.addEventListener('click',(e)=>{
      catalogs.actionForEventsInCatalogs(e, 'shoes')
    })
  }
}

const cardNumberValidation = {
  keepMessage : document.getElementById('show-number-id'),
  cardValidation : document.getElementById('validate-card-id'),
  btnValidate : document.getElementById('btn-validate'),
  btnCloseValidate : document.getElementById('close-validate-card-id'),


  generateValidationMessage : (cardNumber)=>{

        const validOrInvalidCardNumber = validator.isValid(cardNumber)
        if(validOrInvalidCardNumber){
          cardNumberValidation.keepMessage.value = `Su número de tarjeta ${validator.maskify(cardNumber)} ha sido validada con éxito`
        }else{
          cardNumberValidation.keepMessage.value = `Su tarjeta no es válida`
        }
   },

  showCardValidation:()=>{
    cardNumberValidation.cardValidation.classList.toggle('validate-card-show')
  },

  hideCardValidation:()=>{
    cardNumberValidation.cardValidation.classList.remove('validate-card-show')
  },

  eventClickValidate : ()=> {
    cardNumberValidation.btnValidate.addEventListener('click',()=>{
      const cardNumber = document.getElementById('tdc').value
       cardNumberValidation.generateValidationMessage(cardNumber)
   })
  },

  eventCloseValidationWindow:() =>{
    cardNumberValidation.btnCloseValidate.addEventListener('click',cardNumberValidation.hideCardValidation)
  }
}

//tarjeta válida: 676767676





