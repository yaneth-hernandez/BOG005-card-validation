import catalogs from './catalogs.mjs';
import cardNumberValidation from './cardNumberValidation.mjs'

//console.log(validator);

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
export default navigationBar;



