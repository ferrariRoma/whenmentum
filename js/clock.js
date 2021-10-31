const clockBox = document.querySelector(".watch__current");

function setTime() {
  const clockContent = new Date();
  const seconds = String(clockContent.getSeconds()).padStart(2, "0");
  const minutes = String(clockContent.getMinutes()).padStart(2, "0");
  const hours = String(clockContent.getHours()).padStart(2, "0");
  const current = `${hours}:${minutes}:${seconds}`;
  clockBox.innerHTML = current;
}
setTime();
setInterval(setTime, 1000);
