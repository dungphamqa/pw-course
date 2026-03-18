// 1. 
const a = 1;
const b = 5;

function multiply(a,b) {
    console.log (a*b);
}
multiply (3,4);
multiply (5,9);

// 2. 
const d = 1;
const e  = 2;
const f = 5;

function findMin(d,e,f) {
    let min = d;
    if (e<min){
        min = e
    };
    if (f<min){
        min = f
    };

    console.log (min);

}
findMin (4,3,6);
findMin (9,5,5);

// 3.
const students =[
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

function getTopStudents (students,threshold){
    let result = [];
    for (let i = 0; i <students.length; i++){
        if(students[i].score >= threshold) {
            result.push(students[i]);
       
        }
    }
    //return result; -- tham khảo trên mạng 1 cách khác
    console.log (result);

}
getTopStudents (students,threshold);
//const topStudents = getTopStudents(students,threshold); -- tham khảo trên mạng 1 cách khác
//console.log (topStudents);


//4. 
const principal = 20000;
const rate = 5;
const years = 2;

function calculateInterest (principal,rate , years){
    let total = principal + principal * rate * years/100;
    console.log (total);
}


calculateInterest(30000,10,2);

