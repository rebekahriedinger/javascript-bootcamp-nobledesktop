/* exported reverse */
function reverse(arr) {
  const new_arr = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    new_arr.push(arr[i]);
  }

  return new_arr;
}
