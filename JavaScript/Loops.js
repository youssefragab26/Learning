let cars = ["BMW", "Volvo", "Marcedes", "Ford", "Fiat", "Audi"];
let models = ["2020", "2021", "2022", "2023", "2024", "2025"];
let colors = ["Red", "Blue", "Green", "Yellow", "Black", "White"];

for (let i = 0; i < cars.length; i++) {
    console.log(`Car: ${cars[i]}`);
    for (let j = 0; j < models.length; j++) {
        console.log(`Model: ${models[j]}`);
    }
    for (let k = 0; k < colors.length; k++) {
        console.log(`Color: ${colors[k]}`);
    }
    console.log("-----------------------------");
}