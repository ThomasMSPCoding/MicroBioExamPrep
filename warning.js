function showWarning(message) {
    const notification = document.createElementById("warning-notification");
    notification.textContent = `⚠️ ${message}`;
    notification.style.display = "block";
}

showWarning("⚠️ Warning: This website is made by a student and is not peer reviewed. The information provided is not to 100% correct, there might be missing some informations.")