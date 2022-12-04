const button = document.getElementById("button");
const toasts = document.getElementById("toasts");

const types = ["info", "success", "error"];
const messages = [
  "Message One",
  "Message Two",
  "Message Three",
  "Message Four",
];

button.addEventListener("click", () => createNotification());
// Notification Producer
function createNotification(message = null, type = null) {
  toasts.innerHTML += `<div class="toast ${type ? type : getRandomType()}">
    ${message ? message : getRandomMessage()}
  </div>`;
}

// Notification Consumer
setInterval(() => {
  const notif = document.querySelector(".toast");
  if (notif !== null) notif.remove();
}, 1200);

function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)];
}

function getRandomType() {
  return types[Math.floor(Math.random() * types.length)];
}
