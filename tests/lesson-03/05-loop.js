// 1.
let sum = 0 // Khia báo biến let, do sum có thay đổi
for(let i= 0; i<=100; i++){
    sum = sum + i;
}
console.log ("tổng từ 1 đến 100:", sum);

// 3. 
let arr=[];
for (let i = 1; i<= 99; i++){
    if (i %2===1)
    arr.push(i);
}

console.log ("Mảng số lẻ:", arr);

//4. 
for( let i= 1; i<=10; i++){
    console.log("user"+`${i}`+"@example");
}

//5. 
let revenue =[
    {
        "month": 1,
        "total": 101
    },
    {
        "month": 2,
        "total": 102
    },
    {
        "month": 3,
        "total": 103
    },
    {
        "month": 4,
        "total": 104
    },
    {
        "month": 5,
        "total": 105
    },
    {
        "month": 6,
        "total": 106
    },
    {
        "month": 7,
        "total": 107
    },
    {
        "month": 8,
        "total": 108
    },
    {
        "month": 9,
        "total": 109
    },
    {
        "month": 10,
        "total": 110
    },
    {
        "month": 11,
        "total": 111
    },
    {
        "month": 12,
        "total": 112
    }
];

let sumArr = 0;
for (let i = 0; i< revenue.length; i++){
    sumArr = sumArr + revenue[i].total;
}

console.log (sumArr);

//2.
for(let i= 2; i<= 9; i++){
   console.log ("Bảng cửu chương:", + i);
   for(let j= 1; j<= 10; j++) 
    {
        console.log (i + "x" + j + "=" + (i*j));
    }
}
