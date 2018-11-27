document.addEventListener('DOMContentLoaded', function () {
    //Variablen deklarieren
    let n = 64;
    let lines = 0;
    let rice = 1;
    for (var i = 0; i < 64; i++) {
        let div = document.createElement("div"); //Div Tag werden erstellt und in den Body geschrieben. 
        document.body.appendChild(div);
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
});
//Anordnung durch CSS-Befehl in der ts-Datei. 
//Position absolute. beginn bei 0/0. 2. div bei 0/0+div-Breite 3. Div bei 0/0+ (2*div-Breite) 
//# sourceMappingURL=Aufgabe2.js.map