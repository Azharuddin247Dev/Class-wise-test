// Class 8 - Chapter 3: Understanding Quadrilaterals
const class8Chapter3 = {
  reading: [
    {
      question: "What is a quadrilateral?",
      answer: "A quadrilateral is a polygon with four sides and four angles.",
    },
    {
      question: "Examples of quadrilaterals?",
      answer: "Square, rectangle, parallelogram, rhombus, trapezium, and kite.",
    },
    {
      question: "What is a square?",
      answer: "A square has four equal sides and four right angles.",
    },
    {
      question: "What is a rectangle?",
      answer: "A rectangle has opposite sides equal and four right angles.",
    },
    {
      question: "What is a parallelogram?",
      answer:
        "A parallelogram has opposite sides parallel and equal, and opposite angles equal.",
    },
    {
      question: "What is a rhombus?",
      answer: "A rhombus has all four sides equal and opposite angles equal.",
    },
    {
      question: "What is a trapezium?",
      answer: "A trapezium has only one pair of opposite sides parallel.",
    },
    {
      question: "What is a kite?",
      answer:
        "A kite has two pairs of adjacent sides equal and diagonals perpendicular.",
    },
    {
      question: "Sum of interior angles of a quadrilateral?",
      answer: "The sum is 360°.",
    },
    {
      question: "How to find one angle if other three angles are known?",
      answer: "Subtract the sum of three known angles from 360°.",
    },
    {
      question: "Properties of parallelogram?",
      answer:
        "Opposite sides equal, opposite angles equal, diagonals bisect each other.",
    },
    {
      question: "Properties of rhombus?",
      answer:
        "All sides equal, opposite angles equal, diagonals bisect at right angles.",
    },
    {
      question: "Properties of rectangle?",
      answer:
        "Opposite sides equal, all angles 90°, diagonals equal and bisect each other.",
    },
    {
      question: "Properties of square?",
      answer:
        "All sides equal, all angles 90°, diagonals equal and perpendicular bisectors.",
    },
    {
      question: "Real-life examples of quadrilaterals?",
      answer: "Floor tiles, window panes, books, kites, playing cards.",
    },
    {
      question: "How to classify quadrilaterals?",
      answer: "By sides, angles, parallel sides, and symmetry.",
    },
    {
      question: "Diagonal of a square formula?",
      answer: "Diagonal = side × √2.",
    },
    { question: "Area of square?", answer: "Area = side × side." },
    { question: "Area of rectangle?", answer: "Area = length × breadth." },
    {
      question: "Perimeter of quadrilaterals?",
      answer: "Add the lengths of all sides.",
    },
  ],

  broad: [
    {
      question:
        "Find the missing angle if other three angles are 90°, 80°, 100°.",
      answer: "90°",
    },
    {
      question: "A rectangle has length 10cm and breadth 6cm. Find area.",
      answer: "60 cm²",
    },
    { question: "A square has side 7cm. Find perimeter.", answer: "28 cm" },
    {
      question:
        "Diagonals of a rhombus are 6 cm and 8 cm. Are they perpendicular?",
      answer: "Yes",
    },
    {
      question:
        "Classify quadrilateral with two pairs of equal opposite sides.",
      answer: "Parallelogram",
    },
    { question: "Find diagonal of square with side 5cm.", answer: "5√2 cm" },
    {
      question: "Area of rectangle with length 8cm and breadth 5cm.",
      answer: "40 cm²",
    },
    {
      question: "Perimeter of trapezium with sides 5, 7, 8, 6 cm.",
      answer: "26 cm",
    },
  ],

  broadTest: [
    {
      question: "Which quadrilateral has all sides equal but angles not 90°?",
      options: ["Square", "Rhombus", "Rectangle", "Kite"],
      correct: 1,
    },
    {
      question: "Diagonals of a rectangle are?",
      options: ["Perpendicular", "Equal", "Not equal", "Bisect at 90°"],
      correct: 1,
    },
    {
      question: "Trapezium has how many pairs of parallel sides?",
      options: ["One", "Two", "Three", "None"],
      correct: 0,
    },
    {
      question: "Sum of angles in any quadrilateral?",
      options: ["180°", "360°", "540°", "90°"],
      correct: 1,
    },
    {
      question:
        "Which quadrilateral has diagonals perpendicular and bisect each other?",
      options: ["Square", "Rhombus", "Rectangle", "Parallelogram"],
      correct: 1,
    },
  ],

  test: [
    {
      question: "Which quadrilateral has all sides equal and all angles 90°?",
      options: ["Square", "Rectangle", "Rhombus", "Trapezium"],
      correct: 0,
    },
    {
      question: "Sum of interior angles of a quadrilateral?",
      options: ["360°", "180°", "540°", "90°"],
      correct: 0,
    },
    {
      question:
        "Opposite sides equal and diagonals bisect each other at right angles?",
      options: ["Square", "Rectangle", "Parallelogram", "Rhombus"],
      correct: 3,
    },
    {
      question: "Which quadrilateral has only one pair of parallel sides?",
      options: ["Square", "Rectangle", "Trapezium", "Rhombus"],
      correct: 2,
    },
    {
      question: "Area of a square with side 6cm?",
      options: ["36 cm²", "12 cm²", "24 cm²", "18 cm²"],
      correct: 0,
    },
    {
      question: "Diagonal of square with side 5cm?",
      options: ["5√2 cm", "10 cm", "5 cm", "25 cm"],
      correct: 0,
    },
    {
      question: "Properties of rectangle include?",
      options: [
        "All angles 90°",
        "Opposite sides equal",
        "Diagonals equal",
        "All of the above",
      ],
      correct: 3,
    },
    {
      question: "Kite has how many pairs of equal adjacent sides?",
      options: ["One", "Two", "Three", "Four"],
      correct: 1,
    },
    {
      question: "Diagonals of rhombus?",
      options: [
        "Perpendicular and bisect angles",
        "Equal and bisect each other",
        "Not equal",
        "None",
      ],
      correct: 0,
    },
    {
      question: "A parallelogram has opposite angles?",
      options: ["Equal", "Not equal", "90° only", "All angles 45°"],
      correct: 0,
    },
  ],
};

// Export for dynamic loading
window.class8Chapter3 = class8Chapter3;
