var L8_Inheritance;
(function (L8_Inheritance) {
    class Lollipop extends L8_Inheritance.Flowers {
        constructor(_radius) {
            super();
            super.setRandomPosition();
            this.radius = _radius;
        }
        // BLume 2 
        draw() {
            L8_Inheritance.crc2.beginPath();
            L8_Inheritance.crc2.fillStyle = this.color; // "#F2F5A9"
            L8_Inheritance.crc2.strokeStyle = L8_Inheritance.crc2.fillStyle;
            L8_Inheritance.crc2.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, true); //(400, 480, 10, 0, 2 * Math.PI, true)
            L8_Inheritance.crc2.moveTo(this.x, this.y + 10);
            L8_Inheritance.crc2.lineTo(this.x, this.y + 20);
            L8_Inheritance.crc2.closePath();
            L8_Inheritance.crc2.fill();
            L8_Inheritance.crc2.stroke();
        }
    }
    L8_Inheritance.Lollipop = Lollipop;
})(L8_Inheritance || (L8_Inheritance = {}));
//# sourceMappingURL=Lollipop.js.map