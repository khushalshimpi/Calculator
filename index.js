let screen = document.getElementById("screen");
buttons = document.querySelectorAll("button");
let screenValue = "";

for (item of buttons) {
  item.addEventListener("click", (element) => {
    buttonText = element.target.innerText;
    console.log("click", buttonText);

    if (buttonText == "x") {
      buttonText = "*";
      screenValue += buttonText;
      screen.value = screenValue;
    } else if (buttonText == "C") {
      screenValue = "";
      screen.value = screenValue;
    } else if (buttonText == "=") {
      screen.value = eval(screenValue);
      // console.log(store);
    } else if (buttonText == "Del") {
      screen.value =  screen.value.slice(0, -1);
    } else {
      screenValue += buttonText;
      screen.value = screenValue;
    }
  });
}
