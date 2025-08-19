// --------- NAV + ROUTER ---------
const screens = Array.from(document.querySelectorAll('.screen'));
const navBtns = Array.from(document.querySelectorAll('.nav-btn'));
const menuCards = Array.from(document.querySelectorAll('.menu-card'));
const playButtons = Array.from(document.querySelectorAll('[data-link]'));

function showScreen(id){
  screens.forEach(s => s.classList.remove('active'));
  const target = document.getElementById(id);
  if (target) target.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// nav buttons
navBtns.forEach(btn=>{
  const link = btn.getAttribute('data-link');
  const target = btn.getAttribute('data-target');
  btn.addEventListener('click', ()=>{
    if (link) window.open(link,'_blank');
    else if (target) showScreen(target);
  });
});

// home cards
menuCards.forEach(card=>{
  card.addEventListener('click', ()=>{
    const t = card.getAttribute('data-target');
    if (t) showScreen(t);
  });
});

// any [data-link] (Play Game, Group link, etc.)
playButtons.forEach(el=>{
  el.addEventListener('click', ()=>{
    const link = el.getAttribute('data-link');
    if (link) window.open(link, '_blank');
  });
});

// back buttons
document.querySelectorAll('.back-home').forEach(b=>{
  b.addEventListener('click', ()=> showScreen('home'));
});

// --------- SUPPORT (Webhook) ---------
const sendSupportBtn = document.getElementById('sendSupportBtn');
sendSupportBtn?.addEventListener('click', async ()=>{
  const text = document.getElementById('supportText').value.trim();
  const file = document.getElementById('supportFile').files[0];

  if (!text && !file){
    alert("Please type a message or attach a photo.");
    return;
  }

  const webhook = "https://discord.com/api/webhooks/1404476294833504299/ASgT8yz0NrxfTX63zELTF7IZPcdBBTZMgeWxNUbdW2K142r2QUgYc-xLFEBvbco6l7vx";
  const form = new FormData();
  form.append("content", text || "Support request");
  if (file) form.append("file", file);

  try{
    const res = await fetch(webhook, { method: "POST", body: form });
    if (!res.ok) throw new Error("Webhook error");
    alert("Support sent successfully!");
    document.getElementById('supportText').value = "";
    document.getElementById('supportFile').value = "";
  }catch(e){
    alert("Failed to send. Please try again.");
  }
});

// --------- AMRY BUY ---------
let selectedArmy = null;
let selectedPrice = 0;

const armyInfo = document.getElementById('armyInfo');
const payBtn = document.getElementById('payBtn');

document.querySelectorAll('.army-option').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    const name = btn.getAttribute('data-army');
    const price = Number(btn.getAttribute('data-price'));
    const stock = btn.getAttribute('data-stock');

    selectedArmy = name;
    selectedPrice = price;

    armyInfo.textContent = `${price}$ For ${name} | Stock: ${stock}`;
    // animation alert style
    alert(`${price}$ For ${name}`);

    payBtn.style.display = 'inline-block';
  });
});

payBtn?.addEventListener('click', ()=>{
  if (!selectedArmy){
    alert("Please select an Amry first!");
    return;
  }
  document.getElementById('armyNameHere').textContent = selectedArmy;
  document.getElementById('paymentTitle').textContent = "Payment";
  document.getElementById('paymentDesc').innerHTML =
    `Sure Buy This Amry <b>${selectedArmy}</b>?<br/>Press connect for payment.`;
  showScreen('payment');
});

// --------- CONNECT -> CONTACT ---------
document.getElementById('connectBtn')?.addEventListener('click', ()=>{
  // simulate removing the payment UI and showing contact UI
  showScreen('contact');
});

// --------- COPY DISCORD ---------
document.getElementById('copyDiscordBtn')?.addEventListener('click', async ()=>{
  try{
    await navigator.clipboard.writeText("https://discord.gg/aZRAajFH");
    alert("Discord link copied!");
  }catch(e){
    alert("Copy failed. Long-press or right-click to copy.");
  }
});
