function plus() {
  let one = document.getElementById('fnum').value;
  let two = document.getElementById('snum').value;
  let sum = parseInt(one) + parseInt(two)
  document.getElementById("demo").innerHTML = sum;
}
function mines() {
  var one = document.getElementById('fnum').value;
  var two = document.getElementById('snum').value;
  var sum = one - two
  document.getElementById("demo").innerHTML = sum;
}
function times() {
  var one = document.getElementById('fnum').value;
  var two = document.getElementById('snum').value;
  var sum = one * two
  document.getElementById("demo").innerHTML = sum;
}function div() {
  var one = document.getElementById('fnum').value;
  var two = document.getElementById('snum').value;
  var sum = one / two
  document.getElementById("demo").innerHTML = sum;
}

