let display = document.getElementById("display");
buttons = document.querySelectorAll("button");

let display_text = "";

for (item of buttons) {

    item.addEventListener('click', (e) => {
        button_Text = e.target.innerText;
        console.log("Button text is", button_Text);

        if (button_Text == "X") {
            button_Text = "*";
            display_text += button_Text;
            display.value = display_text;
        }
        else if (button_Text == "Delete") {
            display_text = display_text.slice(0, (display_text.length - 1));
            display.value = display_text;
        }
        else if (button_Text == "Clear") {
            display_text = "";
            display.value = display_text;

        }
        else if (button_Text == "=") {
            display.value = eval(display_text);
        }
        else {
            display_text += button_Text;
            display.value = display_text;
        }
    })
}