// Class 7 - Chapter 10: Perimeter and Area
const class7Chapter10 = {
  reading: [
    { question: "What is perimeter?", answer: "Perimeter is the total length of the boundary of a closed figure." },
    { question: "Formula for perimeter of a rectangle?", answer: "Perimeter = 2 × (length + breadth)." },
    { question: "Formula for perimeter of a square?", answer: "Perimeter = 4 × side." },
    { question: "Formula for perimeter of a triangle?", answer: "Perimeter = sum of all three sides." },
    { question: "Perimeter of a circle is called?", answer: "Circumference." },
    { question: "Formula for circumference of a circle?", answer: "Circumference = 2 × π × radius." },
    { question: "What is area?", answer: "Area is the space enclosed within a figure." },
    { question: "Formula for area of a rectangle?", answer: "Area = length × breadth." },
    { question: "Formula for area of a square?", answer: "Area = side × side." },
    { question: "Formula for area of a triangle?", answer: "Area = 1/2 × base × height." },
    { question: "Formula for area of a parallelogram?", answer: "Area = base × height." },
    { question: "Formula for area of a trapezium?", answer: "Area = 1/2 × (sum of parallel sides) × height." },
    { question: "Formula for area of a circle?", answer: "Area = π × radius²." },
    { question: "Convert 1 m² to cm²?", answer: "1 m² = 10,000 cm²." },
    { question: "Convert 1 km² to m²?", answer: "1 km² = 1,000,000 m²." },
    { question: "How to find perimeter of irregular shapes?", answer: "Add lengths of all sides." },
    { question: "How to find area of irregular shapes?", answer: "Divide the shape into regular shapes, find areas separately, then add." },
    { question: "Example of perimeter in daily life?", answer: "Fencing a garden or boundary wall." },
    { question: "Example of area in daily life?", answer: "Carpet area of a room or painting a wall." },
    { question: "Why is area important?", answer: "Area helps determine the amount of material needed for covering a surface." }
  ],

  broad: [
    { question: "Perimeter of rectangle 12m × 7m?", answer: "2 × (12 + 7) = 38 m" },
    { question: "Area of square with side 9 cm?", answer: "9 × 9 = 81 cm²" },
    { question: "Circumference of circle with radius 5 cm (π = 3.14)?", answer: "2 × 3.14 × 5 = 31.4 cm" },
    { question: "Area of triangle with base 8 cm and height 5 cm?", answer: "1/2 × 8 × 5 = 20 cm²" },
    { question: "Perimeter of triangle with sides 5 cm, 6 cm, 7 cm?", answer: "5 + 6 + 7 = 18 cm" },
    { question: "Area of circle with radius 10 cm (π = 3.14)?", answer: "3.14 × 10² = 314 cm²" },
    { question: "Area of parallelogram with base 12 cm and height 6 cm?", answer: "12 × 6 = 72 cm²" },
    { question: "Area of trapezium with parallel sides 8 cm, 6 cm and height 5 cm?", answer: "1/2 × (8+6) × 5 = 35 cm²" }
  ],

  broadTest: [
    { question: "Perimeter of square with side 15 m?", options: ["60 m", "45 m", "30 m", "75 m"], correct: 0 },
    { question: "Area of rectangle 14 m × 9 m?", options: ["126 m²", "46 m²", "23 m²", "100 m²"], correct: 0 },
    { question: "Circumference of circle with radius 7 cm (π = 22/7)?", options: ["44 cm", "49 cm", "14 cm", "154 cm"], correct: 1 },
    { question: "Area of triangle 12 cm base, 9 cm height?", options: ["54 cm²", "108 cm²", "21 cm²", "50 cm²"], correct: 0 },
    { question: "Perimeter of triangle 8 cm, 15 cm, 17 cm?", options: ["40 cm", "30 cm", "50 cm", "35 cm"], correct: 1 }
  ],

  test: [
    { question: "Perimeter of a rectangle 8m × 5m?", options: ["26m", "40m", "13m", "30m"], correct: 1 },
    { question: "Area of a square with side 6cm?", options: ["36 cm²", "12 cm²", "24 cm²", "18 cm²"], correct: 0 },
    { question: "Circumference of circle with radius 7m (π = 22/7)?", options: ["44 m", "42 m", "14 m", "154 m"], correct: 1 },
    { question: "Area of triangle with base 10cm and height 6cm?", options: ["30 cm²", "60 cm²", "16 cm²", "20 cm²"], correct: 0 },
    { question: "Perimeter of a triangle with sides 3cm, 4cm, 5cm?", options: ["12 cm", "15 cm", "10 cm", "11 cm"], correct: 0 },
    { question: "Area of circle with radius 14cm (π = 22/7)?", options: ["616 cm²", "154 cm²", "308 cm²", "198 cm²"], correct: 2 },
    { question: "Formula for perimeter of square?", options: ["4 × side", "Side × Side", "2 × (l+b)", "1/2 × b × h"], correct: 0 },
    { question: "Formula for area of rectangle?", options: ["Length × Breadth", "4 × side", "2 × (l+b)", "1/2 × base × height"], correct: 0 },
    { question: "1 m² = ? cm²", options: ["100", "1000", "10000", "100000"], correct: 2 },
    { question: "Perimeter of irregular shape?", options: ["Add all sides", "Multiply sides", "Subtract sides", "Divide sides"], correct: 0 }
  ]
};

// Export for dynamic loading
window.class7Chapter10 = class7Chapter10;
