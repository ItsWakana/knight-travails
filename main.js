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
    // const stack = [ currentPos ];
    const stack = [ currentPos ];
    const visited = new Set();

    while (stack.length > 0) {
        const current = stack.pop();
        console.log(current);
        if (visited.has(current)) continue;
        if (current.x === target.x && current.y ===  target.y) {
            console.log(current);
            return current;
        }

        for (let pair of pairs) {
            const xPosition = current.x + pair[0];
            const yPosition = current.y + pair[1];
            const move = { x: xPosition, y: yPosition };
            
            // if (visited.has(move)) continue;
            // if (coordinateMove[0] >= 0 && coordinateMove[0] < 8 && 
            //     coordinateMove[1] >= 0 && coordinateMove[1] < 8) {

            //     if (!visited.has(coordinateMove)) {
            //         visited.add(coordinateMove);
            //         stack.push(coordinateMove);
            //     }
            // }

            if (move.x >= 0 && move.x < 8 && 
                move.y >= 0 && move.y < 8) {

                visited.add(move);
                stack.push(move);
            }
        }
    }
}

const start = {
    x: 7,
    y: 1
}

const dst = {
    x: 3,
    y: 3
}

// getToTarget([7,1], [3,3]);
getToTarget(start, dst);