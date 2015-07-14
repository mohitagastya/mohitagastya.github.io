module objects {
    // fireball Class ++++++++++++++++++++++++++++++++++++++
    export class Fireball extends objects.GameObject {
       
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        constructor(imageString: string) {
            super(imageString);
            this.name = "fireball";
            this.soundString = "fireballs";
            this.reset();
        }

        // PRIVATE METHODS ++++++++++++++++++++++++++++++
        private checkBounds(): void {

            // check if fireball has left screen
            if (this.x < 0) {
                this.reset();
            }
        }


        private reset(): void {
            this.y = Math.floor(Math.random() * 390); // start fireballs at random location
            this.x = 640; // start fireball off stage
            this.dy = Math.floor(Math.random() * 4) - 2;
            this.dx = Math.floor(Math.random() * 5) + 5;
        }


        // PUBLIC METHODS +++++++++++++++++++++++++++++++
        public update(): void {

            this.y += this.dy; // moves fireball up and down the stage
            this.x -= this.dx; // drifts fireballs left
            this.checkBounds();
        }
    }
}   