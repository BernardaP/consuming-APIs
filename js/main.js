// console.log("All good here")


const getButton = document.querySelector('button')
// console.log(getButton)
const jokeBody = document.createElement('p')
let showJoke = document.querySelector('#displayJoke')
showJoke.appendChild(jokeBody)

const animalButton = document.getElementById('animal')
const careerButton = document.getElementById('career')

const requestURL = 'https://api.chucknorris.io/jokes/random';


const callApi = () => {
  // console.log("click")
  

  fetch(requestURL)
  .then(function(apiData){
    return apiData.json()
  })
  .then(function(jsonData){
    // console.log(jsonData)
    const joke = jsonData.value
    // console.log(joke)
    jokeBody.innerHTML = joke
  })
  .catch((error) => {
    console.error("ERROR: ", error)
  })
}



const apiCategory = (buttonValue) => {
  fetch(`https://api.chucknorris.io/jokes/random?category=${buttonValue}`)
  .then(function(apiData){
    return apiData.json()
  })
  .then(function(jsonData){
    console.log(jsonData)
    const categoryJoke = jsonData.value
    console.log(categoryJoke)
    jokeBody.innerHTML = categoryJoke
  })
}

getButton.addEventListener('click', callApi)
animalButton.addEventListener('click', (e) => {
  e.preventDefault(); 
  apiCategory(animalButton.value)
  // console.log(animalButton.value)
})
careerButton.addEventListener('click', (e) => {
  e.preventDefault(); 
  apiCategory(careerButton.value)
})