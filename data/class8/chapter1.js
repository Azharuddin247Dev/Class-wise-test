// Class 8 - Chapter 1: Rational Numbers
const class8Chapter1 = {
    reading: [
        {
            question: "What is a rational number?",
            answer: "A rational number is a number that can be expressed as p/q, where p and q are integers and q ≠ 0."
        },
        {
            question: "Examples of rational numbers?",
            answer: "1/2, -3/4, 5, 0, 7/1 are all rational numbers."
        },
        {
            question: "Is every integer a rational number?",
            answer: "Yes, because every integer can be written as a fraction with denominator 1."
        },
        {
            question: "Is 0 a rational number?",
            answer: "Yes, 0 = 0/1, so it is rational."
        },
        {
            question: "What is the reciprocal of a rational number?",
            answer: "The reciprocal of p/q is q/p, provided p ≠ 0."
        },
        {
            question: "How do you add rational numbers?",
            answer: "To add, make denominators the same and add numerators."
        },
        {
            question: "How do you subtract rational numbers?",
            answer: "To subtract, make denominators the same and subtract numerators."
        },
        {
            question: "How do you multiply rational numbers?",
            answer: "Multiply the numerators together and the denominators together."
        },
        {
            question: "How do you divide rational numbers?",
            answer: "Multiply the first rational number by the reciprocal of the second."
        },
        {
            question: "Are rational numbers closed under addition?",
            answer: "Yes, the sum of two rational numbers is always rational."
        },
        {
            question: "Are rational numbers closed under subtraction?",
            answer: "Yes, the difference of two rational numbers is rational."
        },
        {
            question: "Are rational numbers closed under multiplication?",
            answer: "Yes, the product of two rational numbers is rational."
        },
        {
            question: "Are rational numbers closed under division?",
            answer: "Yes, the quotient of two rational numbers is rational, provided the divisor is not zero."
        },
        {
            question: "How to convert a decimal to a rational number?",
            answer: "Express the decimal as a fraction and simplify. Example: 0.75 = 75/100 = 3/4."
        },
        {
            question: "How to convert a fraction to decimal?",
            answer: "Divide the numerator by the denominator."
        },
        {
            question: "Compare 3/4 and 5/6.",
            answer: "Find a common denominator: 3/4 = 9/12, 5/6 = 10/12. So 3/4 < 5/6."
        },
        {
            question: "Simplify -8/12.",
            answer: "-8/12 = -2/3."
        },
        {
            question: "Express 1.2 as a rational number.",
            answer: "1.2 = 12/10 = 6/5."
        },
        {
            question: "Real-life example of rational numbers?",
            answer: "Ingredients in a recipe, like 3/4 cup sugar or 1/2 liter milk."
        },
        {
            question: "Why are rational numbers important?",
            answer: "They help in precise calculations, fractions, measurements, and financial calculations."
        }
    ],
    test: [
        {
            question: "Which is a rational number?",
            options: ["√2", "π", "7/3", "All are irrational"],
            correct: 2
        },
        {
            question: "Reciprocal of 5/8?",
            options: ["8/5", "5/8", "-8/5", "1/5"],
            correct: 0
        },
        {
            question: "Simplify -15/20.",
            options: ["3/4", "-3/4", "-5/4", "5/4"],
            correct: 1
        },
        {
            question: "0 is a rational number?",
            options: ["Yes", "No", "Sometimes", "Cannot say"],
            correct: 0
        },
        {
            question: "Add 2/3 + 3/4.",
            options: ["5/7", "7/12", "1/2","17/12"],
            correct: 3
        },
        {
            question: "Multiply 2/5 × 3/7.",
            options: ["6/35", "5/21", "3/12", "6/12"],
            correct: 0
        },
        {
            question: "Divide 3/4 ÷ 2/5.",
            options: ["5/8", "6/9", "15/8", "8/15"],
            correct: 2
        },
        {
            question: "Convert 0.6 to rational number.",
            options: ["3/5", "6/10", "1/6", "2/3"],
            correct: 0
        },
        {
            question: "Compare 7/8 and 5/6. Which is greater?",
            options: ["5/6", "Equal", "Cannot say","7/8"],
            correct: 3
        },
        {
            question: "Are rational numbers closed under subtraction?",
            options: ["Yes", "No", "Sometimes", "Cannot say"],
            correct: 0
        }
    ]
};

// Export for dynamic loading
window.class8Chapter1 = class8Chapter1;

