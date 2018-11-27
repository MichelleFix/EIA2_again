namespace L8_Inheritance {
    export class Lollipop extends Flowers {
        radius: number;


        constructor(_radius: number) {
            super();
            super.setRandomPosition();
            this.radius = _radius;
        }

        // BLume 2 

        draw(): void {     //  radius ist ein Attribut von Flower
            crc2.beginPath();
            crc2.fillStyle = this.color; // "#F2F5A9"
            crc2.strokeStyle = crc2.fillStyle;
            crc2.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, true); //(400, 480, 10, 0, 2 * Math.PI, true)
            crc2.moveTo(this.x, this.y + 10);
            crc2.lineTo(this.x, this.y + 20);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();


        }

    }
}