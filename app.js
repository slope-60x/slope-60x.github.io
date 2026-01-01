// Minimal, AdSense-friendly site script (no tab cloaking / about:blank features)

(function () {
  const bar = document.getElementById("sidebar");
  if (!bar) return;

  document.addEventListener("click", function () {
    bar.classList.remove("movingbar");
  });

  document.addEventListener("mousemove", function (event) {
    if (event.clientX <= 5 && !bar.classList.contains("movingbar")) {
      bar.classList.add("movingbar");
    }
  });
})();
