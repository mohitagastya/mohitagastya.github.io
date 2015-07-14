module objects {
    // Colliding Class ++++++++++++++++++++++++++++++++++++++
    export class Colliding extends createjs.Bitmap {
        // PUBLIC PROPERTIES ++++++++++++++++++++++++++++
        width: number;
        height: number;
        

        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        constructor(imageString: string) {
            super(imageString);
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
                      
        }
        public update(): void {
            this.x = 10;
            this.y = superman.y; 
        }
      
    }
}  