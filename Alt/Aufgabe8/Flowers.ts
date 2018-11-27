namespace L8_Inheritance {

    export class Flowers {
        x: number;
        y: number;
        color: string;
        //randomFlowerNumber: number;


        constructor() {
            console.log("create Flower");
            this.setRandomPosition();
            this.setRandomStyle();
        }

        draw(): void {
            // abstract
        }

        setRandomStyle(): void {
            this.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
        }


        setRandomPosition(): void {
            this.x = (Math.random() * (400 - 250) + 250);      // 2. Attribut von Flower
            this.y = (Math.random() * (540 - 450) + 450);      // 3. Attribut von Flower

        }


    }
}