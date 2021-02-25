const content = document.querySelector('#content')

const loadContact = function () {
    content.classList.add('body');
    const main = document.createElement('div'); main.id = "main"; 
        const contactContainer = document.createElement('div'); contactContainer.id = "contact-container";
            const contact = document.createElement('div'); contact.id = "contact-text";
                const contact_title = document.createElement('h2'); contact_title.classList.add("contact-text-title"); contact_title.innerHTML = "Contact Us";
                const contact_adr = document.createElement('h2'); contact_adr.classList.add("contact-text-subtitle"); contact_adr.innerHTML = "1410 Lenape Rd West Chester, Pa 19382";
                const contact_tel = document.createElement('h2'); contact_tel.classList.add("contact-text-subtitle"); contact_tel.innerHTML = "Tel: 610-793-2202";
                const contact_email = document.createElement('h2'); contact_email.classList.add("contact-text-subtitle"); contact_email.innerHTML = "Email: LenapePizza@mail.com";
                contact.appendChild(contact_title); contact.appendChild(contact_adr); contact.appendChild(contact_tel); contact.appendChild(contact_email);
            contactContainer.appendChild(contact);
        main.appendChild(contactContainer);
        const mapContainer = document.createElement('div'); mapContainer.id = "map-container"; 
            const map = document.createElement('iframe'); map.id = "map-iframe";
                map.src = "https://maps.google.com/maps?q=1410%20Lenape%20Rd%20West%20Chester,%20Pa%2019382&t=&z=13&ie=UTF8&iwloc=&output=embed"; 
            const map_a = document.createElement('a'); map_a.href = "https://embedgooglemap.net/maps/32";
            mapContainer.appendChild(map); mapContainer.appendChild(map_a);
        main.appendChild(mapContainer)
    content.appendChild(main);
}

export {loadContact};