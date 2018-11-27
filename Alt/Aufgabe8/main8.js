//Aufgabe: Aufgabe 8
//Name: Michelle Fix
//Matrikel: 254671
//Datum: 21.05.2017
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
var L8_Inheritance;
(function (L8_Inheritance) {
    window.addEventListener("load", init);
    // Variablen f�r die Bienen
    let bees = []; // Bienen-Array
    var n = 10; // Anzahl der Bienen
    let imgData; // Bildschirm wird aktualisiert
    // Variablen f�r die Blumen
    L8_Inheritance.f = [];
    var b = 15; // Anzahl der Blumen
    //    let randomFlowerNumber: number;
    let x;
    let y;
    function init(_event) {
        L8_Inheritance.canvas = document.getElementsByTagName("canvas")[0];
        L8_Inheritance.crc2 = L8_Inheritance.canvas.getContext("2d");
        //  Funktionsaufrufe
        // Himmel
        L8_Inheritance.crc2.fillStyle = "#A9D0F5";
        L8_Inheritance.crc2.fillRect(0, 0, L8_Inheritance.canvas.width, L8_Inheritance.canvas.height);
        //Sand
        L8_Inheritance.crc2.fillStyle = "#FE9A2E";
        L8_Inheritance.crc2.fillRect(0, 400, L8_Inheritance.canvas.width, 200);
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
        // Blumen vor Bienen und imgData hinter Blumen, nicht hinter Bienen, sonst werden Bienen auch mit abgespeichert
        //  ----------------------------  Blumen ----------------------------------------
        // neue Blume wird erstellt
        for (let i = 0; i < b; i++) {
            let randomFlowerNumber = Math.floor((Math.random() * 2) + 0);
            // let randomNumber zw 0 1
            switch (randomFlowerNumber) {
                case 0:
                    let t = new L8_Inheritance.Tulip();
                    t.draw();
                    L8_Inheritance.f.push(t);
                    break;
                case 1:
                    let l = new L8_Inheritance.Lollipop(10);
                    l.draw();
                    L8_Inheritance.f.push(l);
                    break;
                default:
                    break;
            } // Ende switch
        } // Ende for-Schleife
        imgData = L8_Inheritance.crc2.getImageData(0, 0, L8_Inheritance.canvas.width, L8_Inheritance.canvas.height); // canvas speichern
        //  ----------------------------  Bienen ----------------------------------------
        // 10 normale Bienen zeichnen
        for (let i = 0; i < n; i++) {
            let b = new L8_Inheritance.normalBee(170, 400); // { x: 0, y: 0, color: " ", wingSize: 0 };
            bees.push(b);
        }
        // 10 Honigbienen zeichnen
        for (let i = 0; i < n; i++) {
            let h = new L8_Inheritance.HoneyBee(170, 400); // { x: 0, y: 0, color: " ", wingSize: 0 };
            h.draw();
            bees.push(h);
        }
        console.log(bees);
        //  ----------------------------  Bienen ----------------------------------------
        // Bienen fliegen lassen
        window.setTimeout(flyBees, 20);
        // Bei Klick hinzuf�gen
        L8_Inheritance.canvas.addEventListener("click", clickCanvas);
    } // ENDE INIT
    // Sonne
    function drawSun(_x, _y, _fillColor) {
        L8_Inheritance.crc2.beginPath();
        L8_Inheritance.crc2.fillStyle = _fillColor;
        L8_Inheritance.crc2.strokeStyle = _fillColor;
        L8_Inheritance.crc2.arc(400, 60, 50, 0, 2 * Math.PI, false);
        L8_Inheritance.crc2.closePath();
        L8_Inheritance.crc2.fill();
        L8_Inheritance.crc2.stroke();
    }
    // ### Pyramide 1 Gro� ### 
    function drawPyramid1() {
        L8_Inheritance.crc2.beginPath();
        L8_Inheritance.crc2.moveTo(50, 400);
        L8_Inheritance.crc2.lineTo(150, 250);
        L8_Inheritance.crc2.lineTo(250, 400);
        L8_Inheritance.crc2.closePath();
        L8_Inheritance.crc2.fillStyle = "#B45F04";
        L8_Inheritance.crc2.fill();
    }
    // ### Pyramide 2 klein ### 
    function drawPyramid2() {
        L8_Inheritance.crc2.beginPath();
        L8_Inheritance.crc2.moveTo(230, 400);
        L8_Inheritance.crc2.lineTo(280, 320);
        L8_Inheritance.crc2.lineTo(330, 400);
        L8_Inheritance.crc2.closePath();
        L8_Inheritance.crc2.fillStyle = "#B45F04";
        L8_Inheritance.crc2.fill();
    }
    // Gras
    function drawGras() {
        L8_Inheritance.crc2.beginPath();
        L8_Inheritance.crc2.moveTo(450, 480);
        L8_Inheritance.crc2.bezierCurveTo(390, 440, 210, 440, 150, 480);
        L8_Inheritance.crc2.bezierCurveTo(210, 590, 390, 590, 450, 480);
        L8_Inheritance.crc2.closePath();
        L8_Inheritance.crc2.strokeStyle = "#58FA58";
        L8_Inheritance.crc2.fillStyle = "#58FA58";
        L8_Inheritance.crc2.fill();
        L8_Inheritance.crc2.stroke();
    }
    //Palmenstamm
    function drawTribe(_x, _y) {
        L8_Inheritance.crc2.beginPath();
        L8_Inheritance.crc2.fillStyle = "#8A2908";
        L8_Inheritance.crc2.strokeStyle = "black";
        L8_Inheritance.crc2.lineWidth = 1;
        L8_Inheritance.crc2.moveTo(_x, _y);
        L8_Inheritance.crc2.lineTo(_x + 25, _y + 25);
        L8_Inheritance.crc2.lineTo(_x + 50, _y);
        L8_Inheritance.crc2.closePath();
        L8_Inheritance.crc2.fill();
        L8_Inheritance.crc2.stroke();
    }
    // Palmenbl�tter
    function drawPalm() {
        L8_Inheritance.crc2.beginPath();
        L8_Inheritance.crc2.fillStyle = "#088A08";
        L8_Inheritance.crc2.strokeStyle = "#0B610B";
        L8_Inheritance.crc2.lineWidth = 1;
        L8_Inheritance.crc2.moveTo(225, 309);
        //Blatt 1
        L8_Inheritance.crc2.bezierCurveTo(270, 320, 310, 360, 290, 400);
        L8_Inheritance.crc2.lineTo(225, 309);
        //Blatt 2
        L8_Inheritance.crc2.bezierCurveTo(250, 300, 320, 290, 330, 330);
        L8_Inheritance.crc2.lineTo(225, 309);
        //Blatt 3
        L8_Inheritance.crc2.bezierCurveTo(220, 280, 290, 250, 320, 260);
        L8_Inheritance.crc2.lineTo(225, 309);
        //Blatt 4
        L8_Inheritance.crc2.bezierCurveTo(220, 270, 170, 250, 150, 265);
        L8_Inheritance.crc2.lineTo(225, 309);
        //Blatt 5
        L8_Inheritance.crc2.bezierCurveTo(185, 295, 135, 300, 125, 320);
        L8_Inheritance.crc2.lineTo(225, 309);
        //Blatt 6
        L8_Inheritance.crc2.bezierCurveTo(150, 330, 140, 360, 155, 375);
        L8_Inheritance.crc2.lineTo(225, 309);
        L8_Inheritance.crc2.closePath();
        L8_Inheritance.crc2.fill();
        L8_Inheritance.crc2.stroke();
    }
    // Bienenkorb
    function drawBasket() {
        L8_Inheritance.crc2.beginPath();
        L8_Inheritance.crc2.scale(1, 1.5);
        L8_Inheritance.crc2.arc(170, 260, 25, 0, 2 * Math.PI, true);
        L8_Inheritance.crc2.fillStyle = "#61210B";
        L8_Inheritance.crc2.strokeStyle = "#61210B";
        L8_Inheritance.crc2.closePath();
        L8_Inheritance.crc2.fill();
        L8_Inheritance.crc2.stroke();
        L8_Inheritance.crc2.beginPath();
        L8_Inheritance.crc2.arc(170, 267, 10, 0, 2 * Math.PI, true);
        L8_Inheritance.crc2.setTransform(1, 0, 0, 1, 0, 0);
        L8_Inheritance.crc2.fillStyle = "black";
        L8_Inheritance.crc2.strokeStyle = "black";
        L8_Inheritance.crc2.closePath();
        L8_Inheritance.crc2.fill();
        L8_Inheritance.crc2.stroke();
    }
    // Bienen fliegen lassen
    function flyBees() {
        L8_Inheritance.crc2.putImageData(imgData, 0, 0); // Laden der Landschaft
        // in bees.length ge�ndert
        for (let i = 0; i < bees.length; i++) {
            let b = bees[i];
            if (b.x < 0 - 10) {
                b.x = L8_Inheritance.canvas.width + 10; // +10 ist der Radius der Biene, damit es einen flie�eden �bergang gibt
            }
            if (b.y > L8_Inheritance.canvas.height) {
                b.y = 0;
            }
            if (b.y < 0) {
                b.y = L8_Inheritance.canvas.height;
            }
            b.update();
        }
        window.setTimeout(flyBees, 20);
    }
    function clickCanvas(_event) {
        let newBee = new L8_Inheritance.HoneyBee(170, 400); // es wird auf den constructor zugegriffen, der die beiden Parameter x und y verlangt        
        bees.push(newBee);
        n++;
    }
})(L8_Inheritance || (L8_Inheritance = {}));
//# sourceMappingURL=main8.js.map