const quizData = {
  categories: ["HTML", "CSS", "JavaScript", "Accessibility"],
  questions: [
    {
      category: "HTML",
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
      category: "HTML",
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
      category: "HTML",
      question:
        "Which HTML element is used to define the title of a document?",
      options: ["<head>", "<title>", "<header>", "<top>"],
      answer: "<title>",
    },
    {
      category: "HTML",
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
      category: "HTML",
      question: "Which HTML tag is used to create a hyperlink?",
      options: ["<hyperlink>", "<link>", "<a>", "<href>"],
      answer: "<a>",
      },
      {
        category: "HTML",
        question: "Which tag is used to display images in HTML?",
        options: ["<img>", "<image>", "<src>", "<pic>"],
        answer: "<img>",

      },
       {
        category: "HTML",
        question:
          "What attribute is used to provide the path of an image in the <img> tag?",
        options: ["link", "src", "href", "url"],
        answer: "src",

      },
      {
        category: "HTML",
        question: "Which HTML tag is used to create an unordered list?",
        options: ["<ul>", "<ol>", "<list>", "<li>"],
        answer: "<ul>",
      },
      {
        category: "HTML",
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
        category: "HTML",
        question: "In HTML, what does the `fieldset` tag do?",
        options: [
          "It is used to group related data in a form.",
          "It sets the field to a fixed size.",
          "It automatically validates the fields within a form.",
          "It hides the fields in a form.",
        ],
        answer: "It is used to group related data in a form.",
      },


  //CSS questions

    {
        category: "CSS",
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
        category: "CSS",
        question: "Which HTML attribute is used to define inline styles?",
        options: ["styles", "style", "class", "font-style"],
        answer: "style",  
    },
    {
        category: "CSS",
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
        category: "CSS",
        question:
        "Which property is used to change the background color of an element?",
        options: ["color", "bgcolor", "background-color", "background"],
        answer: "background-color",

    },
    {
        category: "CSS",
        question: "How do you apply a style to all <p> elements?",
        options: ["p { }", ".p { }", "#p { }", "all.p { }"],
        answer: "p { }",

    },
    {
        category: "CSS",
        question: "Which property is used to change the font of an element?",
        options: ["font-style", "text-style", "font-family", "typeface"],
        answer: "font-family",
      },
      {
        category: "CSS",
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
        category: "CSS",
        question: "How do you select an element with the class name 'header'?",
        options: [".header", "#header", "header", "*header"],
        answer: ".header",
      },
      {
        category: "CSS",
        question: "What is the default value of the 'position' property?",
        options: ["relative", "fixed", "absolute", "static"],
        answer: "static",
      },
      {
        category: "CSS",
        question: "What is the purpose of the z-index property in CSS?",
        options: [
          "To count the number of elements",
          "To set the magnification level of an element",
          "To specify the stack order of an element",
          "To create a zoom effect",
        ],
        answer: "To specify the stack order of an element",
      },


      // Javascript questions
      {
        category: "javaScript",
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
        category: "javaScript",
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
        category: "javaScript",
        question: "How to write an IF statement in JavaScript?",
        options: ["if i = 5 then", "if (i == 5)", "if i == 5", "if i = 5"],
        answer: "if (i == 5)",
      },
      {
        category: "javaScript",
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
        category: "javaScript",
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
        category: "javaScript",
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
        category: "javaScript",
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
        category: "javaScript",
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
        category: "javaScript",
        question: "Which operator is used to assign a value to a variable?",
        options: ["-", "*", "=", "x"],
        answer: "=",
      },
      {
        category: "javaScript",
        question: "What is the correct way to write a JavaScript object?",
        options: [
          "let person = {firstName: 'John', lastName: 'Doe'};",
          "let person = {firstName = 'John', lastName = 'Doe'};",
          "let person = (firstName: 'John', lastName: 'Doe');",
          "let person = (firstName = 'John', lastName = 'Doe');",
        ],
        answer: "let person = {firstName: 'John', lastName: 'Doe'};",
      },

      // accessibility questions

      {
        category: "Accessibility",
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
        category: "Accessibility",
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
        category: "Accessibility",
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
        category: "Accessibility",
        question: "Which of the following is not a principle of the WCAG?",
        options: ["Perceivable", "Dependable", "Operable", "Understandable"],
        answer: "Dependable",
      },
      {
        category: "Accessibility",
        question:
          "Which of these color contrast ratios defines the minimum WCAG 2.1 Level AA requirement for normal text?",
        options: ["3:1", "4.5:1", "7:1", "2:1"],
        answer: "4.5:1",
      },
      {
        category: "Accessibility",
        question:
          "Which of the following elements is inherently focusable, meaning it can receive focus without a 'tabindex' attribute?",
        options: ["<div>", "<span>", "<a href='...'>", "<p>"],
        answer: "<a href='...'>",
      },
      {
        category: "Accessibility",
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
        category: "Accessibility",
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
        category: "Accessibility",
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
        category: "Accessibility",
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
        category: "Accessibility",
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
  };
