const ref = {
    inputEl: document.getElementById("font-size-control"),
    spanEl: document.getElementById("text")
};

ref.inputEl.addEventListener("input", handleInputRange);

function handleInputRange(event) {
    ref.spanEl.style.fontSize = event.currentTarget.value + "px";
}