function cariModus(arr) {
  arr.sort(function(a, b) {
      return a-b;
  });

  let result = -1;
  let currentCount = 1;
  let maxCount = 1;

  for(let i = 0; i < arr.length-1; i++) {
    if(arr[i] === arr[i+1]) {
          currentCount++;
      } else {
          if(currentCount > maxCount) {
              maxCount = currentCount; 
              result = arr[i];
          }
          currentCount = 1;
      }
  }


  // cek apakah angka dalam array sama semua?
  // kalo result ditemukan dan elemen ke 1 == elemen terakhir, return -1
  if(result != -1 && arr[0] === arr[arr.length-1]) {
      return -1;
  }

  return result;
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1
console.log(cariModus([1, 1, 2, 2, 2, 3, 4, 5])); // 2