console.log("sanity check")

let el = document.querySelector('button')
let jokeDisplay = document.querySelector('p')

const getJoke = (evt) => {
    fetch('https://api.chucknorris.io/jokes/random')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            jokeDisplay.innerText = data.value
        })
}

el.addEventListener('click', getJoke);