let tab = function () {
  let tabNav = document.querySelectorAll(".nav__item");
  let tabContent = document.querySelectorAll(".tab");
  let tabName;

  tabNav.forEach((item) => {
    item.addEventListener("click", selectTabNav);
  });

  function selectTabNav() {
    tabNav.forEach((item) => {
      item.classList.remove("is-active");
    });
    this.classList.add("is-active");
    tabName = this.getAttribute("data-tab-name");
    selectTabContent(tabName);
  }

  function selectTabContent(tabName) {
    tabContent.forEach((item) => {
      item.classList.contains(tabName) ? item.classList.add("is-active") : item.classList.remove("is-active");
    });
  }
};

tab();

//modal login window

let modal = document.getElementById("modal-login");
let btn = document.getElementById("login-button");
let close = document.getElementById("login-form");

btn.addEventListener("click", function () {
  modal.style.display = "block"; //show modal
  document.querySelector("body").style.overflow = "hidden"; //disable page scroll
});

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none"; //close by click in any place
    document.querySelector("body").style.overflow = "auto"; //page scroll
  }
};

//get value from modal inputs

let login = document.getElementById("login-text");

function getInputValue() {
  // Selecting the input element and get its value
  let inputValue = login.value;

  alert(inputValue);
}
