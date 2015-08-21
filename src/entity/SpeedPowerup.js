var Cell = require('./Cell');

function SpeedPowerup() {
    Cell.apply(this, Array.prototype.slice.call(arguments));
    
    this.cellType = 1;
    this.size = this.mass / 2;
    this.squareSize = (100 * this.mass) >> 0;
}

module.exports = SpeedPowerup;
SpeedPowerup.prototype = new Cell();

SpeedPowerup.prototype.getSize = function() {
    return this.size;
};

SpeedPowerup.prototype.getSquareSize = function () {
    return this.squareSize;
};

SpeedPowerup.prototype.calcMove = null; // Food has no need to move

// Main Functions

SpeedPowerup.prototype.sendUpdate = function() {
    // Whether or not to include this cell in the update packet
    if (this.moveEngineTicks == 0) {
        return false;
    }
    return true;
};

SpeedPowerup.prototype.onRemove = function(gameServer) {
    gameServer.currentFood--;
};

SpeedPowerup.prototype.onConsume = function(consumer,gameServer){
    
};
