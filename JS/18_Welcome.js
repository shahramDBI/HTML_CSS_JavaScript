var hour = new Date().getHours()

document.body.style.backgroundColor='#F9FF80'

if (hour >= 4 && hour <= 12) {
  document.getElementById('welcomeMsg').innerHTML="Good Morning !";
  document.body.style.backgroundColor='#F9FF80';
  document.getElementById('welcomeImg').src='image/morning.jpg'
} else if (hour >= 12 && hour <= 18) {
  document.getElementById('welcomeMsg').innerHTML="Good Day !";
  document.body.style.backgroundColor='#F57918';
  document.getElementById('welcomeImg').src='image/day.jpg';
} else if (hour >= 19 && hour <= 22) {
  document.getElementById('welcomeMsg').innerHTML="Good Evening !";
  document.body.style.backgroundColor='#91979C';
  document.getElementById('welcomeImg').src='image/evening.jpg';
} else {
  document.getElementById('welcomeMsg').innerHTML="Good Night !";
  document.body.style.backgroundColor='#16170D';
  document.getElementById('welcomeImg').src='image/night.jpg';
}
