function totalSales(shirt, pant, shoe) {
    //if other variable type is used other than number
    if (typeof shirt != 'number' || typeof pant != 'number' || typeof shoe != 'number') {
        return 'Error! Please Enter a number';
    }
    //if negative number is given
    if (shirt < 0 || pant < 0 || shoe < 0) {
        return 'Please Enter a positive number';
    }
    const perShirtPrice = 100;
    const perPantPrice = 200;
    const perShoePrice = 500;
    // calculating individual price
    const shirtSells = shirt * perShirtPrice;
    const pantSells = pant * perPantPrice;
    const shoeSells = shoe * perShoePrice;
    // calculating totalprice
    const total = shirtSells + pantSells + shoeSells;
    return total;
}
const price = totalSales(5, 5, 2);
console.log(price);