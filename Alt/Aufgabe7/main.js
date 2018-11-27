//Aufgabe: Aufgabe 7
//Name: Michelle Fix
//Matrikel: 254671
//Datum: 14.05.2017
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
var L7_Classes;
(function (L7_Classes) {
    window.addEventListener("load", init);
    // Variablen f�r die Bienen
    let bees = []; // Bienen-Array
    var n = 10; // Anzahl der Bienen
    let imgData; // Bildschirm wird aktualisiert
    // Variablen f�r die Blumen
    var f = 50; // Anzahl der Blumen
    let flowerArray = []; // Blumen-Array
    let randomFlowerNumber;
    let x;
    let y;
    function init(_event) {
        L7_Classes.canvas = document.getElementsByTagName("canvas")[0];
        L7_Classes.crc2 = L7_Classes.canvas.getContext("2d");
        //  Funktionsaufrufe
        // Himmel
        L7_Classes.crc2.fillStyle = "#A9D0F5";
        L7_Classes.crc2.fillRect(0, 0, L7_Classes.canvas.width, L7_Classes.canvas.height);
        //Sand
        L7_Classes.crc2.fillStyle = "#FE9A2E";
        L7_Classes.crc2.fillRect(0, 400, L7_Classes.canvas.width, 200);
        //Sonne
        drawSun(0, 0, "#FFFF00");
        console.log("Sonne");
        //Pyramide gro�
        drawPyramid1();
        console.log("Pyramide Gro�");
        //Pyramide klein
        drawPyramid2();
        console.log("Pyramide Gro�");
        // W�stensand
        drawGras();
        // Palmenstamm
        drawTribe(200, 480);
        drawTribe(200, 459);
        drawTribe(200, 434);
        drawTribe(200, 409);
        drawTribe(200, 384);
        drawTribe(200, 359);
        drawTribe(200, 334);
        drawTribe(200, 309);
        //Palmenbl�tter
        drawPalm();
        // Bienenkorb
        drawBasket();
        //  ----------------------------  Bienen ----------------------------------------
        // 10 Bienen zeichnen
        for (let i = 0; i < n; i++) {
            let b = new L7_Classes.Bee(170, 400); // { x: 0, y: 0, color: " ", wingSize: 0 };
            bees[i] = b;
        }
        //  ----------------------------  Blumen ----------------------------------------
        for (let i = 0; i < 50; i++) {
            let flower = new L7_Classes.Flower(); // neue Blume wird erstellt
            flower.randomFlowerNumber = Math.floor((Math.random() * 1) + 0); // 1. Attribut von Flower
            flower.setRandomPosition();
            switch (flower.randomFlowerNumber) {
                case 0:
                    flower.drawFlower1(); // 1. Methode this.x, this.y, "#FA58F4"
                    break;
                case 1:
                    flower.drawFlower2(); //this.x, this.y, "#2ECCFA"
                    break;
                default:
                    break;
            } // Ende switch
            flowerArray.push(new L7_Classes.Flower()); // Array flowers erstellen um die Blumen darin abzuspeichern um auf sie sp�ter zugreifen zu k�nnen
        } // Ende for-Schleife
        console.log(flowerArray); //Array in die Konsole
        //  ----------------------------  Bienen ----------------------------------------
        // Bienen fliegen lassen
        imgData = L7_Classes.crc2.getImageData(0, 0, L7_Classes.canvas.width, L7_Classes.canvas.height); // canvas speichern
        flyBees();
        window.setTimeout(flyBees, 200);
        // Bei Klick hinzuf�gen
        L7_Classes.canvas.addEventListener("click", clickCanvas);
    }
    // Sonne
    function drawSun(_x, _y, _fillColor) {
        L7_Classes.crc2.beginPath();
        L7_Classes.crc2.fillStyle = _fillColor;
        L7_Classes.crc2.strokeStyle = _fillColor;
        L7_Classes.crc2.arc(400, 60, 50, 0, 2 * Math.PI, false);
        L7_Classes.crc2.closePath();
        L7_Classes.crc2.fill();
        L7_Classes.crc2.stroke(); //Warum hier 1 fill, obwohl nach dem close?
    }
    // ### Pyramide 1 Gro� ### 
    function drawPyramid1() {
        L7_Classes.crc2.beginPath();
        L7_Classes.crc2.moveTo(50, 400);
        L7_Classes.crc2.lineTo(150, 250);
        L7_Classes.crc2.lineTo(250, 400);
        L7_Classes.crc2.closePath();
        L7_Classes.crc2.fillStyle = "#B45F04";
        L7_Classes.crc2.fill();
    }
    // ### Pyramide 2 klein ### 
    function drawPyramid2() {
        L7_Classes.crc2.beginPath();
        L7_Classes.crc2.moveTo(230, 400);
        L7_Classes.crc2.lineTo(280, 320);
        L7_Classes.crc2.lineTo(330, 400);
        L7_Classes.crc2.closePath();
        L7_Classes.crc2.fillStyle = "#B45F04";
        L7_Classes.crc2.fill();
    }
    // Gras
    function drawGras() {
        L7_Classes.crc2.beginPath();
        L7_Classes.crc2.moveTo(450, 480);
        L7_Classes.crc2.bezierCurveTo(390, 440, 210, 440, 150, 480);
        L7_Classes.crc2.bezierCurveTo(210, 590, 390, 590, 450, 480);
        L7_Classes.crc2.closePath();
        L7_Classes.crc2.strokeStyle = "#58FA58";
        L7_Classes.crc2.fillStyle = "#58FA58";
        L7_Classes.crc2.fill();
        L7_Classes.crc2.stroke();
    }
    //Palmenstamm
    function drawTribe(_x, _y) {
        L7_Classes.crc2.beginPath();
        L7_Classes.crc2.fillStyle = "#8A2908";
        L7_Classes.crc2.strokeStyle = "black";
        L7_Classes.crc2.lineWidth = 1;
        L7_Classes.crc2.moveTo(_x, _y);
        L7_Classes.crc2.lineTo(_x + 25, _y + 25);
        L7_Classes.crc2.lineTo(_x + 50, _y);
        L7_Classes.crc2.closePath();
        L7_Classes.crc2.fill();
        L7_Classes.crc2.stroke();
    }
    // Palmenbl�tter
    function drawPalm() {
        L7_Classes.crc2.beginPath();
        L7_Classes.crc2.fillStyle = "#088A08";
        L7_Classes.crc2.strokeStyle = "#0B610B";
        L7_Classes.crc2.lineWidth = 1;
        L7_Classes.crc2.moveTo(225, 309);
        //Blatt 1
        L7_Classes.crc2.bezierCurveTo(270, 320, 310, 360, 290, 400);
        L7_Classes.crc2.lineTo(225, 309);
        //Blatt 2
        L7_Classes.crc2.bezierCurveTo(250, 300, 320, 290, 330, 330);
        L7_Classes.crc2.lineTo(225, 309);
        //Blatt 3
        L7_Classes.crc2.bezierCurveTo(220, 280, 290, 250, 320, 260);
        L7_Classes.crc2.lineTo(225, 309);
        //Blatt 4
        L7_Classes.crc2.bezierCurveTo(220, 270, 170, 250, 150, 265);
        L7_Classes.crc2.lineTo(225, 309);
        //Blatt 5
        L7_Classes.crc2.bezierCurveTo(185, 295, 135, 300, 125, 320);
        L7_Classes.crc2.lineTo(225, 309);
        //Blatt 6
        L7_Classes.crc2.bezierCurveTo(150, 330, 140, 360, 155, 375);
        L7_Classes.crc2.lineTo(225, 309);
        L7_Classes.crc2.closePath();
        L7_Classes.crc2.fill();
        L7_Classes.crc2.stroke();
    }
    // Bienenkorb
    function drawBasket() {
        L7_Classes.crc2.beginPath();
        L7_Classes.crc2.scale(1, 1.5);
        L7_Classes.crc2.arc(170, 260, 25, 0, 2 * Math.PI, true);
        L7_Classes.crc2.fillStyle = "#61210B";
        L7_Classes.crc2.strokeStyle = "#61210B";
        L7_Classes.crc2.closePath();
        L7_Classes.crc2.fill();
        L7_Classes.crc2.stroke();
        L7_Classes.crc2.beginPath();
        L7_Classes.crc2.arc(170, 267, 10, 0, 2 * Math.PI, true);
        L7_Classes.crc2.setTransform(1, 0, 0, 1, 0, 0);
        L7_Classes.crc2.fillStyle = "black";
        L7_Classes.crc2.strokeStyle = "black";
        L7_Classes.crc2.closePath();
        L7_Classes.crc2.fill();
        L7_Classes.crc2.stroke();
    }
    // Bienen fliegen lassen
    function flyBees() {
        L7_Classes.crc2.putImageData(imgData, 0, 0); // Laden der Landschaft
        for (let i = 0; i < n; i++) {
            let b = bees[i];
            if (b.x < 0 - 10) {
                b.x = L7_Classes.canvas.width + 10; // +10 ist der Radius der Biene, damit es einen flie�eden �bergang gibt
            }
            if (b.y > L7_Classes.canvas.height) {
                b.y = 0;
            }
            if (b.y < 0) {
                b.y = L7_Classes.canvas.height;
            }
            b.update();
        }
        window.setTimeout(flyBees, 20);
    }
    function clickCanvas(_event) {
        let newBee = new L7_Classes.Bee(170, 400); // es wird auf den constructor zugegriffen, der die beiden Parameter x und y verlangt        
        bees.push(newBee);
        n++;
    }
})(L7_Classes || (L7_Classes = {}));
//# sourceMappingURL=main.js.map