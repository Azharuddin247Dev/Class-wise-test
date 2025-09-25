// Class 5 - Chapter 9: Money
const class5Chapter9 = {
  reading: [
    {
      question: "What is the basic unit of money in India?",
      answer: "The basic unit of money in India is the Rupee (₹).",
    },
    {
      question: "How many paise make 1 rupee?",
      answer: "100 paise = 1 rupee.",
    },
    {
      question: "What is currency?",
      answer:
        "Currency is the system of money used in a country, like rupees in India and dollars in the USA.",
    },
    {
      question: "Write ₹5 in paise.",
      answer: "₹5 = 500 paise.",
    },
    {
      question: "Write 250 paise in rupees.",
      answer: "250 paise = ₹2.50.",
    },
    {
      question: "What is the symbol of rupee?",
      answer: "The symbol of rupee is ₹.",
    },
    {
      question: "What is addition of money?",
      answer:
        "Addition of money is done like normal numbers, keeping rupees and paise in separate columns.",
    },
    {
      question: "What is subtraction of money?",
      answer:
        "Subtraction of money is done like normal subtraction, keeping rupees and paise in separate columns.",
    },
    {
      question: "What is the total of ₹25.50 and ₹13.75?",
      answer: "₹25.50 + ₹13.75 = ₹39.25.",
    },
    {
      question: "Subtract ₹18.25 from ₹50.",
      answer: "₹50.00 - ₹18.25 = ₹31.75.",
    },
    {
      question: "Multiply ₹12.50 by 4.",
      answer: "₹12.50 × 4 = ₹50.00.",
    },
    {
      question: "Divide ₹36 by 6.",
      answer: "₹36 ÷ 6 = ₹6.",
    },
    {
      question: "What is simple interest?",
      answer:
        "Simple interest is the extra money paid for borrowing money, calculated using the formula SI = (P × R × T)/100.",
    },
    {
      question: "What does P stand for in the simple interest formula?",
      answer:
        "In the SI formula, P stands for Principal, the money borrowed or invested.",
    },
    {
      question: "What does R stand for in the simple interest formula?",
      answer:
        "R stands for Rate of interest, expressed in percentage per year.",
    },
    {
      question: "What does T stand for in the simple interest formula?",
      answer: "T stands for Time, usually in years.",
    },
    {
      question: "Find the simple interest on ₹1000 at 5% for 2 years.",
      answer: "SI = (1000 × 5 × 2)/100 = ₹100.",
    },
    {
      question: "What is profit?",
      answer:
        "Profit is the extra money gained when selling price (SP) is more than cost price (CP).",
    },
    {
      question: "What is loss?",
      answer:
        "Loss is the money lost when cost price (CP) is more than selling price (SP).",
    },
    {
      question: "If a pen costs ₹10 and is sold for ₹15, what is the profit?",
      answer: "Profit = SP - CP = ₹15 - ₹10 = ₹5.",
    },
  ],

  broad: [
    {
      question: "Explain how to convert rupees into paise and vice versa.",
      answer:
        "To convert rupees into paise, multiply the rupees by 100. To convert paise into rupees, divide the paise by 100.",
    },
    {
      question: "Explain how to calculate simple interest.",
      answer:
        "Simple interest (SI) is calculated using the formula SI = (P × R × T)/100, where P is principal, R is rate of interest, and T is time in years.",
    },
    {
      question:
        "How do you find total money when given rupees and paise separately?",
      answer:
        "Add rupees and paise separately, then combine them, making sure to convert 100 paise into 1 rupee if necessary.",
    },
    {
      question: "Explain how to calculate profit and loss.",
      answer: "Profit = SP - CP when SP > CP. Loss = CP - SP when CP > SP.",
    },
    {
      question: "How do you multiply and divide money amounts?",
      answer:
        "Multiply or divide rupees and paise as normal numbers, then adjust paise to rupees if paise ≥ 100.",
    },
  ],

  broadTest: [
    { question: "Convert ₹7.50 into paise." },
    { question: "Find the simple interest on ₹500 at 6% for 3 years." },
    { question: "A book costs ₹120 and is sold for ₹150. Find the profit." },
    {
      question:
        "Divide ₹84.00 equally among 7 students. How much does each get?",
    },
    { question: "Add ₹45.75 and ₹32.50." },
  ],

  test: [
    {
      question: "1 rupee = ? paise",
      options: ["10", "50", "100", "1000"],
      correct: 2,
    },
    {
      question: "₹2.50 = ? paise",
      options: ["25", "50", "150", "250"],
      correct: 3,
    },
    {
      question: "₹5 + ₹3.75 = ?",
      options: ["₹8.25", "₹7.25", "₹6.75", "₹9.25"],
      correct: 0,
    },
    {
      question: "₹20 - ₹12.50 = ?",
      options: ["₹7.50", "₹8.50", "₹6.50", "₹9.50"],
      correct: 0,
    },
    {
      question: "₹15 × 3 = ?",
      options: ["₹30", "₹35", "₹45", "₹50"],
      correct: 2,
    },
    {
      question: "₹40 ÷ 5 = ?",
      options: ["₹5", "₹6", "₹7", "₹8"],
      correct: 3,
    },
    {
      question: "The symbol of rupee is:",
      options: ["$", "£", "₹", "€"],
      correct: 2,
    },
    {
      question: "Simple Interest formula is:",
      options: [
        "(P × R)/T",
        "(P × R × T)/100",
        "(P + R + T)/100",
        "None of these",
      ],
      correct: 1,
    },
    {
      question: "If CP = ₹50 and SP = ₹60, profit is:",
      options: ["₹5", "₹8", "₹10", "₹15"],
      correct: 2,
    },
    {
      question: "If CP = ₹25 and SP = ₹20, loss is:",
      options: ["₹2", "₹3", "₹4", "₹5"],
      correct: 3,
    },
  ],
};

// Export for dynamic loading
window.class5Chapter9 = class5Chapter9;
