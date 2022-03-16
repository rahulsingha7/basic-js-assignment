// problem-1
function seerToMon(seer) {
    //if other variable type is used other than number
    if (typeof seer != 'number') {
        return 'Error! please Enter a number';
    }
    //if negative number is given
    if (seer < 0) {
        return 'Please Enter a positive number';
    }
    // converting seer to Mon
    const Mon = seer / 40;
    return Mon;
}
const seerConvert = seerToMon(50);
console.log(seerConvert);

//Problem-2
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

//Problem - 3
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
const tshirtcost = deliveryCost(725);
console.log(tshirtcost);

//Problem - 4


function perfectFriend(friends) {
    if (friends.length == 0) {
        return 'Error! Please give valid input';
    }
    for (let element of friends) {
        if (element.length == 5) {
            return element;
        }

    }
}
const friendName = perfectFriend(['sourav', 'sachin', 'ahad', 'akash', 'rohan', 'dipbijoy']);
console.log(friendName);
