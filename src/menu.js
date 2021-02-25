const content = document.querySelector('#content')

const loadMenu = function () {
    content.classList.add('body');
    const main = document.createElement('div'); main.id = "main"; 
        const menu = document.createElement('div'); menu.id = "menu-container";
            const menuGrid = document.createElement('div'); menuGrid.id = "menu-grid";
                let menuItems = [ 
                    ["Marinara", "San Marzano Tomato Sauce | Garlic | Oregano | Extra Virgin Olive Oil", "12\" - $12 | 16\" - $18"],
                    ["Hawaiian", "Cooked Ham | Pineapple Slices | Red Sauce | Fresh Mozzarella", "12\" - $14 | 16\" - $20"],
                    ["Buffalo Chicken", "Grilled Chicken | Buffalo Sauce | Fresh Mozzarella", "12\" - $14 | 16\" - $20"],
                    ["Meat-Lovers", "Spicy Pepperoni | Sausage Bits | Crispy Bacon | Fresh Mozzarella", "12\" - $16 | 16\" - $22"]
                ];
                for (let i = 0; i < menuItems.length; i++){
                    let item = document.createElement('div'); item.classList.add('menu-item');
                    let title = document.createElement('h1'); title.classList.add('item-name'); title.innerHTML = menuItems[i][0];
                    let description = document.createElement('h3'); description.classList.add('item-description'); description.innerHTML = menuItems[i][1];
                    let price = document.createElement('h2'); price.classList.add('item-price'); price.innerHTML = menuItems[i][2];
                    item.appendChild(title); item.appendChild(description); item.appendChild(price);
                    menuGrid.appendChild(item);
                }
            menu.appendChild(menuGrid);
        main.appendChild(menu)
    content.appendChild(main);
}

export {loadMenu};