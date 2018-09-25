'use strict'

function sort(input) {
  //return input.sort((a,b) => a-b); // Remove this line and change to your own algorithm
  for(let i = 1; i < input.length; i++) {
    let temp=input[i];
    let j = i -1;
    while(j >= 0 && input[j] > temp) {
      input[j+1] = input[j];
      j =j-1;
    }
    input[j+1] = temp;
  } 
  return input;
}

module.exports = sort
