import navigationBar from './navigationBar.mjs'
import catalogs from './catalogs.mjs'
import cardNumberValidation from './cardNumberValidation.mjs'


//console.log(validator);

window.onload=()=>{
  navigationBar.eventNavBarr()
  catalogs.eventsInCatalogs()
  cardNumberValidation.eventClickValidate()
  cardNumberValidation.eventCloseValidationWindow()

}





