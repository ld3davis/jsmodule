const data = [
    {
        firstname: "Leo",
        lastname: "Davis",
        age: 44,
        address: "112 Vestige Circle",
        city: "Lafayette",
        state: "La"
    },
    {
        firstname: "Monica",
        lastname: "Davis",
        age: 45,
        address: "Governor Pleasant",
        city: "Baton Rouge",
        state: "La"
    },
    {
        firstname: "Marlon",
        lastname: "Smith",
        age: 46,
        address: "13655 W 129th PL ",
        city: "Olathe",
        state: "Ks"
    },
    {
        firstname: "Harold",
        lastname: "JeanBatiste",
        age: 52,
        address: "Alexander Circl",
        city: "Cade",
        state: "La"
    }
]

const names = data.map(x => `${x.firstname} ${x.lastname}`);
console.log(names);

const over45 = data.filter(x => x.age > 45);
console.log(over45);

const avgAge = data.reduce(((total,curVal)=> {return total += curVal.age}), 0)/data.length;
console.log(avgAge);