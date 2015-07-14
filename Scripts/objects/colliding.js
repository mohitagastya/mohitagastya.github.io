var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // Colliding Class ++++++++++++++++++++++++++++++++++++++
    var Colliding = (function (_super) {
        __extends(Colliding, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        function Colliding(imageString) {
            _super.call(this, imageString);
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
        }
        Colliding.prototype.update = function () {
            this.x = 10;
            this.y = superman.y;
        };
        return Colliding;
    })(createjs.Bitmap);
    objects.Colliding = Colliding;
})(objects || (objects = {}));
//# sourceMappingURL=colliding.js.map