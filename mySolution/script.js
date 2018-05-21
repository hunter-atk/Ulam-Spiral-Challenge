
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
const directions = [
    () => {
        return yCoordinate += 50;
    },
    () => {
        return xCoordinate += 50;
    },
    () => {
        return yCoordinate -= 50;
    },
    () => {
        return xCoordinate -= 50;
    },
]


//create spiral
const spiralInit = (x) => {
    let runSesh = 0;
    while(runSesh < 144) {
        const color = (((instanceCount-1) / x) == 0) ? 'green' : 'red';
        c.fill.style = color;
        c.font = "10px Arial";
        c.fillText(`{
            left: ${xCoordinate}, 
            top: ${yCoordinate},
            sesh: ${runSesh},
        }`, yCoordinate, xCoordinate);

        // c.fillRect(xCoordinate, yCoordinate, 50, 50);
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
        case 0:
            xCoordinate += 50;
            break;
        case 1:
            yCoordinate += 50;
            break;
        case 2:
            xCoordinate -= 50;
            break;
        case 3:
            yCoordinate -= 50;
            break;
        default:
            console.log("err");
    }
}


//helper function to change spiral direction in 'scope'
function changeDirection () {
    if(instanceCount > 1){
        directionCount++;
    }
    if(directionCount >= 4){
        directionCount = 1;
    }
    return directions.directionCount;
}


//helper function to add border to box
let addBorder = (direction) => {
    //Add border to side of new box facing passed-in spiral direction
}

spiralInit(4);

