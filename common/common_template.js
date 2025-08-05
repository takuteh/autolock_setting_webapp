document.addEventListener("DOMContentLoaded", () => {
  fetch("BASE_URL/webapp/common/header.html")
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("header-placeholder").innerHTML = data;
    });
  fetch("BASE_URL/webapp/common/footer.html")
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("footer-placeholder").innerHTML = data;
    });
});
