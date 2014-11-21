angular.module("GameOfLife").factory("Universe", function() {
    var cell = {
        LIVE: true,
        DEAD: false
    };

    return function Universe(height, width) {

        this.getTotalLiveNeighbor = function(currentRow, currentColumn) {
            var total = 0;
            for (var row = currentRow - 1; row <= currentRow + 1; row++)
                for (var column = currentColumn - 1; column <= currentColumn + 1; column++)
                    if (row >= 0 && row < this.height && notCurrentCell(row, column, currentRow, currentColumn)) {
                        total += this.cells[row][column] ? 1 : 0;
                    }

            return total;
        };

        function notCurrentCell(row, column, currentRow, currentColumn) {
            return !(row == currentRow && column == currentColumn);
        }

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
            this.height = height;
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