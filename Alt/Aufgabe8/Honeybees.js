var L8_Inheritance;
(function (L8_Inheritance) {
    class HoneyBee extends L8_Inheritance.allBees {
        constructor(_x, _y) {
            super(_x, _y);
            this.speed = 0.05;
            this.setRandomTarget();
        }
        setRandomTarget() {
            let randomtargetflower = Math.round(Math.random() * (L8_Inheritance.f.length - 1));
            this.targetX = L8_Inheritance.f[randomtargetflower].x;
            this.targetY = L8_Inheritance.f[randomtargetflower].y;
        }
        fly() {
            let dx = this.targetX - this.x;
            let dy = this.targetY - this.y;
            if (Math.abs(dx) < 0.5 && Math.abs(dy) < 1) {
                this.setRandomTarget();
            }
            else {
                this.x += dx * this.speed;
                this.y += dy * this.speed;
            }
        }
        draw() {
            // K�rper
            L8_Inheritance.crc2.beginPath();
            L8_Inheritance.crc2.fillStyle = "#E4BE35";
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
    L8_Inheritance.HoneyBee = HoneyBee; // Ende Klasse
})(L8_Inheritance || (L8_Inheritance = {})); // Ende namespace
//# sourceMappingURL=Honeybees.js.map