// Class 5 - Chapter 1: Numbers
const class5Chapter1 = {
    reading: [
        {
            question: "What is a natural number?",
            answer: "Natural numbers are counting numbers starting from 1, 2, 3, 4, and so on. They are used for counting objects."
        },
        {
            question: "What is the smallest natural number?",
            answer: "The smallest natural number is 1. Natural numbers do not include zero."
        },
        {
            question: "What are whole numbers?",
            answer: "Whole numbers include all natural numbers and zero: 0, 1, 2, 3, 4, and so on."
        },
        {
            question: "What is the difference between natural and whole numbers?",
            answer: "Whole numbers include zero (0), while natural numbers start from 1. Zero is the only difference."
        },
        {
            question: "What is place value?",
            answer: "Place value is the value of a digit based on its position in a number. Each position has a different value."
        },
        {
            question: "What is the place value of 5 in 2547?",
            answer: "The place value of 5 in 2547 is 500 because 5 is in the hundreds place."
        },
        {
            question: "What is expanded form of a number?",
            answer: "Expanded form shows a number as the sum of its place values. It breaks down the number into parts."
        },
        {
            question: "Write 2547 in expanded form.",
            answer: "2547 = 2000 + 500 + 40 + 7. Each digit is multiplied by its place value."
        },
        {
            question: "What is standard form of a number?",
            answer: "Standard form is the usual way of writing numbers using digits, like 2547."
        },
        {
            question: "What is word form of a number?",
            answer: "Word form is writing numbers using words instead of digits, like 'two thousand five hundred forty-seven'."
        },
        {
            question: "Write 2547 in word form.",
            answer: "Two thousand five hundred forty-seven."
        },
        {
            question: "What is rounding of numbers?",
            answer: "Rounding is approximating a number to the nearest ten, hundred, thousand, etc., to make calculations easier."
        },
        {
            question: "Round 2547 to the nearest hundred.",
            answer: "2547 rounded to the nearest hundred is 2500 because 47 is less than 50."
        },
        {
            question: "What is estimation?",
            answer: "Estimation is finding an approximate value close to the actual answer to check if our calculation is reasonable."
        },
        {
            question: "What are even numbers?",
            answer: "Even numbers are numbers divisible by 2: 2, 4, 6, 8, 10, 12, and so on."
        },
        {
            question: "What are odd numbers?",
            answer: "Odd numbers are numbers not divisible by 2: 1, 3, 5, 7, 9, 11, and so on."
        },
        {
            question: "What happens when you add two even numbers?",
            answer: "The sum of two even numbers is always even. For example: 4 + 6 = 10."
        },
        {
            question: "What happens when you add two odd numbers?",
            answer: "The sum of two odd numbers is always even. For example: 3 + 5 = 8."
        },
        {
            question: "What happens when you multiply two odd numbers?",
            answer: "The product of two odd numbers is always odd. For example: 3 × 5 = 15."
        },
        {
            question: "What is the largest 4-digit number?",
            answer: "The largest 4-digit number is 9999. It has 9 in all four places."
        }
    ],
    test: [
        {
            question: "What is the smallest natural number?",
            options: ["0", "1", "2", "-1"],
            correct: 1
        },
        {
            question: "Which of these is a whole number?",
            options: ["0", "-1", "1/2", "0.5"],
            correct: 0
        },
        {
            question: "What is the place value of 7 in 3756?",
            options: ["7", "70", "700", "50"],
            correct: 2
        },
        {
            question: "Round 4567 to the nearest hundred.",
            options: ["4500", "4600", "4560", "4570"],
            correct: 1
        },
        {
            question: "Which number is even?",
            options: ["13", "17", "24", "31"],
            correct: 2
        },
        {
            question: "What is 3000 + 400 + 50 + 6 in standard form?",
            options: ["3456", "3465", "3546", "3564"],
            correct: 0
        },
        {
            question: "The sum of two odd numbers is always:",
            options: ["Odd", "Even", "Zero", "Negative"],
            correct: 1
        },
        {
            question: "What is the largest 3-digit number?",
            options: ["999", "1000", "998", "100"],
            correct: 0
        },
        {
            question: "Which is the correct word form of 5432?",
            options: ["Five thousand four hundred thirty-two", "Five thousand four hundred twenty-three", "Fifty-four thirty-two", "Five four three two"],
            correct: 0
        },
        {
            question: "The product of two even numbers is always:",
            options: ["Odd", "Even", "Zero", "One"],
            correct: 1
        }
    ]
};

// Export for dynamic loading
window.class5Chapter1 = class5Chapter1;
