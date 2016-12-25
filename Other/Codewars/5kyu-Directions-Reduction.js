// Write a function dirReduc which will take an array of strings and returns an
// array of strings with the needless directions removed (W<->E or S<->N side by side).

const dirReduc = arr => {
  let going = true;
  while (going) {
    let changes = 0;
    for (let i = 0; i < arr.length; i++) {
      if (shouldDelete(arr[i], arr[i + 1])) {
        arr.splice(i, 2);
        changes++;
      }
      if (shouldDelete(arr[i], arr[i - 1])) {
        arr.splice(i - 1, 2);
        changes++;
      }
    }
    if (changes === 0) going = false;
  }
  return arr;
}

const shouldDelete = (a, b) => {
  if ((a === "NORTH" && b === "SOUTH") || (a === "SOUTH" && b === "NORTH") || (a === "EAST" && b === "WEST") || (a === "WEST" && b === "EAST")) return true;
  else return false;
}


console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]));
// SHOULD LOG [ "WEST" ]
