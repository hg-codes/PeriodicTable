// uiUtils.js
export function clearHighlights(elements) {
  elements.forEach(el => el.classList.remove("lightgray"));
}

export function addHighlights(elements) {
  elements.forEach(el => el.classList.add("lightgray"));
}