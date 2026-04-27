<!DOCTYPE html>
<html lang="en">
<head>
<title>Calculator — Nexloria</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="../style.css">
</head>
<body>

<nav>
  <a href="/" class="logo">NEXLORIA</a>
  <a href="/">Home</a>
  <a href="/services.html">Services</a>
  <a href="/calculator.html">Calculator</a>
  <a href="/contact.html">Contact</a>
</nav>

<div class="calc-wrap">
  <div class="section-label" style="margin-bottom: 10px;">Estimate your order</div>
  <h1>Price Calculator</h1>
  <p class="sub">Select a service and quantity to get an instant price estimate.</p>

  <div class="calc-box">

    <!-- MODE -->
    <div class="form-group">
      <label>MODE</label>
      <select id="mode" onchange="calculate()">
        <option value="service">Service</option>
        <option value="exchange">Exchange</option>
      </select>
    </div>

    <!-- SERVICE -->
    <div class="form-group" id="serviceField">
      <label>SERVICE</label>
      <select id="service" onchange="calculate()">
        <option value="">— Select a service —</option>
        <optgroup label="Roblox">
          <option value="7,1000">Roblox Followers — $7 / 1,000</option>
          <option value="7,1000">Roblox Group Members — $7 / 1,000</option>
        </optgroup>
        <optgroup label="Twitch">
          <option value="8,1000">Twitch Followers — $8 / 1,000</option>
        </optgroup>
        <optgroup label="TikTok">
          <option value="7,1000">TikTok Followers — $7 / 1,000</option>
          <option value="5,5000">TikTok Likes — $5 / 5,000</option>
          <option value="4,5000">TikTok Views — $4 / 5,000</option>
          <option value="4,500">TikTok Saves — $4 / 500</option>
        </optgroup>
        <optgroup label="Instagram">
          <option value="7,1000">Instagram Followers — $7 / 1,000</option>
          <option value="4,2500">Instagram Views — $4 / 2,500</option>
          <option value="4,500">Instagram Likes — $4 / 500</option>
          <option value="4,100">Instagram Reposts — $4 / 100</option>
        </optgroup>
      </select>
    </div>

    <!-- QUANTITY -->
    <div class="form-group">
      <label>AMOUNT</label>
      <input type="number" id="qty" min="1" placeholder="e.g. 5000" oninput="calculate()">
    </div>

    <!-- EXCHANGE -->
    <div id="exchangeFields" style="display:none;">
      <div class="form-group">
        <label>YOU SEND</label>
        <select id="from" onchange="calculate()">
          <option>Cash App</option>
          <option>PayPal (F&F)</option>
          <option>Apple Pay</option>
          <option>Venmo</option>
          <option>Zelle</option>
          <option>Crypto</option>
        </select>
      </div>

      <div class="form-group">
        <label>YOU RECEIVE</label>
        <select id="to" onchange="calculate()">
          <option>Cash App</option>
          <option>PayPal (F&F)</option>
          <option>Apple Pay</option>
          <option>Venmo</option>
          <option>Zelle</option>
          <option>Crypto</option>
        </select>
      </div>
    </div>

    <!-- RESULT -->
    <div class="calc-result" id="result">
      <div class="result-row">
        <span>Unit rate</span>
        <span id="res-rate">—</span>
      </div>
      <div class="result-row">
        <span>Details</span>
        <span id="res-qty">—</span>
      </div>
      <div class="result-row total">
        <span>Total</span>
        <span id="res-total">—</span>
      </div>
    </div>

  </div>

  <p style="color: var(--muted); font-size: 0.8rem; margin-top: 16px; text-align: center;">
    Estimates only. Contact via <a href="/contact.html" style="color: var(--accent); text-decoration: none;">Telegram or Discord</a>.
  </p>
</div>

<footer>© 2026 Nexloria</footer>

<script src="../script.js"></script>

<script>
function fee(a){
  if (a <= 1000) {
    if(a<=10)return 1.25;
    if(a<=40)return 3.15;
    if(a<=70)return 5;
    if(a<=100)return 7.5;
    if(a<=200)return 12.5;
    if(a<=300)return 18.75;
    if(a<=500)return 27.5;
    if(a<=750)return 43.75;
    return 62.5;
  }
  return a * 0.0625;
}

const icons = {
  "Cash App": "💵",
  "PayPal (F&F)": "🅿️",
  "Apple Pay": "🍎",
  "Venmo": "💙",
  "Zelle": "🏦",
  "Crypto": "🔗"
};

function calculate() {
  const mode = document.getElementById("mode").value;
  const svc = document.getElementById("service").value;
  const qty = parseFloat(document.getElementById("qty").value) || 0;

  const exchangeFields = document.getElementById("exchangeFields");
  const serviceField = document.getElementById("serviceField");
  const result = document.getElementById("result");

  const from = document.getElementById("from")?.value;
  const to = document.getElementById("to")?.value;

  exchangeFields.style.display = mode === "exchange" ? "block" : "none";
  serviceField.style.display = mode === "exchange" ? "none" : "block";

  if(mode === "service"){
    if (!svc || qty <= 0) {
      result.classList.remove("visible");
      return;
    }

    const [price, per] = svc.split(",").map(Number);
    let total = (qty / per) * price;
    if (total < 1) total = 1;

    document.getElementById("res-rate").textContent = `$${price} / ${per.toLocaleString()}`;
    document.getElementById("res-qty").textContent = qty.toLocaleString();
    document.getElementById("res-total").textContent = `$${total.toFixed(2)}`;

    result.classList.add("visible");
  }

  if(mode === "exchange"){
    if (qty <= 0) {
      result.classList.remove("visible");
      return;
    }

    const f = fee(qty);
    const receive = qty - f;

    document.getElementById("res-rate").textContent = `Fee: $${f.toFixed(2)}`;
    document.getElementById("res-qty").textContent = `${icons[from] || ""} You send $${qty.toFixed(2)}`;
    document.getElementById("res-total").textContent = `${icons[to] || ""} $${receive.toFixed(2)} received`;

    result.classList.add("visible");
  }
}
</script>

</body>
</html>
