// Class 8 - Chapter 10: Mensuration
const class8Chapter10 = {
  reading: [
    {
      question: "What is mensuration?",
      answer:
        "Mensuration is the branch of mathematics that deals with measurement of length, area, and volume of different shapes.",
    },
    {
      question: "What is perimeter?",
      answer:
        "Perimeter is the total distance around a 2D shape. Example: Perimeter of a rectangle = 2(length + breadth).",
    },
    {
      question: "What is area?",
      answer:
        "Area is the measure of surface enclosed within a 2D shape. Example: Area of rectangle = length × breadth.",
    },
    {
      question: "Area of a square?",
      answer: "Area of a square = side × side.",
    },
    {
      question: "Perimeter of a square?",
      answer: "Perimeter of a square = 4 × side.",
    },
    {
      question: "Area of a rectangle?",
      answer: "Area of a rectangle = length × breadth.",
    },
    {
      question: "Perimeter of a rectangle?",
      answer: "Perimeter of a rectangle = 2(length + breadth).",
    },
    {
      question: "Area of a triangle?",
      answer: "Area = 1/2 × base × height.",
    },
    {
      question: "Perimeter of a triangle?",
      answer: "Perimeter = sum of all three sides.",
    },
    {
      question: "Area of a parallelogram?",
      answer: "Area = base × height.",
    },
    {
      question: "Area of a trapezium?",
      answer: "Area = 1/2 × (sum of parallel sides) × height.",
    },
    {
      question: "Volume of a cube?",
      answer: "Volume = side³.",
    },
    {
      question: "Volume of a cuboid?",
      answer: "Volume = length × breadth × height.",
    },
    {
      question: "Surface area of a cube?",
      answer: "Surface area = 6 × side².",
    },
    {
      question: "Surface area of a cuboid?",
      answer:
        "Surface area = 2(lb + bh + hl) where l = length, b = breadth, h = height.",
    },
    {
      question: "Volume of a cylinder?",
      answer: "Volume = π × radius² × height.",
    },
    {
      question: "Surface area of a cylinder?",
      answer: "Surface area = 2πr(h + r) where r = radius, h = height.",
    },
    {
      question: "Volume of a cone?",
      answer: "Volume = 1/3 × π × radius² × height.",
    },
    {
      question: "Surface area of a cone?",
      answer: "Surface area = πr(l + r) where l = slant height.",
    },
    {
      question: "Real-life applications of mensuration?",
      answer:
        "Used in construction, packaging, painting, and designing objects.",
    },
  ],
  test: [
    {
      question: "Perimeter of a square with side 5 cm?",
      options: ["20 cm", "25 cm", "10 cm", "15 cm"],
      correct: 0,
    },
    {
      question: "Area of rectangle with length 10 m and breadth 5 m?",
      options: ["50 m²", "15 m²", "30 m²", "25 m²"],
      correct: 0,
    },
    {
      question: "Volume of cube with side 4 cm?",
      options: ["16 cm³", "64 cm³", "32 cm³", "8 cm³"],
      correct: 1,
    },
    {
      question: "Surface area of cube with side 3 cm?",
      options: ["27 cm²", "18 cm²", "54 cm²", "36 cm²"],
      correct: 2,
    },
    {
      question: "Area of triangle with base 6 m and height 4 m?",
      options: ["10 m²", "12 m²", "24 m²", "20 m²"],
      correct: 1,
    },
    {
      question: "Volume of cuboid with l=5, b=3, h=2?",
      options: ["30", "10", "25", "40"],
      correct: 0,
    },
    {
      question: "Surface area of cuboid with l=2, b=3, h=4?",
      options: ["52", "48", "36", "60"],
      correct: 0,
    },
    {
      question: "Volume of cylinder with r=3, h=5 (use π≈3.14)?",
      options: ["141.3", "130", "150", "120.6"],
      correct: 0,
    },
    {
      question: "Volume of cone with r=3, h=4 (use π≈3.14)?",
      options: ["37.68", "50.24", "40", "56.52"],
      correct: 0,
    },
    {
      question: "Surface area of cylinder with r=2, h=5 (use π≈3.14)?",
      options: ["87.96", "75.36", "62.8", "50.24"],
      correct: 0,
    },
  ],
};

// Export for dynamic loading
window.class8Chapter10 = class8Chapter10;
