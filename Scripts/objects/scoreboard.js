var objects;
(function (objects) {
    var ScoreBoard = (function () {
        //constructor++++++
        function ScoreBoard() {
            //Public properties
            this.score = 0;
            this.lives = 5;
            this.scoreLabel = new createjs.Text("Score:", "40px Consolas", "#FFFF00");
            this.livesLabel = new createjs.Text("Lives:", "40px Consolas", "#FFFF00");
            this.scoreLabel.x = 350;
            game.addChild(this.livesLabel);
            game.addChild(this.scoreLabel);
        }
        //Public methods
        ScoreBoard.prototype.update = function () {
            this.livesLabel.text = "Lives: " + this.lives;
            this.scoreLabel.text = "Score: " + this.score;
        };
        return ScoreBoard;
    })();
    objects.ScoreBoard = ScoreBoard;
})(objects || (objects = {}));
//# sourceMappingURL=scoreboard.js.map