var states;
(function (states) {
    //class defining game over state
    var Gameover = (function () {
        //constructor
        function Gameover() {
            this.main();
        }
        //update methid that updates the objects in this state
        Gameover.prototype.update = function () {
            city.update();
            stage.update();
        };
        //fauntion that is called when clicked playagain button
        Gameover.prototype.playagainbuttonclicked = function (event) {
            stage.removeChild(game);
            stage.removeAllChildren();
            game.removeAllChildren();
            game.removeAllEventListeners();
            changeState(constants.PLAY_STATE);
        };
        Gameover.prototype.main = function () {
            game = new createjs.Container();
            //adding city object to stage
            city = new objects.City(assets.loader.getResult("Background"));
            game.addChild(city);
            //adding game over label
            gameoverlbl = new createjs.Bitmap(assets.loader.getResult("gameoverlbl"));
            game.addChild(gameoverlbl);
            //adding play again button
            playagainbutton = new objects.Button(assets.loader.getResult("playagainbutton"), 320, 330);
            game.addChild(playagainbutton);
            playagainbutton.on("click", this.playagainbuttonclicked);
            stage.addChild(game);
        };
        return Gameover;
    })();
    states.Gameover = Gameover;
})(states || (states = {}));
//# sourceMappingURL=gameover.js.map