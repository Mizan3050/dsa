const items = [{name: "Meezan", roll_no: 1}, {name: "Fiazan", roll_no: 2}, {name: "saniya", roll_no: 3}];

const mappedItems = items.map((item) => {
    nameNam = item.name,
    roll = item.roll_no
    return ({nameNam, roll})
})

console.log(mappedItems);