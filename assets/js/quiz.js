
const quizzes = [
  {
    title: "HTML",
    icon: "/images/icon-html.svg",
    questions: [
      {
        question: "What does HTML stand for?",
        options: [
          "Hyper Trainer Marking Language",
          "Hyper Text Marketing Language",
          "Hyper Text Markup Language",
          "Hyper Text Markup Leveler",
        ],
        answer: "Hyper Text Markup Language",
      },
      {
        question:
          "Which of the following is the correct structure for an HTML document?",
        options: [
          "<html><head></head><body></body></html>",
          "<head><html></html><body></body></head>",
          "<body><head></head><html></html></body>",
          "<html><body></body><head></head></html>",
        ],
        answer: "<html><head></head><body></body></html>",
      },
      {
        question:
          "Which HTML element is used to define the title of a document?",
        options: ["<head>", "<title>", "<header>", "<top>"],
        answer: "<title>",
      },
      {
        question: "What is the purpose of the <body> tag in HTML?",
        options: [
          "It defines the document's head section.",
          "It contains all the content such as text, images, and links.",
          "It is used to define the main content of an HTML document.",
          "It specifies the body of the email content in HTML.",
        ],
        answer: "It contains all the content such as text, images, and links.",
      },
      {
        question: "Which HTML tag is used to create a hyperlink?",
        options: ["<hyperlink>", "<link>", "<a>", "<href>"],
        answer: "<a>",
      },
      {
        question: "Which tag is used to display images in HTML?",
        options: ["<img>", "<image>", "<src>", "<pic>"],
        answer: "<img>",
      },
      {
        question:
          "What attribute is used to provide the path of an image in the <img> tag?",
        options: ["link", "src", "href", "url"],
        answer: "src",
      },
      {
        question: "Which HTML tag is used to create an unordered list?",
        options: ["<ul>", "<ol>", "<list>", "<li>"],
        answer: "<ul>",
      },
      {
        question: "What does the <br> tag do?",
        options: [
          "It breaks the text into two sections.",
          "It creates a bold text.",
          "It inserts a line break.",
          "It adds a new row in a table.",
        ],
        answer: "It inserts a line break.",
      },
      {
        question: "In HTML, what does the `fieldset` tag do?",
        options: [
          "It is used to group related data in a form.",
          "It sets the field to a fixed size.",
          "It automatically validates the fields within a form.",
          "It hides the fields in a form.",
        ],
        answer: "It is used to group related data in a form.",
      },
      {
        question: "In HTML, what does the `fieldset` tag do?",
        options: [
          "It is used to group related data in a form.",
          "It sets the field to a fixed size.",
          "It automatically validates the fields within a form.",
          "It hides the fields in a form.",
        ],
        answer: "It is used to group related data in a form.",
      },
    ],
  },
  {
    title: "CSS",
    icon: "/images/icon-css.svg",
    questions: [
      {
        question: "What does CSS stand for?",
        options: [
          "Colorful Style Sheets",
          "Computer Style Sheets",
          "Cascading Style Sheets",
          "Creative Style Sheets",
        ],
        answer: "Cascading Style Sheets",
      },
      {
        question: "Which HTML attribute is used to define inline styles?",
        options: ["styles", "style", "class", "font-style"],
        answer: "style",
      },
      {
        question: "How do you insert a comment in a CSS file?",
        options: [
          "// this is a comment //",
          "/* this is a comment */",
          "-- this is a comment --",
          "<!-- this is a comment -->",
        ],
        answer: "/* this is a comment */",
      },
      {
        question:
          "Which property is used to change the background color of an element?",
        options: ["color", "bgcolor", "background-color", "background"],
        answer: "background-color",
      },
      {
        question: "How do you apply a style to all <p> elements?",
        options: ["p { }", ".p { }", "#p { }", "all.p { }"],
        answer: "p { }",
      },
      {
        question: "Which property is used to change the font of an element?",
        options: ["font-style", "text-style", "font-family", "typeface"],
        answer: "font-family",
      },
      {
        question:
          "How do you make each word in a text start with a capital letter?",
        options: [
          "text-transform: capitalize",
          "text-transform: uppercase",
          "text-style: capital",
          "font-transform: capitalize",
        ],
        answer: "text-transform: capitalize",
      },
      {
        question: "How do you select an element with the class name 'header'?",
        options: [".header", "#header", "header", "*header"],
        answer: ".header",
      },
      {
        question: "What is the default value of the 'position' property?",
        options: ["relative", "fixed", "absolute", "static"],
        answer: "static",
      },
      {
        question: "What is the purpose of the z-index property in CSS?",
        options: [
          "To count the number of elements",
          "To set the magnification level of an element",
          "To specify the stack order of an element",
          "To create a zoom effect",
        ],
        answer: "To specify the stack order of an element",
      },
      {
        question: "What is the purpose of the z-index property in CSS?",
        options: [
          "To count the number of elements",
          "To set the magnification level of an element",
          "To specify the stack order of an element",
          "To create a zoom effect",
        ],
        answer: "To specify the stack order of an element",
      },
    ],
  },
  {
    title: "JavaScript",
    icon: "/images/icon-js.svg",
    questions: [
      {
        question:
          "Which syntax is correct to output 'Hello World' in an alert box?",
        options: [
          "alertBox('Hello World');",
          "msg('Hello World');",
          "alert('Hello World');",
          "msgBox('Hello World');",
        ],
        answer: "alert('Hello World');",
      },
      {
        question: "How do you call a function named 'myFunction'?",
        options: [
          "call function myFunction()",
          "call myFunction()",
          "myFunction()",
          "execute myFunction()",
        ],
        answer: "myFunction()",
      },
      {
        question: "How to write an IF statement in JavaScript?",
        options: ["if i = 5 then", "if (i == 5)", "if i == 5", "if i = 5"],
        answer: "if (i == 5)",
      },
      {
        question:
          "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
        options: [
          "if (i <> 5)",
          "if i =! 5 then",
          "if (i != 5)",
          "if i not = 5",
        ],
        answer: "if (i != 5)",
      },
      {
        question: "How does a FOR loop start?",
        options: [
          "for (i = 0; i <= 5)",
          "for i = 1 to 5",
          "for (i <= 5; i++)",
          "for (i = 0; i <= 5; i++)",
        ],
        answer: "for (i = 0; i <= 5; i++)",
      },
      {
        question: "How can you add a single-line comment in JavaScript?",
        options: [
          "'This is a single-line comment",
          "//This is a single-line comment",
          "<!--This is a single-line comment-->",
          "/* This is a single-line comment */",
        ],
        answer: "//This is a single-line comment",
      },
      {
        question: "What is the correct way to write a JavaScript array?",
        options: [
          "var colors = (1:'red', 2:'green', 3:'blue')",
          "var colors = ['red', 'green', 'blue']",
          "var colors = 'red', 'green', 'blue'",
          "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')",
        ],
        answer: "var colors = ['red', 'green', 'blue']",
      },
      {
        question:
          "How do you find the number with the highest value of x and y?",
        options: [
          "Math.ceil(x, y)",
          "top(x, y)",
          "Math.max(x, y)",
          "Math.highest(x, y)",
        ],
        answer: "Math.max(x, y)",
      },
      {
        question: "Which operator is used to assign a value to a variable?",
        options: ["-", "*", "=", "x"],
        answer: "=",
      },
      {
        question: "What is the correct way to write a JavaScript object?",
        options: [
          "let person = {firstName: 'John', lastName: 'Doe'};",
          "let person = {firstName = 'John', lastName = 'Doe'};",
          "let person = (firstName: 'John', lastName: 'Doe');",
          "let person = (firstName = 'John', lastName = 'Doe');",
        ],
        answer: "let person = {firstName: 'John', lastName: 'Doe'};",
      },
      {
        question: "What is the correct way to write a JavaScript object?",
        options: [
          "let person = {firstName: 'John', lastName: 'Doe'};",
          "let person = {firstName = 'John', lastName = 'Doe'};",
          "let person = (firstName: 'John', lastName: 'Doe');",
          "let person = (firstName = 'John', lastName = 'Doe');",
        ],
        answer: "let person = {firstName: 'John', lastName: 'Doe'};",
      },
    ],
  },
  {
    title: "Accessibility",
    icon: "/images/icon-accessibility.svg",
    questions: [
      {
        question: "What does 'WCAG' stand for?",
        options: [
          "Web Content Accessibility Guidelines",
          "Web Compliance Accessibility Guide",
          "Web Content Accessibility Goals",
          "Website Compliance and Accessibility Guidelines",
        ],
        answer: "Web Content Accessibility Guidelines",
      },
      {
        question:
          "Which element is used to provide alternative text for images for screen reader users?",
        options: [
          "<alt>",
          "<figcaption>",
          "<description>",
          "<img alt='description'>",
        ],
        answer: "<img alt='description'>",
      },
      {
        question: "What does ARIA stand for in web development?",
        options: [
          "Accessible Rich Internet Applications",
          "Advanced Responsive Internet Assistance",
          "Accessible Responsive Internet Applications",
          "Automated Responsive Internet Actions",
        ],
        answer: "Accessible Rich Internet Applications",
      },
      {
        question: "Which of the following is not a principle of the WCAG?",
        options: ["Perceivable", "Dependable", "Operable", "Understandable"],
        answer: "Dependable",
      },
      {
        question:
          "Which of these color contrast ratios defines the minimum WCAG 2.1 Level AA requirement for normal text?",
        options: ["3:1", "4.5:1", "7:1", "2:1"],
        answer: "4.5:1",
      },
      {
        question:
          "Which of the following elements is inherently focusable, meaning it can receive focus without a 'tabindex' attribute?",
        options: ["<div>", "<span>", "<a href='...'>", "<p>"],
        answer: "<a href='...'>",
      },
      {
        question:
          "What is the purpose of the 'lang' attribute in an HTML page?",
        options: [
          "To specify the scripting language",
          "To define the character set",
          "To indicate the language of the page content",
          "To declare a language pack",
        ],
        answer: "To indicate the language of the page content",
      },
      {
        question:
          "Which guideline ensures that content is accessible by keyboard as well as by mouse?",
        options: [
          "Keyboard Accessible",
          "Mouse Independence",
          "Device Independence",
          "Operable Controls",
        ],
        answer: "Keyboard Accessible",
      },
      {
        question:
          "What is the role of 'skip navigation' links in web accessibility?",
        options: [
          "To skip over primary navigation to the main content",
          "To provide shortcuts to different sections of the website",
          "To help users skip unwanted sections like advertisements",
          "To bypass broken links in the navigation",
        ],
        answer: "To skip over primary navigation to the main content",
      },
      {
        question:
          "Which of these tools can help in checking the accessibility of a website?",
        options: [
          "W3C Validator",
          "Google Lighthouse",
          "CSS Validator",
          "JavaScript Console",
        ],
        answer: "Google Lighthouse",
      },
      {
        question:
          "Which of these tools can help in checking the accessibility of a website?",
        options: [
          "W3C Validator",
          "Google Lighthouse",
          "CSS Validator",
          "JavaScript Console",
        ],
        answer: "Google Lighthouse",
      },
    ],
  },
];

