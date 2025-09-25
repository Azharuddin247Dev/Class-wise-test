// Class 6 - Chapter 5: Understanding Elementary Shapes
const class6Chapter5 = {
  reading: [
    {
      question: "What is an angle?",
      answer:
        "An angle is formed when two rays meet at a common endpoint called the vertex.",
    },
    {
      question: "What is the common endpoint of an angle called?",
      answer: "The common endpoint of an angle is called the vertex.",
    },
    {
      question: "What is the unit used to measure angles?",
      answer: "Angles are measured in degrees (°).",
    },
    {
      question: "What is a right angle?",
      answer: "A right angle measures exactly 90°.",
    },
    {
      question: "What is an acute angle?",
      answer: "An acute angle is less than 90°.",
    },
    {
      question: "What is an obtuse angle?",
      answer: "An obtuse angle is greater than 90° but less than 180°.",
    },
    {
      question: "What is a straight angle?",
      answer: "A straight angle measures exactly 180°.",
    },
    {
      question: "What is a reflex angle?",
      answer: "A reflex angle is greater than 180° but less than 360°.",
    },
    {
      question: "What is a complete angle?",
      answer: "A complete angle measures 360°.",
    },
    {
      question: "What is a perpendicular line?",
      answer:
        "Two lines are perpendicular if they meet at a right angle (90°).",
    },
    {
      question: "What is a triangle?",
      answer:
        "A triangle is a closed figure with three sides and three angles.",
    },
    {
      question: "What is an equilateral triangle?",
      answer:
        "An equilateral triangle has all three sides equal and all angles 60°.",
    },
    {
      question: "What is an isosceles triangle?",
      answer: "An isosceles triangle has two sides equal.",
    },
    {
      question: "What is a scalene triangle?",
      answer: "A scalene triangle has all sides unequal.",
    },
    {
      question: "What is a quadrilateral?",
      answer:
        "A quadrilateral is a closed figure with four sides and four angles.",
    },
    {
      question: "Name a quadrilateral with opposite sides parallel.",
      answer: "A parallelogram has opposite sides parallel.",
    },
    {
      question: "What is a regular polygon?",
      answer:
        "A regular polygon has all sides and all angles equal. Example: square.",
    },
    {
      question: "What is the measure of each angle in an equilateral triangle?",
      answer: "Each angle of an equilateral triangle measures 60°.",
    },
    {
      question: "What is the sum of angles in a triangle?",
      answer: "The sum of the angles in a triangle is always 180°.",
    },
    {
      question: "What is the sum of angles in a quadrilateral?",
      answer: "The sum of the angles in a quadrilateral is always 360°.",
    },
  ],

  broad: [
    {
      question:
        "Draw and label a right, acute, obtuse, straight, reflex, and complete angle.",
      answer:
        "Right = 90°, Acute < 90°, Obtuse > 90° <180°, Straight =180°, Reflex >180° <360°, Complete =360°",
    },
    {
      question:
        "Draw an equilateral, isosceles, and scalene triangle and mark their sides and angles.",
      answer:
        "Equilateral: all sides equal, angles 60°; Isosceles: 2 sides equal; Scalene: all sides unequal",
    },
    {
      question:
        "Draw a quadrilateral with opposite sides parallel and identify it.",
      answer: "Parallelogram with opposite sides parallel",
    },
    {
      question: "Draw a regular polygon and label all sides and angles.",
      answer: "All sides equal, all angles equal",
    },
    {
      question:
        "Calculate sum of angles for triangle and quadrilateral and verify with drawing.",
      answer: "Triangle = 180°, Quadrilateral = 360°",
    },
  ],

  broadTest: [
    {
      question: "An angle of 180° is called?",
      options: ["Right angle", "Straight angle", "Reflex angle", "Acute angle"],
      correct: 1,
    },
    {
      question: "A triangle with all sides equal is?",
      options: ["Scalene", "Isosceles", "Equilateral", "Right triangle"],
      correct: 2,
    },
    {
      question: "A quadrilateral with opposite sides parallel is?",
      options: ["Square", "Parallelogram", "Rhombus", "Trapezium"],
      correct: 1,
    },
    {
      question: "The sum of angles in a triangle is?",
      options: ["90°", "180°", "270°", "360°"],
      correct: 1,
    },
    {
      question: "Each angle of an equilateral triangle is?",
      options: ["30°", "45°", "60°", "90°"],
      correct: 2,
    },
  ],

  test: [
    {
      question: "A right angle measures:",
      options: ["45°", "60°", "90°", "180°"],
      correct: 2,
    },
    {
      question: "An angle less than 90° is:",
      options: ["Right angle", "Acute angle", "Obtuse angle", "Straight angle"],
      correct: 1,
    },
    {
      question: "An angle greater than 90° but less than 180° is:",
      options: ["Right angle", "Acute angle", "Obtuse angle", "Straight angle"],
      correct: 2,
    },
    {
      question: "An angle of 180° is called:",
      options: ["Acute angle", "Straight angle", "Reflex angle", "Right angle"],
      correct: 1,
    },
    {
      question: "A triangle with all sides equal is:",
      options: [
        "Scalene triangle",
        "Isosceles triangle",
        "Equilateral triangle",
        "Right triangle",
      ],
      correct: 2,
    },
    {
      question: "The sum of the angles in a triangle is:",
      options: ["90°", "180°", "270°", "360°"],
      correct: 1,
    },
    {
      question: "The sum of the angles in a quadrilateral is:",
      options: ["90°", "180°", "270°", "360°"],
      correct: 3,
    },
    {
      question: "A quadrilateral with opposite sides parallel is:",
      options: ["Square", "Parallelogram", "Rhombus", "Trapezium"],
      correct: 1,
    },
    {
      question: "A regular polygon has:",
      options: [
        "All sides equal",
        "All angles equal",
        "Both sides and angles equal",
        "None of these",
      ],
      correct: 2,
    },
    {
      question: "Each angle of an equilateral triangle is:",
      options: ["30°", "45°", "60°", "90°"],
      correct: 2,
    },
  ],
};

// Export for dynamic loading
window.class6Chapter5 = class6Chapter5;
