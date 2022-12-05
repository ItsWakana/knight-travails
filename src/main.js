import { Grid } from "./DOM";

const possibleMoves = [[-1,-2], [-2,-1], [-2,1], [-1,2], [1,2], [2,1], [2,-1], [1,-2]];

export const getToTarget = (currentPos, target) => {
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
            return backtrackOrder(backtrackObj, currentString);
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

    return fastestOrder.reverse();
}

export const startRoute = (coordinate, tile) => {
    if (start.x === null && start.y === null) {
        start.x = +coordinate[0];
        start.y = +coordinate[2];
        tile.dataset.position = 'start';
        return;
    } 
    destination.x = +coordinate[0];
    destination.y = +coordinate[2];
    tile.dataset.position = 'end';
    return getToTarget(start, destination);

}

const start = {
    x: null,
    y: null
}

const destination = {
    x: null,
    y: null
}

const grid = new Grid(8);
grid.createGrid();

// ResultGrid.displayResult(8);