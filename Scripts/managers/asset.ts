module managers {
    export class Assets {
        //public properties
        public loader: createjs.LoadQueue;

        //private properties
        private manifest = [
            { id: "Background", src: "assets/images/Background2.png" },
            { id: "superman", src: "assets/images/superman.png" },
            { id: "ring", src: "assets/images/ring.png" },
            { id: "menu", src: "assets/images/menu.png" },
            { id: "gameoverlbl", src: "assets/images/gameover.png" },
            { id: "playagainbutton", src: "assets/images/playagain.png" },
            { id: "startbutton", src: "assets/images/startbutton.png" },
            { id: "fireball", src: "assets/images/enemy.png" },
            { id: "ringing", src: "assets/audio/pickupcoin.wav" },
            { id: "fireballs", src: "assets/audio/destroy.wav" },
            { id: "supermansound", src: "assets/audio/supermansound.ogg" },
            { id: "colliding", src: "assets/images/colliding.png" },
        ];
        //constructor
        constructor() {
            this.preload();

        }

        preload() {
            this.loader = new createjs.LoadQueue();
            this.loader.installPlugin(createjs.Sound);
            // event listener triggers when assets are completely loaded
            this.loader.on("complete", init, this);
            this.loader.loadManifest(this.manifest);
        }

    }
}