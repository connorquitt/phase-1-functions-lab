const scub = 42;
let blocks;
let feet;
function distanceFromHqInBlocks(pickup) {
    let blocks;
    if(pickup >= scub) {
        let blocks = (pickup - scub)
        return blocks;
    } else {
        let blocks =(scub - pickup)
        return blocks;
    }
}

function distanceFromHqInFeet(pickup) {
    if(pickup >= scub) {
        let feet = (pickup - scub) * (264)
        return feet;
    } else {
        let feet = (scub - pickup) * (264)
        return feet;
    }
}

function distanceTravelledInFeet(start, end) {
    if(start >= end) {
        return (start - end) * 264;
    } else {
        return (end - start) * 264;
    }
}


function calculatesFarePrice(start, end) {
   let distance = distanceTravelledInFeet(start, end);
   if(distance<=400) {
        return 0;
   } else if(distance <=2000) {
        return (distance - 400) * .02;
   } else if(distance <=2500) {
    return 25;
   } else {
    return "cannot travel that far";
   }
}
