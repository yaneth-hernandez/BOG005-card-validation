import validator from './validator.js';

//console.log(validator);

//SECCIÓN MODALES CATÁLOGOS Y VALIDACIÓN DE TARJETA

//Objeto para guardar los datos de las secciones catálogos y validación de tarjeta,
// mostrarlas, ocultarlas,ejecutar acciones y eventos
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

  actionForEventsInCatalogs :(event, category) =>{
    const currentElementOfTheEvent = event.target.id
    catalogs.hideCatalogs(category)

    if(currentElementOfTheEvent.includes('img')){
      catalogs.showCardValidation()
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
//FIN SECCIÓN MODALES CATÁLOGOS Y VALIDACIÓN DE TARJETA


//BARRA DE NAVEGACIÓN

//Muestra u oculta barra de navegación
const showOrHideNavBar = ()=>{
  const visibleNavBarr = document.getElementById('nav-bar-elements-id')
  visibleNavBarr.classList.toggle('show-nav-bar-elements')
}

//Con la barra de navegación mostrada, muestra las categorías de productos,
//Se pueden seleccionar las categorías
const chooseCategoriesInNavBarr = (event) => {
  const category = event.target.textContent;

  showOrHideNavBar()
  catalogs.hideCatalogs('Clothes')
  catalogs.hideCatalogs('Shoes')
  catalogs.hideCardValidation()
  catalogs.showCatalogs(category)
}

//Se generan los eventos de la barra de navegación
const eventNavBarr = ()=>{
  const btnProduct = document.getElementById('product-id')
  btnProduct.addEventListener('click', showOrHideNavBar)

  const btnCloseBarr = document.getElementById('btn-close-nav-barr-id')
  btnCloseBarr.addEventListener('click', showOrHideNavBar)

  const btnClothes = document.getElementById('clothes-category')
  btnClothes.addEventListener('click',(event)=>{
    chooseCategoriesInNavBarr(event)
  })
  const btnShoes = document.getElementById('shoes-category')
  btnShoes.addEventListener('click',(event)=>{
    chooseCategoriesInNavBarr(event)
  })
}
//FIN BARRA DE NAVEGACIÓN

//OBTENCIÓN Y VALIDACIÓN DE TARJETA

//Obtiene y retorna el número
const getNumberValue = () =>{
    const input = document.getElementById('tdc')
    let getValue = input.value
    let valueArray = getValue

    return valueArray
}

//Evalúa el número y muestra si es valido, recibe la función isValid
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

//Genera el evento para mostrar si la targeta es válida o no
const eventClickValidate = ()=> {
const btnValidate = document.getElementById('btn-validate')
    btnValidate.addEventListener('click',()=>{
      keepMessageValidate()
    })
}
//tarjeta válida: 676767676


window.addEventListener('load',eventNavBarr(),catalogs.eventsInCatalogs(), eventClickValidate())

