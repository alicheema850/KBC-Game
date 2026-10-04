const questions = [
    "What is Your Exact Age?",
    "What is Your Current Study Level?",
    "Currently are you Studying in University?",
    "Do you have KUCHU PUCHU in University?",
    "Still are you searching or no?",
    "So What is the Name of Your KUCHU PUCHU?",
    "Are You lying about the correct Answers?",
    "Describe your life in one word."
];

const options = [
    ["10-16", "17-22", "23-27", "28-36"],
    ["Matric", "Inter", "BS", "PHD"],
    ["NO", "Yes", "Koi Pata ni kaha hun", "Empty"],
    ["Personal ho gya", "Kia Jawab dun is baat ka", "Ni Bhi ni ha", "Hota to apky samny hi hona tha"],
    ["Ni hmari prame kahani ni hoti", "Ni chaye bhi koi b", "Milta hi ni koi", "Again Personal Question"],
    ["Hoga to name hoga", "Ni bhi ni bta sakta", "Personal Question ni puchty", "Uska name dil ma he"],
    ["Bhi sai bola ha sab ma na", "Hmm", "Jhoot bolny sa kon sa mil jana", "Kitni bar bola hmari prame kahani hoti"],
    ["The Sad Reality", "The Struggle", "The Philosophical View", "The Emotional"]
];

const correctAnswers = [
    "B",
    "C",
    "C",
    "A",
    "A",
    "D",
    "C",
    "B"
];

const prizes = [
    1000,
    10000,
    100000,
    1000000,
    2000000,
    4000000,
    7000000,
    10000000
];

let currentQuestion = 0;
let amount = 0;

function showQuestion() {

    document.getElementById("question-number").innerText =
        "Question " + (currentQuestion + 1) + " of " + questions.length;

    document.getElementById("question").innerText =
        questions[currentQuestion];

    document.getElementById("optionA").innerText =
        "A. " + options[currentQuestion][0];

    document.getElementById("optionB").innerText =
        "B. " + options[currentQuestion][1];

    document.getElementById("optionC").innerText =
        "C. " + options[currentQuestion][2];

    document.getElementById("optionD").innerText =
        "D. " + options[currentQuestion][3];

    document.getElementById("result").innerText = "";
}

function checkAnswer(answer) {

    if (answer === correctAnswers[currentQuestion]) {

        amount = prizes[currentQuestion];

        document.getElementById("amount").innerText =
            "Rs. " + amount.toLocaleString();

        if (currentQuestion === questions.length - 1) {

            document.getElementById("result").innerText =
                "🎉 Congratulations! You have won 1 CRORE! 🎉";

            disableButtons();

            return;
        }

        currentQuestion++;

        setTimeout(showQuestion, 700);

    } else {

        document.getElementById("result").innerText =
            "❌ Wrong Answer!";

        setTimeout(function () {

            document.getElementById("result").innerText =
                "Game Over! You are taking home Rs. " +
                amount.toLocaleString();

            disableButtons();

        }, 800);
    }
}

function disableButtons() {

    document.getElementById("optionA").disabled = true;
    document.getElementById("optionB").disabled = true;
    document.getElementById("optionC").disabled = true;
    document.getElementById("optionD").disabled = true;
}

showQuestion();