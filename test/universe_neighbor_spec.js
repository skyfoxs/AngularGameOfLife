describe("Test universe", function() {
    var universe;

    beforeEach(function() {
        module("GameOfLife");
        inject(createUniverse);
    });

    function createUniverse(Universe) {
        universe = new Universe(4, 4);
    }

    describe("neighbor", function() {
        describe("top left", function() {
            it("should has 0 live neighbor", function() {
                expect(universe.getTotalLiveNeighbor(0, 0)).toEqual(0);
            });

            it("should has 1 live neighbor", function() {
                universe.setLiveCell(0, 1);
                expect(universe.getTotalLiveNeighbor(0, 0)).toEqual(1);
            });

            it("should has 2 live neighbor", function() {
                universe.setLiveCell(0, 1);
                universe.setLiveCell(1, 0);
                expect(universe.getTotalLiveNeighbor(0, 0)).toEqual(2);
            });

            it("should has 3 live neighbor", function() {
                universe.setLiveCell(0, 1);
                universe.setLiveCell(1, 0);
                universe.setLiveCell(1, 1);
                expect(universe.getTotalLiveNeighbor(0, 0)).toEqual(3);
            });

            it("should not count itself as live neighbor", function() {
                universe.setLiveCell(0, 0);
                universe.setLiveCell(0, 1);
                expect(universe.getTotalLiveNeighbor(0, 0)).toEqual(1);
            });
        });

        describe("top", function() {
            it("should has 3 live neighbor", function() {
                universe.setLiveCell(0, 0);
                universe.setLiveCell(1, 0);
                universe.setLiveCell(1, 1);
                expect(universe.getTotalLiveNeighbor(0, 1)).toEqual(3);
            });
        });

        describe("top right", function() {
            it("should has 3 live neighbor", function() {
                universe.setLiveCell(0, 2);
                universe.setLiveCell(1, 2);
                universe.setLiveCell(1, 3);
                expect(universe.getTotalLiveNeighbor(0, 3)).toEqual(3);
            });
        });

        describe("left", function() {
            it("should has 2 live neighbor", function() {
                universe.setLiveCell(0, 0);
                universe.setLiveCell(1, 1);
                expect(universe.getTotalLiveNeighbor(1, 0)).toEqual(2);
            });
        });
    });
});