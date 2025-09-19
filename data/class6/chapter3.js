// Class 6 - Chapter 3: Playing with Numbers
const class6Chapter3 = {
    reading: [
        {
            question: "What is a factor of a number?",
            answer: "A factor of a number is a number that divides it exactly without leaving any remainder."
        },
        {
            question: "What is a multiple of a number?",
            answer: "A multiple of a number is the product of that number and another whole number. Example: multiples of 4 are 4, 8, 12, 16..."
        },
        {
            question: "What is a prime number?",
            answer: "A prime number is a number that has only two factors, 1 and itself. Example: 2, 3, 5, 7..."
        },
        {
            question: "What is a composite number?",
            answer: "A composite number is a number that has more than two factors. Example: 4, 6, 8, 9..."
        },
        {
            question: "What is the smallest prime number?",
            answer: "2 is the smallest prime number and it is the only even prime number."
        },
        {
            question: "What is the smallest composite number?",
            answer: "4 is the smallest composite number."
        },
        {
            question: "What is the smallest whole number that is neither prime nor composite?",
            answer: "0 and 1 are neither prime nor composite."
        },
        {
            question: "What are co-prime numbers?",
            answer: "Two numbers are co-prime if their HCF is 1. Example: 8 and 15."
        },
        {
            question: "What is HCF?",
            answer: "HCF (Highest Common Factor) is the greatest number that divides two or more numbers exactly."
        },
        {
            question: "What is LCM?",
            answer: "LCM (Lowest Common Multiple) is the smallest multiple that two or more numbers have in common."
        },
        {
            question: "What is the relation between HCF and LCM of two numbers?",
            answer: "For any two numbers a and b, HCF × LCM = a × b."
        },
        {
            question: "What are prime factors?",
            answer: "Prime factors are factors of a number that are prime. Example: 12 = 2 × 2 × 3."
        },
        {
            question: "What is prime factorization?",
            answer: "Expressing a number as the product of its prime factors is called prime factorization."
        },
        {
            question: "What is divisibility rule for 2?",
            answer: "A number is divisible by 2 if its last digit is even."
        },
        {
            question: "What is divisibility rule for 3?",
            answer: "A number is divisible by 3 if the sum of its digits is divisible by 3."
        },
        {
            question: "What is divisibility rule for 5?",
            answer: "A number is divisible by 5 if its last digit is 0 or 5."
        },
        {
            question: "What is divisibility rule for 9?",
            answer: "A number is divisible by 9 if the sum of its digits is divisible by 9."
        },
        {
            question: "What is divisibility rule for 10?",
            answer: "A number is divisible by 10 if its last digit is 0."
        },
        {
            question: "What is the prime factorization of 36?",
            answer: "36 = 2 × 2 × 3 × 3 = 2² × 3²."
        },
        {
            question: "What is the LCM of 12 and 18?",
            answer: "LCM of 12 and 18 = 36."
        }
    ],
    test: [
        {
            question: "Which is the smallest prime number?",
            options: ["1", "2", "3", "5"],
            correct: 1
        },
        {
            question: "Which is the smallest composite number?",
            options: ["1", "2", "3", "4"],
            correct: 3
        },
        {
            question: "Which of these numbers are co-prime?",
            options: ["4 and 6", "8 and 15", "12 and 18", "9 and 15"],
            correct: 1
        },
        {
            question: "What is the HCF of 12 and 18?",
            options: ["2", "3", "6", "9"],
            correct: 2
        },
        {
            question: "What is the LCM of 12 and 18?",
            options: ["24", "30", "36", "48"],
            correct: 2
        },
        {
            question: "Prime factorization of 36 is:",
            options: ["2 × 18", "2² × 3²", "2 × 3 × 6", "3 × 12"],
            correct: 1
        },
        {
            question: "Which of these is divisible by 3?",
            options: ["124", "125", "126", "128"],
            correct: 2
        },
        {
            question: "Which of these is divisible by 5?",
            options: ["21", "35", "46", "92"],
            correct: 1
        },
        {
            question: "Which of these is divisible by 10?",
            options: ["55", "60", "75", "83"],
            correct: 1
        },
        {
            question: "If HCF = 6 and numbers are 12 and 18, what is LCM?",
            options: ["18", "24", "30", "36"],
            correct: 3
        }
    ]
};

// Export for dynamic loading
window.class6Chapter3 = class6Chapter3;
