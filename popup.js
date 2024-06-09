document.addEventListener("DOMContentLoaded", function () {
    loadSettings();

    document.getElementById("settings").addEventListener("click", openSettings);
    document.getElementById("close").addEventListener("click", closeSettings);
    document.getElementById("enableIntro").addEventListener("change", saveSettings);
    document.getElementById("closeExtension").addEventListener("change", saveSettings);
    document.getElementById("todo").addEventListener("click", () => launchApp("todo"));
    document.getElementById("qr").addEventListener("click", () => launchApp("qr"));
});

function openSettings() {
    document.getElementById("settingsModal").style.display = "block";
}

function closeSettings() {
    document.getElementById("settingsModal").style.display = "none";
}

function saveSettings() {
    const enableIntro = document.getElementById("enableIntro").checked;
    const closeExtension = document.getElementById("closeExtension").checked;
    localStorage.setItem("enableIntro", enableIntro);
    localStorage.setItem("closeExtension", closeExtension);
    showNotification("Les paramètres ont été enregistrés.");
}

function loadSettings() {
    const enableIntro = localStorage.getItem("enableIntro") === 'true';
    const closeExtension = localStorage.getItem("closeExtension") === 'true';
    document.getElementById("enableIntro").checked = enableIntro;
    document.getElementById("closeExtension").checked = closeExtension;
}

function launchApp(appType) {
    const enableIntro = localStorage.getItem("enableIntro") === 'true';
    const closeExtension = localStorage.getItem("closeExtension") === 'true';
    let appUrl;
    if (appType === "todo") {
        appUrl = "https://wedoneofficiel.github.io/Wedone-Web-Apps/Wedone-To-Do-List";
    } else if (appType === "qr") {
        appUrl = "https://wedoneofficiel.github.io/Wedone-Web-Apps/Wedone-QR-Code";
    }

    if (!enableIntro) {
        appUrl += "/app.html";
    }

    window.open(appUrl, '_blank');

    if (closeExtension) {
        window.close();
    }
}

function showNotification(message) {
    const notification = document.getElementById("notification");
    notification.innerText = message;
    notification.classList.add("show");
    setTimeout(() => {
        notification.classList.remove("show");
    }, 3000);
}
