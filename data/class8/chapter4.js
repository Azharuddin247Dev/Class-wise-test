// Class 8 - Chapter 4: Practical Geometry
const class8Chapter4 = {
    reading: [
        {
            question: "What is practical geometry?",
            answer: "Practical geometry involves constructing geometric figures using a ruler, compass, and protractor."
        },
        {
            question: "Tools used in practical geometry?",
            answer: "Ruler, compass, protractor, set square, divider, and pencil."
        },
        {
            question: "What is a perpendicular bisector?",
            answer: "A line that divides a line segment into two equal parts at 90°."
        },
        {
            question: "How to construct a perpendicular bisector of a line segment?",
            answer: "Draw arcs from both endpoints with radius more than half the segment, join intersections to form the bisector."
        },
        {
            question: "What is an angle bisector?",
            answer: "A line that divides an angle into two equal parts."
        },
        {
            question: "How to construct an angle bisector?",
            answer: "Draw an arc from the angle vertex, mark intersections on both arms, draw arcs from these points, and join intersection with vertex."
        },
        {
            question: "How to construct a triangle given three sides (SSS)?",
            answer: "Draw one side, use compass to draw arcs from endpoints with radii equal to other sides, intersection gives third vertex."
        },
        {
            question: "How to construct a triangle given two sides and included angle (SAS)?",
            answer: "Draw one side, construct the given angle at an endpoint, measure the second side from that endpoint, join to form triangle."
        },
        {
            question: "How to construct a triangle given base, sum of other two sides, and difference of other two sides (SSS)?",
            answer: "Use arcs from endpoints representing sum and difference to locate third vertex."
        },
        {
            question: "Constructing quadrilaterals?",
            answer: "Use sides, diagonals, and angles as per given conditions using ruler and compass."
        },
        {
            question: "How to draw a circle given center and radius?",
            answer: "Place compass at center, set radius, draw the circle by rotating compass."
        },
        {
            question: "What is the importance of constructions?",
            answer: "Constructions are precise, avoid measurements errors, and are used in engineering, architecture, and design."
        },
        {
            question: "How to draw a line parallel to a given line through a point?",
            answer: "Use compass to copy angle or use perpendicular bisector method."
        },
        {
            question: "How to draw a perpendicular to a line from a point outside it?",
            answer: "Draw arcs from the point intersecting the line, then construct perpendicular bisector of that segment."
        },
        {
            question: "What is the difference between theoretical and practical geometry?",
            answer: "Theoretical geometry involves properties and proofs; practical geometry involves actual drawing and constructions."
        },
        {
            question: "How to divide a line segment into equal parts?",
            answer: "Use compass to step off equal lengths along a ray drawn from one end, join the last point to the other end, draw parallels to divide."
        },
        {
            question: "How to construct a triangle given perimeter and base?",
            answer: "Use compass to measure sides corresponding to perimeter conditions and draw remaining sides from base endpoints."
        },
        {
            question: "Can constructions be done without measuring angles?",
            answer: "Yes, using compass arcs, perpendiculars, and bisectors."
        },
        {
            question: "Example of practical geometry in real life?",
            answer: "Engineering drawings, map drawing, designing playgrounds, and architecture."
        },
        {
            question: "What is the key principle in practical geometry?",
            answer: "Use compass and straightedge to create precise constructions without relying solely on measurements."
        }
    ],
    test: [
        {
            question: "Which tool is used to draw circles?",
            options: ["Ruler", "Compass", "Protractor", "Set square"],
            correct: 1
        },
        {
            question: "A line dividing another line segment into two equal parts at 90° is called?",
            options: ["Angle bisector", "Perpendicular bisector", "Parallel line", "Chord"],
            correct: 1
        },
        {
            question: "How to construct an angle bisector?",
            options: ["Draw arcs from vertex and intersections", "Draw a perpendicular", "Use ruler only", "Use protractor only"],
            correct: 0
        },
        {
            question: "Given three sides of a triangle, the construction method is?",
            options: ["SAS", "SSS", "ASA", "RHS"],
            correct: 1
        },
        {
            question: "Which tool is used to measure angles?",
            options: ["Ruler", "Compass", "Protractor", "Divider"],
            correct: 2
        },
        {
            question: "A quadrilateral construction requires?",
            options: ["Only sides", "Only angles", "Sides, angles, or diagonals depending on conditions", "None"],
            correct: 2
        },
        {
            question: "How to draw a line parallel to a given line through a point?",
            options: ["Use protractor to measure angle", "Use compass and arc method", "Draw randomly", "Use ruler only"],
            correct: 1
        },
        {
            question: "Practical geometry is different from theoretical geometry because?",
            options: ["It uses proofs", "It involves actual drawing", "It is abstract", "It uses formulas only"],
            correct: 1
        },
        {
            question: "Dividing a line segment into equal parts involves?",
            options: ["Using ruler only", "Using arcs and parallel lines", "Using protractor", "Using compass only"],
            correct: 1
        },
        {
            question: "Perpendicular from a point outside a line can be drawn using?",
            options: ["Compass arcs", "Ruler only", "Protractor only", "Set square only"],
            correct: 0
        }
    ]
};

// Export for dynamic loading
window.class8Chapter4 = class8Chapter4;
