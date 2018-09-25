'use strict'

function search(input, target) {
  var result = -1;
  for(let i = 0; i < input.length; i++) {
    if(input[i] == target) {
      result = i;
      break;
    }
    if(input[i] > target) {
      break;
    } 
  }
  return result;
}
module.exports=search