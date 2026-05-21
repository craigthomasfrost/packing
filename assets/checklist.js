const storagePrefix = "packing-checklist:";

document.querySelectorAll("li").forEach((item, index) => {
  let checkbox = item.querySelector('input[type="checkbox"]');
  let label = item.textContent.trim();

  if (!checkbox) {
    const match = label.match(/^\[( |x)\]\s+(.+)$/i);

    if (!match) {
      return;
    }

    checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = match[1].toLowerCase() === "x";
    label = match[2];
    item.textContent = "";
    item.append(checkbox, document.createTextNode(label));
  }

  const key = `${storagePrefix}${index}:${label}`;

  checkbox.disabled = false;
  checkbox.checked = localStorage.getItem(key) === "true";

  checkbox.addEventListener("change", () => {
    localStorage.setItem(key, checkbox.checked);
  });
});
