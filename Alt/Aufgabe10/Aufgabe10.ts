//Aufgabe: Aufgabe 9
//Name: Michelle Fix
//Matrikel: 254671
//Datum: 21.06.2017
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.

namespace Form {
    window.addEventListener("load", init);

    let flavorsArray: string[] = ["Schokolade", "Stracciatella", "Erdbeere", "Zitrone", "Waldmeister", "Sauerkirsche", "Himbeere", "Vanille"];
    let toppingsArray: string[] = ["Schokosirup", "Streusel", "Erdbeeren", "Sahne", "Smarties", "Krokant"];
    let waffelCupArray: string[] = ["Waffel", "Becher"];
    let deliveryArray: string[] = ["Abholung", "Lieferung"];

    let flavorsDiv: HTMLElement;
    let toppingsDiv: HTMLElement;
    let waffelCupDiv: HTMLElement;
    let ordersummary: HTMLElement;
    let checkOrder: HTMLElement;
    let deliveryDiv: HTMLElement;

    let inputsIcecream: HTMLInputElement[] = []
    let inputToppings: HTMLInputElement[] = [];
    let inputWaffelCup: HTMLInputElement[] = [];
    let inputsDelivery: HTMLInputElement[] = [];


    function init(_event: Event): void {

        flavorsDiv = document.getElementById("Flavors");
        toppingsDiv = document.getElementById("Toppings");
        waffelCupDiv = document.getElementById("WaffelOrCup");
        ordersummary = document.getElementById("OrderSummary");
        checkOrder = document.getElementById("checkOrder");
        deliveryDiv = document.getElementById("Delivery");
        createIcecream();

        checkOrder.addEventListener("click", checkFormular);
        flavorsDiv.addEventListener("change", change);
        toppingsDiv.addEventListener("change", change);
        waffelCupDiv.addEventListener("change", change);
    }
    // ##### Bestellung mit Button überprüfen ##    
    function checkFormular(_event: Event): void {

        let correction: string[] = [];
        let name: HTMLInputElement = <HTMLInputElement>document.getElementById("Name");
        let surname: HTMLInputElement = <HTMLInputElement>document.getElementById("Surname");
        let street: HTMLInputElement = <HTMLInputElement>document.getElementById("Street");
        let housenumber: HTMLInputElement = <HTMLInputElement>document.getElementById("Housenumber");
        let postcode: HTMLInputElement = <HTMLInputElement>document.getElementById("Postcode");
        let place: HTMLInputElement = <HTMLInputElement>document.getElementById("Place");
        let mail: HTMLInputElement = <HTMLInputElement>document.getElementById("Mail");
        let pickup: HTMLInputElement = <HTMLInputElement>document.getElementById("Pickup");
        let delivery: HTMLInputElement = <HTMLInputElement>document.getElementById("Delivery");

        if (surname.validity.valid == false)
            document.getElementById("ErrorCustomerData").style.display = "inline";

        correction.push("ErrorSurname");

        if (name.validity.valid == false) {
            document.getElementById("ErrorCustomerData").style.display = "inline";

            correction.push("ErrorName");
        }

        if (street.validity.valid == false)
            document.getElementById("ErrorCustomerData").style.display = "inline";
        correction.push("Error");

        if (postcode.validity.valid == false)
            document.getElementById("ErrorCustomerData").style.display = "inline";

        correction.push("Error");

        if (place.validity.valid == false)
            document.getElementById("ErrorCustomerData").style.display = "inline";
        correction.push("Error");

        if (mail.validity.valid == false)
            document.getElementById("ErrorCustomerData").style.display = "inline";
        correction.push("Error");

        if (delivery.value != "Abholung" && delivery.value != "Lieferung")
            document.getElementById("ErrorDeliveryoptions").style.display = "inline";
        correction.push("Error");

        let iceSorts: number = 0;
        let behaelter: number = 0;

        for (let i: number = 0; i < inputsIcecream.length; i++) {
            if (parseInt(inputsIcecream[i].value) > 0)
                iceSorts += 1;
        }

        if (iceSorts == 0)
            document.getElementById("ErrorSorts").style.display = "inline";
        correction.push("Error");

        if (correction.length == 0) {
            alert("Vielen Dank fuer Ihre Bestellung");
        }

    }
    // ### Waffel und Cup Radio erstellen, Toppings erstellen und den Stepper erstellen 
    function createIcecream(): void {

        for (let i: number = 0; i < flavorsArray.length; i++) {
            createFlavors(flavorsArray[i]);
        }
        for (let i: number = 0; i < waffelCupArray.length; i++) {
            createRadioWaffelCup(waffelCupArray[i]);
        }
        for (let i: number = 0; i < toppingsArray.length; i++) {
            createInputToppings(toppingsArray[i]);
        }

        for (let i: number = 0; i < deliveryArray.length; i++) {
            createDeliveryOptions(deliveryArray[i]);
        }
    }
    // ### Eissorten mit Stepper
    function createFlavors(_sort: string): void {

        let label: HTMLLabelElement = document.createElement("label");
        let input: HTMLInputElement = document.createElement("input");

        label.innerText = _sort;
        label.appendChild(input);

        input.type = "number";
        input.min = "0";
        input.value = "0";
        label.id = _sort;

        flavorsDiv.appendChild(label);
        inputsIcecream.push(input);
    }

