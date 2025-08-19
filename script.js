// Toggle Menu
function toggleMenu() {
  document.getElementById("menu").classList.toggle("active");
}

// Show Sections
function showSection(id) {
  document.querySelectorAll("main section").forEach(sec => sec.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  toggleMenu();
}

// Tutorial
function closeTutorial() {
  document.getElementById("tutorial").style.display = "none";
}

// Support
function sendSupport() {
  let text = document.getElementById("supportText").value;
  let file = document.getElementById("supportFile").files[0];
  if (!text && !file) {
    alert("Please write text or select photo!");
    return;
  }
  alert("Support Sent Successfully ✅ (Webhook Demo)");
}

// Army
let selectedArmy = "";
function selectArmy(name, price, stock) {
  selectedArmy = name;
  document.getElementById("armyInfo").innerText = `${price}$ for ${name} | Stock: ${stock}`;
  document.getElementById("paymentBtn").style.display = "inline-block";
  alert(`${price}$ For ${name}`);
}

// Payment
function showPayment() {
  document.getElementById("paymentText").innerText = `Sure Buy This Army ${selectedArmy}?`;
  document.getElementById("paymentPopup").style.display = "flex";
}
function closePayment() {
  document.getElementById("paymentPopup").style.display = "none";
}
function connectPayment() {
  document.getElementById("paymentPopup").style.display = "none";
  document.getElementById("discordPopup").style.display = "flex";
}

// Discord Contact
function copyDiscord() {
  navigator.clipboard.writeText("https://discord.gg/aZRAajFH");
  alert("Discord link copied!");
}
function backHome() {
  document.getElementById("discordPopup").style.display = "none";
  showSection("home");
}
