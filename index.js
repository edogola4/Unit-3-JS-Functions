// Code your solution in this file!


// distanceFromHqInBlocks
const hqBlock = 42

function distanceFromHqInBlocks(someValue){
return Math.abs(someValue - hqBlock)
}

// distanceFromHqInFeet

//  headquarters is at block 42 and 1 block = 264 feet
const feetPerBlocks = 264

function distanceFromHqInFeet(someValue){
const headQuatersInBlocks = 42
return Math.abs(someValue - headQuatersInBlocks) // Calculating the distance in blocks
}

function distanceFromHqInFeet(someValue){

 // I am  Calling the distanceFromHqInBlocks to get the block distance
    const blocks = distanceFromHqInBlocks(someValue);

// Converting the block distance to feet
    return blocks * feetPerBlocks
}

module.exports = { distanceFromHqInBlocks, distanceFromHqInFeet}


//  distanceTravelledInFeet

function distanceTravelledInFeet(start , destination){
    // Calculating the absolute difference between start and destination
    const distanceInBlocks = Math.abs(destination - start)
//  // Multiplying the difference by 264 feet (since 1 block = 264 feet)
    return distanceInBlocks * 264;

}


// calculatesFarePrice
function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    const distanceFromHqInFeet = Math.abs(destination - start) * 264;

    if (distanceFromHqInFeet <= 400){
        return 0; // first 400 feet are free
    }else if (distanceFromHqInFeet > 400 && distanceFromHqInFeet <= 2000){
        return (distanceFromHqInFeet - 400) * 0.02; // 2 cents per feet after 400 feet)
    }else if (distanceFromHqInFeet > 2000 && distanceFromHqInFeet <= 2500){
        return 25; // Flat fare for distance between 2000 and 2500 feet
    }else {
        return 'cannot travel that far'; // distances above 2500 feet
    }
  }
