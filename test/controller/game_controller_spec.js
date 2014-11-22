describe("GameController", function() {
    var controller, Universe,
        cell = {
            LIVE: true
        };

    beforeEach(function() {
        module("GameOfLife");
        inject(createController);
    });

    function createController($controller, _Universe_) {
        controller = $controller("GameController", {});
        Universe = _Universe_;
    }

    it("should init with 25x50 dimension universe", function() {
        var expected = new Universe(25, 50);
        expect(controller.universe.cells).toEqual(expected.cells);
    });

    it("should set cell to alive when click on cell", function() {
        controller.setLiveCell(1, 1);
        expect(controller.universe.cells[1][1]).toEqual(cell.LIVE);
    });

    it("should call evolve when call next step", function() {
        spyOn(controller.universe, "evolve");
        controller.nextStep();
        expect(controller.universe.evolve).toHaveBeenCalled();
    });
});