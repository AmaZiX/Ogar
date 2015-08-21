var Mode = require('./Mode');

function Amplified() {
    Mode.apply(this, Array.prototype.slice.call(arguments));

    this.ID = 22;
    this.name = "Amplified";
    this.specByLeaderboard = true;
}

module.exports = Amplified;
Amplified.prototype = new Mode();
