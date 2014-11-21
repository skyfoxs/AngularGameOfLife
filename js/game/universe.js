angular.module("GameOfLife").factory("Universe", function() {
    var cell = {
        LIVE: true,
        DEAD: false
    };

    return function Universe() {
        this.getNextGenerationCellState = function(currentCellState, totalLiveNeighbor) {
            var state = {
                2: currentCellState,
                3: cell.LIVE
            };
            return totalLiveNeighbor in state ? state[totalLiveNeighbor] : cell.DEAD;
        };
    };
});