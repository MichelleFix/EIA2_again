//Aufgabe: Aufgabe 7
//Name: Michelle Fix
//Matrikel: 254671
//Datum: 14.05.2017
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.

namespace L7_Classes {

    export let crc2: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement;

    window.addEventListener("load", init);

    // Variablen für die Bienen
    let bees: Bee[] = [];       // Bienen-Array
    var n: number = 10;         // Anzahl der Bienen
    let imgData: ImageData;     // Bildschirm wird aktualisiert

    // Variablen für die Blumen
    var f: number = 50;         // Anzahl der Blumen
    let flowerArray: Flower[] = [];     // Blumen-Array
    let randomFlowerNumber: number;
    let x: number;
    let y: number;



    function init(_event: Event): void {

        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");

        //  Funktionsaufrufe

        // Himmel
        crc2.fillStyle = "#A9D0F5";
        crc2.fillRect(0, 0, canvas.width, canvas.height);
        //Sand
        crc2.fillStyle = "#FE9A2E";
        crc2.fillRect(0, 400, canvas.width, 200);
        //Sonne
        drawSun(0, 0, "#FFFF00");
        console.log("Sonne");
        //Pyramide groß
        drawPyramid1();
        console.log("Pyramide Groß");
        //Pyramide klein
        drawPyramid2();
        console.log("Pyramide Groß");
        // Wüstensand
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
        //Palmenblätter
        drawPalm();
        // Bienenkorb
        drawBasket();

        //  ----------------------------  Bienen ----------------------------------------

        // 10 Bienen zeichnen
        for (let i: number = 0; i < n; i++) {
            let b: Bee = new Bee(170, 400); // { x: 0, y: 0, color: " ", wingSize: 0 };
            bees[i] = b;
        }
        //  ----------------------------  Blumen ----------------------------------------


        for (let i: number = 0; i < 50; i++) {
            let flower: Flower = new Flower();   // neue Blume wird erstellt

            flower.randomFlowerNumber = Math.floor((Math.random() * 1) + 0);       // 1. Attribut von Flower
            flower.setRandomPosition();

            switch (flower.randomFlowerNumber) {                 // 1. Attribut von Flower
                case 0:
                    flower.drawFlower1();           // 1. Methode this.x, this.y, "#FA58F4"

                    break;

                case 1:
                    flower.drawFlower2();         //this.x, this.y, "#2ECCFA"
                    break;

                default:
                    break;
            }   // Ende switch
            flowerArray.push(new Flower());      // Array flowers erstellen um die Blumen darin abzuspeichern um auf sie später zugreifen zu können

        }   // Ende for-Schleife
        console.log(flowerArray);                          //Array in die Konsole

        //  ----------------------------  Bienen ----------------------------------------

        // Bienen fliegen lassen
        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height); // canvas speichern
        flyBees();
        window.setTimeout(flyBees, 200);
        // Bei Klick hinzufügen
        canvas.addEventListener("click", clickCanvas);

    }


    // Sonne
    function drawSun(_x: number, _y: number, _fillColor: string): void {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _fillColor;
        crc2.arc(400, 60, 50, 0, 2 * Math.PI, false);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();                                //Warum hier 1 fill, obwohl nach dem close?
    }

    // ### Pyramide 1 Groß ### 
    function drawPyramid1(): void {
        crc2.beginPath();
        crc2.moveTo(50, 400);
        crc2.lineTo(150, 250);
        crc2.lineTo(250, 400);
        crc2.closePath();
        crc2.fillStyle = "#B45F04";
        crc2.fill();

    }

    // ### Pyramide 2 klein ### 
    function drawPyramid2(): void {
        crc2.beginPath();
        crc2.moveTo(230, 400);
        crc2.lineTo(280, 320);
        crc2.lineTo(330, 400);
        crc2.closePath();
        crc2.fillStyle = "#B45F04";
        crc2.fill();
    }

    // Gras

    function drawGras(): void {
        crc2.beginPath();
        crc2.moveTo(450, 480);
        crc2.bezierCurveTo(390, 440, 210, 440, 150, 480);
        crc2.bezierCurveTo(210, 590, 390, 590, 450, 480);
        crc2.closePath();
        crc2.strokeStyle = "#58FA58";
        crc2.fillStyle = "#58FA58";
        crc2.fill();
        crc2.stroke();
    }

    //Palmenstamm

    function drawTribe(_x: number, _y: number): void {
        crc2.beginPath();
        crc2.fillStyle = "#8A2908";
        crc2.strokeStyle = "black";
        crc2.lineWidth = 1;
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x + 25, _y + 25);
        crc2.lineTo(_x + 50, _y);

        crc2.closePath();
        crc2.fill();
        crc2.stroke();


    }

    // Palmenblätter
    function drawPalm(): void {
        crc2.beginPath();
        crc2.fillStyle = "#088A08";
        crc2.strokeStyle = "#0B610B";
        crc2.lineWidth = 1;
        crc2.moveTo(225, 309);
        //Blatt 1
        crc2.bezierCurveTo(270, 320, 310, 360, 290, 400);
        crc2.lineTo(225, 309);
        //Blatt 2
        crc2.bezierCurveTo(250, 300, 320, 290, 330, 330);
        crc2.lineTo(225, 309);
        //Blatt 3
        crc2.bezierCurveTo(220, 280, 290, 250, 320, 260);
        crc2.lineTo(225, 309);

        //Blatt 4
        crc2.bezierCurveTo(220, 270, 170, 250, 150, 265);
        crc2.lineTo(225, 309);

        //Blatt 5
        crc2.bezierCurveTo(185, 295, 135, 300, 125, 320);
        crc2.lineTo(225, 309);

        //Blatt 6
        crc2.bezierCurveTo(150, 330, 140, 360, 155, 375);
        crc2.lineTo(225, 309);

        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }




    // Bienenkorb
    function drawBasket(): void {

        crc2.beginPath();
        crc2.scale(1, 1.5);
        crc2.arc(170, 260, 25, 0, 2 * Math.PI, true);

        crc2.fillStyle = "#61210B";
        crc2.strokeStyle = "#61210B";
        crc2.closePath();
        crc2.fill();
        crc2.stroke();

        crc2.beginPath();
        crc2.arc(170, 267, 10, 0, 2 * Math.PI, true);
        crc2.setTransform(1, 0, 0, 1, 0, 0);
        crc2.fillStyle = "black";
        crc2.strokeStyle = "black";
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }


    // Bienen fliegen lassen

    function flyBees(): void {

        crc2.putImageData(imgData, 0, 0); // Laden der Landschaft


        for (let i: number = 0; i < n; i++) {

            let b: Bee = bees[i];


            if (b.x < 0 - 10) {          //Wenn sie nach links aus dem Fenster fliegen kommt sie rechts wieder rein

                b.x = canvas.width + 10;     // +10 ist der Radius der Biene, damit es einen fließeden Übergang gibt
            }

            if (b.y > canvas.height) {     // Wenn die Bienen unten aus dem Bildschirmrand rausfliegen, fliegen sie oben wieder rein

                b.y = 0;
            }

            if (b.y < 0) {                // Wenn die Biene oben rausfliegt, kommt sie unten wieder raus
                b.y = canvas.height;
            }
            b.update();

        }

        window.setTimeout(flyBees, 20);
    }

    function clickCanvas(_event: Event): void {

        let newBee: Bee = new Bee(170, 400); // es wird auf den constructor zugegriffen, der die beiden Parameter x und y verlangt        
        bees.push(newBee);
        n++;
    }


}