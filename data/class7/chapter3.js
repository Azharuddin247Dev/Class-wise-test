// Class 7 - Chapter 3: Data Handling
const class7Chapter3 = {
    reading: [
        {
            question: "What is data?",
            answer: "Data is a collection of facts, numbers, or information that can be organized and analyzed."
        },
        {
            question: "What is data handling?",
            answer: "Data handling is the process of collecting, organizing, and representing data in a meaningful way."
        },
        {
            question: "What is a tally mark?",
            answer: "Tally marks are quick marks used to record and count data. Every fifth mark is shown as a diagonal line across four vertical marks."
        },
        {
            question: "What is a frequency table?",
            answer: "A frequency table shows how many times each item or number occurs in the data."
        },
        {
            question: "What is a pictograph?",
            answer: "A pictograph is a way of representing data using pictures or symbols."
        },
        {
            question: "What is a bar graph?",
            answer: "A bar graph uses rectangular bars to show the comparison between different categories of data."
        },
        {
            question: "What is the mean of data?",
            answer: "The mean is the average of the data, calculated by dividing the sum of all values by the number of values."
        },
        {
            question: "What is the mode of data?",
            answer: "The mode is the value that occurs most frequently in the data."
        },
        {
            question: "What is the median of data?",
            answer: "The median is the middle value of the data when arranged in order."
        },
        {
            question: "Find the mean of 4, 8, 12, 16, 20.",
            answer: "Mean = (4+8+12+16+20)/5 = 60/5 = 12."
        },
        {
            question: "Find the mode of 3, 4, 4, 5, 6, 6, 6, 7.",
            answer: "Mode = 6 because it appears most frequently."
        },
        {
            question: "Find the median of 7, 3, 9, 1, 5.",
            answer: "Arrange: 1,3,5,7,9. Median = 5."
        },
        {
            question: "What is probability?",
            answer: "Probability is the chance of an event happening, expressed as a fraction between 0 and 1."
        },
        {
            question: "Probability of getting a head when tossing a coin?",
            answer: "Probability = 1/2."
        },
        {
            question: "Probability of rolling a 4 on a die?",
            answer: "Probability = 1/6."
        },
        {
            question: "What is the advantage of a pictograph?",
            answer: "It is simple and easy to understand."
        },
        {
            question: "What is the advantage of a bar graph?",
            answer: "It allows easy comparison of data visually."
        },
        {
            question: "Give an example of data collection in daily life.",
            answer: "Recording marks of students in a test."
        },
        {
            question: "How can marks of 5 students be represented?",
            answer: "Using a table, pictograph, or bar graph."
        },
        {
            question: "Why do we use graphs?",
            answer: "Graphs help us understand data and make comparisons quickly."
        }
    ],

    broad: [
        {
            question: "Draw a tally chart for 15 students liking three fruits: Apple(6), Banana(5), Mango(4).",
            answer: "Apple: ||||||, Banana: |||||, Mango: ||||"
        },
        {
            question: "Represent marks of students (12, 15, 18, 15, 20) using a frequency table.",
            answer: "Marks: 12(1), 15(2), 18(1), 20(1)"
        },
        {
            question: "Draw a pictograph for books read by students: A(3), B(5), C(2).",
            answer: "Use one book symbol for one book; A: 3 symbols, B: 5 symbols, C: 2 symbols."
        },
        {
            question: "Draw a bar graph for data: Monday(4), Tuesday(6), Wednesday(5).",
            answer: "Draw bars of heights 4, 6, 5 for Monday, Tuesday, Wednesday."
        },
        {
            question: "Find mean, median, and mode of 5, 7, 7, 8, 10.",
            answer: "Mean: (5+7+7+8+10)/5 = 37/5 = 7.4; Median: 7; Mode: 7"
        }
    ],

    broadTest: [
        {
            question: "Find the mean of 4, 6, 8.",
            options: ["6", "5", "7", "8"],
            correct: 0
        },
        {
            question: "Find the median of 3, 5, 7, 9, 11.",
            options: ["5", "7", "9", "6"],
            correct: 1
        },
        {
            question: "Find the mode of 2, 3, 3, 4, 5.",
            options: ["2", "3", "4", "5"],
            correct: 1
        },
        {
            question: "Probability of getting a tail in a coin toss?",
            options: ["1/2", "1/3", "1/4", "0"],
            correct: 0
        },
        {
            question: "Probability of rolling a 7 on a standard die?",
            options: ["0", "1/6", "1/3", "1/2"],
            correct: 0
        }
    ],

    test: [
        {
            question: "What is a tally mark?",
            options: ["A type of graph", "A mark used for counting", "A fraction", "A picture symbol"],
            correct: 1
        },
        {
            question: "Which graph uses bars to represent data?",
            options: ["Pictograph", "Bar graph", "Line graph", "Pie chart"],
            correct: 1
        },
        {
            question: "Find the mean of 2, 4, 6.",
            options: ["2", "4", "6", "12"],
            correct: 1
        },
        {
            question: "Find the mode of 3, 3, 4, 5.",
            options: ["3", "4", "5", "2"],
            correct: 0
        },
        {
            question: "Find the median of 5, 7, 9.",
            options: ["5", "7", "9", "6"],
            correct: 1
        },
        {
            question: "Probability of getting an even number on a die?",
            options: ["1/2", "1/3", "1/6", "1/4"],
            correct: 0
        },
        {
            question: "Which is an advantage of a pictograph?",
            options: ["Difficult to understand", "Uses pictures", "Needs calculation", "Takes more time"],
            correct: 1
        },
        {
            question: "Which central value divides the data into two equal parts?",
            options: ["Mean", "Mode", "Median", "Range"],
            correct: 2
        },
        {
            question: "Probability of rolling a number greater than 6 on a die?",
            options: ["1/6", "0", "1", "1/2"],
            correct: 1
        },
        {
            question: "Mode of 1, 2, 2, 3, 4?",
            options: ["1", "2", "3", "4"],
            correct: 1
        }
    ]
};

// Export for dynamic loading
window.class7Chapter3 = class7Chapter3;
