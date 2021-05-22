
function diagonalDifference(arr) {
    // Write your code here
    let leftDiagonal = 0;
  let rightDiagonal = 0
   for(let i = 0; i < arr.length; i++){
      for(let j = 0; j < arr[i].length; j++){
        //console.log(arr[i][j])
         if(i === j){
            leftDiagonal += arr[i][j];
         };
         if((i+j) == arr.length-1){
            rightDiagonal +=arr[i][j]
          }
      };
    };
    
    console.log(rightDiagonal);
    console.log(leftDiagonal);

   return Math.abs(rightDiagonal -  leftDiagonal);

}

let a  = [
    [11,2 ,4],
        [4 ,5 ,6],
        [10 ,8 ,-12]
]
console.log(diagonalDifference(a));