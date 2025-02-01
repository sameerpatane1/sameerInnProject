
// ✅ Secure Function to Send Browser Notifications
function sendSecureNotification(title, message) {
    try {
        if (!("Notification" in window)) {
            console.warn("Notifications are not supported in this browser.");
            return;
        }

        if (Notification.permission === "granted") {
            new Notification(title, {
                body: message,
                icon: "https://cdn-icons-png.flaticon.com/512/1827/1827347.png"
            });
        } else if (Notification.permission !== "denied") {
            Notification.requestPermission().then(permission => {
                if (permission === "granted") {
                    sendSecureNotification(title, message);
                }
            });
        }
    } catch (error) {
        console.error("Notification Error:", error);
    }
}

// ✅ Function to Notify Both Admin & Visitor Securely
function notifyBothSecurely() {
    sendSecureNotification("👋 Welcome!", "Thank you for visiting our secure website.");
    setTimeout(() => {
        sendSecureNotification("🔔 New Visitor!", "A visitor has accessed your website securely.");
    }, 2000);
}

// ✅ Trigger Secure Notifications When Page Loads
window.onload = () => {
    setTimeout(notifyBothSecurely, 1000);
};
