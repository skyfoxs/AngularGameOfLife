angular.module("GameOfLife").factory("Universe", function() {
    var cell = {
        LIVE: true,
        DEAD: false
    };

    return function Universe() {
        this.getNextGenerationCellState = function(currentCellState, totalLiveNeighbor) {
            if (totalLiveNeighbor == 2 || totalLiveNeighbor == 3)
                return cell.LIVE;
            return cell.DEAD;
        };
    };
});