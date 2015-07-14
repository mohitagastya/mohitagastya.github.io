module states {
    //class defining play state
    export class Play {
        //game variables



        constructor() {
            this.main();

        }
        //method updating playing state objects

        public update() {
            city.update();
            superman.update();
            ring.update();


            for (var ball = 0; ball < 3; ball++) {
                fireballs[ball].update();
                collision.check(fireballs[ball]);

            }
            collision.check(ring);
            scoreboard.update();
            stage.update();

        }



        main() {
            game = new createjs.Container();

        //adding city object to stage
        city = new objects.City(assets.loader.getResult("Background"));
        game.addChild(city);

        //add rings object to stage
        ring = new objects.Ring(assets.loader.getResult("ring"));
        game.addChild(ring);

        // add superman object to stage
        superman = new objects.Superman(assets.loader.getResult("superman"));
        game.addChild(superman);

        //add colliding to the stage
        colliding = new objects.Colliding(assets.loader.getResult("colliding"));

        // add 3 fireballs objects to stage
        for (var ball = 0; ball < 3; ball++) {
            fireballs[ball] = new objects.Fireball(assets.loader.getResult("fireball"));
            game.addChild(fireballs[ball]);
        }
        //add scoreboard
        scoreboard = new objects.ScoreBoard();
        //add collision manager
        collision = new managers.Collision();
        stage.addChild(game);

    }
    }
} 