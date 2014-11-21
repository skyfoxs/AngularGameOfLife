angular.module("GameOfLife").factory("Universe", function() {
    var cell = {
        LIVE: true,
        DEAD: false
    };

    return function Universe() {
        this.getNextGenerationCellState = function(currentCellState, totalLiveNeighbor) {
            if (totalLiveNeighbor == 2)
                return cell.LIVE;
            return cell.DEAD;
        };
    };
});