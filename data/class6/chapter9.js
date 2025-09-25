// Class 6 - Chapter 9: Data Handling
const class6Chapter9 = {
    reading: [
        {
            question: "What is data?",
            answer: "Data is a collection of numbers, facts, or information that can be organized and studied."
        },
        {
            question: "What is data handling?",
            answer: "Data handling is the process of collecting, organizing, and representing data in a meaningful way."
        },
        {
            question: "What is a tally mark?",
            answer: "Tally marks are quick marks used to record and count data. Every group of five is shown as ||||."
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
            question: "What is the advantage of a pictograph?",
            answer: "A pictograph is simple and easy to understand because it uses pictures."
        },
        {
            question: "What is the advantage of a bar graph?",
            answer: "A bar graph makes it easy to compare data visually by looking at the height of the bars."
        },
        {
            question: "What is the mean of data?",
            answer: "The mean is the average of the data, calculated by dividing the sum of all values by the number of values."
        },
        {
            question: "Find the mean of 2, 4, 6, 8, 10.",
            answer: "(2+4+6+8+10) ÷ 5 = 30 ÷ 5 = 6."
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
            question: "Find the mode of 2, 3, 4, 4, 5, 6.",
            answer: "The mode is 4 because it appears most often."
        },
        {
            question: "Find the median of 3, 5, 7.",
            answer: "The median is 5 because it is the middle value."
        },
        {
            question: "What is probability?",
            answer: "Probability is the chance of an event happening. It is written as a fraction between 0 and 1."
        },
        {
            question: "What is the probability of getting a head in tossing a coin?",
            answer: "The probability is 1/2."
        },
        {
            question: "What is the probability of rolling a 3 on a die?",
            answer: "The probability is 1/6."
        },
        {
            question: "Why do we use graphs?",
            answer: "Graphs make it easier to understand data and compare values quickly."
        },
        {
            question: "Give an example of data collection in daily life.",
            answer: "Collecting marks of students in a class test is an example of data collection."
        },
        {
            question: "How can you represent the marks of 5 students?",
            answer: "We can use a table, pictograph, or bar graph to represent their marks."
        }
    ],

    broad: [
        {
            question: "Draw a tally chart for 12 students liking three different fruits: Apple(5), Banana(4), Mango(3).",
            answer: "Apple: |||||, Banana: ||||, Mango: |||"
        },
        {
            question: "Represent the marks of students (12, 15, 18, 15, 20) using a frequency table.",
            answer: "Marks: 12(1), 15(2), 18(1), 20(1)"
        },
        {
            question: "Draw a pictograph for number of books read by students: A(3), B(5), C(2).",
            answer: "Use one book symbol to represent one book; A: 3 symbols, B: 5 symbols, C: 2 symbols."
        },
        {
            question: "Draw a bar graph for the data: Monday(3), Tuesday(5), Wednesday(4).",
            answer: "Draw bars with heights 3, 5, 4 for Monday, Tuesday, Wednesday respectively."
        },
        {
            question: "Find the mean, median, and mode of 5, 7, 7, 8, 10.",
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
            question: "Find the mean of 5, 10, 15.",
            options: ["5", "10", "15", "30"],
            correct: 1
        },
        {
            question: "Find the mode of 2, 2, 3, 4.",
            options: ["2", "3", "4", "5"],
            correct: 0
        },
        {
            question: "Find the median of 1, 3, 5.",
            options: ["1", "3", "5", "4"],
            correct: 1
        },
        {
            question: "What is the probability of getting an even number on a die?",
            options: ["1/2", "1/3", "1/6", "1/4"],
            correct: 0
        },
        {
            question: "Which is an advantage of a pictograph?",
            options: ["Difficult to understand", "Uses pictures", "Takes more time", "Needs calculations"],
            correct: 1
        },
        {
            question: "Which central value divides the data into two equal parts?",
            options: ["Mean", "Mode", "Median", "Range"],
            correct: 2
        },
        {
            question: "What is the probability of rolling a number greater than 6 on a die?",
            options: ["1/6", "0", "1", "1/2"],
            correct: 1
        },
        {
            question: "What is the mode of 1, 2, 2, 3, 4?",
            options: ["1", "2", "3", "4"],
            correct: 1
        }
    ]
};

// Export for dynamic loading
window.class6Chapter9 = class6Chapter9;
