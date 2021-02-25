const content = document.querySelector('#content')

const loadAbout = function () {
    content.classList.add('body');
    const main = document.createElement('div'); main.id = "main"; 
        const about = document.createElement('div'); about.id = "about-container";
            const aboutTitle = document.createElement('h1'); aboutTitle.id = "about-title"; aboutTitle.innerHTML = "About Us"; 
            const aboutDesc_1 = document.createElement('p'); aboutDesc_1.classList.add("about-description"); aboutDesc_1.innerHTML = "Lenape Pizza is proud to be born & bred in West Chester, PA. We are locally owned & operated by partners and Pennsylvania natives, we take pride in hiring local talent that shares a passion for serving the community. Each year, we serve tens of thousands of pizzas (and more) to our loyal local customers, through individual and catering orders alike, and we also support numerous events in and around West Chester through donations, event participation, and hosting fundraising “nights out” in our restaurant. ";
            const aboutDesc_2 = document.createElement('p'); aboutDesc_2.classList.add("about-description"); aboutDesc_2.innerHTML = "Lenape Pizza was founded in 1984, and we have since been awarded numerous accolades for our authentic wood fired recipes. Most recently, we were voted Best Pizza in West Chester by West Chester Today’s 2019 annual Best of competition";
            const break_ = document.createElement('br');
            about.appendChild(aboutTitle); about.appendChild(aboutDesc_1); about.appendChild(aboutDesc_2);  about.appendChild(break_);
        main.appendChild(about)
   content.appendChild(main);
}

export {loadAbout};