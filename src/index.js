import { loadNav } from './nav';
import { loadHome } from './home';
import { loadMenu } from './menu';
import { loadAbout } from './about';
import { loadContact } from './contact';

loadNav();
loadHome();

const content = document.querySelector('#content')

function removeAllChildNodes(parent) {
    let main = document.getElementById("main");
    console.log(parent.main)
    content.removeChild(main);
}

const homeTab = document.querySelector("#homeTab"); homeTab.addEventListener("click", function(){
    removeAllChildNodes(content); 
    loadHome();
});
const menuTab = document.querySelector("#menuTab"); menuTab.addEventListener("click", function(){
    removeAllChildNodes(content); 
    loadMenu();
});
const aboutTab = document.querySelector("#aboutTab"); aboutTab.addEventListener("click", function(){
    removeAllChildNodes(content); 
    loadAbout();
});
const contactTab = document.querySelector("#contactTab"); contactTab.addEventListener("click", function(){
    removeAllChildNodes(content); 
    loadContact();
});
