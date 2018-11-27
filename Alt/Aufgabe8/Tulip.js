var L8_Inheritance;
(function (L8_Inheritance) {
    class Tulip extends L8_Inheritance.Flowers {
        constructor() {
            super();
            super.setRandomPosition();
        }
        // Tulpe
        draw() {
            L8_Inheritance.crc2.beginPath();
            L8_Inheritance.crc2.fillStyle = this.color; // Attribut von Flower
            L8_Inheritance.crc2.strokeStyle = L8_Inheritance.crc2.fillStyle;
            L8_Inheritance.crc2.moveTo(this.x, this.y);
            L8_Inheritance.crc2.bezierCurveTo(this.x + 5, this.y + 25, this.x + 15, this.y + 25, this.x + 20, this.y);
            L8_Inheritance.crc2.lineTo(this.x + 15, this.y + 5);
            L8_Inheritance.crc2.lineTo(this.x + 10, this.y);
            L8_Inheritance.crc2.lineTo(this.x + 5, this.y + 5);
            L8_Inheritance.crc2.closePath();
            L8_Inheritance.crc2.fill();
            L8_Inheritance.crc2.stroke();
        }
    }
    L8_Inheritance.Tulip = Tulip;
})(L8_Inheritance || (L8_Inheritance = {}));
//# sourceMappingURL=Tulip.js.map