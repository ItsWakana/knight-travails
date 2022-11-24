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

const getToTarget = (currentPos, target) => {

    const stack = [ currentPos ];
    const visited = new Set();

    while (stack.length > 0) {
        console.log(currentPos);
        if (currentPos[0] === target[0] && currentPos[1] ===  target[1]) {
            return currentPos;
        }

        currentPos = stack.pop();
        for (let pair of pairs) {
            const xPosition = currentPos[0] + pair[0];
            const yPosition = currentPos[1] + pair[1];
            const coordinateMove = [xPosition, yPosition];
            
            if (coordinateMove[0] >= 0 && coordinateMove[0] < 8 && 
                coordinateMove[1] >= 0 && coordinateMove[1] < 8) {
                if (visited.has(coordinateMove)) continue;
                stack.push(coordinateMove);
                visited.add(coordinateMove);
            }
        }
    }
}

getToTarget([7,1], [3,3]);