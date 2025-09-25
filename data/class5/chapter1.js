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
    broad: [
        {
            question: "A shopkeeper has 1,245 apples. He sells 678 apples in the morning and 234 apples in the evening. How many apples are left with him? Show your complete calculation.",
            answer: "Step 1: Total apples sold = 678 + 234 = 912 apples\nStep 2: Apples left = 1,245 - 912 = 333 apples\nTherefore, 333 apples are left with the shopkeeper."
        },
        {
            question: "In a school, there are 8 sections in Class V. Each section has 45 students. If 23 students are absent today, how many students are present? Explain your method.",
            answer: "Step 1: Total students in Class V = 8 × 45 = 360 students\nStep 2: Students present = 360 - 23 = 337 students\nTherefore, 337 students are present in school today."
        },
        {
            question: "A farmer harvested 2,456 kg of rice from his field. He wants to pack them in bags of 25 kg each. How many full bags can he make? How much rice will be left over?",
            answer: "Step 1: Divide 2,456 by 25\n2,456 ÷ 25 = 98 remainder 6\nStep 2: Full bags = 98 bags\nStep 3: Rice left over = 6 kg\nTherefore, the farmer can make 98 full bags with 6 kg of rice left over."
        },
        {
            question: "Ravi's mother gave him ₹500 to buy school supplies. He bought 3 notebooks for ₹45 each, 2 pens for ₹15 each, and 1 geometry box for ₹85. How much money is left with him?",
            answer: "Step 1: Cost of notebooks = 3 × ₹45 = ₹135\nStep 2: Cost of pens = 2 × ₹15 = ₹30\nStep 3: Cost of geometry box = ₹85\nStep 4: Total spent = ₹135 + ₹30 + ₹85 = ₹250\nStep 5: Money left = ₹500 - ₹250 = ₹250\nTherefore, ₹250 is left with Ravi."
        },
        {
            question: "A library has 1,234 books. In the first week, 156 books were issued and 89 books were returned. In the second week, 203 books were issued and 145 books were returned. How many books are currently in the library?",
            answer: "Step 1: Books after first week = 1,234 - 156 + 89 = 1,167 books\nStep 2: Books after second week = 1,167 - 203 + 145 = 1,109 books\nTherefore, there are currently 1,109 books in the library."
        },
        {
            question: "In a factory, 1,456 toys are produced in one day. If the factory works for 15 days, how many toys will be produced? If each toy is sold for ₹25, what will be the total earning?",
            answer: "Step 1: Total toys produced = 1,456 × 15 = 21,840 toys\nStep 2: Total earning = 21,840 × ₹25 = ₹5,46,000\nTherefore, 21,840 toys will be produced and the total earning will be ₹5,46,000."
        }
    ],
    broadTest: [
        {
            question: "A shopkeeper has 1,245 apples. He sells 678 apples in the morning and 234 apples in the evening. How many apples are left?",
            options: ["333 apples", "912 apples", "567 apples", "445 apples"],
            correct: 0
        },
        {
            question: "In a school, there are 8 sections with 45 students each. If 23 students are absent, how many are present?",
            options: ["337 students", "360 students", "320 students", "340 students"],
            correct: 0
        },
        {
            question: "A farmer has 2,456 kg rice. He packs them in 25 kg bags. How many full bags can he make?",
            options: ["98 bags", "100 bags", "96 bags", "102 bags"],
            correct: 0
        },
        {
            question: "Ravi has ₹500. He spends ₹135 on notebooks, ₹30 on pens, ₹85 on geometry box. Money left?",
            options: ["₹250", "₹200", "₹300", "₹150"],
            correct: 0
        },
        {
            question: "A library has 1,234 books. Week 1: 156 issued, 89 returned. Week 2: 203 issued, 145 returned. Books now?",
            options: ["1,109 books", "1,200 books", "1,150 books", "1,050 books"],
            correct: 0
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
            correct: 1
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
