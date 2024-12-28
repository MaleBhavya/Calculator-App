let buttons = document.querySelectorAll(".button1");
let displaytext = document.querySelector("#display");
let displayString = "";

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const buttonValue = button.innerText;
        if (buttonValue === "=") {
            displayString = eval(displayString);
            displaytext.value = displayString;
        } else if (buttonValue === "AC") {
            displayString = "";
            displaytext.value = displayString;
        } else if (buttonValue === "+/-") {
            displayString = displayString ? `-${displayString}` : "";
            displaytext.value = displayString;
        } else {
            displayString += buttonValue;
            displaytext.value = displayString;
        }
    });
});