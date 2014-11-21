describe("Test universe", function() {
    var Universe;

    beforeEach(function() {
        module("GameOfLife");
        inject(getUniverse);
    });

    function getUniverse(_Universe_) {
        Universe = _Universe_;
    }

    describe("init", function() {
        it("should init with given dimention correctly", function() {
            var universe = new Universe(2, 2);
            expect(universe.cells).toEqual([
                [false, false],
                [false, false]
            ]);
        });
    });
});