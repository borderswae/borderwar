function showMenu(id) {
    document.querySelectorAll('section').forEach(sec => sec.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}
function sendSupport() {
    const text = document.getElementById('supportText').value;
    const file = document.getElementById('supportPhoto').files[0];
    if (!text && !file) { alert("Please add a message or an image."); return; }
    alert("⚠ Direct image upload to Discord is blocked by browsers. Use a server to forward this request.");
}
function confirmArmy() {
    let val = document.getElementById('armySelect').value;
    if (!val) { alert("Please select an army."); return; }
    let prices = {CAMANDO: 8, KLAHOS: 5, DRTG: 3};
    let modal = document.getElementById('modal');
    let modalText = document.getElementById('modalText');
    modalText.textContent = `Sure Buy This Army ${val}? Price: $${prices[val]}`;
    modal.style.display = 'flex';
    document.getElementById('modalCopy').onclick = () => {
        navigator.clipboard.writeText("https://discord.gg/aZRAajFH");
        alert("Discord link copied!");
    };
}
function closeModal() {
    document.getElementById('modal').style.display = 'none';
    document.querySelectorAll('section').forEach(sec => sec.classList.remove('active'));
}
