var states;
(function (states) {
    //class defining menu state
    var Menu = (function () {
        function Menu() {
            this.main();
        }
        //updating objects in menu state
        Menu.prototype.update = function () {
            city.update();
            superman.update();
            stage.update();
        };
        //method that is called when play button is clicked
        Menu.prototype.startbuttonclicked = function (event) {
            stage.removeChild(game);
            stage.removeAllChildren();
            game.removeAllChildren();
            game.removeAllEventListeners();
            changeState(constants.PLAY_STATE);
        };
        Menu.prototype.main = function () {
            game = new createjs.Container();
            //adding city object to stage
            city = new objects.City(assets.loader.getResult("Background"));
            game.addChild(city);
            // add superman object to stage
            superman = new objects.Superman(assets.loader.getResult("superman"));
            game.addChild(superman);
            //adding instruction label
            menulbl = new createjs.Bitmap(assets.loader.getResult("menu"));
            game.addChild(menulbl);
            //adding start button
            startbutton = new objects.Button(assets.loader.getResult("startbutton"), 500, 330);
            game.addChild(startbutton);
            startbutton.on("click", this.startbuttonclicked);
            //adding game container to stage
            stage.addChild(game);
        };
        return Menu;
    })();
    states.Menu = Menu;
})(states || (states = {}));
//# sourceMappingURL=menu.js.map