//1.
const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2001
}

console.log("Năm sản xuất cuả xe:", + car.year);

//2.
const person = {
    name: "Dung Pham",
    address: {
        street: "Duong A",
        city: "Ha Noi",
        country: "Viet Nam"
    }
}

console.log("Tên đường:", person.address.street);

//3.
const student = {
    name: "HS A",
    grades: {
        math: [7, 8],
        english: 8
    }
}
console.log("Điểm môn toán:", + student.grades.math[1]);

//4.
const settings = {
    volume: 5,
    brightness: "max"
}
settings.volume = 6;
console.log(settings);

//5.
const bike = {
    model: "fixgear",
    year: 2026
}
bike.color = 'Xanh'
console.log(bike);

//6.
employee = {
    name: "Dung",
    age: 28
}

delete employee.age;
console.log(employee);

//7.
const school = {
    classA: ["An", "Bình", "Châu"],
    classB: ["Đào", "Hương", "Giang"]
}

console.log(school);



