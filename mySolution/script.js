
// set up canvas
const canvas = document.querySelector('canvas');
const width = 600;
const height = 600;

canvas.width = width;
canvas.height = height;

const c = canvas.getContext('2d');


//declare global variables
let numberCount = 0;
let instanceCount = 0;
let xCoordinate = 0;
let yCoordinate = 0;


//create spiral
(function createNumberSpiral (x) {
    const color = (numberCount / x == 0) ? 'green' : 'red';
    c.fill.style = color;
    c.fillRect(xCoordinate, yCoordinate, 50, 50);
    instanceCount++;
    numberCount++;
    changeDirection();
    //return final result
})()


//helper function to identify spiral 'scope'
let round = 0;
let waitTime = 1;
let waitCount = 0;

function evolveScope(){
    if (instanceCount < 1){
        return changeDirection()
    }
    waitCount++;
    if (waitCount == waitTime) {
        round++;
        waitCount = 0;
        changeDirection();
    }
    if (round == 2){
        round = 0;
        waitTime++;
    }
}


//helper function to change spiral direction in 'scope'
const directions = {
    1: function () => {
        return xCoordinate += 50;
    },
    2: function () => {
        return yCoordinate += 50;
    },
    3: function () => {
        return xCoordinate -= 50;
    },
    4: function () => {
        return yCoordinate -= 50;
    }
}

let directionCount = 1; 
function changeDirection () {
    if(instanceCount > 0){
        directionCount++;
    }
    if(directionCount > 4){
        directionCount = 1;
    }
    return directions.directionCount();
}




//helper function to add border to box
let addBorder = (direction) => {
    //Add border to side of new box facing passed-in spiral direction
}