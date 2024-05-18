//Part 2: Multi-Dimensional Arrays and Tuples - Student Grades
var student = {
    name: "Bisma",
    grades: [90, 80, 95, 88, 98]
};
console.log(student.name);
console.log(student.grades);
//2. Create an array named students containing at least three student objects. Each student object should include a name and an array of grades.
var students = [
    {
        name: "Ahsen",
        grades: [99, 81, 96, 90, 95]
    },
    {
        name: "Fatima",
        grades: [95, 80, 70, 85, 92]
    },
    {
        name: "Sikandar",
        grades: [78, 82, 85, 88, 85]
    }
];
console.log("Name: ".concat(student.name));
console.log("Grades: ".concat(student.grades));
//3. Implement a function named calculateAverageGrade that takes a student's grades as input and returns the average grade for that student.
function calculateAverageGrade(grades) {
    if (grades.length === 0) {
        return 0;
    }
    var total = 0;
    for (var i = 0; i < grades.length; i++) {
        total += grades[i];
    }
    var average = total / grades.length;
    return average;
}
var studentGrades = [85, 88, 70, 92, 90];
var averageGrade = calculateAverageGrade(studentGrades);
console.log("The average grade is ".concat(averageGrade));
//4. Display each student's name and average grade. Iterate through the students array,calculate the average grade for each student using the calculateAverageGrade function, and print their name and average grade.
function calculateAverageGrd(grades) {
    if (grades.length === 0) {
        return 0;
    }
    var total = 0;
    for (var i = 0; i < grades.length; i++) {
        total += grades[i];
    }
    var average = total / grades.length;
    return average;
}
;
var Students = [
    { name: "Ahsen", grades: [99, 81, 96, 90, 95] },
    { name: "Fatima", grades: [95, 80, 70, 85, 92] },
    { name: "Sikandar", grades: [78, 82, 85, 88, 85] }
];
for (var i = 0; i < students.length; i++) {
    var student_1 = students[i];
    var averageGrade_1 = calculateAverageGrd(student_1.grades);
    console.log("".concat(student_1.name, "'s average grade is ").concat(averageGrade_1));
}
;
