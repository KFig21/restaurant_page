const content = document.querySelector('#content')

const loadHome = function () {
    content.classList.add('body');
    const main = document.createElement('div'); main.id = "main"; 
        const home = document.createElement('div'); home.id = "home-container";
            const homeText = document.createElement('div'); homeText.id = "home-text";
                const homeText_1 = document.createElement('h2');
                    homeText_1.classList.add("home-text-title");
                    homeText_1.innerHTML = "Voted #1 Pizza in the city";
                const homeText_2 = document.createElement('h2');
                    homeText_2.classList.add("home-text-subtitle");
                    homeText_2.innerHTML = "Join us for your next slice!";
                homeText.appendChild(homeText_1);
                homeText.appendChild(homeText_2);
            home.appendChild(homeText);
        main.appendChild(home);
    content.appendChild(main);
}

export {loadHome};