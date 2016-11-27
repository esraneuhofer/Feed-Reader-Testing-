
$(function() {
    describe('RSS Feeds', function() {

        it('are defined', function() {

            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        it('every url in Array is defined',function () {

            for (var i = 0;i<allFeeds.length;i++){
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url.length).not.toEqual(0)
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

        it("loadfeed function actually changes", function () {

            expect(newContent).not.toEqual(oldContent);
        });

    });
}());