const savedTheme =localStorage.getItem('theme');
document.body.classList =savedTheme;
const themeToggleInput = document.querySelector("#toggle-theme");
themeToggleInput.addEventListener("change", toggleTheme);

function toggleTheme(){
  const theme = localStorage.getItem('theme');
  if (theme == 'light-mode'){
    localStorage.setItem('theme','dark-mode');
    document.body.classList = 'dark-mode'
  }else {
localStorage.setItem('theme','light-mode');
document.body.classList='light-mode';
  }
}


const categoryButtons = document.querySelectorAll('.select-section');
const questionContainer = document.querySelector('.container-questions');
const questionScoreContent = document.querySelector('.question-content p')
const questionContent = questionContainer.querySelector('.question-content h5');
const welcomeContainer = document.querySelector('.container-welcome');
const scoreContainer = document.querySelector('.container-score');
const answerSection = document.querySelector('.answer-section');

let currentQuestionIndex = 0;
let score = 0;

const categoryImages = {
  HTML: "html",
  CSS: "css",
  JavaScript: "javascript",
  Accessibility: "accessibility",
};

function updateCategoryImage(category) {
  const imgElement = document.querySelector(".img-category");
  const imagePath = categoryImages[category];
  
  if (imagePath) {
    imgElement.innerHTML = `
      <img src="assets/images/${imagePath}.svg" />
      <h2>${category}</h2>
    `;
  } else {
    alert("Geçersiz image");
  }
}

