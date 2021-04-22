import { getGardens, setGardens, setCurrentGarden } from './utils-local-storage.js';

export function renderHeaderNav(pages = ['/garden/', '/chart/', '/setup/', '/about/']) {
    const header = document.querySelector('body > header');
    const nav = document.createElement('nav');
    const currentPage = window.location.pathname;

    let prefix = '.';
    // if you're not on the homepage add a "home" link
    if (currentPage !== '/') {
        const anchor = document.createElement('a');
        anchor.href = '../';
        anchor.textContent = 'home';
        nav.appendChild(anchor);
        prefix = '..';
    }

    // loop through the list of pages and add them if they're not the current page
    for (let page of pages) {
        if (page !== currentPage) {
            const anchor = document.createElement('a');
            anchor.href = prefix + page;
            anchor.textContent = page.substring(1, page.length - 1);
            nav.appendChild(anchor);
        }
    }
    
    // style and add the nav to the header
    nav.classList.add('header-nav');
    header.appendChild(nav);
}

export function renderGarden(gardenObject) {
    const div = document.createElement('div');
    const avatar = document.createElement('img');
    const anchor = document.createElement('a');
    const delButton = document.createElement('button');

    avatar.src = gardenObject.avatar;
    avatar.alt = `${gardenObject.name}'s avatar`;
    anchor.textContent = gardenObject.name;
    anchor.href = './garden/';
    delButton.textContent = '-';

    delButton.addEventListener('click', () => {
        const gardens = getGardens();
        delete gardens[gardenObject.name];
        setGardens(gardens);
        location.reload();
    });

    anchor.addEventListener('click', () => {
        setCurrentGarden(gardenObject.name);
    });

    div.classList.add('garden-slot', 'wrapper-h');
    div.append(avatar, anchor, delButton);
    return div;
}
