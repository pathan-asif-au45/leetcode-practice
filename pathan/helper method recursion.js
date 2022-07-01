function collectoddvalues(arr) {
  let result = [];
  function helper(helperinput) {
    if (helperinput.length === 0) {
      return;
    }
    if (helperinput[0] % 2 !== 0) {
      result.push(helperinput[0]);
    }
    helper(helperinput.slice());
  }
  helper(arr);
  return result;
}
console.log(collectoddvalues([1, 2, 3, 4, 5, 6, 7, 8, 9]));
