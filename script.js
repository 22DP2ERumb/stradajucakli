const input = document.getElementById("myInput");
const submitButton = document.getElementById("submitBtn");
const header = document.getElementById("result");

submitButton.addEventListener("click", function() {
    const inputValue = input.value;
    console.log(inputValue);

    let result = eval(inputValue)

    header.textContent = result;
});
