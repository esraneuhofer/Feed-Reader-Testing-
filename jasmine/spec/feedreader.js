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



        it('every url in Array is defined',function () {
            for (var i = 0;i<allFeeds.length;i++){
                expect(allFeeds[i].url).toBeDefined()
            }
        });


        it('name propertyi is defined and is not empty in allFeeds Array',function () {
            for (var i = 0;i<allFeeds.length;i++){
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name.length).not.toEqual(0)
            }

        });
    });
    describe('The menu', function() {
        it('body should have class hidden',function () {
            expect($('body')).toHaveClass('menu-hidden');


        });

        it('body should have class hidden',function () {

            $('.menu-icon-link').click();
            expect($('body')).not.toHaveClass('menu-hidden');

            $('.menu-icon-link').click();
            expect($('body')).toHaveClass('menu-hidden');


        });


    });

    describe('Initial Entries', function() {

        var length;
        beforeEach(function (done) {
            // Make an async call, passing the special done callback
            loadFeed(0,function(){
               length=($('.feed')[0].innerHTML.length);
                    done();

            });
            spyOn(window, 'loadFeed');

        });

        it('should have been called loadfeed',function (done) {

                    expect(window.loadFeed).toHaveBeenCalled();
                     done();
        });

        it("loadfeed function actually changes", function (done) {

            expect(length).toBeGreaterThan(0);
            done();
        });



});



        describe('New Feed Selection', function() {

            var oldContent;
            var newContent;
            beforeEach(function (done) {
                // Make an async call, passing the special done callback
                loadFeed(0,function(){
                    oldContent=$('.feed')[0].innerHTML;
                    loadFeed(1,function(){
                        newContent=$('.feed')[0].innerHTML;
                        done();
                    });


                });

            });

            it("loadfeed function actually changes", function (done) {

                expect(newContent).not.toEqual(oldContent);
                done();
            });

        });

}());
