const knight = 'k';

chessboard = [
    ['','','','','','','',''],
    ['','','','','','','',''],
    ['','','','','','','',''],
    ['','','','','','','',''],
    ['','','','','','','',''],
    ['','','','','','','',''],
    ['','','','','','','',''],
    ['','','','','','','',''],
]

//moves from 4,4

// const pairs = [[-1,-2], [-2,-1], [-2,1], [-1,2], [1,2], [2,1], [2,-1], [1,-2]];
const pairs = [[-1,-2], [-2,-1], [-2,1], [-1,2], [+1,2], [2,1], [2,-1], [1,-2]];

const getMoves = (currentPos) => {
    //from our array of coordinates, take in our current position and get all the positions of our array from the current position.
    const arrCoordinates = [];

    for (let pair of pairs) {
        //go through our pairs and get the correct indexes for our new position
        const first = currentPos[0] + pair[0];
        const second = currentPos[1] + pair[1];
        const coordinateMove = [first,second];

        //write some check here to make sure the move is actually valid
        if (coordinateMove[0] > 0 && coordinateMove[0] < 9) {
            arrCoordinates.push(coordinateMove)
        }
    }
    console.log(arrCoordinates)
    // console.log(arrCoordinates); //returns array of actual coordinates of the potential move

}

getMoves([3,4]);
const checkPosition = (currentMove) => {
    //function that takes in our current move
    //checks whether that move is valid on the board layout, we don't want moves going off the board


}