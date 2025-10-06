function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    //for single pass
    let swaps = false;
    for (let j = 0; j + 1 < n - i; j++) {
      if (arr[j] > arr[j + 1]) {
        swaps = true;
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
    if (!swaps) break;
  }
  return arr;
}

console.log(bubbleSort([4, 5, 3, 1, 2]));