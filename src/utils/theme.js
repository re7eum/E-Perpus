export function toggleTheme() {
    const currentTheme = document.body.classList.contains("theme-dark")
    ? "dark"
    : "light";
    document.body.classList.toggle("theme-dark", currentTheme === "light");
    document.body.classList.toggle("theme-light", currentTheme === "dark");
    localStorage.setItem("theme", currentTheme === "light" ? "dark" : "light");
    updateThemeIcon();
}

export function updateThemeIcon() {
    const themeIcon = document.getElementById("theme-icon");
    const isDarkTheme = document.body.classList.contains("theme-dark");
    themeIcon.classList.toggle("bi-sun-fill", isDarkTheme);
    themeIcon.classList.toggle("bi-moon-fill", !isDarkTheme);
}

//fungsi untuk mendeteksi tema default perangkat
function getSystemPreferredTheme() {
    const preferDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
    return preferDarkScheme.matches ? "dark" : "light";
}

export function initTheme() {
    //cek apakah ada tema yang disimpan di localstorage
    const savedTheme = localStorage.getItem("theme");

    //jika tdk ada tema yg disimpan, gunakan tema dfault perangkat
    if (!savedTheme) {
        const systemTheme = getSystemPreferredTheme();
        document.body.classList.toggle("theme-dark", savedTheme === "dark");
        document.body.classList.toggle("theme-light", savedTheme === "light");
    }
    updateThemeIcon();
}