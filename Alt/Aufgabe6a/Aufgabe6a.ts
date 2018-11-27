//Aufgabe: Aufgabe 6a
//Name: Michelle Fix
//Matrikel: 254671
//Datum: 23.04.2017
//Hiermit versichere ich, dass ich diesen
//Code selbst geschrieben habe. Er wurde
//nicht kopiert und auch nicht diktiert.






namespace L6_Canvas {

    interface Bee {
        x: number;
        y: number;
        color: string;
        wingSize: number;

    }

    window.addEventListener("load", init);
    let crc2: CanvasRenderingContext2D;

    let bees: Bee[] = [];
    var n: number = 10;         // Anzahl der Bienen

    // Canvas wird nach jeder Bienenbewegung neu geladen
    let imgData: ImageData;


    let canvas: HTMLCanvasElement;
    canvas = document.getElementsByTagName("canvas")[0];
    crc2 = canvas.getContext("2d");
    console.log(canvas);

    function init(_event: Event): void {

        crc2 = canvas.getContext('2d');


        // Himmel
        crc2.fillStyle = "#A9D0F5";
        crc2.fillRect(0, 0, canvas.width, canvas.height);

        //Sand
        crc2.fillStyle = "#FE9A2E";
        crc2.fillRect(0, 400, canvas.width, 200);

        //Sonne
        drawSun(0, 0, "#FFFF00");
        console.log("Sonne");

        //Pyramide groﬂ
        drawPyramid1();
        console.log("Pyramide Groﬂ");

        //Pyramide klein
        drawPyramid2();
        console.log("Pyramide Groﬂ");

        // W¸stensand
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


        //Palmenbl‰tter
        drawPalm();


        // Blume 1
        drawFlower1(350, 520, "#FA58F4");

        // Blume 2
        drawFlower2(400, 480, 10, "#F2F5A9");
        drawFlower2(350, 500, 10, "#FF0040");
        drawFlower2(370, 450, 10, "#FF8000");

        // Bienenkorb
        drawBasket();

        // Blumen an random Stelle plazieren
        for (var i: number = 0; i < 50; i++) {
            var random: number = Math.floor((Math.random() * 5) + 0);

            var randomX: number = (Math.random() * (400 - 250) + 250);
            var randomY: number = (Math.random() * (540 - 450) + 450);
            switch (random) {
                case 0:
                    drawFlower1(randomX, randomY, "#FA58F4");
                    break;

                case 1:
                    drawFlower1(randomX, randomY, "#2ECCFA");
                    break;

                case 2:
                    drawFlower1(randomX, randomY, "#6A0888");
                    break;

                default:
                    break;
            }
        }

        // 10 Bienen zeichnen

        for (let i: number = 0; i < n; i++) {
            let b: Bee = { x: 0, y: 0, color: " ", wingSize: 0 };
            b.x = 170;
            b.y = 400;
            b.color = "hsl(" + Math.random() * 360 + ", 100%, 50%)";
            b.wingSize = (Math.random() * (40 - 10) + 10);
            bees[i] = b;
        }


        // Bienen fliegen lassen
        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height); // canvas speichern
        flyBees();



        window.setTimeout(flyBees, 200);

