import cardNumberValidation from './cardNumberValidation.mjs'


const catalogs = {
  catalogClothes: document.getElementById('catalog-clothes-id'),
  catalogShoes: document.getElementById('catalog-shoes-id'),
  

  getCatalogs: (category) => {
    return document.getElementById(`catalog-${category}-id`)
  },

  hideCatalogs: function (category){
    let catalogCategories = this.getCatalogs(category.toLowerCase())
    catalogCategories.classList.remove(`show-catalog-${category.toLowerCase()}`)
  },

  showCatalogs: function (category){
    let catalogCategories = this.getCatalogs(category.toLowerCase())
    catalogCategories.classList.toggle(`show-catalog-${category.toLowerCase()}`)
  },

  actionForEventsInCatalogs : function (event, category) {
     if(event.target.nodeName === 'IMG'|| event.target.nodeName === 'FIGURE' || event.target.nodeName === 'FIGCAPTION'){
      this.hideCatalogs(category)
      cardNumberValidation.showCardValidation()
     }else if(event.target.nodeName === 'DIV' && event.target.id === `close-catalog-${category}-id`){
      this.hideCatalogs(category)
    }
  },

   eventsInCatalogs: function () {
    const eventCloseCatalogClothes = this.catalogClothes
    eventCloseCatalogClothes.addEventListener('click',(e)=>{
      this.actionForEventsInCatalogs(e, 'clothes')
    })

    const eventCloseCatalogShoes = this.catalogShoes
    eventCloseCatalogShoes.addEventListener('click',(e)=>{
      this.actionForEventsInCatalogs(e, 'shoes')
    })
  }
}

export default catalogs

//tarjeta válida: 676767676





// actionEventContainers(data, srcImage, section, event){
//   if (event.target.nodeName === "FIGURE" || event.target.nodeName === "FIGCAPTION" || event.target.nodeName === "IMG") {
//     data.forEach((elem) => {
//         if(elem.id === parseInt(event.target.dataset.id)){
//             this.createCharacterContainer(elem, srcImage, section)
//             this.hiddenDisplayList()
//             this.hiddenHeader()
//             this.hiddenFooter()
//             this.displayDetailsCharacters()
//         }
//     })
// }
//  }

//  eventContainers(data, srcImage, section){
//     this.containerCharacters.addEventListener('click',(event)=>{
//         this.actionEventContainers(data, srcImage, section, event)
//     })
//  }