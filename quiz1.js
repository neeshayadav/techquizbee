// Quiz questions data structure
const allQuestions = {
  html: {
    beginner: [
      { question: "Which tag is used to create a hyperlink?", options: ["<a>", "<link>", "<href>", "<url>"], answer: "<a>" },
      { question: "HTML stands for?", options: ["HyperText Markup Language", "HighText Machine Language", "Hyperloop Machine Language", "Hyper Transfer Markup"], answer: "HyperText Markup Language" },
      { question: "Which tag is used for line break?", options: ["<lb>", "<break>", "<br>", "<line>"], answer: "<br>" },
      { question: "Which tag displays largest heading?", options: ["<h1>", "<heading>", "<h6>", "<head>"], answer: "<h1>" },
      { question: "Which tag is used to embed video?", options: ["<video>", "<media>", "<embed>", "<iframe>"], answer: "<video>" }
    ],
    intermediate: [
      { question: "Which attribute sets the image path?", options: ["src", "href", "path", "alt"], answer: "src" },
      { question: "Which input type is used for email?", options: ["text", "email", "mail", "input"], answer: "email" },
      { question: "What is the correct DOCTYPE for HTML5?", options: ["<!DOCTYPE html>", "<DOCTYPE html5>", "<HTML5>", "<!html>"], answer: "<!DOCTYPE html>" },
      { question: "Which element is used for lists with bullets?", options: ["<ol>", "<ul>", "<dl>", "<list>"], answer: "<ul>" },
      { question: "Which tag is used for table row?", options: ["<td>", "<tr>", "<th>", "<row>"], answer: "<tr>" }
    ],
    advanced: [
      { question: "Which tag is used for semantic footer?", options: ["<footer>", "<bottom>", "<foot>", "<section>"], answer: "<footer>" },
      { question: "Which attribute is used for accessibility?", options: ["alt", "aria-label", "title", "role"], answer: "aria-label" },
      { question: "What is the default display of <div>?", options: ["inline", "block", "inline-block", "flex"], answer: "block" },
      { question: "Which tag is used for scalable graphics?", options: ["<svg>", "<canvas>", "<graphic>", "<img>"], answer: "<svg>" },
      { question: "HTML localStorage data type is?", options: ["String", "Object", "Array", "Number"], answer: "String" }
    ]
  },

  css: {
    beginner: [
      { question: "CSS stands for?", options: ["Cascading Style Sheets", "Color Style System", "Creative Style Setup", "Coding Style Sheets"], answer: "Cascading Style Sheets" },
      { question: "Which symbol is used for id selector?", options: [".", "#", "*", "&"], answer: "#" },
      { question: "Which property changes text color?", options: ["color", "font-color", "text-color", "background"], answer: "color" },
      { question: "Default position of HTML elements?", options: ["static", "relative", "absolute", "fixed"], answer: "static" },
      { question: "Which unit is relative to parent?", options: ["px", "em", "%", "rem"], answer: "em" }
    ],
    intermediate: [
      { question: "Which property makes text bold?", options: ["font-style", "font-weight", "text-bold", "style"], answer: "font-weight" },
      { question: "Which display makes block inline?", options: ["inline", "block", "inline-block", "flex"], answer: "inline-block" },
      { question: "Which property sets z-index?", options: ["z", "z-index", "layer", "stack"], answer: "z-index" },
      { question: "Which property adds shadow?", options: ["shadow", "box-shadow", "text-shadow", "background-shadow"], answer: "box-shadow" },
      { question: "Which position is relative to viewport?", options: ["absolute", "relative", "fixed", "sticky"], answer: "fixed" }
    ],
    advanced: [
      { question: "Which CSS function creates gradients?", options: ["gradient()", "linear-gradient()", "color-gradient()", "shade()"], answer: "linear-gradient()" },
      { question: "Which property enables grid?", options: ["display: block", "display: grid", "grid: true", "flex: grid"], answer: "display: grid" },
      { question: "What is CSS variable syntax?", options: ["$var", "--var", "@var", "%var"], answer: "--var" },
      { question: "Which pseudo-class targets first child?", options: [":first", ":first-child", ":child(1)", ":nth(1)"], answer: ":first-child" },
      { question: "Which CSS feature allows animation?", options: ["motion", "transition", "animate", "effect"], answer: "transition" }
    ]
  },

  js: {
    beginner: [
      { question: "JavaScript is ___ language?", options: ["Compiled", "Scripting", "Assembly", "Machine"], answer: "Scripting" },
      { question: "Which keyword declares variable?", options: ["var", "let", "const", "All"], answer: "All" },
      { question: "Which function prints output?", options: ["print()", "echo()", "console.log()", "document.write()"], answer: "console.log()" },
      { question: "Which operator checks equality & type?", options: ["==", "===", "!=", "="], answer: "===" },
      { question: "Default value of uninitialized var?", options: ["null", "undefined", "0", "NaN"], answer: "undefined" }
    ],
    intermediate: [
      { question: "Which array method adds at end?", options: ["push()", "pop()", "shift()", "unshift()"], answer: "push()" },
      { question: "Which loop is best for arrays?", options: ["for", "forEach", "while", "if"], answer: "forEach" },
      { question: "What is typeof NaN?", options: ["NaN", "number", "undefined", "object"], answer: "number" },
      { question: "Which keyword stops loop?", options: ["break", "stop", "exit", "halt"], answer: "break" },
      { question: "Which method converts JSON to object?", options: ["parse()", "stringify()", "convert()", "toObject()"], answer: "parse()" }
    ],
    advanced: [
      { question: "Which JS feature is asynchronous?", options: ["Promise", "Loop", "Variable", "Function"], answer: "Promise" },
      { question: "Which method copies arrays?", options: ["copy()", "slice()", "splice()", "assign()"], answer: "slice()" },
      { question: "Which keyword defines class?", options: ["object", "class", "function", "define"], answer: "class" },
      { question: "Which operator is spread?", options: ["...", "***", "+++", "??"], answer: "..." },
      { question: "Which hook runs first in event loop?", options: ["setTimeout", "Promise.then", "setInterval", "requestAnimationFrame"], answer: "Promise.then" }
    ]
  },

  python: {
    beginner: [
      { question: "Python is ___ typed?", options: ["Weakly", "Strongly", "Dynamically", "Statically"], answer: "Dynamically" },
      { question: "Which keyword defines function?", options: ["function", "def", "fun", "define"], answer: "def" },
      { question: "Which function prints output?", options: ["echo()", "print()", "log()", "out()"], answer: "print()" },
      { question: "Which symbol starts comment?", options: ["//", "#", "/*", "--"], answer: "#" },
      { question: "Python file extension?", options: [".py", ".pyt", ".pt", ".python"], answer: ".py" }
    ],
    intermediate: [
      { question: "Which function gives length?", options: ["size()", "count()", "len()", "length()"], answer: "len()" },
      { question: "Which loop iterates list?", options: ["for", "while", "do", "each"], answer: "for" },
      { question: "Which keyword for exception?", options: ["try-except", "catch", "error", "handle"], answer: "try-except" },
      { question: "Which operator for power?", options: ["^", "**", "pow", "exp"], answer: "**" },
      { question: "Which method adds to list?", options: ["push()", "add()", "append()", "insert()"], answer: "append()" }
    ],
    advanced: [
      { question: "Which module handles JSON?", options: ["json", "pickle", "csv", "os"], answer: "json" },
      { question: "Which keyword defines class?", options: ["def", "object", "class", "struct"], answer: "class" },
      { question: "Which function creates iterator?", options: ["iter()", "next()", "gen()", "it()"], answer: "iter()" },
      { question: "Which keyword for generator?", options: ["yield", "return", "gen", "pass"], answer: "yield" },
      { question: "Which decorator makes static method?", options: ["@class", "@static", "@staticmethod", "@classmethod"], answer: "@staticmethod" }
    ]
  },

  sql: {
    beginner: [
      { question: "SQL stands for?", options: ["Structured Query Language", "Sequential Query Language", "Standard Query Language", "Server Query Language"], answer: "Structured Query Language" },
      { question: "Which keyword retrieves data?", options: ["GET", "SELECT", "SHOW", "FETCH"], answer: "SELECT" },
      { question: "Which keyword inserts data?", options: ["INSERT INTO", "ADD", "UPDATE", "PUT"], answer: "INSERT INTO" },
      { question: "Which keyword deletes data?", options: ["REMOVE", "DELETE", "DROP", "CLEAR"], answer: "DELETE" },
      { question: "Which clause filters rows?", options: ["FILTER", "WHERE", "HAVING", "ORDER"], answer: "WHERE" }
    ],
    intermediate: [
      { question: "Which clause groups rows?", options: ["GROUP BY", "ORDER BY", "SORT", "CLUSTER"], answer: "GROUP BY" },
      { question: "Which join returns common rows?", options: ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "FULL JOIN"], answer: "INNER JOIN" },
      { question: "Which statement updates data?", options: ["MODIFY", "CHANGE", "UPDATE", "ALTER"], answer: "UPDATE" },
      { question: "Which keyword removes table?", options: ["DELETE", "DROP", "REMOVE", "TRUNCATE"], answer: "DROP" },
      { question: "Which clause sorts data?", options: ["ORDER BY", "SORT", "GROUP BY", "FILTER"], answer: "ORDER BY" }
    ],
    advanced: [
      { question: "Which constraint enforces uniqueness?", options: ["PRIMARY KEY", "FOREIGN KEY", "CHECK", "DEFAULT"], answer: "PRIMARY KEY" },
      { question: "Which index improves query speed?", options: ["INDEX", "VIEW", "SCHEMA", "TRIGGER"], answer: "INDEX" },
      { question: "Which SQL function counts rows?", options: ["COUNT()", "SUM()", "TOTAL()", "NUMBER()"], answer: "COUNT()" },
      { question: "Which keyword creates view?", options: ["MAKE VIEW", "CREATE VIEW", "VIEW", "NEW VIEW"], answer: "CREATE VIEW" },
      { question: "Which command grants permission?", options: ["GRANT", "ALLOW", "PERMIT", "ACCESS"], answer: "GRANT" }
    ]
  }
};

