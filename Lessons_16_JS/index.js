const p = document.querySelector('#btn');

const event = new CustomEvent('logout', {
    cancelable: true,
    babbles: true,
    detail: {name: 'asd', password: 'qwerty'}
});

document.addEventListener('logout', function (event) {
    console.log(event.detail.name, event.detail.password);
});

setTimeout(() => {
    document.dispatchEvent(event);
}, 1000)

