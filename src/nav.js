const content = document.querySelector('#content')

const loadNav = function () {
    content.classList.add('body');
    const header = document.createElement('div');
        header.id = 'header-div';
        const name = document.createElement('div');
            name.id = 'name-div'
            name.innerHTML = "Lenape Pizza"
        header.appendChild(name)
        const nav = document.createElement('nav');
            const navList = document.createElement('ul');
            navList.classList.add('nav-list');
                const homeLi = document.createElement('li'); homeLi.innerHTML = "Home"; homeLi.id = "homeTab";
                const menuLi = document.createElement('li'); menuLi.innerHTML = "Menu"; menuLi.id = "menuTab";
                const aboutLi = document.createElement('li'); aboutLi.innerHTML = "About"; aboutLi.id = "aboutTab";
                const contactLi = document.createElement('li'); contactLi.innerHTML = "Contact"; contactLi.id = "contactTab";
                navList.appendChild(homeLi); navList.appendChild(menuLi); navList.appendChild(aboutLi); navList.appendChild(contactLi);
            nav.appendChild(navList)
        header.appendChild(nav)
    content.appendChild(header)
}

export { loadNav }