const loadHeaderHTML = (url, selector) => {
  fetch(url)
    .then((response) => response.text())
    .then((html) => {
      const elements = document.querySelectorAll(selector);
      elements.forEach((element) => {
        element.innerHTML = html;
      });
    });
};
loadHeaderHTML("header.html", ".header");

const loadFooterHTML = (url, selector) => {
  fetch(url)
    .then((response) => response.text())
    .then((html) => {
      const elements = document.querySelectorAll(selector);
      elements.forEach((element) => {
        element.innerHTML = html;
      });
    });
};
loadFooterHTML("footer.html", ".footer");
