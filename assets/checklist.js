const storagePrefix = "packing-checklist:";
const checkboxes = [];

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
  checkboxes.push({ checkbox, key });

  checkbox.addEventListener("change", () => {
    localStorage.setItem(key, checkbox.checked);
    updateProgress();
  });
});

const heading = document.querySelector("h1");
const progress = document.createElement("div");
progress.className = "checklist-progress";
progress.innerHTML = `
  <div class="checklist-progress__meta">
    <span class="checklist-progress__count">0 / 0</span>
    <span class="checklist-progress__label">packed</span>
  </div>
  <button class="checklist-reset" type="button">Reset</button>
  <div class="checklist-progress__bar">
    <div class="checklist-progress__fill"></div>
  </div>
`;

if (heading && checkboxes.length > 0) {
  heading.insertAdjacentElement("afterend", progress);
}

const progressCount = progress.querySelector(".checklist-progress__count");
const progressFill = progress.querySelector(".checklist-progress__fill");
const resetButton = progress.querySelector(".checklist-reset");

function updateProgress() {
  const total = checkboxes.length;
  const checked = checkboxes.filter(({ checkbox }) => checkbox.checked).length;
  const percent = total === 0 ? 0 : Math.round((checked / total) * 100);

  progressCount.textContent = `${checked} / ${total}`;
  progressFill.style.width = `${percent}%`;
}

resetButton.addEventListener("click", () => {
  checkboxes.forEach(({ checkbox, key }) => {
    checkbox.checked = false;
    localStorage.removeItem(key);
  });

  updateProgress();
});

updateProgress();
