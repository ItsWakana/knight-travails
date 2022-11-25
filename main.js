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
    const stack = [ currentPos ];
    const visited = new Set();

    while (stack.length > 0) {
        const current = stack.pop();
        const currentString = `${current.x},${current.y}`;
        // if (visited.has(currentString)) continue;
        console.log(currentString);
        visited.add(currentString);
        if (current.x === target.x && current.y ===  target.y) {
            return current;
        }

        for (let child of possibleMoves) {
            const xPosition = current.x + child[0];
            const yPosition = current.y + child[1];
            const move = { x: xPosition, y: yPosition };
            const moveToString = `${move.x},${move.y}`;


            if (move.x >= 0 && move.x < 8 && 
                move.y >= 0 && move.y < 8) {
                // visited.add(moveToString);
                if (!visited.has(moveToString)) {
                    stack.push(move);
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
    x: 3,
    y: 3
}

// getToTarget([7,1], [3,3]);
getToTarget(start, destination);