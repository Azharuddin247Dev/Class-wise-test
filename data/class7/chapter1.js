// Class 7 - Chapter 1: Integers
const class7Chapter1 = {
  reading: [
    {
      question: "What are integers?",
      answer:
        "Integers are whole numbers and their negatives. Example: ..., -3, -2, -1, 0, 1, 2, 3, ...",
    },
    {
      question: "What is the additive inverse of an integer?",
      answer:
        "The additive inverse of an integer is the number that, when added to it, gives zero. Example: additive inverse of 5 is -5.",
    },
    {
      question: "What happens when you add two positive integers?",
      answer:
        "The sum of two positive integers is always positive. Example: 4 + 7 = 11.",
    },
    {
      question: "What happens when you add two negative integers?",
      answer:
        "The sum of two negative integers is always negative. Example: -3 + -5 = -8.",
    },
    {
      question: "What happens when you add a positive and a negative integer?",
      answer:
        "Subtract the smaller absolute value from the larger absolute value and take the sign of the number with larger absolute value. Example: 7 + (-5) = 2.",
    },
    {
      question: "What is subtraction of integers?",
      answer:
        "Subtraction of integers is adding the additive inverse. Example: 5 - (-3) = 5 + 3 = 8.",
    },
    {
      question: "What is multiplication of integers?",
      answer:
        "Multiplication rules: Positive × Positive = Positive, Negative × Negative = Positive, Positive × Negative = Negative.",
    },
    {
      question: "What is division of integers?",
      answer:
        "Division rules: Positive ÷ Positive = Positive, Negative ÷ Negative = Positive, Positive ÷ Negative = Negative.",
    },
    {
      question: "Represent integers on a number line.",
      answer:
        "A number line shows integers in order with 0 in the center. Negative numbers to the left, positive numbers to the right.",
    },
    {
      question: "What is the absolute value of an integer?",
      answer:
        "The absolute value of an integer is its distance from zero on the number line, without considering the sign. Example: | -7 | = 7.",
    },
    {
      question: "Why are integers important in daily life?",
      answer:
        "Integers are used for temperature, elevation, bank transactions, profit and loss, and many other situations.",
    },
  ],

  broad: [
    {
      question: "Find the sum of -4 and 9 using a number line.",
      answer:
        "-4 + 9 = 5. Move 4 units left from 0, then 9 units right to reach 5.",
    },
    {
      question: "Find the sum of -6 and -9.",
      answer:
        "-6 + (-9) = -15. Move 6 units left from 0, then 9 more units left to reach -15.",
    },
    {
      question: "Subtract 5 - 8 using additive inverse.",
      answer: "5 - 8 = 5 + (-8) = -3.",
    },
    {
      question: "Multiply -4 × 6.",
      answer: "-4 × 6 = -24.",
    },
    {
      question: "Divide -12 ÷ 3.",
      answer: "-12 ÷ 3 = -4.",
    },
    {
      question:
        "Arrange integers -5, 3, -2, 0 in ascending and descending order.",
      answer: "Ascending: -5, -2, 0, 3; Descending: 3, 0, -2, -5.",
    },
  ],

  broadTest: [
    {
      question: "Find the sum: -3 + 7",
      options: ["4", "-4", "10", "-10"],
      correct: 0,
    },
    {
      question: "Find the sum: -8 + (-5)",
      options: ["13", "-13", "3", "-3"],
      correct: 1,
    },
    {
      question: "Subtract: 6 - 10",
      options: ["4", "-4", "16", "-16"],
      correct: 1,
    },
    {
      question: "Multiply: -5 × -3",
      options: ["-15", "15", "-8", "8"],
      correct: 1,
    },
    {
      question: "Divide: -18 ÷ 6",
      options: ["3", "-3", "12", "-12"],
      correct: 1,
    },
  ],

  test: [
    {
      question: "Which of these is an integer?",
      options: ["3/2", "-5", "0.5", "1.2"],
      correct: 1,
    },
    {
      question: "Find: -4 + 9",
      options: ["5", "-13", "13", "-5"],
      correct: 0,
    },
    {
      question: "Find: -6 + (-7)",
      options: ["1", "-13", "13", "-1"],
      correct: 1,
    },
    {
      question: "Subtract: 7 - 12",
      options: ["5", "-5", "19", "-19"],
      correct: 1,
    },
    {
      question: "Multiply: -3 × -4",
      options: ["-12", "12", "7", "-7"],
      correct: 1,
    },
    {
      question: "Divide: -15 ÷ 3",
      options: ["5", "-5", "8", "-8"],
      correct: 1,
    },
    {
      question: "Absolute value of -8 is:",
      options: ["-8", "0", "8", "None"],
      correct: 2,
    },
    {
      question: "Arrange in ascending order: -2, 5, -7, 3",
      options: ["-7, -2, 3, 5", "-2, -7, 3, 5", "5, 3, -2, -7", "-7, 3, -2, 5"],
      correct: 0,
    },
    {
      question: "Which is greater: -3 or -7?",
      options: ["-3", "-7", "Both equal", "Cannot compare"],
      correct: 0,
    },
    {
      question: "Add: 6 + (-9)",
      options: ["3", "-3", "15", "-15"],
      correct: 1,
    },
  ],
};

// Export for dynamic loading
window.class7Chapter1 = class7Chapter1;
