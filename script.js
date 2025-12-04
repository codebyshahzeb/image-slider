const textarea = document.getElementById("textarea");
const current = document.getElementById("current");
const max = document.getElementById("max");

textarea.addEventListener("input", () => {
    const length = textarea.value.length;
    current.textContent = length;
});
