describe("Test universe", function() {
    var universe;

    beforeEach(function() {
        module("GameOfLife");
        inject(createUniverse);
    });

    function createUniverse(Universe) {
        universe = new Universe(6, 6);
    }

    describe("evolve", function() {
        it("should be the same universe when evolved", function() {
            var expected;
            universe.setLiveCell(1, 1);
            universe.setLiveCell(1, 2);
            universe.setLiveCell(2, 1);
            universe.setLiveCell(2, 2);
            expected = universe.cells.slice(0);
            universe.evolve();
            expect(universe.cells).toEqual(expected);
        });
    });
});