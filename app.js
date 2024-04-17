console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function printOdd(count){
   if(count < 0){
    for(let i = 1; i >= count; i--){
        if(i % 2 != 0){
            console.log(i);
        }
    }
   } else {
    for (let i = 1; i <= count; i++){
        if(i % 2 != 0){
            console.log(i);
        }
      }
    }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");


function canDrive(userName, age){
    if(!userName || !age){
        console.log("Please provide both name and age.");
        return;
    }
   let aboveSixteen = `Congrats ${userName}, you can drive!`;
let belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`;

    if(age < 16){
        console.log(belowSixteen);
    } else{
        console.log(aboveSixteen);
    }
}

console.log("EXERCISE 3:\n==========\n");


function whatQuadrant(x, y){
    if (x === 0 && y === 0) {
        console.log("(0, 0) is the origin.");
    } else if (x === 0) {
        console.log(`(${x}, ${y}) is on the y axis.`);
    } else if (y === 0) {
        console.log(`(${x}, ${y}) is on the x axis.`);
    } else if (x > 0 && y > 0) {
        console.log(`(${x}, ${y}) is in Quadrant 1.`);
    } else if (x < 0 && y > 0) {
        console.log(`(${x}, ${y}) is in Quadrant 2.`);
    } else if (x < 0 && y < 0) {
        console.log(`(${x}, ${y}) is in Quadrant 3.`);
    } else {
        console.log(`(${x}, ${y}) is in Quadrant 4.`);
    }
}

console.log("EXERCISE 4:\n=============\n");


function triangleType(side1, side2, side3) {
    if (side1 + side2 <= side3 || side1 + side3 <= side2 || side2 + side3 <= side1) {
        console.log(`Invalid triangle`);
    } else if (side1 === side2 && side2 === side3) {
        console.log(`Equilateral triangle`);
    } else if (side1 === side2 || side1 === side3 || side2 === side3) {
        console.log(`Isosceles triangle`);
    } else {
        console.log(`Scalene triangle`);
    }
}


console.log("EXERCISE 5:\n===========\n");

function dataUsage(planLimit, day, usage) {
    let daysRemaining = 30 - day;
    let averageDailyUsage = usage / day;
    let remainingData = planLimit - usage;
    let maxDailyUsageToStayBelowPlan = remainingData / daysRemaining;

    console.log(`${day} days used, ${daysRemaining} days remaining`);
    console.log(`Average daily use: ${averageDailyUsage.toFixed(3)} GB/day`);

    if (averageDailyUsage > planLimit) {
        let excessUsage = usage - (planLimit * day);
        console.log(`You are EXCEEDING your average daily use (${averageDailyUsage.toFixed(3)} GB/day),`);
        console.log(`continuing this high usage, you'll exceed your data plan by`);
        console.log(`${excessUsage.toFixed(1)} GB.`);
        console.log(`To stay below your data plan, use no more than ${maxDailyUsageToStayBelowPlan.toFixed(2)} GB/day.`);
    } else {
        console.log(`You are within your data plan.`);
        console.log(`You can afford to use up to ${maxDailyUsageToStayBelowPlan.toFixed(2)} GB/day.`);
    }
}

