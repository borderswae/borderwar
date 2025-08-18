let selectedArmy = null;
let armyPrice = 0;

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  if (id !== 'home') document.getElementById(id).classList.add('active');
}

function selectArmy(name, price, stock) {
  selectedArmy = name;
  armyPrice = price;
  document.getElementById('armyInfo').innerText = `${price}$ For ${name} | Stock: ${stock}`;
  alert(`${price}$ For ${name}`);
  document.getElementById('payBtn').style.display = 'inline-block';
}

function showPayment() {
  showScreen('payment');
  document.getElementById('paymentTitle').innerText = `Sure Buy This Amry ${selectedArmy}?`;
  document.getElementById('paymentDesc').innerHTML = `Press connect for payment.<br><br>Contact Discord: <a href="https://discord.gg/aZRAajFH" target="_blank">Join Here</a>`;
}

function copyDiscord() {
  navigator.clipboard.writeText("https://discord.gg/aZRAajFH");
  alert("Discord link copied!");
}

async function sendSupport() {
  const text = document.getElementById("supportText").value;
  const file = document.getElementById("supportFile").files[0];
  if (!text && !file) { alert("Please type message or add photo!"); return; }

  const webhook = "https://discord.com/api/webhooks/1404476294833504299/ASgT8yz0NrxfTX63zELTF7IZPcdBBTZMgeWxNUbdW2K142r2QUgYc-xLFEBvbco6l7vx";
  const form = new FormData();
  form.append("content", text || "Support request");

  if (file) form.append("file", file);

  await fetch(webhook, { method: "POST", body: form });
  alert("Support sent successfully!");
  document.getElementById("supportText").value = "";
  document.getElementById("supportFile").value = "";
}
