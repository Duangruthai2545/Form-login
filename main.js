const loginForm = document.querySelector(".login-form");

const validateInput = (inputObj) => {

  const username = inputObj.username.trim(); 
  if (username.length <= 3 || /^\d/.test(username) || /\s/.test(username)) {
    markInputAsInvalid("username");
    return;
  }

  const password = inputObj.password.trim();
  if (password.length <= 4 || !/[a-zA-Z]/.test(password) || !/\d/.test(password)) {
    markInputAsInvalid("password");
    return;
  }
  window.location.href = "https://www.example.com";
};

const markInputAsInvalid = (inputId) => {
  const inputElement = document.getElementById(inputId);
  inputElement.style.borderColor = "red";
};

const hdlLogin = (e) => {
  e.preventDefault();
  let inputObj = {};
  for (let el of loginForm.elements) {
    inputObj[el.id] = el.value;
  }
  validateInput(inputObj);
};

loginForm.addEventListener("submit", hdlLogin);
