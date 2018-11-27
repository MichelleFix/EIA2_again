//Aufgabe: Aufgabe 4
//Name: Michelle Fix
//Matrikel: 254671
//Datum: 23.04.2017
//Hiermit versichere ich, dass ich diesen
//Code selbst geschrieben habe. Er wurde
//nicht kopiert und auch nicht diktiert.


namespace L4_Canvas {
    window.addEventListener("load", init);
    let crc2: CanvasRenderingContext2D;


    function init(_event: Event): void {


        let canvas: HTMLCanvasElement;
        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        console.log(canvas);
        //gibt es mehrere Canvas tags im Html, kann ich das gewollte element mit der zahl in der eckigen klammer rauspicken
        // bsp: document.getElementsByTagName("canvas")[4]


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

        //Palmenblatt
        drawPalm();

        // Blume 1
        drawFlower1(350, 520, "#FA58F4");


        for (var i: number = 0; i < 50; i++) {
            var random: number = Math.floor((Math.random() * 5) + 0);

            var x: number = (Math.random() * (400 - 250) + 250);
            var y: number = (Math.random() * (540 - 450) + 450);
            switch (random) {
                case 0:
                    drawFlower1(x, y, "#FA58F4");
                    break;

                case 1:
                    drawFlower1(x, y, "#2ECCFA");
                    break;

                case 2:
                    drawFlower1(x, y, "#6A0888");
                    break;

                default:
                    break;
            }
        }
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
}