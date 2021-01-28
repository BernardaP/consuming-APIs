<img src="https://i.imgur.com/294n16z.png">

# Consume a 3rd Party API Lab

## Requirements

- Create a HTML/CSS/JS file structure and connect the files in the HTML.

- Modify the `index.html` file to display a `Get Chuck Norris Joke` submit button within a form (the form needs no inputs).

- When the `Get Chuck Norris Joke` button is clicked, the fetch request will be submitted to the API's server at the following endpoint at [CHUCKNORRIS.IO](https://api.chucknorris.io/):<br>`https://api.chucknorris.io/jokes/random`

- The API server should respond with data including the text of the joke received in the API's response.

- Use the data returned in the fetch request's `response` object to display the joke on the page in some way. Think back to what you know about DOM manipulation and start small. You can do this!

- This lab is a deliverable.

## Bonus

- Implement the choice of category of the joke!

## Hints

- The list of categories is available at this endpoint:<br>`https://api.chucknorris.io/jokes/categories`

- Set the form's method attribute to `method="GET"` so that the selected category will be submitted as a query string (see below).

- "Build" the categories as radio inputs within the form. Setting the `name` attribute on the inputs to `category` will result in the selected category being submitted as a query string and available on the server as `req.query.category`.

<img src="https://i.imgur.com/nVr5KUi.png">
