const checkboxes = document.querySelectorAll(".checkbox");

checkboxes.forEach((checkbox) => {
  const savedValue = localStorage.getItem(checkbox.id);
  if (savedValue === "true") {
    checkbox.checked = true;
  }
  checkbox.addEventListener("change", () => {
    localStorage.setItem(checkbox.id, checkbox.checked);
  });
});
