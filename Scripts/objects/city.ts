module objects {
    // City Class ++++++++++++++++++++++++++++++++++++++
    export class City extends createjs.Bitmap {
        // PUBLIC PROPERTIES ++++++++++++++++++++++++++++
        width: number;
        height: number;
        dx: number = 5;

        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        constructor(imageString: string) {
            super(imageString);
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;


            this.reset();
        }

        // PRIVATE METHODS ++++++++++++++++++++++++++++++
        private checkBounds(): void {

            // check if city has left screen
            if (this.x == -1280) {
                this.reset();
            }
        }


        private reset(): void {
            this.x = 0; // start city at x axis
            this.y = 0; // start city at y axis
        }


        // PUBLIC METHODS +++++++++++++++++++++++++++++++
        public update(): void {

            this.x -= this.dx; // moves city side the stage
            this.checkBounds();
        }
    }
}  