// Variables
let currentQuizType = "";
let currentLevel = "";
let currentQuestions = [];
let currentIndex = 0;
let score = 0;
let timer;
let timeLeft = 15;

// DOM Ready
document.addEventListener("DOMContentLoaded", function () {
  // Hamburger menu
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      navMenu.classList.toggle("active");
      const icon = hamburger.querySelector("i");
      if (navMenu.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");
      } else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
      }
    });

    document.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        hamburger.querySelector("i").classList.remove("fa-times");
        hamburger.querySelector("i").classList.add("fa-bars");
      });
    });
  }

  // Category buttons
  document.querySelectorAll(".category-btn").forEach((button) => {
    button.addEventListener("click", function () {
      const category = this.getAttribute("data-category");
      showLevelSelection(category);
    });
  });

  // Level buttons
  document.querySelectorAll(".level-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      const level = this.getAttribute("data-level");
      startQuiz(currentQuizType, level);
    });
  });
});

// Show difficulty selection
function showLevelSelection(category) {
  currentQuizType = category;

  document.getElementById("categories").style.display = "none";
  document.querySelector(".features").style.display = "none";
  document.querySelector(".hero").style.display = "none";

  document.getElementById("quiz-container").style.display = "block";
  document.getElementById("level-selection").style.display = "block";

  document.getElementById("quiz-title").textContent =
    category.toUpperCase() + " Quiz";
  document.getElementById("category-name").textContent =
    category.toUpperCase();
  document.getElementById("level-name").textContent = "-";
  document.getElementById("score").textContent = "0";
}

