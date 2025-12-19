// PAGE LOADER JS //

window.addEventListener("load", () => {
  const main = document.querySelector("main");
  if (main) main.classList.add("is-ready");
});

window.addEventListener("load", () => {
  const content = document.getElementById("main-content");
  const loading = document.getElementById("loading-text");

  if (content) content.classList.add("is-ready");
  if (loading) loading.remove();
})
