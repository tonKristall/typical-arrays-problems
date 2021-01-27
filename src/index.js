
exports.min = function min(ar) {
  if (ar == undefined || ar.length == 0) {
    return 0;
  }
  let min = ar[0];
  ar.forEach(element => {
    if (element < min) {
      min = element;
    }
  })
  return min;
}

exports.max = function max(ar) {
  if (ar == undefined || ar.length == 0) {
    return 0;
  }
  let max = ar[0];
  ar.forEach(element => {
    if (element > max) {
      max = element;
    }
  })
  return max;
}

exports.avg = function avg(ar) {
  if (ar == undefined || ar.length == 0) {
    return 0;
  }
  let s = 0;
  let avg = 0;
  ar.forEach(element => {
    s += element;
  })
  avg = s / ar.length;
  return avg;
}
