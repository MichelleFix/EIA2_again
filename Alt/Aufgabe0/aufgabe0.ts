/*
Aufgabe: Aufgabe 0
Name: Michelle Fix
Matrikel: 254671
Datum: 17.03.2017
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/


document.addEventListener('DOMContentLoaded', function(){
    
    var name: string = prompt("Wie ist Ihr Name?");
    
    var answer: string = "Schoen Sie zu sehen";
    
    document.body.innerHTML = answer + " " + name + "!";
});