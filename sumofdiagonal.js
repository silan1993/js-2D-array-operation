// write a program to sum the diagonal elements of the 2D array   [
                                                               //    [1, 2, 3]
                                                               //    [4, 5, 6]
                                                               //    [7, 8, 9]
                                                               //  ]
                                                               //o/p-   1+5+9 = 15

let sumDiagonal = (arr) => {
    let sum =0
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (i == j)
                sum += arr[i][j]    
        }
    }
    return sum
}
                                                                     

console.log(sumDiagonal(
    [
        [1, 2, 3],
       [4, 5, 6],
       [7, 8, 9],
    ]
))