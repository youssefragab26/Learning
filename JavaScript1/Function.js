function zakat() {
    let amount = 100000;
    let zakat = amount * 0.025;
    console.log(zakat);
}
zakat();


function pro(price, tax, ads){
    let total = price + tax + ads;
    return total;
}
let x = pro(prompt('Enter the price'), prompt("Enter the tax"), prompt("Enter the ads"));
document.write(x);



