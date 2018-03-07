//Minimum
//Write a function "min" that takes two arguments and returns their minimum.
function min(a, b) {
  if (a < b)
  return a;
  else return b;
}

//Recursion
//I didn't get the -1 figured out for this one
function isEven(num) {
  if (num == 0) return true;
  else if (num == 1) return false;
  else return isEven(num -2);
}

//Bean Counting
/*I got the countsBs function working,
but I couldn't get the re-write for countChar to work*/
function countBs(string) {
 let howMany = 0;
  for (let i=0; i<string.length; i++){
  if (string[i] == "B") {
  howMany ++
}
  }
    return howMany;

}
