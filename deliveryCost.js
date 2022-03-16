//number of tshirts
function deliveryCost(tshirt) {
    //if other variable type is used other than number
    if (typeof tshirt != 'number') {
        return 'Error! Please Enter a number';
    }
    //if negative number is given
    if (tshirt < 0) {
        return 'Please Enter a positive number';
    }
    //deliverycost of tshirt according to number
    first100TshirtPrice = 100;
    second100TshirtPrice = 80;
    restTshirtPrice = 50;
    //100 or less tshirt deliverycost
    if (tshirt <= 100) {
        const cost = tshirt * first100TshirtPrice;
        return cost;
    }
    //200 or less tshirt delivery cost
    else if (tshirt <= 200) {
        const first100Tshirt = 100 * first100TshirtPrice;
        const remainingTshirt = tshirt - 100;
        const second100Tshirt = remainingTshirt * second100TshirtPrice;
        const cost = first100Tshirt + second100Tshirt;
        return cost;
    }
    //more than 200 tshirt delivery cost
    else {
        const first100Tshirt = 100 * first100TshirtPrice;
        const second100Tshirt = 100 * second100TshirtPrice;
        const remainingTshirt = tshirt - 200;
        const restTshirt = remainingTshirt * restTshirtPrice;
        const cost = first100Tshirt + second100Tshirt + restTshirt;
        return cost;

    }
}
const tshirtcost = deliveryCost(273);
console.log(tshirtcost);