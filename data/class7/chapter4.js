// Class 7 - Chapter 4: Simple Equations
const class7Chapter4 = {
    reading: [
        {
            question: "What is a simple equation?",
            answer: "A simple equation is an equation where the variable appears only once and can be solved using basic arithmetic operations. Example: x + 5 = 12."
        },
        {
            question: "What is the solution of an equation?",
            answer: "The solution is the value of the variable that makes the equation true."
        },
        {
            question: "What is the transposition method?",
            answer: "Transposition means moving a term from one side of the equation to the other by changing its sign. Example: x + 5 = 12 → x = 12 - 5."
        },
        {
            question: "How do you solve x + 7 = 15?",
            answer: "Subtract 7 from both sides: x = 15 - 7 → x = 8."
        },
        {
            question: "How do you solve 3x = 12?",
            answer: "Divide both sides by 3: x = 12 ÷ 3 → x = 4."
        },
        {
            question: "How do you solve x/4 = 6?",
            answer: "Multiply both sides by 4: x = 6 × 4 → x = 24."
        },
        {
            question: "How do you solve 2x + 5 = 13?",
            answer: "Subtract 5 from both sides: 2x = 8, then divide by 2: x = 4."
        },
        {
            question: "What is the importance of verifying the solution?",
            answer: "Substitute the value of the variable into the original equation to check if both sides are equal."
        },
        {
            question: "Solve x - 9 = 6.",
            answer: "Add 9 to both sides: x = 6 + 9 → x = 15."
        },
        {
            question: "Solve 5x = 35.",
            answer: "Divide both sides by 5: x = 35 ÷ 5 → x = 7."
        },
        {
            question: "Solve 3x - 4 = 11.",
            answer: "Add 4: 3x = 15, divide by 3: x = 5."
        },
        {
            question: "Solve x/5 + 2 = 6.",
            answer: "Subtract 2: x/5 = 4, multiply by 5: x = 20."
        },
        {
            question: "Solve 7 + x = 10.",
            answer: "Subtract 7: x = 10 - 7 → x = 3."
        },
        {
            question: "Solve 4x - 3 = 9.",
            answer: "Add 3: 4x = 12, divide by 4: x = 3."
        },
        {
            question: "Solve 2(x + 3) = 14.",
            answer: "Divide by 2: x + 3 = 7, subtract 3: x = 4."
        },
        {
            question: "Solve 3(x - 2) = 9.",
            answer: "Divide by 3: x - 2 = 3, add 2: x = 5."
        },
        {
            question: "Why is solving simple equations important?",
            answer: "It helps develop logical thinking and is useful in daily life problems like money, age, and measurements."
        },
        {
            question: "How do you handle equations with variables on both sides?",
            answer: "Bring variable terms to one side and constants to the other, then solve normally."
        },
        {
            question: "Solve 2x + 3 = x + 7.",
            answer: "Subtract x: x + 3 = 7, subtract 3: x = 4."
        },
        {
            question: "Solve 5 + 3x = 2x + 12.",
            answer: "Subtract 2x: 5 + x = 12, subtract 5: x = 7."
        }
    ],
    test: [
        {
            question: "Solve: x + 5 = 12",
            options: ["5", "7", "12", "17"],
            correct: 1
        },
        {
            question: "Solve: 3x = 15",
            options: ["3", "5", "15", "45"],
            correct: 1
        },
        {
            question: "Solve: x/4 = 6",
            options: ["1.5", "24", "10", "6"],
            correct: 1
        },
        {
            question: "Solve: 2x + 3 = 11",
            options: ["3", "4", "5", "6"],
            correct: 2
        },
        {
            question: "Solve: 5 + x = 9",
            options: ["4", "5", "6", "3"],
            correct: 0
        },
        {
            question: "Solve: 4x - 7 = 9",
            options: ["2", "4", "3", "5"],
            correct: 1
        },
        {
            question: "Solve: 2(x + 3) = 14",
            options: ["3", "4", "5", "6"],
            correct: 1
        },
        {
            question: "Solve: 3(x - 2) = 9",
            options: ["2", "3", "4", "5"],
            correct: 3
        },
        {
            question: "Solve: 2x + 3 = x + 7",
            options: ["2", "3", "4", "5"],
            correct: 2
        },
        {
            question: "Solve: 5 + 3x = 2x + 12",
            options: ["5", "6", "7", "8"],
            correct: 2
        }
    ]
};

// Export for dynamic loading
window.class7Chapter4 = class7Chapter4;

