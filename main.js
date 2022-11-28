const possibleMoves = [[-1,-2], [-2,-1], [-2,1], [-1,2], [1,2], [2,1], [2,-1], [1,-2]];

const getToTarget = (currentPos, target) => {
    const queue = [ currentPos ];
    const visited = new Set();
    const backtrackObj = {};
    let counter = -1;
    while (queue.length > 0) {
        const current = queue.shift();
        const currentString = `${current.x},${current.y}`;

        if (Object.keys(backtrackObj).length === 0) {
        backtrackObj[currentString] = null;
        }
        counter++;
        visited.add(currentString);
        if (current.x === target.x && current.y ===  target.y) {
            // console.log(`Reached ${currentString} in ${counter} moves`);
            backtrackOrder(backtrackObj, currentPos, currentString);
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

const backtrackOrder = (obj, origin, current) => {
    const fastestOrder = [];
    const originString = `${origin.x},${origin.y}`;

    while (obj[current] != null) {
        fastestOrder.push(current);

        current = obj[current];
    }

    fastestOrder.push(current);
    console.log(fastestOrder);
}

const start = {
    x: 0,
    y: 0
}

const destination = {
    x: 3,
    y: 3
}

// getToTarget([7,1], [3,3]);
getToTarget(start, destination);