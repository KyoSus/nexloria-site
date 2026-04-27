// Fade in on load
window.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("show");

  // Highlight active nav link
  const links = document.querySelectorAll("nav a:not(.logo)");
  links.forEach(link => {
    if (link.href === location.href || 
        (link.href.endsWith(location.pathname) && location.pathname !== "/")) {
      link.classList.add("active");
    }
  });
});

// Page transitions
document.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", function(e) {
    const url = this.href;
    if (url && url.includes(location.hostname) && !url.includes("#") && !this.target) {
      e.preventDefault();
      document.body.classList.remove("show");
      setTimeout(() => { window.location = url; }, 300);
    }
  });
});

// Copy to clipboard
function copyText(inputEl, btn) {
  inputEl.select();
  navigator.clipboard.writeText(inputEl.value).then(() => {
    const orig = btn.textContent;
    btn.textContent = "Copied!";
    btn.style.color = "var(--accent)";
    btn.style.borderColor = "var(--accent)";
    showPopup();
    setTimeout(() => {
      btn.textContent = orig;
      btn.style.color = "";
      btn.style.borderColor = "";
    }, 1500);
  }).catch(() => {
    // Fallback
    document.execCommand("copy");
    showPopup();
  });
}

function showPopup() {
  const popup = document.getElementById("popup");
  if (popup) {
    popup.classList.add("show");
    setTimeout(() => popup.classList.remove("show"), 1800);
  }
}

// Legacy support
function selectText(el) {
  el.select();
  showPopup();
}
