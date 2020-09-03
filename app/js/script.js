function tab() {
  const tabNav = document.querySelectorAll(".nav__item");
  const tabContent = document.querySelectorAll(".tab");
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
}

tab();

//modal login window

let modal = document.getElementById("modal-login");
let btn = document.getElementById("login-button");

function closeModal() {
  modal.style.display = "none"; //close by click in any place
  document.querySelector("body").style.overflow = "auto"; //page scroll
}

btn.addEventListener("click", function () {
  modal.style.display = "block"; //show modal
  document.querySelector("body").style.overflow = "hidden"; //disable page scroll
});

window.addEventListener("click", function (event) {
  if (event.target === modal) {
    closeModal();
  }
});

//get value from modal inputs

const checkBtn = document.getElementById("login-check");
const login = document.getElementById("login-text");
const password = document.getElementById("login-password");
const userName = document.getElementById("user-name");
const buttonLogout = document.getElementById("button-logout");
const checkbox = document.getElementById("checkbox");

function showUser(argument) {
  userName.textContent = argument;
  buttonLogout.classList.remove("disable");
  btn.classList.add("disable");
}

document.addEventListener("DOMContentLoaded", () => {
  const userLogin = localStorage.getItem("user");
  const userLoginSession = sessionStorage.getItem("user");
  const currentUser = userLogin || userLoginSession;
  if (currentUser !== null) {
    showUser(currentUser);
  }
});

checkBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (login.value === "Константин К." && password.value === "777") {
    if (checkbox.checked) {
      localStorage.setItem("user", login.value);
    } else {
      sessionStorage.setItem("user", login.value);
    }
    showUser(login.value);
    closeModal();
  } else {
    alert("Incorrect login or password");
  }
});

buttonLogout.addEventListener("click", function () {
  login.value = "";
  password.value = "";
  checkbox.checked = false;
  localStorage.removeItem("user");
  sessionStorage.removeItem("user");
  userName.textContent = "";
  buttonLogout.classList.add("disable");
  btn.classList.remove("disable");
});
