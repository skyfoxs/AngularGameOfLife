describe("GameController", function() {
    var controller, Universe, $interval,
        cell = {
            LIVE: true
        };

    beforeEach(function() {
        module("GameOfLife");
        inject(createController);
    });

    function createController($controller, _Universe_) {
        $interval = jasmine.createSpy('$interval');
        controller = $controller("GameController", {
            $interval: $interval,
            Universe: _Universe_
        });
        Universe = _Universe_;
    }

    it("should init with 25x40 dimension universe", function() {
        var expected = new Universe(25, 40);
        expect(controller.universe.cells).toEqual(expected.cells);
    });

    it("should init new universe when call reset", function() {
        var expected = new Universe(25, 40);
        controller.universe.setLiveCell(10, 10);
        controller.reset();
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

    it("should call $interval when click evolve", function() {
        controller.isRunning = false;
        spyOn(controller.universe, "evolve");
        controller.evolve();
        expect($interval).toHaveBeenCalledWith(jasmine.any(Function), 300);
        expect(controller.isRunning).toEqual(true);
    });

    it("should cancel $interval when click evolve again", function() {
        controller.isRunning = true;
        $interval.cancel = function() {};
        spyOn($interval, "cancel");
        controller.evolve();
        expect($interval.cancel).toHaveBeenCalledWith(controller.interval);
        expect(controller.isRunning).toEqual(false);
    });

    it("should set Gosper Glider Gun pattern when call init example", function() {
        controller.setGosperGliderGun();
        var expectedCell = [
            [7, 3],
            [7, 4],
            [8, 3],
            [8, 4],
            [6, 13],
            [7, 13],
            [8, 13],
            [5, 14],
            [9, 14],
            [4, 15],
            [4, 16],
            [10, 15],
            [10, 16],
            [7, 17],
            [5, 18],
            [9, 18],
            [6, 19],
            [7, 19],
            [8, 19],
            [7, 20],
            [4, 23],
            [4, 24],
            [5, 23],
            [5, 24],
            [6, 23],
            [6, 24],
            [3, 25],
            [7, 25],
            [2, 27],
            [3, 27],
            [7, 27],
            [8, 27],
            [4, 37],
            [4, 38],
            [5, 37],
            [5, 38]
        ];
        for (var i = 0; i < expectedCell.length; i++)
            expect(controller.universe.cells[expectedCell[i][0]][expectedCell[i][1]]).toEqual(cell.LIVE);

    });
});