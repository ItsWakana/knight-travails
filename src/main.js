import { Grid } from "./DOM";

const possibleMoves = [[-1,-2], [-2,-1], [-2,1], [-1,2], [1,2], [2,1], [2,-1], [1,-2]];

const getToTarget = (currentPos, target) => {
    const queue = [ currentPos ];
    const visited = new Set();
    const backtrackObj = {};

    while (queue.length > 0) {
        const current = queue.shift();
        const currentString = `${current.x},${current.y}`;

        if (Object.keys(backtrackObj).length === 0) {
        backtrackObj[currentString] = null;
        }
        visited.add(currentString);
        if (current.x === target.x && current.y ===  target.y) {
            backtrackOrder(backtrackObj, currentString);
            return;
        }

        for (let child of possibleMoves) {
            const xPosition = current.x + child[0];
            const yPosition = current.y + child[1];
            const move = { x: xPosition, y: yPosition };
            const moveToString = `${move.x},${move.y}`;


            if (move.x >= 0 && move.x < 8 && 
                move.y >= 0 && move.y < 8) {
                if (!visited.has(moveToString)) {
                    backtrackObj[moveToString] = currentString;
                    queue.push(move);
                }
            }
        }
    }
}

const backtrackOrder = (obj, currentPosition) => {
    const fastestOrder = [];

    while (obj[currentPosition]) {
        fastestOrder.push(currentPosition);

        currentPosition = obj[currentPosition];
    }
    fastestOrder.push(currentPosition);

    console.log(`You made it in ${fastestOrder.length -1} moves, here is your path:`)
    console.log(fastestOrder.reverse());
}

const start = {
    x: 3,
    y: 3
}

const destination = {
    x: 0,
    y: 0
}

// getToTarget([7,1], [3,3]);
// getToTarget(start, destination);

const grid = new Grid(8);
grid.createGrid();