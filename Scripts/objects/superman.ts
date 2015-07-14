module objects {
    // Superman Class ++++++++++++++++++++++++++++++++++++++
    export class Superman extends objects.GameObject {
      

        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        constructor(imageString: string) {
            super(imageString);

            this.soundString = "supermansound";
            this.x = 40;
            createjs.Sound.stop();
              createjs.Sound.play(this.soundString, { "loop": -1 });

        }

        // PUBLIC METHODS +++++++++++++++++++++++++++++++
        public update(): void {
            this.y = stage.mouseY; // position superman under mouse
        }
    }
}  