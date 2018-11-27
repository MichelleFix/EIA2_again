var L7_Classes;
(function (L7_Classes) {
    class Bee {
        constructor(_x, _y) {
            this.setRandomStyle();
            //this.setRandomPosition();
            this.x = _x;
            this.y = _y;
        }
        update() {
            this.draw();
            this.fly();
        }
        draw() {
            // K�rper
            L7_Classes.crc2.beginPath();
            L7_Classes.crc2.fillStyle = this.color;
            L7_Classes.crc2.strokeStyle = "black";
            L7_Classes.crc2.moveTo(this.x - 10, this.y);
            L7_Classes.crc2.bezierCurveTo(this.x + 3.75, this.y - 7, this.x + 11.25, this.y - 7, this.x + 15, this.y);
            L7_Classes.crc2.bezierCurveTo(this.x + 11.25, this.y + 7, this.x + 3.75, this.y + 7, this.x - 15, this.y);
            L7_Classes.crc2.closePath();
            L7_Classes.crc2.fill();
            L7_Classes.crc2.stroke();
            // Kopf
            L7_Classes.crc2.beginPath();
            L7_Classes.crc2.fillStyle = "black";
            L7_Classes.crc2.strokeStyle = "black";
            L7_Classes.crc2.moveTo(this.x + 15, this.y);
            L7_Classes.crc2.arc(this.x + 15, this.y, 5, 0, 2 * Math.PI, true);
            L7_Classes.crc2.closePath();
            L7_Classes.crc2.fill();
            L7_Classes.crc2.stroke();
            //Fl�gel
            L7_Classes.crc2.beginPath();
            L7_Classes.crc2.fillStyle = "#CEF6F5";
            L7_Classes.crc2.strokeStyle = "#CEF6F5";
            L7_Classes.crc2.moveTo(this.x + 11, this.y - 3);
            L7_Classes.crc2.bezierCurveTo(this.x + this.wingSize, this.y - this.wingSize, this.x + (this.wingSize - 18), this.y - this.wingSize, this.x + 11, this.y - 3); //this.x + 20, this.y - 20, this.x + 2, this.y - 20, this.x + 13, this.y - 3
            L7_Classes.crc2.closePath();
            L7_Classes.crc2.fill();
            L7_Classes.crc2.stroke();
            // Streifen
            L7_Classes.crc2.beginPath();
            L7_Classes.crc2.strokeStyle = "black";
            L7_Classes.crc2.moveTo(this.x - 2, this.y - 4);
            L7_Classes.crc2.lineTo(this.x - 2, this.y + 4);
            L7_Classes.crc2.closePath();
            L7_Classes.crc2.fill();
            L7_Classes.crc2.stroke();
            L7_Classes.crc2.beginPath();
            L7_Classes.crc2.strokeStyle = "black";
            L7_Classes.crc2.moveTo(this.x + 1, this.y - 6);
            L7_Classes.crc2.lineTo(this.x + 1, this.y + 6);
            L7_Classes.crc2.closePath();
            L7_Classes.crc2.fill();
            L7_Classes.crc2.stroke();
            L7_Classes.crc2.beginPath();
            L7_Classes.crc2.strokeStyle = "black";
            L7_Classes.crc2.moveTo(this.x + 4, this.y - 6.5);
            L7_Classes.crc2.lineTo(this.x + 4, this.y + 6.5);
            L7_Classes.crc2.closePath();
            L7_Classes.crc2.fill();
            L7_Classes.crc2.stroke();
        }
        fly() {
            this.x += Math.floor(Math.random() * 10) - 5;
            this.y += Math.random() * 4 - 2;
        }
        setRandomStyle() {
            this.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
            this.wingSize = (Math.random() * (40 - 10) + 10);
        }
    }
    L7_Classes.Bee = Bee;
})(L7_Classes || (L7_Classes = {}));
//# sourceMappingURL=Bees.js.map