// Class 6 - Chapter 7: Fractions
const class6Chapter7 = {
    reading: [
        {
            question: "What is a fraction?",
            answer: "A fraction represents a part of a whole. It is written as numerator/denominator."
        },
        {
            question: "What is the numerator in a fraction?",
            answer: "The numerator is the top number in a fraction, showing how many parts are taken."
        },
        {
            question: "What is the denominator in a fraction?",
            answer: "The denominator is the bottom number in a fraction, showing the total number of equal parts."
        },
        {
            question: "Give an example of a proper fraction.",
            answer: "Example: 3/5, where numerator < denominator."
        },
        {
            question: "Give an example of an improper fraction.",
            answer: "Example: 7/4, where numerator > denominator."
        },
        {
            question: "What is a mixed fraction?",
            answer: "A mixed fraction is a combination of a whole number and a proper fraction. Example: 2 1/3."
        },
        {
            question: "Convert 9/4 into a mixed fraction.",
            answer: "9/4 = 2 1/4."
        },
        {
            question: "Convert 3 2/5 into an improper fraction.",
            answer: "3 2/5 = 17/5."
        },
        {
            question: "What are like fractions?",
            answer: "Fractions with the same denominator. Example: 2/7 and 5/7."
        },
        {
            question: "What are unlike fractions?",
            answer: "Fractions with different denominators. Example: 2/3 and 4/5."
        },
        {
            question: "What are equivalent fractions?",
            answer: "Fractions that represent the same value. Example: 1/2 = 2/4."
        },
        {
            question: "Simplify 8/12.",
            answer: "8/12 = 2/3."
        },
        {
            question: "Write an equivalent fraction of 5/6.",
            answer: "10/12 is an equivalent fraction of 5/6."
        },
        {
            question: "How do you add like fractions?",
            answer: "Add the numerators and keep the denominator same. Example: 3/8 + 4/8 = 7/8."
        },
        {
            question: "How do you subtract like fractions?",
            answer: "Subtract the numerators and keep the denominator same. Example: 7/9 - 5/9 = 2/9."
        },
        {
            question: "How do you add unlike fractions?",
            answer: "Find the LCM of denominators, convert to like fractions, then add."
        },
        {
            question: "Find the sum of 2/3 and 3/5.",
            answer: "LCM = 15, so 10/15 + 9/15 = 19/15 = 1 4/15."
        },
        {
            question: "Find the difference between 7/12 and 5/18.",
            answer: "LCM = 36, so 21/36 - 10/36 = 11/36."
        },
        {
            question: "What is 3/4 of 20?",
            answer: "3/4 of 20 = 15."
        },
        {
            question: "What is the value of 2/5 × 10?",
            answer: "2/5 × 10 = 4."
        }
    ],
    test: [
        {
            question: "In the fraction 7/9, the denominator is:",
            options: ["7", "9", "16", "1"],
            correct: 1
        },
        {
            question: "Which of the following is a proper fraction?",
            options: ["9/4", "5/5", "3/8", "7/3"],
            correct: 2
        },
        {
            question: "Which of the following is an improper fraction?",
            options: ["4/7", "7/7", "8/3", "3/5"],
            correct: 2
        },
        {
            question: "Convert 11/3 into a mixed fraction.",
            options: ["3 2/3", "2 2/3", "3 1/3", "2 1/3"],
            correct: 0
        },
        {
            question: "Which fraction is equivalent to 2/3?",
            options: ["4/5", "6/9", "3/4", "5/8"],
            correct: 1
        },
        {
            question: "Simplify 15/25.",
            options: ["3/4", "5/7", "3/5", "2/3"],
            correct: 2
        },
        {
            question: "What is 5/12 + 7/12?",
            options: ["11/12", "1", "12/12", "1 1/12"],
            correct: 3
        },
        {
            question: "What is 9/10 - 2/5?",
            options: ["1/10", "3/10", "5/10", "7/10"],
            correct: 3
        },
        {
            question: "What is 2/7 of 21?",
            options: ["6", "7", "8", "9"],
            correct: 0
        },
        {
            question: "What is 3/4 + 2/3?",
            options: ["17/12", "19/12", "21/12", "23/12"],
            correct: 1
        }
    ]
};

// Export for dynamic loading
window.class6Chapter7 = class6Chapter7;
