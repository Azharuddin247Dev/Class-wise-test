// Class 7 - Chapter 2: Fractions and Decimals
const class7Chapter2 = {
    reading: [
        {
            question: "What is a fraction?",
            answer: "A fraction represents a part of a whole and is written as numerator/denominator."
        },
        {
            question: "What is a proper fraction?",
            answer: "A proper fraction has numerator less than denominator. Example: 3/4."
        },
        {
            question: "What is an improper fraction?",
            answer: "An improper fraction has numerator greater than or equal to denominator. Example: 7/5."
        },
        {
            question: "What is a mixed fraction?",
            answer: "A mixed fraction is a combination of a whole number and a proper fraction. Example: 2 1/3."
        },
        {
            question: "Convert 7/4 into a mixed fraction.",
            answer: "7/4 = 1 3/4."
        },
        {
            question: "Convert 2 2/5 into an improper fraction.",
            answer: "2 2/5 = 12/5."
        },
        {
            question: "What are like fractions?",
            answer: "Fractions with the same denominator are called like fractions. Example: 2/7 and 5/7."
        },
        {
            question: "What are unlike fractions?",
            answer: "Fractions with different denominators are called unlike fractions. Example: 3/5 and 2/7."
        },
        {
            question: "How do you add like fractions?",
            answer: "Add the numerators and keep the denominator the same. Example: 2/7 + 3/7 = 5/7."
        },
        {
            question: "How do you subtract like fractions?",
            answer: "Subtract the numerators and keep the denominator the same. Example: 5/9 – 2/9 = 3/9."
        },
        {
            question: "How do you add unlike fractions?",
            answer: "Convert to like fractions first, then add. Example: 1/2 + 1/3 = 3/6 + 2/6 = 5/6."
        },
        {
            question: "How do you subtract unlike fractions?",
            answer: "Convert to like fractions first, then subtract. Example: 3/4 – 1/2 = 3/4 – 2/4 = 1/4."
        },
        {
            question: "What is a decimal?",
            answer: "A decimal is a fraction written in the form of tenths, hundredths, thousandths, etc. Example: 0.5 = 5/10."
        },
        {
            question: "How do you add decimals?",
            answer: "Align the decimal points and then add. Example: 2.3 + 1.45 = 3.75."
        },
        {
            question: "How do you subtract decimals?",
            answer: "Align the decimal points and then subtract. Example: 4.2 – 1.35 = 2.85."
        },
        {
            question: "How do you multiply decimals?",
            answer: "Multiply as integers, then place the decimal in the product. Example: 1.2 × 0.3 = 0.36."
        },
        {
            question: "How do you divide decimals?",
            answer: "Make the divisor a whole number by multiplying numerator and denominator by the same power of 10, then divide."
        },
        {
            question: "Convert 3/4 into a decimal.",
            answer: "3 ÷ 4 = 0.75."
        },
        {
            question: "Convert 0.6 into a fraction.",
            answer: "0.6 = 6/10 = 3/5."
        },
        {
            question: "Why are fractions and decimals important in daily life?",
            answer: "They are used in measurements, money calculations, recipes, and many other real-life situations."
        }
    ],

    broad: [
        {
            question: "Add: 2/3 + 1/4",
            answer: "Convert to like fractions: 2/3 = 8/12, 1/4 = 3/12; Sum = 8/12 + 3/12 = 11/12."
        },
        {
            question: "Subtract: 7/5 – 2/3",
            answer: "Convert to like fractions: 7/5 = 21/15, 2/3 = 10/15; Difference = 21/15 – 10/15 = 11/15."
        },
        {
            question: "Convert 9/4 into a mixed fraction.",
            answer: "9 ÷ 4 = 2 1/4."
        },
        {
            question: "Multiply decimals: 1.2 × 0.5",
            answer: "1.2 × 0.5 = 0.6."
        },
        {
            question: "Divide decimals: 0.8 ÷ 0.2",
            answer: "0.8 ÷ 0.2 = 4."
        }
    ],

    broadTest: [
        {
            question: "Add: 3/5 + 1/2",
            options: ["11/10", "4/10", "5/10", "7/10"],
            correct: 0
        },
        {
            question: "Subtract: 7/8 – 1/4",
            options: ["5/8", "6/8", "7/12", "3/8"],
            correct: 0
        },
        {
            question: "Convert 11/3 into a mixed fraction",
            options: ["3 2/3", "2 2/3", "3 1/3", "2 1/3"],
            correct: 0
        },
        {
            question: "Convert 0.45 into a fraction",
            options: ["9/20", "45/100", "Both correct", "1/2"],
            correct: 2
        },
        {
            question: "Multiply decimals: 0.4 × 0.3",
            options: ["0.12", "0.7", "0.1", "0.14"],
            correct: 0
        }
    ],

    test: [
        {
            question: "Which of these is a proper fraction?",
            options: ["7/5", "3/4", "9/8", "12/7"],
            correct: 1
        },
        {
            question: "Convert 9/4 into a mixed fraction.",
            options: ["2 1/4", "1 5/4", "3 1/4", "2 3/4"],
            correct: 0
        },
        {
            question: "Add: 2/7 + 3/7",
            options: ["5/7", "1/7", "7/7", "2/7"],
            correct: 0
        },
        {
            question: "Subtract: 5/9 – 2/9",
            options: ["3/9", "1/9", "7/9", "2/9"],
            correct: 0
        },
        {
            question: "Convert 0.75 into a fraction.",
            options: ["3/4", "1/4", "2/5", "5/6"],
            correct: 0
        },
        {
            question: "Add decimals: 2.3 + 1.45",
            options: ["3.75", "3.65", "4.75", "2.85"],
            correct: 0
        },
        {
            question: "Subtract decimals: 4.2 – 1.35",
            options: ["2.85", "3.85", "2.75", "3.75"],
            correct: 0
        },
        {
            question: "Multiply: 1.2 × 0.3",
            options: ["0.36", "0.39", "0.6", "0.3"],
            correct: 0
        },
        {
            question: "Divide: 0.6 ÷ 0.2",
            options: ["3", "0.3", "2", "1.2"],
            correct: 0
        },
        {
            question: "Convert 3/5 into a decimal.",
            options: ["0.6", "0.5", "0.3", "0.75"],
            correct: 0
        }
    ]
};

// Export for dynamic loading
window.class7Chapter2 = class7Chapter2;
