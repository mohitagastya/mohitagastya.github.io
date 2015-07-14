module objects {
    // Gameobject Class ++++++++++++++++++++++++++++++++++++++
    export class GameObject extends createjs.Bitmap {
        // PUBLIC PROPERTIES ++++++++++++++++++++++++++++
        public width: number;
        public height: number;       
        public isColliding: boolean = false;
        public soundString: string = "";
        //protected properties
        protected dy: number;
        protected dx: number;
        public name: string = "";


        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        constructor(imageString: string) {
            super(imageString);
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;

        
        }

      
    }
}  