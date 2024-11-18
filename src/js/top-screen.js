const freeConsultation = document.getElementById("free-consultation");

freeConsultation.addEventListener("click", () => {
  console.log("scrolling to bottom");
  scrollTo(0, document.body.scrollHeight - 1960);
});
