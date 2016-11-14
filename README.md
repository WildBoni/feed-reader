# Feed Reader testing with Jasmine

This application is a Feed Reader that retrieves news form different websites.
Its functionalities are tested using Jasmine: the feedreader.js file has been created as a project for Udacity Front End Web Developer NanoDegree.

## Technologies used

* Javascript
* Javsmine testing suite

## Features

The feedreader.js file triggers the following tests:

- Makes sure that the allFeeds variable is defined and not empty
- Ensures that each feed has a defined name and URL and that they're not empty.
- Checks that the menu is hidden by default
- Ensures that the menu is changing visibility when the hamburger button is clicked
- Controls that there's at least one element available in the feed
- Compares feed selections and verifies that different content has been loaded

### Running locally

1. Clone the GitHub repository

  ```
  git clone https://github.com/WildBoni/feed-reader.git
  ```

2. Open the index.html file in your browser and you'll see the testing results at the bottom of the page

### Useful links and resources
* [Jasmine introduction](https://jasmine.github.io/2.1/introduction.html)
* References to StackOverflow discussions and other coding solution are commented inside the feedreader.js file.
* Special thanks to the Udacity Forum.
