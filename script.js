import{CookieManager} from "./CookieManager.js";
import{FormValidator} from "./FormValidator.js";
import{ElementForAccountList} from "./ElementForAccountList.js";
import{AjaxManager} from "./AjaxManager.js";

const storage = new CookieManager();

const addButton = document.querySelector('.add button');

addButton.addEventListener('click',()=>{
    let pseudo = document.getElementById('pseudo').value;
    let password = document.getElementById('password').value;
    let formValidator = new FormValidator(pseudo,password)
    if(formValidator.validPseudo === true && formValidator.validPseudo === true)
    {
        storage.addAccountToList(pseudo,password)
    }
    //document.querySelector('.active').innerText = "activé";
})