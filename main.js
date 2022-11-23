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

const pairs = [[-1,-2], [-2,-1], [-2,1], [-1,2], [+1,2], [2,1], [2,-1], [1,-2]];

// const getMoves = (currentPos) => {
//     //from our array of coordinates, take in our current position and get all the positions of our array from the current position.
//     const arrCoordinates = [];

//     for (let pair of pairs) {
//         //go through our pairs and get the correct indexes for our new position
//         const xPosition = currentPos[0] + pair[0];
//         const yPosition = currentPos[1] + pair[1];
//         const coordinateMove = [xPosition, yPosition];

//         //write some check here to make sure the move is actually valid
//         if (coordinateMove[0] >= 0 && coordinateMove[0] < 8 && 
//             coordinateMove[1] >= 0 && coordinateMove[1] < 8) {
//             arrCoordinates.push(coordinateMove)
//         }
//     }
//     console.log(arrCoordinates);
// }

const getToTarget = (currentPos, dst) => {

    const stack = [ currentPos ];

    while (stack.length > 0) {
        if (currentPos === dst) return currentPos;
        currentPos = stack.pop();
        for (let pair of pairs) {
            const xPosition = currentPos[0] + pair[0];
            const yPosition = currentPos[1] + pair[1];
            const coordinateMove = [xPosition, yPosition];

            if (coordinateMove[0] >= 0 && coordinateMove[0] < 8 && 
                coordinateMove[1] >= 0 && coordinateMove[1] < 8) {
                stack.push(coordinateMove)
            }
        }
    }
}
// getMoves([7,1]);

getToTarget([7,1], [3,3])