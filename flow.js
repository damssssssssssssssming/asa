
onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };
  setTimeout(function() {
    document.getElementById("button").style.display = "block";
}, 7000); // 7 seconds (7000 milliseconds)

document.getElementById("button").addEventListener("click", function() {
  // Redirect to another file
  window.location.href = "letter.html";
});