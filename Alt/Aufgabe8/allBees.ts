namespace L8_Inheritance {
        export class allBees {
        x: number;
        y: number;
        color: string;
        wingSize: number;

        constructor(_x: number, _y: number) {
            this.setRandomStyle();
            //this.setRandomPosition();
            this.x = _x;
            this.y = _y;
        }

        update(): void {
            this.fly();
            this.draw();
        }

        draw(): void {
            // nix
        }
        //Info in fly rausgenommen
        fly(): void {
            //nix
        }

        setRandomStyle(): void {
            this.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
            this.wingSize = (Math.random() * (40 - 10) + 10);
        }

    }
}