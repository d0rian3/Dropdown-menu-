const ToggleButtons = document.querySelectorAll(".ToggleButton");
const ToggleTexts = document.querySelectorAll(".ToggleText");
const ToggleSwitchers = document.querySelectorAll(".ToggleSwitcher");

ToggleButtons.forEach((button, index) => {
  button.onclick = () => {
    ToggleTexts.forEach((text, i) => {
      if (i !== index) text.style.display = "none";
    });
    ToggleSwitchers.forEach((switcher, i) => {
      if (i !== index) switcher.style.transform = "rotate(0deg)";
    });

    const CurrentText = ToggleTexts[index];
    const CurrentSwitcher = ToggleSwitchers[index];
    const CurrentButton = ToggleButtons[index];

    const isTextVisible = CurrentText.style.display === "block";
    CurrentText.style.display = isTextVisible ? "none" : "block";

    if (isTextVisible) {
      CurrentButton.style.backgroundColor = "#1a1a1a";
      CurrentButton.style.borderRadius = "20px";
    } else {
      CurrentButton.style.backgroundColor = "darkorange";
      CurrentButton.style.borderRadius = "20px 20px 0px 0px";
    }

    CurrentSwitcher.style.transform =
      CurrentSwitcher.style.transform === "rotate(90deg)"
        ? "rotate(0deg)"
        : "rotate(90deg)";
  };
});
