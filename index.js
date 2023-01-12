// All Elements
const inputCity = document.getElementById("city"),
  currentDate = document.getElementById("date"),
  fajr = document.getElementById("fajr"),
  sunrise = document.getElementById("sunrise"),
  zuhr = document.getElementById("zuhr"),
  asr = document.getElementById("asr"),
  magrib = document.getElementById("magrib"),
  isha = document.getElementById("isha");

// Fetch Data From API
async function getData(city) {
  let response = await fetch(
    `http://api.aladhan.com/v1/timingsByCity?city=${city}&country=SA&method=4`
  );
  let result = await response.json();

  currentDate.innerHTML = result.data.date.hijri.date;
  fajr.innerHTML = result.data.timings.Fajr;
  sunrise.innerHTML = result.data.timings.Sunrise;
  zuhr.innerHTML = result.data.timings.Dhuhr;
  asr.innerHTML = result.data.timings.Asr;
  magrib.innerHTML = result.data.timings.Maghrib;
  isha.innerHTML = result.data.timings.Isha;
}

// Main Eventlistener
document.getElementById("search-area").addEventListener("submit", function (e) {
  getData(inputCity.value);

  inputCity.value = "";
  e.preventDefault();
});
