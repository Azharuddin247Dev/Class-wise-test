// Class 5 - Chapter 3: Multiplication
const class5Chapter3 = {
  reading: [
    {
      question: "What is multiplication?",
      answer:
        "Multiplication is repeated addition of the same number. For example, 4 × 3 means 4 + 4 + 4 = 12.",
    },
    {
      question: "What is the symbol of multiplication?",
      answer: "The symbol of multiplication is '×'.",
    },
    {
      question: "What are the numbers called in multiplication?",
      answer:
        "In multiplication, the numbers being multiplied are called factors, and the answer is called the product.",
    },
    {
      question: "What is the product of 7 × 5?",
      answer: "The product of 7 × 5 is 35.",
    },
    {
      question: "What is the multiplicative identity?",
      answer:
        "The multiplicative identity is 1. Multiplying any number by 1 gives the same number.",
    },
    {
      question: "What is the zero property of multiplication?",
      answer: "Any number multiplied by 0 is always 0. Example: 15 × 0 = 0.",
    },
    {
      question: "What is the commutative property of multiplication?",
      answer:
        "In multiplication, changing the order of numbers does not change the product. Example: 4 × 6 = 6 × 4.",
    },
    {
      question: "What is the associative property of multiplication?",
      answer:
        "In multiplication, grouping of numbers does not change the product. Example: (2 × 3) × 4 = 2 × (3 × 4).",
    },
    {
      question: "What is the distributive property?",
      answer:
        "Distributive property states that a × (b + c) = (a × b) + (a × c).",
    },
    {
      question: "What is a multiplication table?",
      answer:
        "A multiplication table is a chart that shows the products of numbers, usually from 1 to 10 or 12.",
    },
    {
      question: "What is 9 × 8?",
      answer: "9 × 8 = 72.",
    },
    {
      question: "What is 12 × 12?",
      answer: "12 × 12 = 144.",
    },
    {
      question: "If 6 × 4 = 24, what is 4 × 6?",
      answer: "4 × 6 = 24. Multiplication is commutative.",
    },
    {
      question: "What is repeated addition?",
      answer:
        "Repeated addition is adding the same number again and again. Multiplication is a shortcut for repeated addition.",
    },
    {
      question: "Write 3 × 5 as repeated addition.",
      answer: "3 × 5 = 5 + 5 + 5 = 15.",
    },
    {
      question: "Write 6 × 2 as repeated addition.",
      answer: "6 × 2 = 2 + 2 + 2 + 2 + 2 + 2 = 12.",
    },
    {
      question: "What happens when a number is multiplied by 10?",
      answer:
        "When a number is multiplied by 10, a zero is added at the end of the number. Example: 25 × 10 = 250.",
    },
    {
      question: "What happens when a number is multiplied by 100?",
      answer:
        "When a number is multiplied by 100, two zeros are added at the end. Example: 36 × 100 = 3600.",
    },
    {
      question: "What is the product of the smallest 2-digit number and 2?",
      answer: "The smallest 2-digit number is 10. 10 × 2 = 20.",
    },
    {
      question: "What is the product of the largest 2-digit number and 1?",
      answer: "The largest 2-digit number is 99. 99 × 1 = 99.",
    },
  ],

  // Word problems with detailed answers
  broad: [
    {
      question:
        "A basket has 12 apples. If there are 8 such baskets, how many apples are there in total?",
      answer: "12 × 8 = 96 apples in total.",
    },
    {
      question:
        "One packet has 24 chocolates. How many chocolates are there in 15 packets?",
      answer: "24 × 15 = 360 chocolates.",
    },
    {
      question:
        "A classroom has 6 rows of benches, with 8 benches in each row. How many benches are there in total?",
      answer: "6 × 8 = 48 benches.",
    },
    {
      question:
        "A farmer plants 125 mango trees in one row. If he plants 12 rows, how many mango trees are there in total?",
      answer: "125 × 12 = 1500 mango trees.",
    },
    {
      question: "A pen costs ₹15. What is the cost of 48 pens?",
      answer: "15 × 48 = ₹720.",
    },
    {
      question:
        "If a worker earns ₹350 per day, how much will he earn in 25 days?",
      answer: "350 × 25 = ₹8750.",
    },
  ],

  // Word problem multiple-choice questions
  broadTest: [
    {
      question:
        "A basket has 12 apples. If there are 8 baskets, how many apples are there?",
      options: ["96", "88", "108", "100"],
      correct: 0,
    },
    {
      question:
        "One packet has 24 chocolates. How many chocolates are there in 15 packets?",
      options: ["340", "350", "360", "370"],
      correct: 2,
    },
    {
      question:
        "A classroom has 6 rows of benches, with 8 benches in each row. How many benches are there?",
      options: ["42", "48", "36", "56"],
      correct: 1,
    },
    {
      question:
        "A farmer plants 125 mango trees in one row. If he plants 12 rows, how many mango trees are there?",
      options: ["1200", "1400", "1500", "1600"],
      correct: 2,
    },
    {
      question: "A pen costs ₹15. What is the cost of 48 pens?",
      options: ["₹680", "₹700", "₹720", "₹750"],
      correct: 2,
    },
    {
      question:
        "If a worker earns ₹350 per day, how much will he earn in 25 days?",
      options: ["₹8750", "₹9000", "₹9500", "₹8700"],
      correct: 0,
    },
  ],

  // Short MCQs
  test: [
    {
      question: "What is the product of 8 × 7?",
      options: ["54", "56", "64", "58"],
      correct: 1,
    },
    {
      question: "Any number multiplied by 0 is:",
      options: ["0", "1", "Same number", "Infinity"],
      correct: 0,
    },
    {
      question: "What is the multiplicative identity?",
      options: ["0", "1", "10", "100"],
      correct: 1,
    },
    {
      question: "What is 15 × 10?",
      options: ["150", "115", "151", "105"],
      correct: 0,
    },
    {
      question: "Which of these is true?",
      options: [
        "5 × 7 = 7 × 5",
        "6 × 2 ≠ 2 × 6",
        "3 × 4 = 3 + 4",
        "10 × 0 = 10",
      ],
      correct: 0,
    },
    {
      question: "What is 25 × 100?",
      options: ["2500", "250", "25000", "2050"],
      correct: 0,
    },
    {
      question: "Which property says a × (b + c) = (a × b) + (a × c)?",
      options: ["Commutative", "Associative", "Distributive", "Identity"],
      correct: 2,
    },
    {
      question: "What is 12 × 12?",
      options: ["122", "124", "144", "132"],
      correct: 2,
    },
    {
      question: "Write 4 × 3 as repeated addition.",
      options: ["4 + 4 + 4", "3 + 3 + 3 + 3", "4 + 3", "3 × 4"],
      correct: 1,
    },
    {
      question: "The product of the largest 2-digit number and 1 is:",
      options: ["100", "98", "99", "101"],
      correct: 2,
    },
  ],
};

// Export for dynamic loading
window.class5Chapter3 = class5Chapter3;
