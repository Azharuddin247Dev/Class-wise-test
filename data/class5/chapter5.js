// Class 5 - Chapter 5: Fractions
const class5Chapter5 = {
  reading: [
    {
      question: "What is a fraction?",
      answer:
        "A fraction is a number that represents a part of a whole. It is written as numerator/denominator.",
    },
    {
      question: "What is the numerator in a fraction?",
      answer:
        "The numerator is the top number in a fraction. It shows how many parts are taken.",
    },
    {
      question: "What is the denominator in a fraction?",
      answer:
        "The denominator is the bottom number in a fraction. It shows how many equal parts the whole is divided into.",
    },
    {
      question: "Write the fraction for 3 parts out of 5.",
      answer: "The fraction is 3/5.",
    },
    {
      question: "What is a proper fraction?",
      answer:
        "A proper fraction has a numerator smaller than the denominator. Example: 3/4.",
    },
    {
      question: "What is an improper fraction?",
      answer:
        "An improper fraction has a numerator greater than or equal to the denominator. Example: 7/5.",
    },
    {
      question: "What is a mixed fraction?",
      answer:
        "A mixed fraction is a combination of a whole number and a proper fraction. Example: 2 1/3.",
    },
    {
      question: "Convert 7/4 into a mixed fraction.",
      answer: "7/4 = 1 3/4.",
    },
    {
      question: "Convert 2 2/5 into an improper fraction.",
      answer: "2 2/5 = 12/5.",
    },
    {
      question: "What are like fractions?",
      answer:
        "Fractions that have the same denominator are called like fractions. Example: 2/7 and 5/7.",
    },
    {
      question: "What are unlike fractions?",
      answer:
        "Fractions that have different denominators are called unlike fractions. Example: 3/5 and 2/7.",
    },
    {
      question: "What is an equivalent fraction?",
      answer:
        "Two fractions that represent the same value are equivalent fractions. Example: 1/2 = 2/4.",
    },
    {
      question: "Simplify 6/8.",
      answer: "6/8 = 3/4.",
    },
    {
      question: "Write an equivalent fraction of 3/5.",
      answer: "6/10 is an equivalent fraction of 3/5.",
    },
    {
      question: "What is the fraction for shaded 2 parts out of 8?",
      answer: "The fraction is 2/8, which can be simplified to 1/4.",
    },
    {
      question: "How do you add like fractions?",
      answer:
        "To add like fractions, add their numerators and keep the denominator the same. Example: 2/7 + 3/7 = 5/7.",
    },
    {
      question: "How do you subtract like fractions?",
      answer:
        "To subtract like fractions, subtract their numerators and keep the denominator the same. Example: 5/9 – 2/9 = 3/9.",
    },
    {
      question: "What is 1/2 of 10?",
      answer: "1/2 of 10 = 5.",
    },
    {
      question: "What is 3/4 of 20?",
      answer: "3/4 of 20 = 15.",
    },
    {
      question: "What is the value of 1/3 + 1/3?",
      answer: "1/3 + 1/3 = 2/3.",
    },
  ],

  broad: [
    {
      question: "Explain proper, improper, and mixed fractions with examples.",
      answer:
        "A proper fraction has numerator smaller than denominator (e.g., 3/4). An improper fraction has numerator greater or equal to denominator (e.g., 7/5). A mixed fraction combines a whole number and a fraction (e.g., 2 1/3).",
    },
    {
      question:
        "How do you convert an improper fraction into a mixed fraction? Give an example.",
      answer:
        "To convert, divide numerator by denominator. The quotient is the whole number, remainder becomes the numerator. Example: 7/4 = 1 3/4.",
    },
    {
      question:
        "What are like and unlike fractions? How do you add unlike fractions?",
      answer:
        "Like fractions have same denominator (e.g., 2/7, 5/7). Unlike fractions have different denominators (e.g., 3/5, 2/7). To add unlike fractions, find LCM of denominators, convert to like fractions, then add.",
    },
    {
      question: "Explain equivalent fractions with two examples.",
      answer:
        "Equivalent fractions are fractions that represent the same value. Example: 1/2 = 2/4 = 4/8, and 3/5 = 6/10 = 9/15.",
    },
    {
      question:
        "Solve: A basket has 20 mangoes. If 3/4 of them are ripe, how many mangoes are ripe?",
      answer: "3/4 of 20 = (3 × 20) ÷ 4 = 60 ÷ 4 = 15 mangoes are ripe.",
    },
  ],

  broadTest: [
    {
      question:
        "Explain with example how to convert a mixed fraction into an improper fraction.",
    },
    {
      question:
        "What are like fractions and unlike fractions? Write examples of each.",
    },
    {
      question:
        "Solve: Out of 30 students, 2/5 are girls. How many girls are there in the class?",
    },
    {
      question:
        "What is an equivalent fraction? Write three equivalent fractions of 2/3.",
    },
    {
      question: "Explain how to simplify fractions with an example.",
    },
  ],

  test: [
    {
      question: "In the fraction 5/8, what is the numerator?",
      options: ["5", "8", "13", "3"],
      correct: 0,
    },
    {
      question: "In the fraction 9/10, what is the denominator?",
      options: ["9", "10", "1", "19"],
      correct: 1,
    },
    {
      question: "Which of these is a proper fraction?",
      options: ["7/5", "9/9", "3/8", "12/7"],
      correct: 2,
    },
    {
      question: "Which of these is an improper fraction?",
      options: ["2/3", "7/4", "5/9", "3/8"],
      correct: 1,
    },
    {
      question: "Convert 11/4 into a mixed fraction.",
      options: ["2 3/4", "3 2/4", "2 1/4", "4 3/2"],
      correct: 0,
    },
    {
      question: "Which fraction is equivalent to 1/2?",
      options: ["2/3", "3/5", "2/4", "3/8"],
      correct: 2,
    },
    {
      question: "Simplify 12/16.",
      options: ["3/4", "2/3", "4/5", "6/7"],
      correct: 0,
    },
    {
      question: "What is 2/7 + 3/7?",
      options: ["3/7", "4/7", "5/7", "6/7"],
      correct: 2,
    },
    {
      question: "What is 3/4 of 12?",
      options: ["6", "8", "9", "10"],
      correct: 2,
    },
    {
      question: "What is 1/2 + 1/2?",
      options: ["1/2", "1", "2", "0"],
      correct: 1,
    },
    // Extra questions added
    {
      question: "What is 5/9 – 2/9?",
      options: ["2/9", "3/9", "7/9", "1/9"],
      correct: 1,
    },
    {
      question:
        "Ravi ate 2/8 of a cake and his sister ate 3/8. How much of the cake did they eat together?",
      options: ["4/8", "5/8", "6/8", "7/8"],
      correct: 1,
    },
    {
      question: "Which of these is a mixed fraction?",
      options: ["7/5", "3/4", "2 1/3", "5/6"],
      correct: 2,
    },
    {
      question:
        "A basket has 20 mangoes. If 3/4 of them are ripe, how many are ripe?",
      options: ["10", "12", "15", "18"],
      correct: 2,
    },
    {
      question: "Which of these is an equivalent fraction of 2/3?",
      options: ["3/4", "4/6", "5/7", "6/8"],
      correct: 1,
    },
  ],
};

// Export for dynamic loading
window.class5Chapter5 = class5Chapter5;
