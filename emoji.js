const body = document.querySelector("body");
const h1 = document.querySelector("h1");
const moods = ['happy', 'sad', 'angry', 'confused'];

h1.innerText = store.getState().payload;

store.subscribe(() => {
    h1.innerText = store.getState().payload;
    body.style.backgroundColor = store.getState().color;
});

moods.forEach((mood) => {
    document.querySelector(`#${mood}`)
        .addEventListener('click', function () {
            store.dispatch({ type: `${mood.toUpperCase()}`} );
        });
});

document.querySelector('#random')
    .addEventListener('click', function () {
        const randomNum = Math.floor(Math.random() * moods.length);
        store.dispatch({ type: `${moods[randomNum].toUpperCase()}`} );
    });