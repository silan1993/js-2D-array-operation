// Input : 1 2 3
//         4 5 6
// Output : 1 4 5 6
//          1 2 5 6
//          1 2 3 6

function getPath(array) {
    let start = array[0][0]
    let path
    for (let i = 0; i < array.length; i++){
        let columnUntilPath = ''
        let j = 0
        if (i == 0) {
            j=1
        }
        // path = getRowWiseEndPoint(array, i, j)
        // console.log(start + ' ' + path)
        for (let c = i + 1; c <= array[i].length - 2; c++){
            columnUntilPath +=' '+array[i][c]
            path = columnUntilPath+ getColumnWiseEndPoint(array, c, c,i)
            console.log(start + ' ' + path)
        }
        
    }

    return true

}


function getColumnWiseEndPoint(array, i, j,row){
    let path = ''
    let columnEnd = getColumnEnd(array, i-1, j,row)
    let rowEnd = getRowEnd(array, array.length-1, j+1)
    return columnEnd +rowEnd
}
function getRowWiseEndPoint(array, i, j){
    let path = ''
    let rowEnd = getRowEnd(array, i, j)
    let columnEnd = getColumnEnd(array, i, array[i].length-1)
    return rowEnd+columnEnd
}

function getRowEnd(array, i, j) {
    let rowEnd =''
    for (let k = j; k < array[i].length; k++){
        rowEnd += ' '+array[i][k]
    }
    return rowEnd
}

function getColumnEnd(array, i, j,row) {
    let colEnd = ''
    for (let c= row+1; c < array.length; c++) {
        colEnd += ' '+array[c][j]
    }
    return colEnd
}

console.log(getPath([
    [
        1 ,2 ,3,4,4
    ],
    [
        4,5,6,5,6
    ],
    [
        7,8,9,10,11
    ]
]))