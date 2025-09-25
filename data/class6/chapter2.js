// Class 6 - Chapter 2: Whole Numbers
const class6Chapter2 = {
    reading: [
        {
            question: "What are whole numbers?",
            answer: "Whole numbers are all natural numbers including 0. Example: 0, 1, 2, 3, 4..."
        },
        {
            question: "What is the smallest whole number?",
            answer: "0 is the smallest whole number."
        },
        {
            question: "Are whole numbers infinite?",
            answer: "Yes, whole numbers go on without end."
        },
        {
            question: "Is every natural number a whole number?",
            answer: "Yes, every natural number is a whole number."
        },
        {
            question: "Is every whole number a natural number?",
            answer: "No, 0 is a whole number but not a natural number."
        },
        {
            question: "What happens when you add two whole numbers?",
            answer: "The result is always a whole number. Whole numbers are closed under addition."
        },
        {
            question: "What happens when you subtract a smaller whole number from a bigger one?",
            answer: "The result is a whole number. But subtraction is not always closed for whole numbers."
        },
        {
            question: "What happens when you multiply two whole numbers?",
            answer: "The result is always a whole number. Whole numbers are closed under multiplication."
        },
        {
            question: "Are whole numbers closed under division?",
            answer: "No, dividing whole numbers does not always give a whole number."
        },
        {
            question: "What is the identity element for addition in whole numbers?",
            answer: "0 is the identity for addition because a + 0 = a."
        },
        {
            question: "What is the identity element for multiplication in whole numbers?",
            answer: "1 is the identity for multiplication because a × 1 = a."
        },
        {
            question: "Is addition of whole numbers commutative?",
            answer: "Yes, a + b = b + a for whole numbers."
        },
        {
            question: "Is multiplication of whole numbers commutative?",
            answer: "Yes, a × b = b × a for whole numbers."
        },
        {
            question: "Is subtraction of whole numbers commutative?",
            answer: "No, subtraction is not commutative."
        },
        {
            question: "Is division of whole numbers commutative?",
            answer: "No, division is not commutative."
        },
        {
            question: "What is distributive property of multiplication over addition?",
            answer: "a × (b + c) = a × b + a × c."
        },
        {
            question: "Give an example of closure property of addition.",
            answer: "2 + 3 = 5, which is a whole number."
        },
        {
            question: "Give an example of closure property of multiplication.",
            answer: "4 × 5 = 20, which is a whole number."
        },
        {
            question: "Give an example to show subtraction is not closed for whole numbers.",
            answer: "2 – 5 = –3, which is not a whole number."
        },
        {
            question: "Give an example to show division is not closed for whole numbers.",
            answer: "7 ÷ 2 = 3.5, which is not a whole number."
        }
    ],

    broad: [
        {
            question: "Rina has 345 whole number cards, and Ravi has 578 cards. How many cards do they have together?",
            answer: "Step 1: Total cards = 345 + 578 = 923\nTherefore, Rina and Ravi together have 923 cards."
        },
        {
            question: "A shop has 1,245 pencils. They sold 678 pencils. How many are left?",
            answer: "Step 1: Remaining pencils = 1,245 - 678 = 567\nTherefore, 567 pencils are left."
        },
        {
            question: "Multiply 123 whole number stickers by 4. What is the total?",
            answer: "Step 1: Total stickers = 123 × 4 = 492\nTherefore, the total is 492."
        },
        {
            question: "Divide 987 sweets equally among 3 children. How many sweets will each child get?",
            answer: "Step 1: Sweets per child = 987 ÷ 3 = 329\nTherefore, each child gets 329 sweets."
        },
        {
            question: "A number is 456. Find its successor and predecessor.",
            answer: "Successor = 456 + 1 = 457\nPredecessor = 456 – 1 = 455\nTherefore, successor is 457 and predecessor is 455."
        }
    ],

    broadTest: [
        {
            question: "Rina has 345 cards, Ravi has 578. Total cards?",
            options: ["923", "913", "933", "903"],
            correct: 0
        },
        {
            question: "Shop had 1,245 pencils, sold 678. Pencils left?",
            options: ["567", "577", "557", "587"],
            correct: 0
        },
        {
            question: "Multiply 123 × 4. Total stickers?",
            options: ["492", "482", "502", "472"],
            correct: 0
        },
        {
            question: "Divide 987 ÷ 3. Sweets per child?",
            options: ["329", "330", "328", "327"],
            correct: 0
        },
        {
            question: "Successor and predecessor of 456?",
            options: ["457 & 455", "456 & 454", "458 & 454", "455 & 457"],
            correct: 0
        }
    ],

    test: [
        {
            question: "Which is the smallest whole number?",
            options: ["0", "1", "–1", "2"],
            correct: 0
        },
        {
            question: "Which of these is not a whole number?",
            options: ["0", "5", "–3", "9"],
            correct: 2
        },
        {
            question: "Whole numbers are closed under:",
            options: ["Addition", "Multiplication", "Both", "Division"],
            correct: 2
        },
        {
            question: "Identity element for addition is:",
            options: ["1", "0", "–1", "10"],
            correct: 1
        },
        {
            question: "Identity element for multiplication is:",
            options: ["0", "2", "1", "–1"],
            correct: 2
        },
        {
            question: "Which property is true: a + b = b + a?",
            options: ["Associative", "Commutative", "Distributive", "Identity"],
            correct: 1
        },
        {
            question: "Is subtraction closed for whole numbers?",
            options: ["Yes", "No", "Sometimes", "Always"],
            correct: 1
        },
        {
            question: "Is division closed for whole numbers?",
            options: ["Yes", "No", "Always", "None"],
            correct: 1
        },
        {
            question: "Which of these is an example of distributive property?",
            options: ["a + b = b + a", "a × (b + c) = a × b + a × c", "a – b = b – a", "a ÷ b = b ÷ a"],
            correct: 1
        },
        {
            question: "Which of these is true?",
            options: ["Every whole number is natural number", "Every natural number is a whole number", "Both true", "Both false"],
            correct: 1
        }
    ]
};

// Export for dynamic loading
window.class6Chapter2 = class6Chapter2;
