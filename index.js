function searchCity() {
  const city = document.getElementById('city').value;
  if (city) {
      window.location.href = `result1.html?city=${city}`;
  } else {
      alert("Please enter a city name.");
  }
}

function toggleTheme() {
  document.body.classList.toggle('dark-mode');
}
