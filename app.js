const button = document.querySelector('button');
const title = document.querySelector('header');
const content = document.querySelector('section');

button.addEventListener('click', getAdvice)

function getAdvice() {
    fetch('https://api.adviceslip.com/advice')
        .then((callback) => callback.json())
        .then((data) => {
            title.innerHTML = `Advice #${data[Object.keys(data)].id}`;
            content.innerHTML = `"${data[Object.keys(data)].advice}"`;
        });
}

getAdvice();