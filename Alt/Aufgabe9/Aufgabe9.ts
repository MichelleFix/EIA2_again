namespace Form {
    window.addEventListener("load", init);
    let fieldset: HTMLFieldSetElement;
    //Arrays 
    let flavors: string[] = ["Schokolade", "Stracciatella", "Erdbeere", "Zitrone", "Waldmeister", "Sauerkirsche", "Himbeere", "Vanille"];
    let toppings: string[] = ["Schokosirup", "Streusel", "Erdbeeren", "Sahne", "Smarties", "Krokant", "Kein Topping"];
    // Arrays wo die ausgewählten Elemente gespeichert werden
    let inputFlavors: HTMLOptionElement[] = [];
    let inputToppings: HTMLInputElement[] = [];

   
    function init(_event: Event): void {
        fieldset = document.getElementsByTagName("fieldset")[1];
        
         // Elemente aus dem HTML Dokument
    let waffelButton: HTMLElement = document.getElementById("Waffel");
    let cupButton: HTMLElement = document.getElementById("Cup");
    let newFlavorButton: HTMLElement = document.getElementById("AddIcecream");
    let checkButton: HTMLElement = document.getElementById("checkOrder");
    let checkboxToppings: HTMLElement = document.getElementById("CheckboxToppings");


        
//        // Becher auswählen
//        waffelButton.addEventListener("click", chooseWaffel);
//
//        // Becher auswählen
//        cupButton.addEventListener("click", chooseCup);

        // Eissorte hinzufügen
        let newIcecream = document.getElementById("AddIcecream");
        newIcecream.addEventListener("click", createFlavor);

        // Erstellt quasi alles 
        createIcecream();

        // Bestellung überprüfen
        document.addEventListener("click", checkOrder);

        fieldset.addEventListener("change", change);

    }

    // -------------------------------------------------- Waffel oder Becher ------------------------------------------------------

//    function chooseWaffel(_event: Event): void {
//        let counter: HTMLInputElement = <HTMLInputElement>document.getElementById("ScoopCounter");
//            counter.max = "5";
//        console.log("Waffel choosen");
//    }
//    
//    function chooseCup(_event: Event): void {
//        let counter: HTMLInputElement = <HTMLInputElement>document.getElementById("ScoopCounter");
//            counter.max = "10";
//        console.log("Cup choosen");
//
//    }


    // -------------------------------------------------- EISSORTEN ------------------------------------------------------
    //  Eissorten erstellen
    function createIcecream(): void {

        for (let i: number = 0; i < toppings.length; i++) {
            createCheckbox(toppings[i]);
        }
    }

    // Select Felder mit den Eissorten beschriften
    function createFlavor(): void {
        let select: HTMLSelectElement = document.createElement("select");
        for (let i: number = 0; i < flavors.length; i++) {
            let option: HTMLOptionElement = document.createElement("option");
            
            option.text = flavors[i];
            option.value = flavors[i];
            select.appendChild(option);
            inputFlavors.push(option);            
        }
        document.getElementById("SelectFlavors").appendChild(select);
    }
    
//Eissorte hinzufügen            
        function addFlavor(_event :Event) :void{
            let amount: number = 8;
            for (let n: number = 0; n > amount; n++){
//                createFlavor();                       Wie kann ich die obere Funktion aufrufen und die Parameter mitnehmen??
            }
    }
   
    // -------------------------------------------------- Toppings -------------------------------------------------- 
    function createCheckbox(_verzierung: string): void {
        let label: HTMLLabelElement = document.createElement("label");
        let input: HTMLInputElement = document.createElement("input");

        label.innerText = _verzierung;
        label.appendChild(input);
        input.type = "checkbox";
        label.id = _verzierung;

        checkboxToppings.appendChild(label);
        inputToppings.push(input); 
    }

     function change(): void {         let sum: number = 0;
         for (let i: number = 0; i < inputFlavors.length; i++) {             sum += parseInt(inputFlavors[i].value);         }
         for (let i: number = 0; i < inputToppings.length; i++) {             sum += 0.15;         }          if (cupButton.onclick ){             sum += 0 ,1          }         else{                      }          updateShoppingCard(sum);
    }    
    function updateShoppingCard(_sum: number): void {     let sum: HTMLElement = document.getElementById("Sum");
    let items: HTMLElement = document.getElementById("Items");
    items.innerText = "";
    
    if(cupButton.onclick) {
        items.innerText += "Becher" + " " + "0,10" + "â‚¬" + " \n";
    }
    if (waffelButton.onclick) {
        items.innerText += "Waffel" + " " + "0,00" + "â‚¬" + " \n";
    }
    
    for (let i: number = 0; i < inputFlavors.length; i++) {
        if (parseInt(inputFlavors[i].value) > 0) {
            items.innerText += flavors[i] + " " + (parseInt(inputFlavors[i].value) * 1) + "â‚¬" + " \n";
        }
    }
    
    for (let i: number = 0; i < inputToppings.length; i++) {
        if (inputToppings[i].checked) {
            items.innerText += toppings[i] + " 0,15" + "â‚¬" + " \n";
        }
    }
    sum.innerText = _sum.toString() + "â‚¬";

}

function checkOrder(_event: Event): void {
    let target: HTMLButtonElement = <HTMLButtonElement>_event.target;

    let name: HTMLInputElement = <HTMLInputElement>document.getElementById("Name");
    let surname: HTMLInputElement = <HTMLInputElement>document.getElementById("Surname");
    let street: HTMLInputElement = <HTMLInputElement>document.getElementById("Street");
    let housenumber: HTMLInputElement = <HTMLInputElement>document.getElementById("Housenumber");
    let postcode: HTMLInputElement = <HTMLInputElement>document.getElementById("Postcode");
    let place: HTMLInputElement = <HTMLInputElement>document.getElementById("Place");
    let mail: HTMLInputElement = <HTMLInputElement>document.getElementById("Mail");
    let pickup: HTMLInputElement = <HTMLInputElement>document.getElementById("Pickup");
    let delivery: HTMLInputElement = <HTMLInputElement>document.getElementById("Delivery");
    let scoopcounter: HTMLInputElement = <HTMLInputElement>document.getElementById("ScoopCounter");

    if (target.id == "checkOrder") {
        
        //  ############  Anzahl der Kugeln ###
        if (scoopcounter.validity.valid == false) {
            document.getElementById("ErrorScoops").style.display = "inline";
        }
        
        // ############  Lieferung        
        if (pickup.checked == true && delivery.checked == true)
            document.getElementById("ErrorDeliveryoptions").style.display = "inline";

        // ############  Kundendaten #####
        if (name.validity.valid == false) {
            document.getElementById("ErrorCustomerData").style.display = "inline";
            name.style.backgroundColor = "red";
        }

        if (surname.validity.valid == false) {
            document.getElementById("ErrorCustomerData").style.display = "inline";
            surname.style.backgroundColor = "red";
        }

        if (street.validity.valid == false) {
            document.getElementById("ErrorCustomerData").style.display = "inline";
            street.style.backgroundColor = "red";
        }

        if (housenumber.validity.valid == false) {
            document.getElementById("ErrorCustomerData").style.display = "inline";
            housenumber.style.backgroundColor = "red";
        }

        if (postcode.validity.valid == false) {
            document.getElementById("ErrorCustomerData").style.display = "inline";
            postcode.style.backgroundColor = "red";
        }

        if (place.validity.valid == false) {
            document.getElementById("ErrorCustomerData").style.display = "inline";
            place.style.backgroundColor = "red";
        }
        if (mail.validity.valid == false) {
            document.getElementById("ErrorCustomerData").style.display = "inline";
            mail.style.backgroundColor = "red";
        }





    }
}
}