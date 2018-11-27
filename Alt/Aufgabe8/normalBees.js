var L8_Inheritance;
(function (L8_Inheritance) {
    class normalBee extends L8_Inheritance.allBees {
        constructor(_x, _y) {
            super(_x, _y);
            console.log("Create normal Bee");
            //            this.setRandomStyle();
        }
        // Info von fly reingemacht
        fly() {
            this.x += Math.floor(Math.random() * 10) - 5;
            this.y += Math.random() * 4 - 2;
        }
        draw() {
            // K�rper
            L8_Inheritance.crc2.beginPath();
            L8_Inheritance.crc2.fillStyle = this.color;
            L8_Inheritance.crc2.strokeStyle = "black";
            L8_Inheritance.crc2.moveTo(this.x - 10, this.y);
            L8_Inheritance.crc2.bezierCurveTo(this.x + 3.75, this.y - 7, this.x + 11.25, this.y - 7, this.x + 15, this.y);
            L8_Inheritance.crc2.bezierCurveTo(this.x + 11.25, this.y + 7, this.x + 3.75, this.y + 7, this.x - 15, this.y);
            L8_Inheritance.crc2.closePath();
            L8_Inheritance.crc2.fill();
            L8_Inheritance.crc2.stroke();
            // Kopf
            L8_Inheritance.crc2.beginPath();
            L8_Inheritance.crc2.fillStyle = "black";
            L8_Inheritance.crc2.strokeStyle = "black";
            L8_Inheritance.crc2.moveTo(this.x + 15, this.y);
            L8_Inheritance.crc2.arc(this.x + 15, this.y, 5, 0, 2 * Math.PI, true);
            L8_Inheritance.crc2.closePath();
            L8_Inheritance.crc2.fill();
            L8_Inheritance.crc2.stroke();
            //Fl�gel
            L8_Inheritance.crc2.beginPath();
            L8_Inheritance.crc2.fillStyle = "#CEF6F5";
            L8_Inheritance.crc2.strokeStyle = "#CEF6F5";
            L8_Inheritance.crc2.moveTo(this.x + 11, this.y - 3);
            L8_Inheritance.crc2.bezierCurveTo(this.x + this.wingSize, this.y - this.wingSize, this.x + (this.wingSize - 18), this.y - this.wingSize, this.x + 11, this.y - 3); //this.x + 20, this.y - 20, this.x + 2, this.y - 20, this.x + 13, this.y - 3
            L8_Inheritance.crc2.closePath();
            L8_Inheritance.crc2.fill();
            L8_Inheritance.crc2.stroke();
            // Streifen
            L8_Inheritance.crc2.beginPath();
            L8_Inheritance.crc2.strokeStyle = "black";
            L8_Inheritance.crc2.moveTo(this.x - 2, this.y - 4);
            L8_Inheritance.crc2.lineTo(this.x - 2, this.y + 4);
            L8_Inheritance.crc2.closePath();
            L8_Inheritance.crc2.fill();
            L8_Inheritance.crc2.stroke();
            L8_Inheritance.crc2.beginPath();
            L8_Inheritance.crc2.strokeStyle = "black";
            L8_Inheritance.crc2.moveTo(this.x + 1, this.y - 6);
            L8_Inheritance.crc2.lineTo(this.x + 1, this.y + 6);
            L8_Inheritance.crc2.closePath();
            L8_Inheritance.crc2.fill();
            L8_Inheritance.crc2.stroke();
            L8_Inheritance.crc2.beginPath();
            L8_Inheritance.crc2.strokeStyle = "black";
            L8_Inheritance.crc2.moveTo(this.x + 4, this.y - 6.5);
            L8_Inheritance.crc2.lineTo(this.x + 4, this.y + 6.5);
            L8_Inheritance.crc2.closePath();
            L8_Inheritance.crc2.fill();
            L8_Inheritance.crc2.stroke();
        }
    }
    L8_Inheritance.normalBee = normalBee;
})(L8_Inheritance || (L8_Inheritance = {}));
//# sourceMappingURL=normalBees.js.map