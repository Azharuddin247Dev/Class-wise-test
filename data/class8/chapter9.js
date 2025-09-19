// Class 8 - Chapter 9: Algebraic Expressions
const class8Chapter9 = {
    reading: [
        {
            question: "What is an algebraic expression?",
            answer: "An algebraic expression is a combination of numbers, variables, and arithmetic operations. Example: 3x + 5."
        },
        {
            question: "What is a term in an algebraic expression?",
            answer: "A term is a single part of an expression separated by '+' or '-' signs. Example: 3x and 5 are terms in 3x + 5."
        },
        {
            question: "What is a coefficient?",
            answer: "A coefficient is the numerical factor of a term. In 3x, 3 is the coefficient."
        },
        {
            question: "What is a constant?",
            answer: "A constant is a term without any variable. Example: 5 in 3x + 5."
        },
        {
            question: "What is a variable?",
            answer: "A variable is a symbol that represents an unknown value. Example: x, y, z."
        },
        {
            question: "Types of algebraic expressions?",
            answer: "Monomial, binomial, trinomial, and polynomial."
        },
        {
            question: "What is a monomial?",
            answer: "A monomial is an expression with only one term. Example: 5x²."
        },
        {
            question: "What is a binomial?",
            answer: "A binomial has two terms. Example: 3x + 7."
        },
        {
            question: "What is a trinomial?",
            answer: "A trinomial has three terms. Example: x² + 3x + 2."
        },
        {
            question: "What is a polynomial?",
            answer: "A polynomial is an expression with one or more terms, where the powers of variables are non-negative integers."
        },
        {
            question: "Degree of a term?",
            answer: "The sum of powers of variables in a term. Example: Degree of 3x²y³ is 2 + 3 = 5."
        },
        {
            question: "Degree of a polynomial?",
            answer: "The highest degree among its terms. Example: Degree of x² + 3xy + y² is 2."
        },
        {
            question: "Like terms?",
            answer: "Terms with the same variable(s) raised to the same power. Example: 3x² and 5x²."
        },
        {
            question: "Unlike terms?",
            answer: "Terms that are not like terms. Example: 3x and 2y."
        },
        {
            question: "How to add algebraic expressions?",
            answer: "Combine like terms. Example: 3x + 5x = 8x."
        },
        {
            question: "How to subtract algebraic expressions?",
            answer: "Change signs of terms of second expression and then add like terms. Example: (5x + 3) – (2x + 1) = 3x + 2."
        },
        {
            question: "Multiplication of monomials?",
            answer: "Multiply coefficients and add powers of variables. Example: 3x² × 2x³ = 6x⁵."
        },
        {
            question: "Multiplication of binomial by monomial?",
            answer: "Multiply the monomial with each term of the binomial. Example: x(3x + 5) = 3x² + 5x."
        },
        {
            question: "Real-life use of algebraic expressions?",
            answer: "To represent quantities in formulas, business, and problem-solving situations."
        },
        {
            question: "Simplify 2x + 3x – 5 + 4?",
            answer: "2x + 3x – 5 + 4 = 5x – 1."
        }
    ],
    test: [
        {
            question: "Coefficient of x in 7x + 5?",
            options: ["7", "5", "12", "1"],
            correct: 0
        },
        {
            question: "Which is a monomial?",
            options: ["3x + 5", "5x²", "x² + 2x + 1", "2x + 3y"],
            correct: 1
        },
        {
            question: "Which is a binomial?",
            options: ["x²", "3x + 5", "x² + 2x + 1", "7"],
            correct: 1
        },
        {
            question: "Degree of 4x³y²?",
            options: ["2", "3", "5", "6"],
            correct: 2
        },
        {
            question: "Like terms?",
            options: ["3x and 5x", "3x and 3y", "x² and x³", "2 and 3"],
            correct: 0
        },
        {
            question: "Simplify 5x + 2x – 3?",
            options: ["7x – 3", "5x – 2x – 3", "10x", "3x – 3"],
            correct: 0
        },
        {
            question: "Multiplication: 2x × 3x²?",
            options: ["6x²", "6x³", "5x²", "6x⁴"],
            correct: 1
        },
        {
            question: "Simplify: x(3x + 4)?",
            options: ["3x² + 4", "3x² + 4x", "3x + 4x", "3x + 4"],
            correct: 1
        },
        {
            question: "Which is a polynomial?",
            options: ["5x² + 3x + 1", "3x", "7", "All of these"],
            correct: 3
        },
        {
            question: "Constant term in 5x + 7?",
            options: ["5", "7", "12", "0"],
            correct: 1
        }
    ]
};

// Export for dynamic loading
window.class8Chapter9 = class8Chapter9;
