const phoneInput = document.querySelector("#phoneInput");
const checkBtn = document.querySelector("#checkBtn");
const result = document.querySelector("#result");
checkBtn.addEventListener("click", () => {
  const phone = phoneInput.value;

  const regex =
    /^(\+7|8)\s?\(\d{3}\)\s?\d{3}-\d{2}-\d{2}$|^(\+7|8)\s?\(\d{3}\)\s?\d{3}-\d{4}$/;

  if (regex.test(phone)) {
    result.textContent = "Все в порядке";
  } else {
    result.textContent = "Ошибка: неверный формат номера";
  }
});
