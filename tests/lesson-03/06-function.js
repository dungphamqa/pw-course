// 1. 
function multiply(a, b) {
    console.log(a * b);
}
multiply(3, 4);
multiply(5, 9);

// 2. 
function findMin(d, e, f) {
    let min = d;
    if (e < min) {
        min = e
    };
    if (f < min) {
        min = f
    };

    return min;

}
let result1 = findMin(3, 9, 1);
let result2 = findMin(9, 3, 6);
console.log("Kết quả 1:", result1);
console.log("Kết quả 2:", result2);

// 3.
const students = [
    {
        name: "A",
        score: 5
    },
    {
        name: "B",
        score: 7
    },
    {
        name: "C",
        score: 9
    }
];
const threshold = 6;

function getTopStudents(students, threshold) {
    let result = [];
    for (let i = 0; i < students.length; i++) {
        if (students[i].score >= threshold) {
            result.push(students[i].name);

        }
    }
    return result;

}
const topStudents = getTopStudents(students, threshold);
console.log(topStudents);


//4. 
function calculateInterest(principal, rate, years) {
    let total = principal + principal * rate * years / 100;
    return total;
}

let result = calculateInterest(1000, 5, 2);
console.log("Tổng số tiền:", result);

