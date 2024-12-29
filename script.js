function calculate() {
    let Kan = parseFloat(document.getElementById('Kannada').value) || 0;
    let Eng = parseFloat(document.getElementById('English').value) || 0;
    let Hin = parseFloat(document.getElementById('Hindi').value) || 0;
    let Mat = parseFloat(document.getElementById('Maths').value) || 0;
    let Sci = parseFloat(document.getElementById('Science').value) || 0;
    let Soc = parseFloat(document.getElementById('Social').value) || 0;

    // Validate input
    if ([Kan, Eng, Hin, Mat, Sci, Soc].some(mark => mark < 0 || mark > 100)) {
        alert("Please enter valid marks between 0 and 100");
        return;
    }

    let total = Kan + Eng + Hin + Mat + Sci + Soc;
    let per = (total / 600) * 100;
    let grade = "";

    if (per >= 80) {
        grade = "A";
    } else if (per >= 60) {
        grade = "B";
    } else if (per >= 33) {
        grade = "C";
    } else {
        grade = "F";
    }

    const resultDiv = document.getElementById('result');
    resultDiv.className = 'result_wrapper ' + (grade !== 'F' ? 'success' : 'failure');

    if (grade !== "F") {
        resultDiv.innerHTML = `
            <p>🎉 Congratulations! You have passed!</p>
            <p>Total Score: ${total.toFixed(1)} / 600</p>
            <p>Percentage: ${per.toFixed(1)}%</p>
            <p>Grade: ${grade}</p>
        `;
    } else {
        resultDiv.innerHTML = `
            <p>😔 Sorry, you did not pass.</p>
            <p>Total Score: ${total.toFixed(1)} / 600</p>
            <p>Percentage: ${per.toFixed(1)}%</p>
            <p>Grade: ${grade}</p>
        `;
    }

    resultDiv.style.opacity = '0';
    setTimeout(() => {
        resultDiv.style.opacity = '1';
    }, 100);
}