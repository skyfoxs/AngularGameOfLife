var params = [
    "Universe",
    "$interval",
    GameController
];
angular.module("GameOfLife").controller("GameController", params);

function GameController(Universe, $interval) {
    "use strict";
    var self = this;
    this.isRunning = false;

    this.init = function() {
        this.universe = new Universe(25, 40);
    }

    this.setLiveCell = function(x, y) {
        this.universe.setLiveCell(x, y);
    };

    this.evolve = function() {
        if (this.isRunning) {
            $interval.cancel(self.interval);
            this.isRunning = false;
        } else {
            this.interval = $interval(function() {
                self.universe.evolve();
            }, 300);
            this.isRunning = true;
        }
    };

    this.reset = function() {
        this.init();
    };

    this.nextStep = function() {
        this.universe.evolve();
    };

    this.init();
}