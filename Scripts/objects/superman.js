var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // Superman Class ++++++++++++++++++++++++++++++++++++++
    var Superman = (function (_super) {
        __extends(Superman, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        function Superman(imageString) {
            _super.call(this, imageString);
            this.soundString = "supermansound";
            this.x = 40;
            createjs.Sound.stop();
            createjs.Sound.play(this.soundString, { "loop": -1 });
        }
        // PUBLIC METHODS +++++++++++++++++++++++++++++++
        Superman.prototype.update = function () {
            this.y = stage.mouseY; // position superman under mouse
        };
        return Superman;
    })(objects.GameObject);
    objects.Superman = Superman;
})(objects || (objects = {}));
//# sourceMappingURL=superman.js.map