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

const possibleMoves = [[-1,-2], [-2,-1], [-2,1], [-1,2], [1,2], [2,1], [2,-1], [1,-2]];

const getToTarget = (currentPos, target) => {
    const queue = [ currentPos ];
    const visited = new Set();
    
    let counter = -1;
    while (queue.length > 0) {
        const current = queue.shift();
        const currentString = `${current.x},${current.y}`;
        console.log(currentString);
        counter++;
        visited.add(currentString);
        if (current.x === target.x && current.y ===  target.y) {
            console.log(`Reached ${currentString} in ${counter} moves`);
            return current;
        }

        for (let child of possibleMoves) {
            const xPosition = current.x + child[0];
            const yPosition = current.y + child[1];
            const move = { x: xPosition, y: yPosition };
            const moveToString = `${move.x},${move.y}`;


            if (move.x >= 0 && move.x < 8 && 
                move.y >= 0 && move.y < 8) {
                if (!visited.has(moveToString)) {
                    queue.push(move);
                }
            }
        }
    }
}

const start = {
    x: 7,
    y: 1
}

const destination = {
    x: 5,
    y: 0
}

// getToTarget([7,1], [3,3]);
getToTarget(start, destination);