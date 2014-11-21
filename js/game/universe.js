angular.module("GameOfLife").factory("Universe", function() {
    var cell = {
        LIVE: true,
        DEAD: false
    };

    return function Universe() {
        this.getNextGenerationCellState = function() {
            return cell.DEAD;
        };
    };
});