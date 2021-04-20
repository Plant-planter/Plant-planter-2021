

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

    div.append(avatar, anchor, delButton);
    return div;
}

