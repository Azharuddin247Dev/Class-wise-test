// Class 5 - Chapter 7: Measurement
const class5Chapter7 = {
  reading: [
    {
      question: "What is measurement?",
      answer: "Measurement is the process of finding the size, length, weight, capacity, or time of something using standard units."
    },
    {
      question: "What is the standard unit of length in the metric system?",
      answer: "The standard unit of length is the meter (m)."
    },
    {
      question: "What are smaller units of length?",
      answer: "Smaller units of length are centimeter (cm) and millimeter (mm)."
    },
    {
      question: "What are larger units of length?",
      answer: "Larger units of length are kilometer (km)."
    },
    {
      question: "What is the relationship between 1 meter and 100 centimeters?",
      answer: "1 meter = 100 centimeters."
    },
    {
      question: "What is the standard unit of mass?",
      answer: "The standard unit of mass is the kilogram (kg)."
    },
    {
      question: "What are smaller units of mass?",
      answer: "Smaller units of mass are grams (g) and milligrams (mg)."
    },
    {
      question: "What is the relationship between 1 kilogram and grams?",
      answer: "1 kilogram = 1000 grams."
    },
    {
      question: "What is the standard unit of capacity?",
      answer: "The standard unit of capacity is liter (L)."
    },
    {
      question: "What is the relationship between 1 liter and milliliters?",
      answer: "1 liter = 1000 milliliters."
    },
    {
      question: "What is perimeter?",
      answer: "Perimeter is the distance around a closed figure, such as a square or rectangle."
    },
    {
      question: "What is the perimeter of a square?",
      answer: "Perimeter of a square = 4 × side."
    },
    {
      question: "What is the perimeter of a rectangle?",
      answer: "Perimeter of a rectangle = 2 × (length + breadth)."
    },
    {
      question: "What is area?",
      answer: "Area is the amount of surface covered by a shape. It is measured in square units."
    },
    {
      question: "What is the area of a square?",
      answer: "Area of a square = side × side."
    },
    {
      question: "What is the area of a rectangle?",
      answer: "Area of a rectangle = length × breadth."
    },
    {
      question: "What is volume?",
      answer: "Volume is the space occupied by a solid object. It is measured in cubic units."
    },
    {
      question: "What is the standard unit of time?",
      answer: "The standard unit of time is second (s). Larger units are minutes and hours."
    },
    {
      question: "How many minutes are in 1 hour?",
      answer: "1 hour = 60 minutes."
    },
    {
      question: "How many seconds are in 1 minute?",
      answer: "1 minute = 60 seconds."
    }
  ],

  broad: [
    {
      question: "Explain the relationship between meters, centimeters, and millimeters.",
      answer: "1 meter = 100 centimeters, 1 centimeter = 10 millimeters. Therefore, 1 meter = 1000 millimeters."
    },
    {
      question: "Explain the relationship between kilograms and grams.",
      answer: "1 kilogram = 1000 grams. Smaller objects can be measured in grams, while heavier objects are measured in kilograms."
    },
    {
      question: "Describe how to find the perimeter and area of a rectangle and square.",
      answer: "Perimeter of a rectangle = 2 × (length + breadth), area of a rectangle = length × breadth. Perimeter of a square = 4 × side, area of a square = side × side."
    },
    {
      question: "Convert 3 hours 45 minutes into minutes.",
      answer: "3 hours = 180 minutes, add 45 minutes, total = 225 minutes."
    },
    {
      question: "Convert 5000 milliliters into liters.",
      answer: "1 liter = 1000 milliliters, so 5000 milliliters = 5000 ÷ 1000 = 5 liters."
    }
  ],

  broadTest: [
    {
      question: "Calculate the perimeter of a square with side 12 cm."
    },
    {
      question: "Find the area of a rectangle with length 15 m and breadth 8 m."
    },
    {
      question: "Convert 2 hours 30 minutes into minutes."
    },
    {
      question: "Convert 2500 grams into kilograms."
    },
    {
      question: "If 1 liter = 1000 ml, how many liters are there in 7500 ml?"
    }
  ],

  test: [
    {
      question: "1 meter = ? centimeters",
      options: ["10", "100", "1000", "10000"],
      correct: 1
    },
    {
      question: "1 kilogram = ? grams",
      options: ["10", "100", "1000", "10000"],
      correct: 2
    },
    {
      question: "1 liter = ? milliliters",
      options: ["10", "100", "1000", "10000"],
      correct: 2
    },
    {
      question: "Perimeter of a square with side 5 cm",
      options: ["10 cm", "15 cm", "20 cm", "25 cm"],
      correct: 2
    },
    {
      question: "Perimeter of a rectangle with length 6 cm and breadth 4 cm",
      options: ["10 cm", "20 cm", "24 cm", "18 cm"],
      correct: 1
    },
    {
      question: "Area of a square with side 8 cm",
      options: ["16 sq cm", "32 sq cm", "64 sq cm", "72 sq cm"],
      correct: 2
    },
    {
      question: "Area of a rectangle with length 10 cm and breadth 5 cm",
      options: ["50 sq cm", "40 sq cm", "20 sq cm", "15 sq cm"],
      correct: 0
    },
    {
      question: "How many minutes are there in 2 hours?",
      options: ["60", "100", "120", "150"],
      correct: 2
    },
    {
      question: "How many seconds are in 5 minutes?",
      options: ["60", "100", "200", "300"],
      correct: 3
    },
    {
      question: "Which of these is the unit of volume?",
      options: ["cm", "m", "sq cm", "cubic cm"],
      correct: 3
    }
  ]
};

// Export for dynamic loading
window.class5Chapter7 = class5Chapter7;
