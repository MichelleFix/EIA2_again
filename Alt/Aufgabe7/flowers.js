var L7_Classes;
(function (L7_Classes) {
    class Flower {
        constructor() {
            this.setRandomPosition();
            //this.x = _x;
            //this.y = _y;
        }
        // BLume
        drawFlower1() {
            L7_Classes.crc2.beginPath();
            L7_Classes.crc2.fillStyle = "hsl(" + Math.random() * 360 + ", 100%, 50%)"; // Attribut von Flower
            L7_Classes.crc2.strokeStyle = L7_Classes.crc2.fillStyle;
            L7_Classes.crc2.moveTo(this.x, this.y);
            L7_Classes.crc2.bezierCurveTo(this.x + 5, this.y + 25, this.x + 15, this.y + 25, this.x + 20, this.y);
            L7_Classes.crc2.lineTo(this.x + 15, this.y + 5);
            L7_Classes.crc2.lineTo(this.x + 10, this.y);
            L7_Classes.crc2.lineTo(this.x + 5, this.y + 5);
            L7_Classes.crc2.closePath();
            L7_Classes.crc2.fill();
            L7_Classes.crc2.stroke();
        }
        // BLume 2 
        drawFlower2() {
            L7_Classes.crc2.beginPath();
            L7_Classes.crc2.fillStyle = "hsl(" + Math.random() * 360 + ", 100%, 50%)"; // "#F2F5A9"
            L7_Classes.crc2.strokeStyle = L7_Classes.crc2.fillStyle;
            L7_Classes.crc2.arc(this.x, this.y, 10, 0, 2 * Math.PI, true); //(400, 480, 10, 0, 2 * Math.PI, true)
            L7_Classes.crc2.moveTo(this.x, this.y + 10);
            L7_Classes.crc2.lineTo(this.x, this.y + 20);
            L7_Classes.crc2.closePath();
            L7_Classes.crc2.fill();
            L7_Classes.crc2.stroke();
        }
        setRandomPosition() {
            this.x = (Math.random() * (400 - 250) + 250); // 2. Attribut von Flower
            this.y = (Math.random() * (540 - 450) + 450); // 3. Attribut von Flower
        }
    }
    L7_Classes.Flower = Flower;
})(L7_Classes || (L7_Classes = {}));
//# sourceMappingURL=flowers.js.map