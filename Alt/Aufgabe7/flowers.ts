namespace L7_Classes {

    export class Flower {
        x: number;
        y: number;
        randomFlowerNumber: number;


        constructor() {
            this.setRandomPosition();
            //this.x = _x;
            //this.y = _y;

        }


        // BLume

        drawFlower1(): void {
            crc2.beginPath();
            crc2.fillStyle = "hsl(" + Math.random() * 360 + ", 100%, 50%)";                            // Attribut von Flower
            crc2.strokeStyle = crc2.fillStyle;
            crc2.moveTo(this.x, this.y);
            crc2.bezierCurveTo(this.x + 5, this.y + 25, this.x + 15, this.y + 25, this.x + 20, this.y);
            crc2.lineTo(this.x + 15, this.y + 5);
            crc2.lineTo(this.x + 10, this.y);
            crc2.lineTo(this.x + 5, this.y + 5);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

        }

        // BLume 2 

        drawFlower2(): void {     //  radius ist ein Attribut von Flower
            crc2.beginPath();
            crc2.fillStyle = "hsl(" + Math.random() * 360 + ", 100%, 50%)"; // "#F2F5A9"
            crc2.strokeStyle = crc2.fillStyle;
            crc2.arc(this.x, this.y, 10, 0, 2 * Math.PI, true); //(400, 480, 10, 0, 2 * Math.PI, true)
            crc2.moveTo(this.x, this.y + 10);
            crc2.lineTo(this.x, this.y + 20);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();


        }

        setRandomPosition(): void {
            this.x = (Math.random() * (400 - 250) + 250);      // 2. Attribut von Flower
            this.y = (Math.random() * (540 - 450) + 450);      // 3. Attribut von Flower

        }
    }
}