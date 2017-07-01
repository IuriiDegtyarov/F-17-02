const btn = document.querySelector('#btn');
const body = document.querySelector('body');
const input = document.querySelector('#counter');


btn.addEventListener('click', () => {
    const wrapper = document.querySelector('.wrapper');
    if (!!wrapper) wrapper.remove();
    loadImages();
});

function loadImages() {
    return fetch('https://jsonplaceholder.typicode.com/photos').then(response => {
        return response.json();
    })
    .then(response => {
        createWrapper();
        renderItem(response);
    })
}

function createWrapper() {
    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');
    body.appendChild(wrapper);
}

function createItem(itemProps) {
    const item = document.createElement('div');
    const imageWrapper = document.createElement('div');
    const img = document.createElement('img');
    const title = document.createElement('h3');
    const link = document.createElement('a');

    item.classList.add('item');
    imageWrapper.classList.add('image');
    title.classList.add('title');

    link.href = itemProps.url;
    link.target = '_blank';

    img.src = itemProps.url;
    title.innerText = itemProps.title;
    item.appendChild(imageWrapper);
    item.appendChild(title);
    link.appendChild(img);
    imageWrapper.appendChild(link);
    return item;
}

function renderItem(props) {
    const wrapper = document.querySelector('.wrapper');
    let counter = input.value || 100;
    for(let i = 0; i < counter; i++) {
        let item = props[i];
        wrapper.appendChild(createItem(item));
    }
}