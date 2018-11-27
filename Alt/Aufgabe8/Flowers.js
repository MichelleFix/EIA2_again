var L8_Inheritance;
(function (L8_Inheritance) {
    class Flowers {
        //randomFlowerNumber: number;
        constructor() {
            console.log("create Flower");
            this.setRandomPosition();
            this.setRandomStyle();
        }
        draw() {
            // abstract
        }
        setRandomStyle() {
            this.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
        }
        setRandomPosition() {
            this.x = (Math.random() * (400 - 250) + 250); // 2. Attribut von Flower
            this.y = (Math.random() * (540 - 450) + 450); // 3. Attribut von Flower
        }
    }
    L8_Inheritance.Flowers = Flowers;
})(L8_Inheritance || (L8_Inheritance = {}));
//# sourceMappingURL=Flowers.js.map