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
const seerConvert = seerToMon(-50);
console.log(seerConvert);
