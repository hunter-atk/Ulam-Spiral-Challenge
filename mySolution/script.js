
// set up canvas
const canvas = document.querySelector('canvas');
const width = 600;
const height = 600;

canvas.width = width;
canvas.height = height;

const c = canvas.getContext('2d');


//declare global variables
let instanceCount = 1;
// let numberCount = 1;

let round = 0;
let waitTime = 1;
let waitCount = 0;

let xCoordinate = 300;
let yCoordinate = 300;

let directionCount = 1;
const directions = {
    1: () => {
        return xCoordinate += 50;
    },
    2: () => {
        return yCoordinate += 50;
    },
    3: () => {
        return xCoordinate -= 50;
    },
    4: () => {
        return yCoordinate -= 50;
    }
}


//create spiral
function createNumberSpiral (x) {
    let runSesh = 0;
    while(runSesh < 144){
        let color = (((instanceCount-1) / x) == 0) ? 'green' : 'red';
        c.fill.style = color;
        c.fillRect(xCoordinate, yCoordinate, 50, 50);
        evolveScope();
        instanceCount++;
        // numberCount += x;
        runSesh++;
    }
}


//helper function to identify spiral 'scope'
function evolveScope(){
    if (instanceCount == 1){
        return changeDirection()
    }
    waitCount++;
    if (waitCount == waitTime) {
        round++;
        waitCount = 0;
        changeDirection();
    } else {
        changeCoordinates();
    }
    if (round == 2){
        round = 0;
        waitTime++;
    }
}

//helper function to change coordinates WITHOUT changing direction
function changeCoordinates (){
    switch(directionCount) {
        case 1:
            xCoordinate += 50;
            break;
        case 2:
            yCoordinate += 50;
            break;
        case 3:
            xCoordinate -= 50;
            break;
        case 4:
            yCoordinate -= 50;
    }
}


//helper function to change spiral direction in 'scope'
function changeDirection () {
    if(instanceCount > 1){
        directionCount++;
    }
    if(directionCount > 4){
        directionCount = 1;
    }
    return directions.directionCount;
}


//helper function to add border to box
let addBorder = (direction) => {
    //Add border to side of new box facing passed-in spiral direction
}

createNumberSpiral(4);