// Class 6 - Chapter 4: Basic Geometrical Ideas
const class6Chapter4 = {
    reading: [
        {
            question: "What is a point in geometry?",
            answer: "A point is an exact location in space. It has no length, breadth, or thickness."
        },
        {
            question: "How is a point represented?",
            answer: "A point is usually represented by a dot and named with a capital letter like A, B, C."
        },
        {
            question: "What is a line?",
            answer: "A line is a straight path that extends endlessly in both directions. It has no endpoints."
        },
        {
            question: "What is a line segment?",
            answer: "A line segment is a part of a line that has two endpoints."
        },
        {
            question: "What is a ray?",
            answer: "A ray is a part of a line that has one endpoint and extends endlessly in one direction."
        },
        {
            question: "What are intersecting lines?",
            answer: "Two lines that cross each other at a point are called intersecting lines."
        },
        {
            question: "What are parallel lines?",
            answer: "Two lines in a plane that never meet, however far they are extended, are called parallel lines."
        },
        {
            question: "What is a curve?",
            answer: "A curve is a drawing that is not necessarily straight. It can be open or closed."
        },
        {
            question: "What is a polygon?",
            answer: "A polygon is a closed figure formed by line segments. Examples: triangle, square, pentagon."
        },
        {
            question: "What is a triangle?",
            answer: "A triangle is a polygon with three sides, three vertices, and three angles."
        },
        {
            question: "What is a quadrilateral?",
            answer: "A quadrilateral is a polygon with four sides, four vertices, and four angles."
        },
        {
            question: "What is a circle?",
            answer: "A circle is a set of points in a plane that are at the same distance from a fixed point called the center."
        },
        {
            question: "What is the radius of a circle?",
            answer: "The radius is the distance from the center of the circle to any point on it."
        },
        {
            question: "What is the diameter of a circle?",
            answer: "The diameter is the longest chord of the circle, passing through the center. Diameter = 2 × radius."
        },
        {
            question: "What is a chord of a circle?",
            answer: "A chord is a line segment that joins two points on the circle."
        },
        {
            question: "What is the boundary of a circle called?",
            answer: "The boundary of a circle is called its circumference."
        },
        {
            question: "What is the center of a circle?",
            answer: "The center of a circle is the fixed point that is equidistant from all points on the circle."
        },
        {
            question: "Name a polygon with 5 sides.",
            answer: "A polygon with 5 sides is called a pentagon."
        },
        {
            question: "Name a polygon with 6 sides.",
            answer: "A polygon with 6 sides is called a hexagon."
        },
        {
            question: "What is the difference between open and closed figures?",
            answer: "An open figure does not enclose any space, while a closed figure forms an enclosed region."
        }
    ],

    broad: [
        {
            question: "Draw a triangle, a quadrilateral, and a pentagon and identify their sides and vertices.",
            answer: "Triangle: 3 sides, 3 vertices\nQuadrilateral: 4 sides, 4 vertices\nPentagon: 5 sides, 5 vertices"
        },
        {
            question: "Draw a circle, mark the center, radius, diameter, and a chord.",
            answer: "Center marked as O, radius = distance from O to any point on circle, diameter = longest chord passing through O, chord = any line joining 2 points on circle"
        },
        {
            question: "Identify intersecting and parallel lines in a diagram.",
            answer: "Intersecting lines meet at a point; parallel lines never meet no matter how far extended."
        },
        {
            question: "Classify these shapes as open or closed: line, ray, polygon, curve.",
            answer: "Line – open, Ray – open, Polygon – closed, Curve – can be open or closed"
        },
        {
            question: "Name polygons with 3, 4, 5, and 6 sides.",
            answer: "3 sides – Triangle, 4 sides – Quadrilateral, 5 sides – Pentagon, 6 sides – Hexagon"
        }
    ],

    broadTest: [
        {
            question: "A polygon with 5 sides is called?",
            options: ["Triangle", "Pentagon", "Hexagon", "Quadrilateral"],
            correct: 1
        },
        {
            question: "The longest chord of a circle is called?",
            options: ["Radius", "Chord", "Diameter", "Circumference"],
            correct: 2
        },
        {
            question: "Two lines that never meet are called?",
            options: ["Intersecting", "Parallel", "Perpendicular", "Curves"],
            correct: 1
        },
        {
            question: "A closed figure made of line segments is called?",
            options: ["Curve", "Polygon", "Ray", "Chord"],
            correct: 1
        },
        {
            question: "The fixed point in the center of a circle is called?",
            options: ["Radius", "Chord", "Center", "Diameter"],
            correct: 2
        }
    ],

    test: [
        {
            question: "A line segment has:",
            options: ["No endpoints", "One endpoint", "Two endpoints", "Many endpoints"],
            correct: 2
        },
        {
            question: "A ray has:",
            options: ["No endpoints", "One endpoint", "Two endpoints", "Many endpoints"],
            correct: 1
        },
        {
            question: "Two lines that never meet are called:",
            options: ["Intersecting lines", "Parallel lines", "Perpendicular lines", "Curves"],
            correct: 1
        },
        {
            question: "A triangle has:",
            options: ["2 sides", "3 sides", "4 sides", "5 sides"],
            correct: 1
        },
        {
            question: "A polygon with 6 sides is called:",
            options: ["Pentagon", "Hexagon", "Heptagon", "Octagon"],
            correct: 1
        },
        {
            question: "The longest chord of a circle is:",
            options: ["Radius", "Arc", "Diameter", "Circumference"],
            correct: 2
        },
        {
            question: "The boundary of a circle is called:",
            options: ["Radius", "Circumference", "Diameter", "Chord"],
            correct: 1
        },
        {
            question: "Which of these is a quadrilateral?",
            options: ["Triangle", "Square", "Pentagon", "Hexagon"],
            correct: 1
        },
        {
            question: "A closed figure made of line segments is called:",
            options: ["Curve", "Polygon", "Ray", "Chord"],
            correct: 1
        },
        {
            question: "The fixed point in the center of a circle is called:",
            options: ["Radius", "Chord", "Center", "Diameter"],
            correct: 2
        }
    ]
};

// Export for dynamic loading
window.class6Chapter4 = class6Chapter4;
