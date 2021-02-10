
let btn = document.getElementById('btnBmi');

btn.addEventListener('click', () => {
    let nameval = document.getElementById('nameval').value;
    let height = document.getElementById('height').value;
    let mass = document.getElementById('mass').value;
    let bmi = (mass / (height ** 2))
    document.getElementById('result').innerText =
        nameval + ' your BMI is: ' + bmi.toFixed(2);
    if (bmi.toFixed(2) < 17.99) {
        document.getElementById('result').innerText =
            nameval + ' your BMI is: ' + bmi.toFixed(2) + " (You are underweight.)";
    }
    if (bmi.toFixed(2) >= 25) {
        document.getElementById('result').innerText =
            nameval + ' your BMI is: ' + bmi.toFixed(2) + " (You are overweight)";
    } if (bmi.toFixed(2) >= 30) {
        document.getElementById('result').innerText =
            nameval + ' your BMI is: ' + bmi.toFixed(2) + " (You are obese)";
    }
    else if (Number.isNaN(bmi)) {
        document.getElementById('result').innerText =
            nameval + ' your BMI is: ' + 0;
        alert('Enter values')
    }
})



