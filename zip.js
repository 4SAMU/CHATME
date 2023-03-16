function name(params) {
  let A = [{ A: "A" }, { B: "B" }];
  let B = [[{ z: "a" }], [{ y: "y" }]];

  let result = A.map((obj, i) => [obj, B[i]]);
console.log(result);


}
