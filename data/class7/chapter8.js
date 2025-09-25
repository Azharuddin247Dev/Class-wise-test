// Class 7 - Chapter 8: Comparing Quantities
const class7Chapter8 = {
  reading: [
    {
      question: "What is ratio?",
      answer: "A ratio is a comparison of two quantities of the same kind expressed as a fraction or with a colon (:)."
    },
    {
      question: "Example of a ratio?",
      answer: "If a class has 12 boys and 8 girls, the ratio of boys to girls is 12:8 or 3:2."
    },
    {
      question: "What is proportion?",
      answer: "A proportion is an equation stating that two ratios are equal."
    },
    {
      question: "Example of proportion?",
      answer: "If 2/3 = 4/6, then 2:3 is in proportion with 4:6."
    },
    {
      question: "What is percentage?",
      answer: "Percentage is a way of expressing a number as a fraction of 100."
    },
    {
      question: "Example of percentage?",
      answer: "If 20 students passed out of 50, the percentage of students passed = (20/50) × 100 = 40%."
    },
    {
      question: "What is profit?",
      answer: "Profit is the gain made when selling price is greater than cost price. Profit = SP - CP."
    },
    {
      question: "What is loss?",
      answer: "Loss occurs when cost price is greater than selling price. Loss = CP - SP."
    },
    {
      question: "What is discount?",
      answer: "Discount is the reduction given on the marked price. Discount = MP - SP."
    },
    {
      question: "What is simple interest?",
      answer: "Simple interest is the interest calculated only on the principal amount. SI = (P × R × T)/100."
    },
    {
      question: "What is compound interest?",
      answer: "Compound interest is calculated on principal as well as accumulated interest."
    },
    {
      question: "What is the difference between ratio and proportion?",
      answer: "A ratio compares two quantities; proportion states that two ratios are equal."
    },
    {
      question: "What is marked price?",
      answer: "Marked price is the listed price of a product before discount."
    },
    {
      question: "How to calculate selling price after discount?",
      answer: "SP = MP - Discount."
    },
    {
      question: "How to calculate profit percentage?",
      answer: "Profit% = (Profit/CP) × 100."
    },
    {
      question: "How to calculate loss percentage?",
      answer: "Loss% = (Loss/CP) × 100."
    },
    {
      question: "Example of simple interest calculation?",
      answer: "SI of Rs. 5000 at 5% per year for 2 years = (5000 × 5 × 2)/100 = Rs. 500."
    },
    {
      question: "Example of compound interest calculation?",
      answer: "CI on Rs. 1000 at 10% for 2 years = 1000 × (1 + 0.1)² - 1000 = Rs. 210."
    },
    {
      question: "Why are percentages useful?",
      answer: "Percentages allow comparison of quantities on a standard scale of 100."
    },
    {
      question: "Give a real-life example of ratio usage.",
      answer: "Recipe ingredients use ratios, like 2 cups flour to 1 cup sugar (2:1)."
    }
  ],

  broad: [
    {
      question: "If 3 pencils cost Rs. 12, what is the cost of 5 pencils?",
      answer: "Cost per pencil = 12/3 = 4, so 5 pencils = 5 × 4 = Rs. 20."
    },
    {
      question: "If 5 men complete a work in 10 days, how many days for 10 men?",
      answer: "Work is inversely proportional, so 10 men take 10 × 5 / 10 = 5 days."
    },
    {
      question: "A product costs Rs. 500 and sells at Rs. 600. Find profit percentage.",
      answer: "Profit = 600-500 = 100; Profit% = (100/500) ×100 = 20%."
    },
    {
      question: "A product costs Rs. 800 and is sold at Rs. 720. Find loss percentage.",
      answer: "Loss = 800-720=80; Loss% = (80/800) ×100 = 10%."
    },
    {
      question: "Find compound interest for Rs. 1000 at 10% for 2 years.",
      answer: "CI = 1000 × (1+0.1)² -1000 = 1000×1.21-1000= Rs. 210."
    }
  ],

  broadTest: [
    {
      question: "Ratio of 20 boys to 30 girls?",
      options: ["2:3", "3:2", "1:2", "4:5"],
      correct: 0
    },
    {
      question: "Percentage of 15 out of 60?",
      options: ["25%", "20%", "30%", "40%"],
      correct: 1
    },
    {
      question: "Profit formula?",
      options: ["SP - CP", "CP - SP", "MP - SP", "SP ÷ CP"],
      correct: 0
    },
    {
      question: "Loss formula?",
      options: ["SP - CP", "CP - SP", "CP × SP", "SP ÷ CP"],
      correct: 1
    },
    {
      question: "Simple interest formula?",
      options: ["(P × R × T)/100", "(P × R × T)/10", "(P + R + T)/100", "P × R × T"],
      correct: 0
    }
  ],

  test: [
    {
      question: "Ratio of 8 boys to 12 girls?",
      options: ["2:3", "3:2", "4:3", "1:2"],
      correct: 0
    },
    {
      question: "Percentage of 25 out of 50?",
      options: ["25%", "50%", "40%", "75%"],
      correct: 1
    },
    {
      question: "Profit formula?",
      options: ["CP - SP", "SP - CP", "MP - SP", "SP × CP"],
      correct: 1
    },
    {
      question: "Loss formula?",
      options: ["SP - CP", "CP - SP", "CP × SP", "SP ÷ CP"],
      correct: 1
    },
    {
      question: "Discount formula?",
      options: ["SP - MP", "MP + SP", "MP - SP", "SP ÷ MP"],
      correct: 2
    },
    {
      question: "Simple interest formula?",
      options: ["(P × R × T)/100", "(P × R × T)/10", "(P + R + T)/100", "P × R × T"],
      correct: 0
    },
    {
      question: "What is proportion?",
      options: ["Two quantities compared", "Two ratios equal", "Percentage", "Profit calculation"],
      correct: 1
    },
    {
      question: "Compound interest is calculated on?",
      options: ["Principal only", "Principal and interest", "Interest only", "Cost price"],
      correct: 1
    },
    {
      question: "Profit percentage formula?",
      options: ["(Profit/CP) × 100", "(Loss/CP) × 100", "(SP/CP) × 100", "(CP/SP) × 100"],
      correct: 0
    },
    {
      question: "Loss percentage formula?",
      options: ["(Loss/CP) × 100", "(Profit/CP) × 100", "(SP/CP) × 100", "(MP/SP) × 100"],
      correct: 0
    }
  ]
};

// Export for dynamic loading
window.class7Chapter8 = class7Chapter8;
