var managers;
(function (managers) {
    var Collision = (function () {
        //constructor of the class
        function Collision() {
        }
        //Public methods 
        //check teh colision between superman and other objects
        Collision.prototype.check = function (gameObject) {
            // var scoreboard: objects.ScoreBoard;
            var p1 = new createjs.Point();
            var p2 = new createjs.Point();
            var flag = 0;
            p1.x = superman.x;
            p1.y = superman.y;
            p2.x = gameObject.x;
            p2.y = gameObject.y;
            if (utility.distance(p1, p2) < ((superman.height * 0.5 + gameObject.height * 0.5))) {
                if (gameObject.isColliding == false) {
                    console.log("collision");
                    createjs.Sound.play(gameObject.soundString);
                    if (gameObject.name == "fireball") {
                        scoreboard.lives--;
                        //here is what makes game over
                        if (scoreboard.lives < 0) {
                            stage.removeChild(game);
                            stage.removeAllChildren();
                            game.removeAllChildren();
                            game.removeAllEventListeners();
                            changeState(constants.GAME_OVER_STATE);
                        }
                        if (flag == 0) {
                            game.removeChild(superman);
                            colliding.update();
                            game.addChild(colliding);
                            flag = 1;
                        }
                        window.setTimeout(function () {
                            game.removeChild(colliding);
                            game.addChild(superman);
                            flag = 0;
                        }, 1400);
                    }
                    if (gameObject.name == "ring") {
                        scoreboard.score += 100;
                    }
                }
                gameObject.isColliding = true;
            }
            else {
                gameObject.isColliding = false;
            }
        };
        return Collision;
    })();
    managers.Collision = Collision;
})(managers || (managers = {}));
//# sourceMappingURL=collision.js.map