        canvas.addEventListener("click", clickCanvas);
    }


    // #######################################  Content Loaded ENDE ######################################

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

    // ### Pyramide 1 Groﬂ ### 
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

    // Palmenbl‰tter
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

    // BLume

    function drawFlower1(_x: number, _y: number, _fillColor: string): void {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _fillColor;
        crc2.moveTo(_x, _y);
        //        crc2.lineTo(_x,_y+10);
        crc2.bezierCurveTo(_x + 5, _y + 25, _x + 15, _y + 25, _x + 20, _y);
        crc2.lineTo(_x + 15, _y + 5);
        crc2.lineTo(_x + 10, _y);
        crc2.lineTo(_x + 5, _y + 5);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();


    }

    // BLume 2 

    function drawFlower2(_x: number, _y: number, _r: number, _fillColor: string): void {
        crc2.beginPath();
        crc2.fillStyle = _fillColor; // "#F2F5A9"
        crc2.strokeStyle = _fillColor;
        crc2.arc(_x, _y, _r, 0, 2 * Math.PI, true); //(400, 480, 10, 0, 2 * Math.PI, true)
        crc2.moveTo(_x, _y + 10);
        crc2.lineTo(_x, _y + 20);
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

    // Biene zeichen

    function drawBee(_b: Bee): void {        // x = 170 y = 400  , _scaleX: number, _scaleY:number

        // Kˆrper
        crc2.beginPath();
        crc2.fillStyle = _b.color;
        crc2.strokeStyle = "black";
        crc2.moveTo(_b.x - 10, _b.y);
        crc2.bezierCurveTo(_b.x + 3.75, _b.y - 7, _b.x + 11.25, _b.y - 7, _b.x + 15, _b.y);
        crc2.bezierCurveTo(_b.x + 11.25, _b.y + 7, _b.x + 3.75, _b.y + 7, _b.x - 15, _b.y);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();

        // Kopf
        crc2.beginPath();
        crc2.fillStyle = "black";
        crc2.strokeStyle = "black";
        crc2.moveTo(_b.x + 15, _b.y);
        crc2.arc(_b.x + 15, _b.y, 5, 0, 2 * Math.PI, true);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();

        //Fl¸gel
        crc2.beginPath();
        crc2.fillStyle = "#CEF6F5";
        crc2.strokeStyle = "#CEF6F5";
        crc2.moveTo(_b.x + 11, _b.y - 3);
        crc2.bezierCurveTo(_b.x + _b.wingSize, _b.y - _b.wingSize, _b.x + (_b.wingSize - 18), _b.y - _b.wingSize,_b.x + 11, _b.y - 3); //_b.x + 20, _b.y - 20, _b.x + 2, _b.y - 20, _b.x + 13, _b.y - 3
        crc2.closePath();
        crc2.fill();
        crc2.stroke();

        // Streifen

        crc2.beginPath();
        crc2.strokeStyle = "black";
        crc2.moveTo(_b.x - 2, _b.y - 4);
        crc2.lineTo(_b.x - 2, _b.y + 4);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();

        crc2.beginPath();
        crc2.strokeStyle = "black";
        crc2.moveTo(_b.x + 1, _b.y - 6);
        crc2.lineTo(_b.x + 1, _b.y + 6);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();

        crc2.beginPath();
        crc2.strokeStyle = "black";
        crc2.moveTo(_b.x + 4, _b.y - 6.5);
        crc2.lineTo(_b.x + 4, _b.y + 6.5);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();


    }

    // Bienen fliegen lassen

    function flyBees(): void {

        console.log("Animate called");


        crc2.putImageData(imgData, 0, 0); // Laden der Landschaft


        for (let i: number = 0; i < n; i++) {

            let b: Bee = bees[i];

            b.x += Math.floor(Math.random() * 10) - 5;
            b.y += Math.random() * 4 - 2;

            if (b.x < 0 - 10) {          //Wenn sie nach links aus dem Fenster fliegen kommt sie rechts wieder rein

                b.x = canvas.width + 10;     // +10 ist der Radius der Biene, damit es einen flieﬂeden ‹bergang gibt
            }

            if (b.y > canvas.height) {     // Wenn die Bienen unten aus dem Bildschirmrand rausfliegen, fliegen sie oben wieder rein

                b.y = 0;
            }

            if (b.y < 0) {                // Wenn die Biene oben rausfliegt, kommt sie unten wieder raus
                b.y = canvas.height;
            }
            drawBee(b);
            console.log("Bienchen")
        }

        window.setTimeout(flyBees, 20);
    }

    function clickCanvas(_event: Event): void {
        bees.push({ x: 170, y: 400, color:"yellow", wingSize: 20});
        bees.push({ x: 170, y: 400, color: "yellow", wingSize: 20 });
        n++;
    }

}