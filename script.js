const cursor = document.getElementById('cursor');

document.addEventListener('mousemove', e => {
  if(cursor){
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
  }
});

function selectText(el) {
  el.select();
  const popup = document.getElementById("popup");
  if(popup){
    popup.classList.add("show");
    setTimeout(() => popup.classList.remove("show"), 1500);
  }
}
