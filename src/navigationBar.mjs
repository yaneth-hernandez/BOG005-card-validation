import catalogs from './catalogs.mjs';
import cardNumberValidation from './cardNumberValidation.mjs'

//console.log(validator);

const navigationBar ={
  visibleNavBarr : document.getElementById('nav-bar-elements-id'),
  btnProduct : document.getElementById('product-id'),
  btnCloseBarr : document.getElementById('btn-close-nav-barr-id'),
  btnClothes : document.getElementById('clothes-category'),
  btnShoes : document.getElementById('shoes-category'),
  btnHome : document.getElementById('home-id'),
  btnBlog : document.getElementById('blog-id'),
  visibleBlog : document.getElementById('catalog-blog-id'),
  btnCloseBlog : document.getElementById('close-catalog-blog-id'),
  

    showOrHideNavBar : ()=>{
      navigationBar.visibleNavBarr.classList.toggle('show-nav-bar-elements')
    },
    chooseCategoriesInNavBarr : (event) => {
      const category = event.target.textContent;

      navigationBar.showOrHideNavBar()
      catalogs.hideCatalogs('Clothes')
      catalogs.hideCatalogs('Shoes')
      catalogs.hideCatalogs('Blog')
      cardNumberValidation.hideCardValidation()
      catalogs.showCatalogs(category)
  },
  showBlog: ()=>{
    navigationBar.visibleBlog.classList.toggle('show-catalog-blog')
    catalogs.hideCatalogs('Clothes')
    catalogs.hideCatalogs('Shoes')
    cardNumberValidation.hideCardValidation()
  },
  hiddenBlog: ()=>{
    navigationBar.visibleBlog.classList.remove('show-catalog-blog')
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

    navigationBar.btnHome.addEventListener('click', ()=>{
      catalogs.hideCatalogs('Clothes')
      catalogs.hideCatalogs('Shoes')
      navigationBar.hiddenBlog()
      cardNumberValidation.hideCardValidation()
    })

    navigationBar.btnBlog.addEventListener('click',()=>{
      navigationBar.showBlog()
    })

    navigationBar.btnCloseBlog.addEventListener('click', ()=>{
      navigationBar.hiddenBlog()
    })
  },

  
  
}
export default navigationBar;



