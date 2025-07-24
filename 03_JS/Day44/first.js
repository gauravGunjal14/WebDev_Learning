const cricketGK = [
    {
        question: "Who is known as the 'God of Cricket'?",
        options: ["MS Dhoni", "Ricky Ponting", "Sachin Tendulkar", "Virat Kohli"],
        answer: "Sachin Tendulkar"
    },
    {
        question: "Which country won the first ICC Cricket World Cup in 1975?",
        options: ["India", "West Indies", "England", "Australia"],
        answer: "West Indies"
    },
    {
        question: "Who was the captain of India in the 1983 World Cup?",
        options: ["Kapil Dev", "Sunil Gavaskar", "Mohinder Amarnath", "Ravi Shastri"],
        answer: "Kapil Dev"
    },
    {
        question: "Which bowler has taken the most wickets in Test cricket?",
        options: ["Muttiah Muralitharan", "Shane Warne", "Anil Kumble", "James Anderson"],
        answer: "Muttiah Muralitharan"
    },
    {
        question: "Which Indian cricketer is known as the 'Hitman'?",
        options: ["Shikhar Dhawan", "Virat Kohli", "Rohit Sharma", "KL Rahul"],
        answer: "Rohit Sharma"
    },
    {
        question: "Who hit 6 sixes in an over in the T20 World Cup 2007?",
        options: ["Yuvraj Singh", "MS Dhoni", "Gautam Gambhir", "Virender Sehwag"],
        answer: "Yuvraj Singh"
    },
    {
        question: "Which country has won the most ICC Cricket World Cups?",
        options: ["India", "England", "Australia", "West Indies"],
        answer: "Australia"
    },
    {
        question: "Which stadium is known as the 'Home of Cricket'?",
        options: ["Eden Gardens", "Wankhede Stadium", "Lord's", "MCG"],
        answer: "Lord's"
    },
    {
        question: "Who was the first Indian to score a triple century in Test cricket?",
        options: ["Sunil Gavaskar", "Virender Sehwag", "Rahul Dravid", "VVS Laxman"],
        answer: "Virender Sehwag"
    },
    {
        question: "Which format of cricket lasts for 5 days?",
        options: ["ODI", "T10", "T20", "Test"],
        answer: "Test"
    },
    {
        question: "Who is the highest run-scorer in ODI cricket?",
        options: ["Virat Kohli", "Ricky Ponting", "Sachin Tendulkar", "AB de Villiers"],
        answer: "Sachin Tendulkar"
    },
    {
        question: "Which country hosted the 2019 Cricket World Cup?",
        options: ["India", "Australia", "England", "South Africa"],
        answer: "England"
    },
    {
        question: "Which Indian player is known for helicopter shot?",
        options: ["Virat Kohli", "MS Dhoni", "Hardik Pandya", "Rishabh Pant"],
        answer: "MS Dhoni"
    },
    {
        question: "What is the maximum number of overs per bowler in an ODI?",
        options: ["5", "10", "20", "15"],
        answer: "10"
    },
    {
        question: "Who is the current captain of the Indian Test team (as of 2025)?",
        options: ["Rohit Sharma", "Virat Kohli", "KL Rahul", "Jasprit Bumrah"],
        answer: "Rohit Sharma"
    },
    {
        question: "Which Indian cricketer has taken a double century in ODIs more than once?",
        options: ["Virat Kohli", "MS Dhoni", "Rohit Sharma", "Shubman Gill"],
        answer: "Rohit Sharma"
    },
    {
        question: "Which cricketer is nicknamed 'The Wall'?",
        options: ["Rahul Dravid", "Sourav Ganguly", "VVS Laxman", "Anil Kumble"],
        answer: "Rahul Dravid"
    },
    {
        question: "Which Indian bowler took 10 wickets in a single Test innings?",
        options: ["Jasprit Bumrah", "Anil Kumble", "Harbhajan Singh", "Ravichandran Ashwin"],
        answer: "Anil Kumble"
    },
    {
        question: "Which Indian stadium has the largest seating capacity?",
        options: ["Wankhede Stadium", "Eden Gardens", "Narendra Modi Stadium", "M. Chinnaswamy Stadium"],
        answer: "Narendra Modi Stadium"
    },
    {
        question: "Which team won the IPL 2024 season?",
        options: ["CSK", "MI", "KKR", "RCB"],
        answer: "KKR"
    }
];

function RandomQuestion() {
    const data = new Set();
    while (data.size < 5) {
        const index = Math.floor(Math.random() * cricketGK.length);
        data.add(cricketGK[index]);
    }
    return [...data];
}

const form = document.getElementById("quizform");
const output = document.getElementById("out");
const questions = RandomQuestion();
const answers = {};

questions.forEach((q, index) => {
    answers[`q${index + 1}`] = q.answer;

    const div = document.createElement("div");
    div.className = "question";

    const para = document.createElement("p");
    para.textContent = `${index + 1}. ${q.question}`;
    div.appendChild(para);

    q.options.forEach((option) => {
        const label = document.createElement("label");
        const input = document.createElement("input");

        input.type = "radio";
        input.name = `q${index + 1}`;
        input.value = option;

        label.appendChild(input);
        label.appendChild(document.createTextNode(option));
        div.appendChild(label);
        div.appendChild(document.createElement("br"));
    });

    form.appendChild(div);
});

// Submit button
const submit = document.createElement("button");
submit.textContent = "Submit";
submit.type = "submit";
form.appendChild(submit);

// Submit logic
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    let score = 0;

    for (let [key, value] of data.entries()) {
        if (value === answers[key]) {
            score++;
        }
    }

    output.innerText = `You scored ${score} out of 5`;
});
