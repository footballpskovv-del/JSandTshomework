function setCookie(name, value) {
  document.cookie = `${name}=${encodeURIComponent(value)}; path=/`;
}

function getCookie(name) {
  const cookies = document.cookie.split("; ");

  for (let cookie of cookies) {
    const parts = cookie.split("=");

    if (parts[0] === name) {
      return decodeURIComponent(parts[1]);
    }
  }

  return "";
}

const cityText = document.querySelector("#cityText");

if (cityText) {
  const city = getCookie("city");

  if (city) {
    cityText.textContent = `Ваш город - ${city}`;
  } else {
    cityText.textContent = "Город не сохранён";
  }
}
const saveBtn = document.querySelector("#saveBtn");

if (saveBtn) {
  saveBtn.addEventListener("click", () => {
    const cityInput = document.querySelector("#cityInput");

    setCookie("city", cityInput.value);

    console.log("Город сохранён");
  });
}
