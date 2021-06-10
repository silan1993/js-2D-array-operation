/* Assume that you are given a two-dimensional grid  that contains  rows and  columns. The grid  consists of only three integers (, , and ).

 denotes an empty cell
 denotes that a cell contains a plant
 denotes a cell where you are standing initially
You can move into an adjacent cell if that adjacent cell is empty. Two cells are adjacent if they share a side. In other words, if a cell is empty, then you can move in one of the four directions, Up, Down, Left, and Right.
You cannot move out of the grid .

Your task is to find the length of the shortest path to reach one of the boundary edges of the grid without stepping on a plant. The length of a path is equal to the number of moves you make.

Explanation
There are 4 rows and 5 columns in the grid.

[

[ 1 1 1 0 1 ] 
[ 1 0 2 0 1 ]
[ 0 0 1 0 1 ]
[ 1 0 1 1 0 ]

]

Initially, you are standing at cell (2,3) (second row and third column) denoted by 2. There are three ways to reach an boundary edge of the grid without stepping on a plant.

Move to cell (2,2) (Left), then move to cell (3,2) (Down) and then move to cell (4,2) (Down) (3 steps).
Move to cell (2,2) (Left), then move to cell (3,2) (Down) and then move to cell (3,1) (Left) (3 steps).
Move to cell (2,4) (Right) and then move to cell (1,4) (Up) (2 steps).
In the third step, we took only 2 steps to reach to the edge of the grid which is the shortest path.

*/


var steps = []
let findEscapePlan = grid => {
    let currentRowIndex, currentColIndex
    let border = {
    }
    for (let i = 0; i < grid.length; i++){
        border['' + i] = []
        for (let j = 0; j < grid[i].length; j++){
            if ((i == 0 || i == grid.length - 1)) {
                if(grid[i][j] == 0 || grid[i][j] == 2)
                    border[''+i].push(j)
            } else if (j == 0 || j == grid[i].length - 1) {
                if(grid[i][j] == 0 || grid[i][j] == 2)
                    border['' + i].push(j)
            }
            if (grid[i][j] == 2) {
                currentRowIndex = i
                currentColIndex = j
            }
                
        }

    }
    if (border[currentRowIndex] && border[currentRowIndex].indexOf(currentColIndex) > -1)
        return 0
    let leftgrid = grid[currentRowIndex][currentColIndex - 1]
    let rightGrid = grid[currentRowIndex][currentColIndex + 1]
    let upGrid  = grid[currentRowIndex-1][currentColIndex]
    let downGrid  = grid[currentRowIndex+1][currentColIndex]

    if (leftgrid == 0) {
        let presentRow = currentRowIndex
        let presentCol = currentColIndex - 1
        
        let checkLeft = checkIsZero(grid, presentRow, presentCol, 0, border, 'left')        
    }
    if (rightGrid == 0) {
        let presentRow = currentRowIndex
        let presentCol = currentColIndex + 1
        
        let checkLeft = checkIsZero(grid, presentRow, presentCol, 0, border, 'right')        
    }
    if (upGrid == 0) {
        let presentRow = currentRowIndex -1
        let presentCol = currentColIndex 
        
        let checkLeft = checkIsZero(grid, presentRow, presentCol, 0, border, 'up')        
    }
    if (downGrid == 0) {
        let presentRow = currentRowIndex +1
        let presentCol = currentColIndex
        
        let checkLeft = checkIsZero(grid, presentRow, presentCol, 0, border, 'down')        
    }

    return Math.min.apply(null, steps)
    
}

let checkIsZero = (grid, i, j, step, border, side) => {
    step++
    if (grid[i][j] == 0) {
        if (chechBorder(i,j,border)) {
            return {isBorder:true ,step}
        } else {
            let left = { i: i }
            let right = { i: i }
            left.j = j - 1
            right.j = j + 1
            let up = { j: j }
            let down = { j: j }
            up.i = i - 1
            down.i = i+1
            if (side == 'left') {
                right = undefined
            }else if(side == 'right')
                left = undefined
            else if (side == 'up')
                down = undefined
            else if (side == 'down')
                up = undefined
            if (left && grid[left["i"]][left["j"]] !=0) {
                left = undefined
            }
            if (right && grid[right["i"]][right["j"]] !=0) {
                right = undefined
            }
            if (up && grid[up["i"]][up["j"]] !=0) {
                up = undefined
            }
            if (down && grid[down["i"]][down["j"]] !=0) {
                down = undefined
            }
            if (left) {
                let res = checkIsZero(grid, left.i, left.j, step, border, 'left')
                if (res && res.isBorder == true) {
                    steps.push(res.step)
                }
            }
            if (right) {
                let res = checkIsZero(grid, right.i, right.j, step, border, 'right')
                if (res && res.isBorder == true) {
                    steps.push(res.step)
                }
            }
            if (up) {
                let res = checkIsZero(grid, up.i, up.j, step, border, 'up')
                if (res && res.isBorder == true) {
                    steps.push(res.step)
                }
            }
            if (down) {
                let res = checkIsZero(grid, down.i, down.j, step, border, 'down')
                if (res && res.isBorder == true) {
                    steps.push(res.step)
                }
            }
            return{step,left,right,up,down}
        }
    } else {
        return undefined
    }
}

let chechBorder = (i, j,border) => {
    if (border[i].indexOf(j) > -1) return true
    else return false
    
}

console.log(findEscapePlan([
[1, 1, 1, 0, 1],
[1, 1, 1, 1, 1],
[0, 0, 0, 0, 1],
[0, 0, 1, 2, 1],
[1, 1, 1, 1, 1]
    
    ]
    ))