// Class 5 - Chapter 2: Addition and Subtraction   
const class5Chapter2 = {
  reading: [
    {
      question: "What is addition?",
      answer:
        "Addition is combining two or more numbers to find their total or sum.",
    },
    {
      question: "What is the symbol for addition?",
      answer: "The symbol for addition is '+' (plus sign).",
    },
    {
      question: "What are addends?",
      answer:
        "Addends are the numbers being added together in an addition problem.",
    },
    {
      question: "What is the sum?",
      answer:
        "The sum is the result or answer when two or more numbers are added together.",
    },
    {
      question: "What is subtraction?",
      answer:
        "Subtraction is taking away one number from another to find the difference.",
    },
    {
      question: "What is the symbol for subtraction?",
      answer: "The symbol for subtraction is '-' (minus sign).",
    },
    {
      question: "What is the minuend?",
      answer:
        "The minuend is the number from which another number is subtracted.",
    },
    {
      question: "What is the subtrahend?",
      answer:
        "The subtrahend is the number that is subtracted from the minuend.",
    },
    {
      question: "What is the difference?",
      answer:
        "The difference is the result when one number is subtracted from another.",
    },
    {
      question: "What is regrouping in addition?",
      answer:
        "Regrouping (or carrying) is when the sum of digits in a column is 10 or more, so we carry over to the next column.",
    },
    {
      question: "What is regrouping in subtraction?",
      answer:
        "Regrouping (or borrowing) is when we need to borrow from the next higher place value to subtract.",
    },
    {
      question: "What is the commutative property of addition?",
      answer:
        "The commutative property states that changing the order of addends doesn't change the sum. Example: 3 + 5 = 5 + 3.",
    },
    {
      question: "What is the associative property of addition?",
      answer:
        "The associative property states that grouping of addends doesn't change the sum. Example: (2 + 3) + 4 = 2 + (3 + 4).",
    },
    {
      question: "What is the identity property of addition?",
      answer:
        "The identity property states that adding zero to any number gives the same number. Example: 7 + 0 = 7.",
    },
    {
      question: "How do you check addition?",
      answer:
        "You can check addition by adding the numbers in different order or by using subtraction.",
    },
    {
      question: "How do you check subtraction?",
      answer:
        "You can check subtraction by adding the difference to the subtrahend to get the minuend.",
    },
    {
      question: "What is mental math?",
      answer:
        "Mental math is doing calculations in your head without writing them down.",
    },
    {
      question: "What is estimation in addition?",
      answer:
        "Estimation in addition is rounding numbers to make addition easier and get an approximate answer.",
    },
    {
      question: "What is estimation in subtraction?",
      answer:
        "Estimation in subtraction is rounding numbers to make subtraction easier and get an approximate answer.",
    },
    {
      question: "When do we use addition in real life?",
      answer:
        "We use addition when counting money, finding total items, calculating time, and many other daily activities.",
    },
  ],

  broad: [
    {
      question:
        "Ravi has 356 marbles and his friend gives him 478 more. How many marbles does Ravi have now?",
      answer:
        "Step 1: Total marbles = 356 + 478 = 834\nTherefore, Ravi has 834 marbles in total.",
    },
    {
      question:
        "A shopkeeper had 1,250 pencils. He sold 786 pencils. How many pencils are left with him?",
      answer:
        "Step 1: Remaining pencils = 1,250 - 786 = 464\nTherefore, 464 pencils are left.",
    },
    {
      question:
        "A library has 2,345 books. The school bought 678 more books. How many books are there in the library now?",
      answer:
        "Step 1: Total books = 2,345 + 678 = 3,023\nTherefore, there are 3,023 books in the library.",
    },
    {
      question:
        "In a school election, 1,235 students voted for Rina and 1,678 students voted for Mina. Who got more votes and by how many?",
      answer:
        "Step 1: Difference = 1,678 - 1,235 = 443\nTherefore, Mina got 443 more votes than Rina.",
    },
    {
      question:
        "A fruit seller had 954 apples. He sold 328 apples in the morning and 417 in the evening. How many apples are left?",
      answer:
        "Step 1: Apples sold = 328 + 417 = 745\nStep 2: Apples left = 954 - 745 = 209\nTherefore, 209 apples are left.",
    },
  ],

  broadTest: [
    {
      question:
        "Ravi has 356 marbles and his friend gives him 478 more. Total marbles?",
      options: ["834", "824", "844", "854"],
      correct: 0,
    },
    {
      question:
        "A shopkeeper had 1,250 pencils. He sold 786 pencils. How many are left?",
      options: ["454", "464", "474", "444"],
      correct: 1,
    },
    {
      question:
        "A library had 2,345 books. School bought 678 more. Total books?",
      options: ["3,013", "3,025", "3,023", "3,033"],
      correct: 2,
    },
    {
      question:
        "In a school election: Rina = 1,235 votes, Mina = 1,678 votes. Who got more and by how many?",
      options: ["Mina by 443", "Rina by 443", "Mina by 445", "Rina by 445"],
      correct: 0,
    },
    {
      question: "Fruit seller had 954 apples. Sold 328 + 417. Apples left?",
      options: ["199", "209", "219", "229"],
      correct: 1,
    },
  ],

  test: [
    {
      question: "What is 456 + 234?",
      options: ["680", "690", "670", "700"],
      correct: 1,
    },
    {
      question: "What is 800 - 345?",
      options: ["455", "465", "445", "475"],
      correct: 0,
    },
    {
      question: "Which property shows that 5 + 3 = 3 + 5?",
      options: ["Associative", "Commutative", "Identity", "Distributive"],
      correct: 1,
    },
    {
      question: "What is the sum of 127 + 0?",
      options: ["0", "127", "128", "126"],
      correct: 1,
    },
    {
      question: "In 789 - 456 = 333, what is the minuend?",
      options: ["456", "333", "789", "123"],
      correct: 2,
    },
    {
      question: "Estimate 398 + 203 to the nearest hundred.",
      options: ["500", "600", "700", "400"],
      correct: 1,
    },
    {
      question: "What is 1000 - 567?",
      options: ["433", "443", "533", "543"],
      correct: 0,
    },
    {
      question: "Which shows regrouping in addition?",
      options: ["25 + 30", "47 + 28", "100 + 200", "50 + 40"],
      correct: 1,
    },
    {
      question: "What is the identity element for addition?",
      options: ["1", "0", "10", "-1"],
      correct: 1,
    },
    {
      question: "How do you check if 654 - 298 = 356 is correct?",
      options: [
        "Add 654 + 298",
        "Add 356 + 298",
        "Subtract 654 - 356",
        "Multiply 356 × 298",
      ],
      correct: 1,
    },
  ],
};

// Export for dynamic loading
window.class5Chapter2 = class5Chapter2;
