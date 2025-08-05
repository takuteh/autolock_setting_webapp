document.addEventListener("DOMContentLoaded", () => {
  fetch("https://margarita.shacknet.us/takumi_test/235/webapp/common/header.html")
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("header-placeholder").innerHTML = data;
    });
  fetch("https://margarita.shacknet.us/takumi_test/235/webapp/common/footer.html")
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("footer-placeholder").innerHTML = data;
    });
});
