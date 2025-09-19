// Class 7 - Chapter 7: Congruence of Triangles
const class7Chapter7 = {
    reading: [
        {
            question: "What are congruent triangles?",
            answer: "Two triangles are congruent if they have exactly the same size and shape, i.e., corresponding sides and angles are equal."
        },
        {
            question: "What is the importance of congruence?",
            answer: "Congruence helps in proving geometric properties and solving problems involving triangles."
        },
        {
            question: "What are the criteria for congruence of triangles?",
            answer: "There are four main criteria: SSS, SAS, ASA, RHS."
        },
        {
            question: "What is SSS criterion?",
            answer: "SSS (Side-Side-Side): If three sides of one triangle are equal to three sides of another triangle, the triangles are congruent."
        },
        {
            question: "What is SAS criterion?",
            answer: "SAS (Side-Angle-Side): If two sides and the included angle of one triangle are equal to two sides and the included angle of another triangle, the triangles are congruent."
        },
        {
            question: "What is ASA criterion?",
            answer: "ASA (Angle-Side-Angle): If two angles and the included side of one triangle are equal to two angles and the included side of another triangle, the triangles are congruent."
        },
        {
            question: "What is RHS criterion?",
            answer: "RHS (Right angle-Hypotenuse-Side): In right-angled triangles, if the hypotenuse and one side of one triangle are equal to the hypotenuse and one side of another triangle, they are congruent."
        },
        {
            question: "What are corresponding sides?",
            answer: "Sides that are in the same relative position in two triangles."
        },
        {
            question: "What are corresponding angles?",
            answer: "Angles that are in the same relative position in two triangles."
        },
        {
            question: "Give an example of congruent triangles in daily life.",
            answer: "Triangles in roof trusses or identical triangular tiles."
        },
        {
            question: "How do you show two triangles are congruent using SSS?",
            answer: "Measure all three sides of both triangles and compare. If all sides are equal, triangles are congruent."
        },
        {
            question: "How do you show two triangles are congruent using SAS?",
            answer: "Measure two sides and the included angle of both triangles. If equal, triangles are congruent."
        },
        {
            question: "How do you show two triangles are congruent using ASA?",
            answer: "Measure two angles and the included side of both triangles. If equal, triangles are congruent."
        },
        {
            question: "How do you show two right-angled triangles are congruent using RHS?",
            answer: "Check the hypotenuse and one side of both triangles. If equal, triangles are congruent."
        },
        {
            question: "What is the difference between congruence and similarity?",
            answer: "Congruent triangles are identical in size and shape; similar triangles have the same shape but may differ in size."
        },
        {
            question: "Can two triangles be congruent if only two sides are equal?",
            answer: "No, at least three sides or two sides with an included angle must be equal."
        },
        {
            question: "Can two triangles be congruent if only two angles and one side are equal?",
            answer: "Yes, using ASA criterion."
        },
        {
            question: "Can right-angled triangles be congruent using hypotenuse and side?",
            answer: "Yes, this is the RHS criterion."
        },
        {
            question: "Why is it necessary to check the included angle in SAS and ASA?",
            answer: "Because the angle included between the sides ensures the shape matches exactly; otherwise, the triangles may not be congruent."
        },
        {
            question: "What is a practical application of congruence in construction?",
            answer: "Ensures structural stability by using identical triangular components."
        }
    ],
    test: [
        {
            question: "Two triangles with three sides equal are:",
            options: ["Similar", "Congruent", "Acute-angled", "Obtuse-angled"],
            correct: 1
        },
        {
            question: "Which criterion uses two sides and included angle?",
            options: ["SSS", "SAS", "ASA", "RHS"],
            correct: 1
        },
        {
            question: "ASA stands for:",
            options: ["Angle-Side-Angle", "Side-Angle-Side", "Right-Hypotenuse-Side", "Side-Side-Side"],
            correct: 0
        },
        {
            question: "RHS criterion is used for:",
            options: ["All triangles", "Right-angled triangles", "Obtuse triangles", "Equilateral triangles"],
            correct: 1
        },
        {
            question: "Triangles are congruent if:",
            options: ["All sides equal", "Two sides equal", "One side equal", "No sides equal"],
            correct: 0
        },
        {
            question: "In SAS, angle used is:",
            options: ["Any angle", "Angle included between two sides", "Opposite angle", "Right angle only"],
            correct: 1
        },
        {
            question: "Two triangles with two angles and included side equal are:",
            options: ["Similar", "Congruent", "Right-angled", "Scalene"],
            correct: 1
        },
        {
            question: "Hypotenuse is used in which criterion?",
            options: ["SSS", "SAS", "ASA", "RHS"],
            correct: 3
        },
        {
            question: "Congruent triangles have:",
            options: ["Same shape and size", "Same shape only", "Same size only", "Different shapes"],
            correct: 0
        },
        {
            question: "Difference between congruence and similarity is:",
            options: ["Shape differs", "Size differs", "Both shape and size differ", "None of these"],
            correct: 1
        }
    ]
};

// Export for dynamic loading
window.class7Chapter7 = class7Chapter7;
