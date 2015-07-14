var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // Ring Class ++++++++++++++++++++++++++++++++++++++
    var Ring = (function (_super) {
        __extends(Ring, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        function Ring(imageString) {
            _super.call(this, imageString);
            this.name = "ring";
            this.soundString = "ringing";
            this.dx = 5;
            this.reset();
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++++
        Ring.prototype.checkBounds = function () {
            // check if ring has left screen
            if (this.x < 0) {
                this.reset();
            }
        };
        Ring.prototype.reset = function () {
            this.y = Math.floor(Math.random() * 390); // start ring at random location
            this.x = 660; // start ring off stage
        };
        // PUBLIC METHODS +++++++++++++++++++++++++++++++
        Ring.prototype.update = function () {
            this.x -= this.dx; // moves ring right the stage
            this.checkBounds();
        };
        return Ring;
    })(objects.GameObject);
    objects.Ring = Ring;
})(objects || (objects = {}));
//# sourceMappingURL=ring.js.map