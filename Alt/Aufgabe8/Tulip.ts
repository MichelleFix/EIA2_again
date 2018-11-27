namespace L8_Inheritance {
    export class Tulip extends Flowers {
        constructor() {
            super();
            super.setRandomPosition();
        }

        // Tulpe
        draw(): void {
            crc2.beginPath();
            crc2.fillStyle = this.color;                            // Attribut von Flower
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


    }
}