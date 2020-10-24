
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let nArr = [];
  if (matrix === undefined) return []
  for (let i=0; i < matrix.length; i++)
  if (i % 2 === 0) {
    nArr.push(...matrix[i]);
  } else {
    let revArr = matrix[i].reverse()
    nArr.push(...revArr);
  } 
  return nArr
}
