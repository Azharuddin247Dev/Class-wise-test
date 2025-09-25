// Class 5 - Chapter 4: Division
const class5Chapter4 = {
  reading: [
    {
      question: "What is division?",
      answer:
        "Division is the process of splitting a number into equal parts. It is the opposite of multiplication.",
    },
    {
      question: "What are the parts of a division problem?",
      answer:
        "In division, the number being divided is the dividend, the number dividing is the divisor, the result is the quotient, and the leftover is the remainder.",
    },
    {
      question: "What is the symbol of division?",
      answer: "The symbol of division is ÷ or /.",
    },
    {
      question: "What is 20 ÷ 5?",
      answer: "20 ÷ 5 = 4.",
    },
    {
      question: "What is 36 ÷ 6?",
      answer: "36 ÷ 6 = 6.",
    },
    {
      question: "What is the relation between multiplication and division?",
      answer:
        "Division is the reverse of multiplication. Example: 6 × 4 = 24, so 24 ÷ 6 = 4 and 24 ÷ 4 = 6.",
    },
    {
      question: "What is the quotient in 50 ÷ 10?",
      answer: "The quotient is 5.",
    },
    {
      question: "What is the remainder in 19 ÷ 4?",
      answer: "4 × 4 = 16. Remainder = 19 – 16 = 3.",
    },
    {
      question: "When is the remainder zero?",
      answer:
        "The remainder is zero when the dividend is exactly divisible by the divisor.",
    },
    {
      question: "What is 72 ÷ 9?",
      answer: "72 ÷ 9 = 8.",
    },
    {
      question: "What is 100 ÷ 25?",
      answer: "100 ÷ 25 = 4.",
    },
    {
      question: "What is 0 ÷ 5?",
      answer: "0 ÷ 5 = 0. Zero divided by any number is 0.",
    },
    {
      question: "What is 45 ÷ 1?",
      answer: "45 ÷ 1 = 45. Any number divided by 1 is the number itself.",
    },
    {
      question: "What happens when a number is divided by itself?",
      answer:
        "Any non-zero number divided by itself equals 1. Example: 9 ÷ 9 = 1.",
    },
    {
      question: "Can we divide by zero?",
      answer: "No, division by zero is not possible. It is undefined.",
    },
    {
      question: "What is long division?",
      answer:
        "Long division is a method of dividing large numbers step by step using dividend, divisor, quotient, and remainder.",
    },
    {
      question: "What is 125 ÷ 5?",
      answer: "125 ÷ 5 = 25.",
    },
    {
      question: "What is 144 ÷ 12?",
      answer: "144 ÷ 12 = 12.",
    },
    {
      question: "If 7 × 8 = 56, what is 56 ÷ 7?",
      answer: "56 ÷ 7 = 8. Division checks multiplication.",
    },
    {
      question: "If 9 × 9 = 81, what is 81 ÷ 9?",
      answer: "81 ÷ 9 = 9.",
    },
  ],

  // Word problems with detailed answers
  broad: [
    {
      question:
        "A shopkeeper has 96 candies. He wants to pack them equally in 12 boxes. How many candies will go in each box?",
      answer: "96 ÷ 12 = 8 candies in each box.",
    },
    {
      question:
        "There are 245 students going on a trip. If 7 students sit in each bus, how many buses are needed?",
      answer: "245 ÷ 7 = 35 buses needed.",
    },
    {
      question:
        "A man has ₹8640. He wants to divide it equally among his 24 workers. How much will each worker get?",
      answer: "8640 ÷ 24 = ₹360 per worker.",
    },
    {
      question:
        "A farmer harvested 1,728 mangoes. If he packs them into crates of 36 mangoes each, how many crates will he need?",
      answer: "1728 ÷ 36 = 48 crates.",
    },
    {
      question:
        "A teacher has 540 pencils. If she distributes them equally among 45 students, how many pencils will each student get?",
      answer: "540 ÷ 45 = 12 pencils each.",
    },
    {
      question:
        "A train covers 1,344 km in 12 hours. How many kilometers does it travel in one hour?",
      answer: "1344 ÷ 12 = 112 km per hour.",
    },
  ],

  // Word problem multiple-choice questions
  broadTest: [
    {
      question:
        "A shopkeeper has 96 candies. He wants to pack them equally in 12 boxes. How many candies in each box?",
      options: ["6", "7", "8", "9"],
      correct: 2,
    },
    {
      question:
        "There are 245 students going on a trip. If 7 students sit in each bus, how many buses are needed?",
      options: ["30", "32", "35", "40"],
      correct: 2,
    },
    {
      question:
        "A man has ₹8640. He wants to divide it equally among 24 workers. How much per worker?",
      options: ["₹320", "₹340", "₹360", "₹380"],
      correct: 2,
    },
    {
      question:
        "A farmer harvested 1728 mangoes. If he packs them into crates of 36 mangoes each, how many crates?",
      options: ["46", "48", "50", "52"],
      correct: 1,
    },
    {
      question:
        "A teacher has 540 pencils. If she distributes them equally among 45 students, how many pencils each?",
      options: ["10", "11", "12", "15"],
      correct: 2,
    },
    {
      question: "A train covers 1344 km in 12 hours. How many km in one hour?",
      options: ["110", "111", "112", "115"],
      correct: 2,
    },
  ],

  test: [
    {
      question: "In 48 ÷ 6, what is the quotient?",
      options: ["6", "8", "7", "12"],
      correct: 1,
    },
    {
      question: "In division, the number being divided is called:",
      options: ["Divisor", "Dividend", "Quotient", "Remainder"],
      correct: 1,
    },
    {
      question: "What is 56 ÷ 7?",
      options: ["8", "9", "7", "6"],
      correct: 0,
    },
    {
      question: "What is 0 ÷ 9?",
      options: ["0", "9", "1", "Not possible"],
      correct: 0,
    },
    {
      question: "What is 72 ÷ 8?",
      options: ["9", "8", "7", "10"],
      correct: 0,
    },
    {
      question: "The result of division is called:",
      options: ["Product", "Quotient", "Dividend", "Factor"],
      correct: 1,
    },
    {
      question: "Which of these is true?",
      options: ["12 ÷ 3 = 4", "12 ÷ 3 = 3", "12 ÷ 3 = 6", "12 ÷ 3 = 5"],
      correct: 0,
    },
    {
      question: "What is 144 ÷ 12?",
      options: ["11", "10", "13", "12"],
      correct: 3,
    },
    {
      question: "Any number divided by itself (not zero) is:",
      options: ["0", "1", "The number itself", "Undefined"],
      correct: 1,
    },
    {
      question: "Division by zero is:",
      options: ["Possible", "Equal to zero", "Not defined", "Equal to one"],
      correct: 2,
    },
  ],
};

// Export for dynamic loading
window.class5Chapter4 = class5Chapter4;
