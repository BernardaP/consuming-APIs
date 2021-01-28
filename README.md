<img src="https://i.imgur.com/294n16z.png">

# Consume a 3rd Party API Lab

This lab will help prepare you for the upcoming project. It is due on our typical due date but we suggest prioritizing this lab as it should provide a basic structure that you can build from during next week's project. Have fun with it!

## Requirements

- Create a HTML/CSS/JS file structure and connect the files in the HTML.

- Modify the `index.html` file to display a `Get Chuck Norris Joke` submit button within a form (the form needs no inputs).

- When the `Get Chuck Norris Joke` button is clicked, the fetch request will be submitted to the API's server at the following endpoint at [CHUCKNORRIS.IO](https://api.chucknorris.io/):<br>`https://api.chucknorris.io/jokes/random`. 

- This lab is a deliverable.

## Steps

1. To start, you'll need to select the button element with javascript and save it to a variable. Refer to the Intro to the DOM lesson for many examples of this.

2. Next, add an event listener to the button variable that will fire a function when the button is clicked. Hint: as a first test, just log a message to yourself when the user clicks the button and don't worry about the API stuff just yet. Baby steps!

3. Now we're ready to add `fetch` in to the mix. Using `fetch` and the URL provided above, make a request to the Chuck Norris API and handle the response. Hint: In the body of the first `.then()` callback function, you'll need to parse the response from the API first. If you don't remember this step from the lesson, review it or do a quick search for "parse JSON response with fetch" or something along those lines.

4. Once you've parsed the JSON response you'll need to add a second `.then()` method to the `fetch` chain. This is where we can use the data from the API and do a little DOM manipulation to show the user a random joke. Think back to what you know about DOM manipulation and start small. You can do this!

## Bonus

- Implement the choice of category of the joke!

OR

- Style up the HTML page with your own choice of color and font. The layout should be centered on the page and if you want to toss a funny Chuck Norris gif in there for good measure, please do!

## Hints

- The list of categories is available at this endpoint:<br>`https://api.chucknorris.io/jokes/categories`
- Use flexbox and/or grid to create your layout
