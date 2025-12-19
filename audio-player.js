// Simple audio button controller: click to play/pause, optional loop toggle.
// Also stops other tracks when one starts (keeps things sane).

function stopAll(except) {
  document.querySelectorAll("audio").forEach((a) => {
    if (a !== except) {
      a.pause();
      a.currentTime = 0;
    }
  });

    document.querySelectorAll("[data-audio]").forEach((btn) => {
    const id = btn.getAttribute("data-audio");
    if (id && (!except || except.id !== id)) btn.textContent = "Play";
  });
}

document.querySelectorAll("[data-audio]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const id = btn.getAttribute("data-audio");
    const audio = document.getElementById(id);
    if (!audio) return;

    // If already playing -> pause
    if (!audio.paused) {
      audio.pause();
      btn.textContent = "Play";
      return;
    }

    stopAll(audio);
    audio.currentTime = 0;
    audio.play();
    btn.textContent = "Pause";

    audio.onended = () => (btn.textContent = "Play");
  });
});

document.querySelectorAll("[data-loop]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const id = btn.getAttribute("data-loop");
    const audio = document.getElementById(id);
    if (!audio) return;

    audio.loop = !audio.loop;
    btn.textContent = audio.loop ? "Loop: On" : "Loop: Off";
  });
});

document.querySelectorAll("audio").forEach((audio) => {
  const card = audio.closest(".audio-card");
  const fill = card.querySelector(".progress-fill");

  audio.addEventListener("timeupdate", () => {
    if (!audio.duration) return;
    const percent = (audio.currentTime / audio.duration) * 100;
    fill.style.width = percent + "%";
  });

  audio.addEventListener("ended", () => {
    fill.style.width = "0%";
  });
});
