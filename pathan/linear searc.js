function linearserach(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      console.log([i]);
    }
  }
  return -1;
}
linearserach([1, 2, 4, 5, 12, 8, 9], 12);
