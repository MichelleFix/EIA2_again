var L8_Inheritance;
(function (L8_Inheritance) {
    class allBees {
        constructor(_x, _y) {
            this.setRandomStyle();
            //this.setRandomPosition();
            this.x = _x;
            this.y = _y;
        }
        update() {
            this.fly();
            this.draw();
        }
        draw() {
            // nix
        }
        //Info in fly rausgenommen
        fly() {
            //nix
        }
        setRandomStyle() {
            this.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
            this.wingSize = (Math.random() * (40 - 10) + 10);
        }
    }
    L8_Inheritance.allBees = allBees;
})(L8_Inheritance || (L8_Inheritance = {}));
//# sourceMappingURL=allBees.js.map