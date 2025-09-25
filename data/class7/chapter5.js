// Class 7 - Chapter 5: Lines and Angles
const class7Chapter5 = {
  reading: [
    {
      question: "What is a line?",
      answer: "A line is a straight one-dimensional figure extending infinitely in both directions."
    },
    {
      question: "What is a line segment?",
      answer: "A line segment is a part of a line with two endpoints."
    },
    {
      question: "What is a ray?",
      answer: "A ray is a part of a line that has one endpoint and extends infinitely in one direction."
    },
    {
      question: "What is an angle?",
      answer: "An angle is formed when two rays meet at a common endpoint called the vertex."
    },
    {
      question: "What are different types of angles?",
      answer: "Types: Acute (<90°), Right (=90°), Obtuse (>90° but <180°), Straight (=180°), Reflex (>180° but <360°)."
    },
    {
      question: "What is a right angle?",
      answer: "A right angle is exactly 90°."
    },
    {
      question: "What is an acute angle?",
      answer: "An acute angle is less than 90°."
    },
    {
      question: "What is an obtuse angle?",
      answer: "An obtuse angle is more than 90° but less than 180°."
    },
    {
      question: "What is a straight angle?",
      answer: "A straight angle is exactly 180°."
    },
    {
      question: "What are complementary angles?",
      answer: "Two angles are complementary if their sum is 90°."
    },
    {
      question: "What are supplementary angles?",
      answer: "Two angles are supplementary if their sum is 180°."
    },
    {
      question: "What are vertically opposite angles?",
      answer: "Angles opposite each other when two lines intersect. They are always equal."
    },
    {
      question: "What is a transversal?",
      answer: "A transversal is a line that intersects two or more lines at distinct points."
    },
    {
      question: "What are alternate interior angles?",
      answer: "Angles on opposite sides of a transversal and inside the two lines. They are equal if lines are parallel."
    },
    {
      question: "What are alternate exterior angles?",
      answer: "Angles on opposite sides of a transversal and outside the two lines. Equal if lines are parallel."
    },
    {
      question: "What are corresponding angles?",
      answer: "Angles in the same position on two parallel lines cut by a transversal. They are equal."
    },
    {
      question: "What is a pair of adjacent angles?",
      answer: "Angles that share a common vertex and a common side."
    },
    {
      question: "How do you measure angles?",
      answer: "Using a protractor."
    },
    {
      question: "What is the sum of angles in a triangle?",
      answer: "Sum of angles in a triangle is 180°."
    },
    {
      question: "What is the sum of angles on a straight line?",
      answer: "Sum of angles on a straight line is 180°."
    }
  ],

  broad: [
    {
      question: "Find the missing angle if one angle is 70° in a pair of complementary angles.",
      answer: "Complementary angles sum to 90°. Missing angle = 90° - 70° = 20°."
    },
    {
      question: "Find the missing angle if one angle is 110° in a pair of supplementary angles.",
      answer: "Supplementary angles sum to 180°. Missing angle = 180° - 110° = 70°."
    },
    {
      question: "Two vertically opposite angles are 45° each. What is the other pair?",
      answer: "Vertically opposite angles are equal. Other pair = 45° each."
    },
    {
      question: "If a transversal intersects parallel lines and one alternate interior angle is 65°, find the other.",
      answer: "Alternate interior angles are equal. Other angle = 65°."
    },
    {
      question: "If a straight angle is divided into two angles, one is 120°. Find the other.",
      answer: "Sum of angles on a straight line = 180°. Other angle = 180° - 120° = 60°."
    }
  ],

  broadTest: [
    {
      question: "Complementary angle to 40° is:",
      options: ["50°", "60°", "40°", "90°"],
      correct: 0
    },
    {
      question: "Supplementary angle to 150° is:",
      options: ["30°", "50°", "120°", "90°"],
      correct: 0
    },
    {
      question: "If one angle of a triangle is 90° and another is 45°, find the third angle.",
      options: ["45°", "60°", "90°", "30°"],
      correct: 0
    },
    {
      question: "If two parallel lines are cut by a transversal and one corresponding angle is 70°, the other corresponding angle is:",
      options: ["70°", "110°", "50°", "90°"],
      correct: 0
    },
    {
      question: "Vertically opposite angle to 120° is:",
      options: ["120°", "60°", "90°", "180°"],
      correct: 0
    }
  ],

  test: [
    {
      question: "Which of these is a right angle?",
      options: ["45°", "90°", "120°", "180°"],
      correct: 1
    },
    {
      question: "Sum of complementary angles?",
      options: ["90°", "180°", "270°", "360°"],
      correct: 0
    },
    {
      question: "Sum of supplementary angles?",
      options: ["90°", "180°", "270°", "360°"],
      correct: 1
    },
    {
      question: "Vertically opposite angles are:",
      options: ["Equal", "Complementary", "Supplementary", "Acute"],
      correct: 0
    },
    {
      question: "An acute angle is:",
      options: [">90°", "=90°", "<90°", "180°"],
      correct: 2
    },
    {
      question: "A straight angle is:",
      options: ["90°", "180°", "270°", "360°"],
      correct: 1
    },
    {
      question: "Angles on a straight line sum to:",
      options: ["90°", "180°", "360°", "270°"],
      correct: 1
    },
    {
      question: "Alternate interior angles are equal if lines are:",
      options: ["Perpendicular", "Parallel", "Intersecting", "None of these"],
      correct: 1
    },
    {
      question: "Corresponding angles are:",
      options: ["Equal", "Supplementary", "Complementary", "Right angles"],
      correct: 0
    },
    {
      question: "Sum of angles in a triangle is:",
      options: ["90°", "180°", "270°", "360°"],
      correct: 1
    }
  ]
};

// Export for dynamic loading
window.class7Chapter5 = class7Chapter5;
