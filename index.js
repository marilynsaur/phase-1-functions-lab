// Code your solution in this file!


function distanceFromHqInBlocks(destination) {


    let scuba = 42
    if (destination > scuba) {
        return destination - scuba;
    } else if (scuba > destination) {
        return scuba - destination;

    }

}

function distanceFromHqInFeet(block) {


    return distanceFromHqInBlocks(block) * 264;

}

function distanceTravelledInFeet(start, destination) {

    let feet = 264
    if (destination > start) {
        return (destination - start) * feet;
    } else {
        return (start - destination) * feet;
    }
}

function calculatesFarePrice(fare1, fare2) {

    if (fare2 <= 26) {
        return 'cannot travel that far' ;
    }
    else if (fare2 <= 35 && fare2 <= 40) {
        return ((fare1 - fare2) + 126) / 50;
    }
    else if (fare2 <= 45) {
        return 0;

    } else {
       return (fare2-fare1)+17;
    }

}



