
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
