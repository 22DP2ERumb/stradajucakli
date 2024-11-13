const input = document.getElementById("myInput");
const resultDisplay = document.getElementById("result");
const historyList = document.getElementById("historyList");

function appendValue(value) {
    input.value += value;
}

function clearInput() {
    input.value = "";
    resultDisplay.textContent = "";
}

function calculate() {
    try {
        const result = eval(input.value);
        resultDisplay.textContent = result;
        saveHistory(input.value + " = " + result);
        input.value = result;
    } catch (error) {
        resultDisplay.textContent = "Error";
    }
}

function saveHistory(entry) {
    const history = JSON.parse(localStorage.getItem("history")) || [];
    history.push(entry);
    localStorage.setItem("history", JSON.stringify(history));
    updateHistory();
}

function updateHistory() {
    historyList.innerHTML = "";
    const history = JSON.parse(localStorage.getItem("history")) || [];
    history.forEach((entry, index) => {
        const li = document.createElement("li");
        li.textContent = entry;
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.onclick = () => deleteHistoryEntry(index);
        li.appendChild(deleteButton);
        historyList.appendChild(li);
    });
}

function deleteHistoryEntry(index) {
    const history = JSON.parse(localStorage.getItem("history")) || [];
    history.splice(index, 1);
    localStorage.setItem("history", JSON.stringify(history));
    updateHistory();
}

function clearHistory() {
    localStorage.removeItem("history");
    updateHistory();
}

window.onload = updateHistory;
