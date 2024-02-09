function cariMedian(arr) {
  let sort = arr.sort(function(a, b) {
    return a-b;
  });

  if(sort.length % 2 === 1) {
    return sort[Math.floor(sort.length/2)];
  } else {
    return (sort[Math.floor(sort.length/2)-1] + sort[Math.floor(sort.length/2)]) / 2;
  }
}
  
  // TEST CASES
  console.log(cariMedian([1, 2, 3, 4, 5])); // 3
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 6
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([7, 7, 8, 8])); // 7.5