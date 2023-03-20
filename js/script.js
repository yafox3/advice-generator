const ADVICE_URL = 'https://api.adviceslip.com/advice';
const generateBtn = document.querySelector('.box__dice');

// get json
function getRequest(url) {
    return fetch(url).then(response => {
        return response.json();
    });
}

// generate advice onclick
generateBtn.addEventListener('click', (e) => {
    const advice = getRequest(ADVICE_URL);
    const adviceId = document.querySelector('#advice-id');
    const adviceText = document.querySelector('#advice');

    advice
        .then(val => {
            adviceId.innerHTML = '#' + val.slip.id;
            adviceText.innerHTML = val.slip.advice;
        })
        .catch(err => alert(`try again\nerror${err}`))
});
