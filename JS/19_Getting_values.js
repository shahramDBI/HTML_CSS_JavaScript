var correctPassword = '1234'
function returnInfo() {
  var nameVar = document.getElementById('nameForm').value;
  var passVar = document.getElementById('passForm').value;
  if (passVar == correctPassword) {
    document.body.style.backgroundColor='blue';
    alert('Access Granted !');
  } else {
    document.body.style.backgroundColor='red';
    alert('Access Denied !');
  }
}
