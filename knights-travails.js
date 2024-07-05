function knightMoves(start, target) {

    //define the possible knight moves from a given position
    //the knight has up to 8 moves from a square

    const knightMoves = [ [2,1], [1,2], [-1,2], [-2,1], [-2,-1], [-1,-2], [1,-2], [2,-1] ];

    //function to check if a given move remains within the board

    function isWithinBoard(x, y) {

        return x >= 0 && x < 8 && y>= 0 && y < 8;

    }


    //function to find the shortest path from start to target

    function bfs(start, target) {

        const queue = [[start]];
        const visited = new Set();
        visited.add(start.toString());

        while (queue.length > 0) {
            const path = queue.shift();
            const [x, y] = path[path.length - 1];

            if(x === target[0] && y === target[1]){
                return path;
            }

            for (const [dx, dy] of knightMoves) {
                const newX = x + dx;
                const newY = y + dy;

                if(isWithinBoard(newX, newY) && !visited.has([newX, newY].toString())) {
                    visited.add([newX, newY].toString());
                    queue.push([...path, [newX, newY]]);
                }
            }
        }

    }


    return ( 
        console.log(`You made it in ${bfs(start, target).length - 1} moves. Here is your path: `), bfs(start, target));

}

//console.log(knightMoves([0, 0], [1, 2])); 
//console.log(knightMoves([3, 3], [0, 0])); 
//console.log(knightMoves([0, 0], [3, 3])); 
console.log(knightMoves([0, 0], [7, 7]));