// Start quiz for chosen category + level
function startQuiz(quizType, level) {
  currentLevel = level;

  // Pick only that level’s questions
  currentQuestions = allQuestions[quizType][level].map((q) => ({
    ...q,
    level: level.charAt(0).toUpperCase() + level.slice(1),
  }));

  shuffleArray(currentQuestions);

  currentIndex = 0;
  score = 0;

  document.getElementById("level-selection").style.display = "none";
  document.getElementById("level-name").textContent =
    currentLevel.charAt(0).toUpperCase() + currentLevel.slice(1);

  loadQuestion();
}

// Shuffle
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function escapeHTML(str) {
  return str.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

// Load question
function loadQuestion() {
  if (currentIndex >= currentQuestions.length) {
    endQuiz();
    return;
  }

  const quizDiv = document.getElementById("quiz-content");
  const q = currentQuestions[currentIndex];

  quizDiv.innerHTML = `
      <div class="question-container">
        <h2 class="question-text">${q.level} Q${currentIndex + 1}: ${
    q.question
  }</h2>
        <div class="timer-container">
            <div class="timer">Time left: <span id="time">${timeLeft}</span>s</div>
        </div>
        <div class="options-container">
            ${q.options
              .map(
                (opt) =>
                  `<button class="option-btn" onclick="checkAnswer('${opt.replace(
                    /'/g,
                    "\\'"
                  )}')">${escapeHTML(opt)}</button>`
              )
              .join("")}
        </div>
      </div>
    `;

  startTimer();
}

// Timer
function startTimer() {
  clearInterval(timer);
  timeLeft = 15;
  timer = setInterval(() => {
    document.getElementById("time").textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timer);
      showCorrectAnswer();
      setTimeout(() => {
        currentIndex++;
        loadQuestion();
      }, 1200);
    }
    timeLeft--;
  }, 1000);
}

// Answer check
function checkAnswer(selected) {
  clearInterval(timer);

  const q = currentQuestions[currentIndex];
  const buttons = document.querySelectorAll(".option-btn");

  buttons.forEach((btn) => (btn.disabled = true));

  buttons.forEach((btn) => {
    if (btn.textContent === q.answer) {
      btn.classList.add("correct");
    }
    if (btn.textContent === selected && selected !== q.answer) {
      btn.classList.add("wrong");
    }
  });

  if (selected === q.answer) {
    score++;
    document.getElementById("score").textContent = score;
  }

  setTimeout(() => {
    currentIndex++;
    loadQuestion();
  }, 1200);
}

// Show correct answer
function showCorrectAnswer() {
  const q = currentQuestions[currentIndex];
  const buttons = document.querySelectorAll(".option-btn");
  buttons.forEach((btn) => {
    btn.disabled = true;
    if (btn.textContent === q.answer) {
      btn.classList.add("correct");
    }
  });
}

// End quiz
function endQuiz() {
  const quizDiv = document.getElementById("quiz-content");
  let badge = "";
  if (score >= currentQuestions.length * 0.8) {
    badge = "🏅 Gold Badge!";
  } else if (score >= currentQuestions.length * 0.5) {
    badge = "🥈 Silver Badge!";
  } else {
    badge = "🥉 Bronze Badge!";
  }

  quizDiv.innerHTML = `
      <div class="results-container">
          <h2>Quiz Finished!</h2>
          <p class="score-display">Your Score: ${score}/${
    currentQuestions.length
  }</p>
          <p class="badge">${badge}</p>
          <div class="navigation-buttons">
              <button class="nav-btn" onclick="location.reload()">Back to Home</button>
              <button class="nav-btn" onclick="startQuiz('${currentQuizType}', '${currentLevel}')">Try Again</button>
          </div>
      </div>
  `;
}
