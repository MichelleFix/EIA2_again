document.addEventListener('DOMContentLoaded', function() {

    //Variablen deklarieren
 
    let n = 64;
    let lines = 0;
    let rice = 1;
  
    for (var i = 0; i < 64; i++) {           //Bei jeder Wiederholung der Schleife wird ein Div hinzugefügt
        let div = document.createElement("div");  //Div Tag werden erstellt und in den Body geschrieben. 
        document.body.appendChild(div);

        if (i % 8 == 0) {                  //Nach 8 Divs soll in die nächste Zeile gewechselt werden.
            div.className = "divFloat";
            lines++;                      // die neue Zeile wird erstellt
        }
        
        if (lines % 2 == 0) {               //wenn eine gerade Zeilen (0,2,4,6) gelesen wird....
            if (i % 2 == 0) {               // werden die geraden Felder schwarz ...
               div.style.backgroundColor = "black";
            }
            else {                          // und die ungeraden Felder weiß
                div.style.backgroundColor = "white";
            }
        }
        
           
        if (lines % 2 != 0) {               //wenn eine ungerade Zeilen (1,3,5,7) gelesen wird....
            if (i % 2 == 0) {               // werden die geraden Felder weiß ...
                 div.style.backgroundColor = "white";
            }
            else {                          // und die ungeraden Felder schwarz
                div.style.backgroundColor = "black";
            }
        }
        
        div.innerText = "" + rice;          // vorherige Anzahl der Reiskörner immer mal 2
        rice *= 2;
     }
    
});

//Anordnung durch CSS-Befehl in der ts-Datei. 
//Position absolute. beginn bei 0/0. 2. div bei 0/0+div-Breite 3. Div bei 0/0+ (2*div-Breite)