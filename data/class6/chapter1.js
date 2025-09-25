// Class 6 - Chapter 1: Knowing Our Numbers
const class6Chapter1 = {
  reading: [
    {
      question: "What are large numbers?",
      answer:
        "Large numbers are numbers with many digits, like thousands, lakhs, and crores.",
    },
    {
      question: "What is the Indian number system?",
      answer:
        "The Indian system uses ones, tens, hundreds, thousands, ten thousands, lakhs, ten lakhs, crores, etc.",
    },
    {
      question: "What is the International number system?",
      answer:
        "The International system uses ones, tens, hundreds, thousands, ten thousands, hundred thousands, millions, etc.",
    },
    {
      question: "How do you read 1,25,000 in Indian system?",
      answer: "One lakh twenty-five thousand.",
    },
    {
      question: "How do you read 125,000 in International system?",
      answer: "One hundred twenty-five thousand.",
    },
    {
      question: "What is a lakh?",
      answer: "A lakh is 1,00,000 (one hundred thousand).",
    },
    {
      question: "What is a crore?",
      answer: "A crore is 1,00,00,000 (ten million).",
    },
    {
      question: "What is place value in large numbers?",
      answer:
        "Place value tells us the value of each digit based on its position in the number.",
    },
    {
      question: "How do you compare large numbers?",
      answer:
        "Compare digits from left to right, starting with the highest place value.",
    },
    {
      question: "What is ascending order?",
      answer:
        "Ascending order means arranging numbers from smallest to largest.",
    },
    {
      question: "What is descending order?",
      answer:
        "Descending order means arranging numbers from largest to smallest.",
    },
    {
      question: "What is the successor of a number?",
      answer:
        "The successor is the number that comes immediately after a given number.",
    },
    {
      question: "What is the predecessor of a number?",
      answer:
        "The predecessor is the number that comes immediately before a given number.",
    },
    {
      question: "How do you round large numbers?",
      answer:
        "Look at the digit to the right of the place you're rounding to. If it's 5 or more, round up.",
    },
    {
      question: "What is estimation with large numbers?",
      answer:
        "Estimation is finding approximate values by rounding to make calculations easier.",
    },
    {
      question: "What are Roman numerals?",
      answer:
        "Roman numerals are an ancient number system using letters like I, V, X, L, C, D, M.",
    },
    {
      question: "What does I represent in Roman numerals?",
      answer: "I represents 1 in Roman numerals.",
    },
    {
      question: "What does V represent in Roman numerals?",
      answer: "V represents 5 in Roman numerals.",
    },
    {
      question: "What does X represent in Roman numerals?",
      answer: "X represents 10 in Roman numerals.",
    },
    {
      question: "How do you write 4 in Roman numerals?",
      answer: "4 is written as IV in Roman numerals.",
    },
  ],

  broad: [
    {
      question:
        "A factory produces 2,45,678 bottles in January and 1,87,432 bottles in February. How many bottles are produced in total?",
      answer:
        "Step 1: Total bottles = 2,45,678 + 1,87,432 = 4,33,110\nTherefore, 4,33,110 bottles are produced in total.",
    },
    {
      question:
        "A city has a population of 12,45,678. If 2,34,567 more people move to the city, what is the new population?",
      answer:
        "Step 1: New population = 12,45,678 + 2,34,567 = 14,80,245\nTherefore, the new population is 14,80,245.",
    },
    {
      question:
        "The Indian Railway has 5,43,210 passengers on Monday and 4,67,890 passengers on Tuesday. How many passengers travelled on these two days?",
      answer:
        "Step 1: Total passengers = 5,43,210 + 4,67,890 = 10,11,100\nTherefore, 10,11,100 passengers travelled on Monday and Tuesday.",
    },
    {
      question:
        "A school library has 1,25,345 books. They received 23,654 new books. How many books are now in the library?",
      answer:
        "Step 1: Total books = 1,25,345 + 23,654 = 1,48,999\nTherefore, the library has 1,48,999 books now.",
    },
    {
      question:
        "A company sold 7,45,678 items last year and 8,34,321 items this year. How many more items were sold this year?",
      answer:
        "Step 1: Difference = 8,34,321 - 7,45,678 = 88,643\nTherefore, 88,643 more items were sold this year.",
    },
  ],

  broadTest: [
    {
      question: "Factory produces 2,45,678 + 1,87,432 bottles. Total?",
      options: ["4,33,110", "4,32,110", "4,34,110", "4,33,210"],
      correct: 0,
    },
    {
      question: "City population: 12,45,678 + 2,34,567. New population?",
      options: ["14,80,245", "14,79,245", "14,81,245", "14,80,000"],
      correct: 0,
    },
    {
      question: "Railway passengers: 5,43,210 + 4,67,890. Total?",
      options: ["10,11,000", "10,11,100", "10,10,100", "10,12,100"],
      correct: 1,
    },
    {
      question: "Library books: 1,25,345 + 23,654. Total?",
      options: ["1,48,999", "1,49,000", "1,48,900", "1,48,955"],
      correct: 0,
    },
    {
      question: "Items sold difference: 8,34,321 - 7,45,678?",
      options: ["88,643", "88,644", "88,543", "88,745"],
      correct: 0,
    },
  ],

  test: [
    {
      question: "What is 1 lakh in digits?",
      options: ["10,000", "1,00,000", "10,00,000", "1,000"],
      correct: 1,
    },
    {
      question: "Which is larger: 45,678 or 45,687?",
      options: ["45,678", "45,687", "Both are equal", "Cannot determine"],
      correct: 1,
    },
    {
      question: "What is the place value of 7 in 3,75,642?",
      options: ["7", "70", "7,000", "70,000"],
      correct: 3,
    },
    {
      question: "Round 67,845 to the nearest thousand.",
      options: ["67,000", "68,000", "70,000", "67,800"],
      correct: 1,
    },
    {
      question: "What is the successor of 99,999?",
      options: ["99,998", "1,00,000", "1,00,001", "99,000"],
      correct: 1,
    },
    {
      question: "What does XV represent in Roman numerals?",
      options: ["10", "15", "5", "20"],
      correct: 1,
    },
    {
      question: "Arrange in ascending order: 5,432; 5,342; 5,423",
      options: [
        "5,432; 5,342; 5,423",
        "5,342; 5,423; 5,432",
        "5,423; 5,432; 5,342",
        "5,342; 5,432; 5,423",
      ],
      correct: 1,
    },
    {
      question: "What is 1 crore in the International system?",
      options: ["1 million", "10 million", "100 million", "1 billion"],
      correct: 1,
    },
    {
      question: "The predecessor of 50,000 is:",
      options: ["49,999", "50,001", "49,000", "51,000"],
      correct: 0,
    },
    {
      question: "How do you write 9 in Roman numerals?",
      options: ["VIIII", "IX", "XI", "IIX"],
      correct: 1,
    },
  ],
};

// Export for dynamic loading
window.class6Chapter1 = class6Chapter1;
