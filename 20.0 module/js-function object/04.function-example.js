/*
 * function functionName (parameter){
  function body
  return
 }

 functionName (parameter value)
 var returnedValue = functionName (parameter value)
 */

function getAverage(assignment1, assignment2, assignment3) {
  const total = assignment1 + assignment2 + assignment3;
  const average = total / 3;
  return average;
}
const assignment1Marks = 60;
const assignment2Marks = 70;
const assignment3Marks = 50;

const myAverage = getAverage(
  assignment1Marks,
  assignment2Marks,
  assignment3Marks
);
console.log('I ama satisfied to my result', myAverage);
