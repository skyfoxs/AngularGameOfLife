angular.module("GameOfLife").factory("Universe", function() {
    var cell = {
        LIVE: true,
        DEAD: false
    };

    return function Universe(height, width) {

        this.getTotalLiveNeighbor = function(row, column) {
            var total = 0;
            if (this.cells[row][column + 1])
                total += 1;
            if (this.cells[row + 1][column])
                total += 1;
            return total;
        };

        this.getNextGenerationCellState = function(currentCellState, totalLiveNeighbor) {
            var state = {
                2: currentCellState,
                3: cell.LIVE
            };
            return totalLiveNeighbor in state ? state[totalLiveNeighbor] : cell.DEAD;
        };

        this.setLiveCell = function(r, c) {
            this.cells[r][c] = cell.LIVE;
        };

        this.init = function(height, width) {
            this.cells = [];
            for (var r = 0; r < height; r++) {
                this.cells.push([]);
                for (var c = 0; c < width; c++)
                    this.cells[r].push(cell.DEAD);
            }
        };

        this.init(height, width);
    };
});