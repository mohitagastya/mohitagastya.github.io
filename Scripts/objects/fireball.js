var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // fireball Class ++++++++++++++++++++++++++++++++++++++
    var Fireball = (function (_super) {
        __extends(Fireball, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        function Fireball(imageString) {
            _super.call(this, imageString);
            this.name = "fireball";
            this.soundString = "fireballs";
            this.reset();
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++++
        Fireball.prototype.checkBounds = function () {
            // check if fireball has left screen
            if (this.x < 0) {
                this.reset();
            }
        };
        Fireball.prototype.reset = function () {
            this.y = Math.floor(Math.random() * 390); // start fireballs at random location
            this.x = 640; // start fireball off stage
            this.dy = Math.floor(Math.random() * 4) - 2;
            this.dx = Math.floor(Math.random() * 5) + 5;
        };
        // PUBLIC METHODS +++++++++++++++++++++++++++++++
        Fireball.prototype.update = function () {
            this.y += this.dy; // moves fireball up and down the stage
            this.x -= this.dx; // drifts fireballs left
            this.checkBounds();
        };
        return Fireball;
    })(objects.GameObject);
    objects.Fireball = Fireball;
})(objects || (objects = {}));
//# sourceMappingURL=fireball.js.map