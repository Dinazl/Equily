// ===== NAVIGATION =====
function showPage(pageId, el) {
    document.querySelectorAll(".page").forEach(p => p.style.display = "none");
    document.getElementById(pageId).style.display = "block";

    document.querySelectorAll(".menu-item").forEach(m => m.classList.remove("active"));
    el.classList.add("active");
}

// ===== DARK MODE =====
function toggleTheme() {
    document.body.classList.toggle("dark");

    const isDark = document.body.classList.contains("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
}

// ===== LOAD THEME =====
window.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark");
    }
});