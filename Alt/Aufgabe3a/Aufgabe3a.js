//
//Aufgabe: Aufgabe 3
//Name: Michelle Fix
//Matrikel: 254671
//Datum: 29.03.2017
//Hiermit versichere ich, dass ich diesen
//Code selbst geschrieben habe. Er wurde
//nicht kopiert und auch nicht diktiert.
var schach;
(function (schach) {
    document.addEventListener('DOMContentLoaded', init);
    function init(_event) {
        //Variablen deklarieren
        let n = 64;
        let lines = 0;
        let rice = 1;
        for (var i = 0; i < n; i++) {
            let div = document.createElement("div"); //Div Tag werden erstellt und in den Body geschrieben. 
            document.body.appendChild(div);
            div.className = "schachbrett";
            if (i % 8 == 0) {
                div.className = "divFloat";
                lines++; // die neue Zeile wird erstellt
            }
            if (lines % 2 == 0) {
                if (i % 2 == 0) {
                    div.style.backgroundColor = "black";
                }
                else {
                    div.style.backgroundColor = "white";
                }
            }
            if (lines % 2 != 0) {
                if (i % 2 == 0) {
                    div.style.backgroundColor = "white";
                }
                else {
                    div.style.backgroundColor = "black";
                }
            }
            div.innerText = "" + rice; // vorherige Anzahl der Reisk�rner immer mal 2
            rice *= 2;
        }
        // erste Reihe wird angesprochen ( 8 Felder)
        selectedDivs();
        // Display Kasten h�ngt an der Maus
        document.addEventListener("mousemove", drawDisplay);
    }
    //Ende DOM content loaded
    function selectedDivs() {
        var firstRow = document.getElementsByTagName("div");
        console.log(firstRow);
        for (var k = 0; k < 8; k++) {
            let div = firstRow[k];
            div.addEventListener("click", Markierung);
        }
    }
    function Markierung(_event) {
        let div = _event.target;
        console.log("Hallo");
        let newColor = "#ffff00";
        console.log(div.style.backgroundColor);
        div.classList.toggle("marked");
        //this.classList.toggle("marked");
        totalRice();
    }
    function totalRice() {
        var markedDiv = document.getElementsByClassName("marked");
        var total = 0;
        if (markedDiv.length == 0) {
            document.getElementById("display").style.display = "none";
        }
        else {
            document.getElementById("display").style.display = "inline";
            for (let l = 0; l < markedDiv.length; l++) {
                total += Number(markedDiv[l].textContent);
                document.getElementById("display").innerText = "Dezimal: " + total + "\r" + "Hexadezimal: " + total.toString(16);
            }
        }
    }
    function drawDisplay(_event) {
        document.getElementById("display").style.left = (_event.clientX + 10) + "px";
        document.getElementById("display").style.top = (_event.clientY + 10) + "px";
    }
})(schach || (schach = {}));
//Anordnung durch CSS-Befehl in der ts-Datei. 
//Position absolute. beginn bei 0/0. 2. div bei 0/0+div-Breite 3. Div bei 0/0+ (2*div-Breite) 
//# sourceMappingURL=Aufgabe3a.js.map