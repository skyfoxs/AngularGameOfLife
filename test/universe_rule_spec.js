describe("Test universe", function() {
    var universe,
        cell = {
            LIVE: true,
            DEAD: false
        };

    beforeEach(function() {
        module("GameOfLife");
        inject(createUniverse);
    });

    function createUniverse(Universe) {
        universe = new Universe();
    }

    describe("rule", function() {
        describe("live cell", function() {
            it("should die when has 1 live neighbor", function() {
                expect(universe.getNextGenerationCellState(cell.LIVE, 1)).toEqual(cell.DEAD);
            });
        });
    });
});