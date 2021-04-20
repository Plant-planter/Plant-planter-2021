import { getGardens, setGarden, setGardens } from './local-storage-utilities.js';

export function renderGarden(gardenObject) {
    const div = document.createElement('div');
    const avatar = document.createElement('img');
    const anchor = document.createElement('a');
    const delButton = document.createElement('button');

    avatar.src = gardenObject.avatar;
    avatar.alt = `${gardenObject.name}'s avatar`;
    anchor.textContent = gardenObject.name;
    anchor.href = '../garden/';
    delButton.textContent = '-';

    delButton.addEventListener('click', () => {
        const gardens = getGardens();
        delete gardens[gardenObject.name];
        setGardens(gardens);
        location.reload();
    });

    div.append(avatar, anchor, delButton);
    return div;
}

