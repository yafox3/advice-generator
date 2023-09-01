const ADVICE_URL = 'https://api.adviceslip.com/advice';
const generateBtn = document.querySelector('.box__dice');
const adviceText = document.querySelector('#advice');

// get json
function getRequest(url) {
    return fetch(url).then(response => {
        return response.json();
    });
}

// generate advice onclick
generateBtn.addEventListener('click', (e) => {
    e.preventDefault()
    const advice = getRequest(ADVICE_URL);
    const adviceId = document.querySelector('#advice-id');

    advice
        .then(val => {
            adviceId.innerHTML = '#' + val.slip.id;
            adviceText.innerHTML = val.slip.advice;
        })
        .catch(err => alert(`try again\nerror${err}`))
});

// copy text to clipboard
adviceText.addEventListener('click', (e) => {
    navigator.clipboard.writeText(adviceText.innerHTML);
    document.querySelector('.box__copy').classList.add('active');
    document.querySelector('.box__copy').innerHTML = 'copied!';

    setTimeout(() => {
        document.querySelector('.box__copy').innerHTML = 'tap on text to copy';
        document.querySelector('.box__copy').classList.remove('active');
    }, 1500)
});