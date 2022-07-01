function binarysearch(arr, val) {
  var left = 0;
  let right = arr.length - 1;
  let middle = Math.floor((left + right) / 2);
  //   console.log(left, right, middle);
  while (arr[middle] !== val && left <= right) {
    if (val < arr[middle]) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
    middle = Math.floor((left + right) / 2);
  }
  console.log(middle);

  if (arr[middle] === val) {
    return middle;
  } else {
    return -1;
  }
}

binarysearch([2, 5, 6, 9, 15, 27], 15);
