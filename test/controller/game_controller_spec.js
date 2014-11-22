describe("GameController", function() {
    var controller, Universe;

    beforeEach(function() {
        module("GameOfLife");
        inject(createController);
    });

    function createController($controller, _Universe_) {
        controller = $controller("GameController", {});
        Universe = _Universe_;
    }

    it("should init with 5x5 dimension universe", function() {
        var expected = new Universe(5, 5);
        expect(controller.universe.cells).toEqual(expected.cells);
    });
});