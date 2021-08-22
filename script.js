document.addEventListener("mousemove", e => {
    var p = document.querySelector(".pointer");
    p.style.left = e.pageX + 'px';
    p.style.top = e.pageY + 'px';
  });