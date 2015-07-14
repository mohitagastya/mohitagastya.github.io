module objects {
    export class ScoreBoard {
        //Public properties
        public score: number = 0;
        public lives: number = 5;

        private scoreLabel: createjs.Text;
        private livesLabel: createjs.Text;
        //constructor++++++
        constructor() {
            this.scoreLabel = new createjs.Text("Score:", "40px Consolas", "#FFFF00");
            this.livesLabel = new createjs.Text("Lives:", "40px Consolas", "#FFFF00");
            this.scoreLabel.x = 350;
            game.addChild(this.livesLabel);
            game.addChild(this.scoreLabel);         

        }

        //Public methods
        public update() {
            this.livesLabel.text = "Lives: " + this.lives;
            this.scoreLabel.text = "Score: " + this.score;
        }
    }



} 