    // ### Waffel oder Becher
    function createRadioWaffelCup(_b: string): void {
        let label: HTMLLabelElement = document.createElement("label");
        let input: HTMLInputElement = document.createElement("input");
        label.innerText = _b;
        label.appendChild(input);
        input.type = "radio";
        input.name = "behaelter";
        input.required = true;
        label.id = _b;
        waffelCupDiv.appendChild(label);
        inputWaffelCup.push(input);
    }

    // ### Toppings als Checkboxen
    function createInputToppings(_topping: string): void {
        let label: HTMLLabelElement = document.createElement("label");
        let input: HTMLInputElement = document.createElement("input");
        label.innerText = _topping;
        label.appendChild(input);
        input.type = "checkbox";
        input.name = "Topping";
        input.required = true;
        label.id = _topping;
        toppingsDiv.appendChild(label);
        inputToppings.push(input);
        input.style.display = "block";
    }

    // ### Lieferoptionen
    function createDeliveryOptions(_d: string): void {
        let label: HTMLLabelElement = document.createElement("label");
        let input: HTMLInputElement = document.createElement("input");
        label.innerText = _d;
        label.appendChild(input);
        input.type = "radio";
        input.name = "delivery";
        input.required = true;
        input.value = _d;
        label.id = _d;
        deliveryDiv.appendChild(label);
        inputsDelivery.push(input);
    }

    // ### was passiert wenn etwas ausgewählt wird
    function change(): void {

        let sum: number = 0;
        for (let i: number = 0; i < inputsIcecream.length; i++) {
            sum += parseInt(inputsIcecream[i].value);
        }
        for (let i: number = 0; i < inputToppings.length; i++) {
            if (inputToppings[i].checked)
            { sum += 0.15; }
        }
        for (let i: number = 0; i < inputWaffelCup.length; i++) {
            if (inputWaffelCup[i].checked)
            { sum += 0; }
        }
        for (let i: number = 0; i < inputsDelivery.length; i++) {
            if (inputsDelivery[0].checked)
            { sum += 0; }
        }

        changeShoppingcard(sum);

    }

    // ### Warenkorb
    function changeShoppingcard(_sum: number): void {
        let ordersummary: HTMLElement = document.getElementById("OrderSummary");
        ordersummary.innerText = "";

        for (let i: number = 0; i < inputsIcecream.length; i++) {
            if (parseInt(inputsIcecream[i].value) > 0) {
                ordersummary.innerText += flavorsArray[i] + " - " + (parseInt(inputsIcecream[i].value) * 1) + "â‚¬" + "\n";
            }
        }

        for (let i: number = 0; i < inputToppings.length; i++) {
            if (inputToppings[i].checked) {
                ordersummary.innerText += toppingsArray[i] + " - 15 Cent" + "\n";
            }
        }

        for (let i: number = 0; i < inputWaffelCup.length; i++) {
            if (inputWaffelCup[i].checked) {
                ordersummary.innerText += waffelCupArray[i] + " - Keine Extrakosten" + "\n";
            }
        }


        let displaySum: HTMLElement = document.getElementById("Sum");
        displaySum.innerText = _sum.toString() + "â‚¬";

    }




}