// Class 6 - Chapter 1: Knowing Our Numbers
const class6Chapter1 = {
    reading: [
        {
            question: "What are large numbers?",
            answer: "Large numbers are numbers with many digits, like thousands, lakhs, and crores."
        },
        {
            question: "What is the Indian number system?",
            answer: "The Indian system uses ones, tens, hundreds, thousands, ten thousands, lakhs, ten lakhs, crores, etc."
        },
        {
            question: "What is the International number system?",
            answer: "The International system uses ones, tens, hundreds, thousands, ten thousands, hundred thousands, millions, etc."
        },
        {
            question: "How do you read 1,25,000 in Indian system?",
            answer: "One lakh twenty-five thousand."
        },
        {
            question: "How do you read 125,000 in International system?",
            answer: "One hundred twenty-five thousand."
        },
        {
            question: "What is a lakh?",
            answer: "A lakh is 1,00,000 (one hundred thousand)."
        },
        {
            question: "What is a crore?",
            answer: "A crore is 1,00,00,000 (ten million)."
        },
        {
            question: "What is place value in large numbers?",
            answer: "Place value tells us the value of each digit based on its position in the number."
        },
        {
            question: "How do you compare large numbers?",
            answer: "Compare digits from left to right, starting with the highest place value."
        },
        {
            question: "What is ascending order?",
            answer: "Ascending order means arranging numbers from smallest to largest."
        },
        {
            question: "What is descending order?",
            answer: "Descending order means arranging numbers from largest to smallest."
        },
        {
            question: "What is the successor of a number?",
            answer: "The successor is the number that comes immediately after a given number."
        },
        {
            question: "What is the predecessor of a number?",
            answer: "The predecessor is the number that comes immediately before a given number."
        },
        {
            question: "How do you round large numbers?",
            answer: "Look at the digit to the right of the place you're rounding to. If it's 5 or more, round up."
        },
        {
            question: "What is estimation with large numbers?",
            answer: "Estimation is finding approximate values by rounding to make calculations easier."
        },
        {
            question: "What are Roman numerals?",
            answer: "Roman numerals are an ancient number system using letters like I, V, X, L, C, D, M."
        },
        {
            question: "What does I represent in Roman numerals?",
            answer: "I represents 1 in Roman numerals."
        },
        {
            question: "What does V represent in Roman numerals?",
            answer: "V represents 5 in Roman numerals."
        },
        {
            question: "What does X represent in Roman numerals?",
            answer: "X represents 10 in Roman numerals."
        },
        {
            question: "How do you write 4 in Roman numerals?",
            answer: "4 is written as IV in Roman numerals."
        }
    ],
    test: [
        {
            question: "What is 1 lakh in digits?",
            options: ["10,000", "1,00,000", "10,00,000", "1,000"],
            correct: 1
        },
        {
            question: "Which is larger: 45,678 or 45,687?",
            options: ["45,678", "45,687", "Both are equal", "Cannot determine"],
            correct: 1
        },
        {
            question: "What is the place value of 7 in 3,75,642?",
            options: ["7", "70", "7,000", "70,000"],
            correct: 3
        },
        {
            question: "Round 67,845 to the nearest thousand.",
            options: ["67,000", "68,000", "70,000", "67,800"],
            correct: 1
        },
        {
            question: "What is the successor of 99,999?",
            options: ["99,998", "1,00,000", "1,00,001", "99,000"],
            correct: 1
        },
        {
            question: "What does XV represent in Roman numerals?",
            options: ["10", "15", "5", "20"],
            correct: 1
        },
        {
            question: "Arrange in ascending order: 5,432; 5,342; 5,423",
            options: ["5,432; 5,342; 5,423", "5,342; 5,423; 5,432", "5,423; 5,432; 5,342", "5,342; 5,432; 5,423"],
            correct: 1
        },
        {
            question: "What is 1 crore in the International system?",
            options: ["1 million", "10 million", "100 million", "1 billion"],
            correct: 1
        },
        {
            question: "The predecessor of 50,000 is:",
            options: ["49,999", "50,001", "49,000", "51,000"],
            correct: 0
        },
        {
            question: "How do you write 9 in Roman numerals?",
            options: ["VIIII", "IX", "XI", "IIX"],
            correct: 1
        }
    ]
};

// Export for dynamic loading
window.class6Chapter1 = class6Chapter1;