var Mode = require('./Mode');

function Amplified() {
    Mode.apply(this, Array.prototype.slice.call(arguments));

    this.ID = 22;
    this.name = "Amplified";
    this.specByLeaderboard = true;
}

module.exports = Amplified;
Amplified.prototype = new Mode();

Amplified.prototype.leaderboardAddSort = function(player,leaderboard) {
    // Adds the player and sorts the leaderboard
    var len = leaderboard.length - 1;
    var loop = true;
    while ((len >= 0) && (loop)) {
        // Start from the bottom of the leaderboard
        if (player.getScore(false) <= leaderboard[len].getScore(false)) {
            leaderboard.splice(len + 1, 0, player);
            loop = false; // End the loop if a spot is found
        }
        len--;
    }
    if (loop) {
        // Add to top of the list because no spots were found
        leaderboard.splice(0, 0,player);
    }
};

Amplified.prototype.onPlayerSpawn = function(gameServer,player) {
    // Random color
    player.color = gameServer.getRandomColor();
    
    // Set up variables
    var pos, startMass;
    
    // Check if there are ejected mass in the world.
    if (gameServer.nodesEjected.length > 0) {
        var index = Math.floor(Math.random() * 100) + 1;
        if (index <= gameServer.config.ejectSpawnPlayer) {
            // Get ejected cell
            var index = Math.floor(Math.random() * gameServer.nodesEjected.length);
            var e = gameServer.nodesEjected[index];

            // Remove ejected mass
            gameServer.removeNode(e);

            // Inherit
            pos = {x: e.position.x, y: e.position.y};
            startMass = 50;

            var color = e.getColor();
            player.setColor({
                'r': 0,
                'g': 0,
                'b': 0
            });
        }
    }
        gameServer.spawnPlayer(player,pos,startMass);
}
