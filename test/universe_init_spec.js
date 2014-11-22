describe("Test universe", function() {
    "use strict";
    var Universe,
        cell = {
            LIVE: true
        };

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

        it("should init with given dimention correctly", function() {
            var universe = new Universe(3, 3);
            expect(universe.cells).toEqual([
                [false, false, false],
                [false, false, false],
                [false, false, false]
            ]);
        });
    });

    describe("set live cell", function() {
        it("should set live cell correctly", function() {
            var universe = new Universe(3, 3);
            universe.setLiveCell(1, 1);
            expect(universe.cells[1][1]).toEqual(cell.LIVE);
        });
    });
});