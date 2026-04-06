const cursor = document.getElementById('cursor');

document.addEventListener('mousemove', e => {
  if(cursor){
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
  }
});

// Fade in on load
window.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("show");
});

// Page transitions (GLOBAL)
document.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", function(e) {
    if (this.href.includes(location.hostname)) {
      e.preventDefault();
      document.body.classList.remove("show");
      setTimeout(() => {
        window.location = this.href;
      }, 300);
    }
  });
});

// Copy popup
function selectText(el) {
  el.select();
  const popup = document.getElementById("popup");
  if(popup){
    popup.classList.add("show");
    setTimeout(() => popup.classList.remove("show"), 1500);
  }
}
