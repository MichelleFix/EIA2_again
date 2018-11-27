namespace L8_Inheritance {
    export class normalBee extends allBees {

        constructor(_x: number, _y: number) {
            super(_x, _y);
            console.log("Create normal Bee");
//            this.setRandomStyle();

        }
        // Info von fly reingemacht
        fly(): void {
            this.x += Math.floor(Math.random() * 10) - 5;
            this.y += Math.random() * 4 - 2;    
        }
        
        draw(): void {
            // Körper
            crc2.beginPath();
            crc2.fillStyle = this.color;
            crc2.strokeStyle = "black";
            crc2.moveTo(this.x - 10, this.y);
            crc2.bezierCurveTo(this.x + 3.75, this.y - 7, this.x + 11.25, this.y - 7, this.x + 15, this.y);
            crc2.bezierCurveTo(this.x + 11.25, this.y + 7, this.x + 3.75, this.y + 7, this.x - 15, this.y);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            // Kopf
            crc2.beginPath();
            crc2.fillStyle = "black";
            crc2.strokeStyle = "black";
            crc2.moveTo(this.x + 15, this.y);
            crc2.arc(this.x + 15, this.y, 5, 0, 2 * Math.PI, true);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            //Flügel
            crc2.beginPath();
            crc2.fillStyle = "#CEF6F5";
            crc2.strokeStyle = "#CEF6F5";
            crc2.moveTo(this.x + 11, this.y - 3);
            crc2.bezierCurveTo(this.x + this.wingSize, this.y - this.wingSize, this.x + (this.wingSize - 18), this.y - this.wingSize, this.x + 11, this.y - 3); //this.x + 20, this.y - 20, this.x + 2, this.y - 20, this.x + 13, this.y - 3
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            // Streifen

            crc2.beginPath();
            crc2.strokeStyle = "black";
            crc2.moveTo(this.x - 2, this.y - 4);
            crc2.lineTo(this.x - 2, this.y + 4);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.beginPath();
            crc2.strokeStyle = "black";
            crc2.moveTo(this.x + 1, this.y - 6);
            crc2.lineTo(this.x + 1, this.y + 6);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.beginPath();
            crc2.strokeStyle = "black";
            crc2.moveTo(this.x + 4, this.y - 6.5);
            crc2.lineTo(this.x + 4, this.y + 6.5);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
        }
    }
}