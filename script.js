document.getElementById("check").addEventListener("click", perfectNumber);
document.getElementById("guess").addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.keyCode == 13) {
        document.getElementById("check").click();
    }
});

function perfectNumber() {
    let number = document.getElementById("guess").value;

    let dividers = [];
    let sum_dividers = 0;

    if (number < 1 || number === "" || isNaN(number)) {
        document.getElementById("answer").innerHTML =
            "⚡⚡Please Enter A Positive Number⚡⚡";
    } else {
        for (let i = 1; i < number; i++) {
            if (number % i == 0) {
                dividers.push(i);
                sum_dividers += i;
            }
        }
        if (sum_dividers == number) {
            document.getElementById(
                "answer"
            ).innerHTML = `${number} is a perfect number 🎯`;
        } else {
            document.getElementById(
                "answer"
            ).innerHTML = `${number} is not a perfect number ❌`;
        }
        document.getElementById("guess").value = "";
        document.getElementById("guess").focus();
    }
}
function enter(event) {
    if (event.keyCode === 13) {
        perfectNumber();
    }
}