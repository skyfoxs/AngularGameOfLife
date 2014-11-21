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

            it("should alive when has 2 live neighbors", function() {
                expect(universe.getNextGenerationCellState(cell.LIVE, 2)).toEqual(cell.LIVE);
            });

            it("should alive when has 3 live neighbors", function() {
                expect(universe.getNextGenerationCellState(cell.LIVE, 3)).toEqual(cell.LIVE);
            });
        });

        describe("dead cell", function() {
            it("should dead when has 2 live neighbor", function() {
                expect(universe.getNextGenerationCellState(cell.DEAD, 2)).toEqual(cell.DEAD);
            });
        });
    });
});