const submitAnswer = document.querySelector('.submit-answer')
console.log("Tüm Sorular:", quizData.questions);
categoryButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const category = button.textContent.trim();
    console.log(`Seçilen kategori: ${category}`);

    const questions = quizData.questions.filter(q => q.category.toLowerCase() === category.toLowerCase()
    );
    if (questions.length > 0) {
      loadQuestions(questions);
      updateCategoryImage(category);
      welcomeContainer.style.display = 'none';
      questionContainer.style.display = 'block';
      submitAnswer.style.display = 'block';
    } else {
      alert('No questions found for this category!');
    }
  });
});

function loadQuestions(questions) {
  currentQuestionIndex = 0;
  score = 0;
  showQuestion(questions);
  answerSection.addEventListener('click', (e) => {
    if (e.target.classList.contains('selectBtn')) { 
      const selectedAnswer = e.target.innerText.trim();
      const currentQuestion = questions[currentQuestionIndex];
      // console.log(selectedAnswer,currentQuestion.answer);
      if (selectedAnswer === currentQuestion.answer) {
       
        score++;
      }
      currentQuestionIndex++;
      if (currentQuestionIndex < questions.length) {
        showQuestion(questions);
      } else {
        showScore();
      }
    }
  });
}


function showQuestion(questions) {
  const currentQuestion = questions[currentQuestionIndex];
  questionContent.textContent = `${currentQuestionIndex + 1}. ${currentQuestion.question}`;

  const progress = document.querySelector('.progress');
  progress.style.width = `${(currentQuestionIndex + 1) * 10}%`;
  answerSection.textContent = '';
  questionScoreContent.innerHTML = `
  <p>Question ${currentQuestionIndex + 1} of 10</p>
  `
  let optionsHtml = '';
  let index = 0;

  for (const option of currentQuestion.options) {
    optionsHtml += `
    <div class="select-answer">
      <button class="selectBtn"> ${['A', 'B', 'C', 'D'][index]}</button> ${option}
    </div>
      
  `;
  index++;
  answerSection.innerHTML = optionsHtml + `
  <button class="submit-answer">Submit Answer</button>`;
  
    const imgCategory = document.querySelector('.img-category');
    imgCategory.style.display ='flex';
  }
}




function showScore() {
  const imgElement = document.querySelector(".img-category");
  const imagePath = categoryImages[category];

  questionContainer.style.display = 'none';
  scoreContainer.style.display = 'block';
  imgElement.style.display = 'flex';

  // updateCategoryImage(category);

  imgElement.innerHTML = `
    <div class="img-category">
      <img src="assets/images/${imagePath}.svg"/>
      <p>${category}</p>
    </div>
    <h1>${score}</h1>
    <p>out of 10</p>
  `;
}

