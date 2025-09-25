// Class 8 - Chapter 2: Linear Equations in One Variable
const class8Chapter2 = {
  reading: [
    {
      question: "What is a linear equation in one variable?",
      answer:
        "A linear equation in one variable is an equation that can be written in the form ax + b = 0, where a ≠ 0.",
    },
    {
      question: "Examples of linear equations in one variable?",
      answer: "2x + 3 = 0, 5y - 7 = 0, -3a + 6 = 0.",
    },
    {
      question: "What is the variable in an equation?",
      answer:
        "The variable is the letter that represents an unknown number, like x, y, or a.",
    },
    {
      question: "How do you solve a linear equation?",
      answer:
        "Isolate the variable on one side using inverse operations to find its value.",
    },
    {
      question: "Example: Solve 2x + 5 = 11.",
      answer: "2x + 5 = 11 → 2x = 6 → x = 3.",
    },
    {
      question: "What is the solution of an equation?",
      answer: "The value of the variable that satisfies the equation.",
    },
    {
      question: "How to check the solution of an equation?",
      answer:
        "Substitute the value of the variable into the original equation and verify both sides are equal.",
    },
    {
      question: "What are like terms?",
      answer:
        "Terms having the same variable raised to the same power. Example: 3x and 5x are like terms.",
    },
    {
      question: "How to simplify equations using like terms?",
      answer: "Combine like terms by adding or subtracting their coefficients.",
    },
    {
      question: "What is transposition in equations?",
      answer:
        "Transposition means moving a term from one side to the other by changing its sign.",
    },
    { question: "Solve 3x - 7 = 8.", answer: "3x - 7 = 8 → 3x = 15 → x = 5." },
    { question: "Solve 5y + 2 = 12.", answer: "5y + 2 = 12 → y = 2." },
    {
      question: "Can linear equations have negative solutions?",
      answer:
        "Yes, depending on the constants and coefficients, the solution can be negative.",
    },
    { question: "Solve -2x + 5 = 1.", answer: "x = 2." },
    {
      question: "Example of linear equation in real life?",
      answer:
        "If a mobile costs 2000 and you pay x rupees more to reach 3500, the equation is 2000 + x = 3500.",
    },
    {
      question: "What is the importance of linear equations?",
      answer:
        "They are used to model real-life problems in finance, measurement, and everyday calculations.",
    },
    {
      question: "How to handle fractions in linear equations?",
      answer:
        "Multiply both sides by the denominator to remove fractions before solving.",
    },
    {
      question: "How to handle decimals in linear equations?",
      answer:
        "Multiply both sides by a power of 10 to convert decimals into whole numbers.",
    },
    { question: "Solve 1/2 x + 3 = 7.", answer: "x = 8." },
    { question: "Solve 0.5y - 2 = 3.", answer: "y = 10." },
  ],

  broad: [
    { question: "Solve 4x - 9 = 7.", answer: "x = 4" },
    { question: "Solve 3y + 5 = -4.", answer: "y = -3" },
    { question: "Solve -5x + 10 = 0.", answer: "x = 2" },
    { question: "Solve 2/3 x + 4 = 10.", answer: "x = 9" },
    {
      question: "Check solution of 3x - 5 = 10. x = 5?",
      answer: "No, 3*5-5=10 → 15-5=10, Yes actually. So x = 5 is correct.",
    },
    { question: "Combine like terms: 5a + 3 + 2a - 4", answer: "7a - 1" },
    { question: "Solve 0.25x + 1.5 = 2.5.", answer: "x = 4" },
    { question: "Solve -3y - 6 = 0.", answer: "y = -2" },
  ],

  broadTest: [
    {
      question: "Solve 2x - 5 = 9.",
      options: ["x = 7", "x = 2", "x = -2", "x = 14"],
      correct: 0,
    },
    {
      question: "Which is a linear equation in one variable?",
      options: ["x² + 5 = 0", "3x + 2 = 0", "x³ + 2 = 0", "2x² + 3x + 1 = 0"],
      correct: 1,
    },
    {
      question: "Solve -4x + 12 = 0.",
      options: ["x = -3", "x = 3", "x = 4", "x = -4"],
      correct: 1,
    },
    {
      question: "Simplify like terms: 4a + 7a - 3",
      options: ["11a - 3", "7a - 3", "a - 3", "11a + 3"],
      correct: 0,
    },
    {
      question: "Solve 1/3 x + 5 = 8.",
      options: ["x = 9", "x = 3", "x = -9", "x = 1"],
      correct: 0,
    },
  ],

  test: [
    {
      question: "Solve 2x + 3 = 11.",
      options: ["x = 4", "x = 3", "x = 5", "x = 6"],
      correct: 1,
    },
    {
      question: "Solve 5y - 7 = 8.",
      options: ["y = 3", "y = 2", "y = 1", "y = 4"],
      correct: 0,
    },
    {
      question: "Solve -3x + 9 = 0.",
      options: ["x = 3", "x = -3", "x = 0", "x = 9"],
      correct: 0,
    },
    {
      question: "Which is a linear equation in one variable?",
      options: ["x² + 3 = 0", "2x + 5 = 0", "x² + x = 0", "x³ + 2 = 0"],
      correct: 1,
    },
    {
      question: "Solve 1/2 x - 4 = 0.",
      options: ["x = 2", "x = 8", "x = -8", "x = 4"],
      correct: 1,
    },
    {
      question: "Solution of 3x - 7 = 8?",
      options: ["x = 3", "x = 5", "x = 4", "x = 6"],
      correct: 1,
    },
    {
      question: "Check solution of x + 5 = 12. x = 7?",
      options: ["Yes", "No", "Cannot say", "Sometimes"],
      correct: 0,
    },
    {
      question: "Solve -2x + 5 = 1.",
      options: ["x = 2", "x = -2", "x = 1", "x = -1"],
      correct: 0,
    },
    {
      question: "What are like terms in 3x + 5 + 7x - 2?",
      options: ["3x and 7x", "5 and -2", "3x and -2", "All terms"],
      correct: 0,
    },
    {
      question: "Equation 2x² + 5 = 0 is linear in?",
      options: ["x", "x²", "Neither", "Both"],
      correct: 2,
    },
  ],
};

// Export for dynamic loading
window.class8Chapter2 = class8Chapter2;
