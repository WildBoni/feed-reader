/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         it('have correct URL', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });
         });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('have a defined name', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });
        });
    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function() {
        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('is hidden by default', function() {
            //Checking if class menu-hidden is applied to the body element
            //http://stackoverflow.com/questions/29662744/testing-dom-elements-with-jasmine
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
          //
        it('is changing visibility when clicked', function() {
            //We'll use the same check as the test before, this time
            //applied to a simulated user input
            function userClicks() {
                $('.menu-icon-link').click();
            }
            userClicks();
            expect($('body').hasClass('menu-hidden')).toBe(false);
            userClicks();
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });

    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
         // using beforeEach  as specified in Jasmine documentation
         // https://jasmine.github.io/2.1/introduction.html
         // And in Udacity Writing Test Suites - testing asynchronous code
         beforeEach(function(done) {
             loadFeed(0, function() {
                 done();
             });
         });
         it ('contain at least one element', function() {
            expect($('.entry').length).not.toBe(0);
         });
    });
    /* TODO: Write a new test suite named "New Feed Selection"*/
    describe('New Feed Selection', function() {
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
         // We'll need two different feeds to be tested against each other
         var firstFeed, secondFeed;
         // In this Udacity forum discussion John Mav explains the use of done()
         // https://discussions.udacity.com/t/new-feed-selection-question/16274/14
        beforeEach(function(done) {
             loadFeed(0, function() {
                 firstFeed = $('.feed').html();
                 done();
             });
        });
        // check that new content is different
        it ('content is changing ', function(done) {
            loadFeed(1, function() {
                secondFeed = $('.feed').html();
                expect(firstFeed).not.toEqual(secondFeed);
                done();
            });
        });
    });
}());
