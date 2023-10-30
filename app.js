
const subMenu = [
  { text: "Nepalese  ", href: "#h1" },
  { text: "Indian  ", href: "#h2" },
  { text: "Chinese  ", href: "#h3" },
  // { text: "Korean  ", href: "/account" }
];

const subMenuBar = document.querySelector("#submenu");


for (const link of subMenu) {
  const aElement = document.createElement("a");
  aElement.classList.add("menu")
  aElement.textContent = link.text;
  aElement.href = link.href;
  subMenuBar.appendChild(aElement);
}


 
// sign up form
const form = document.getElementById("form");
const name = form.elements["name"];
const email = form.elements["email"];
const zip = form.elements["zip"];
const state = form.elements["state"];
const password = form.elements["password"];

form.addEventListener("submit", validate);
// validate.preventDefault();


function validate(evt) {
  const nameVal = validateName();
  if (nameVal === false) {
    evt.returnValue = false;
    return false;
  }

  const emailVal = validateEmail();
  if (emailVal === false) {
    evt.returnValue = false;
    return false;
  }

  const zipVal = validateZip();
  if (zipVal === false) {
    evt.returnValue = false;
    return false;
  }

  const stateVal = validateState();
  if (stateVal === false) {
    evt.returnValue = false;
    return false;
  }

  const passwordVal = validatePassword();
  if (passwordVal === false) {
    evt.returnValue = false;
    return false;
  } else {

    confirm(`Name: ${nameVal}
      Email: ${emailVal}
      State: ${stateVal}
      Zip Code: ${zipVal}
      Password: **********`);

    return true;
  }
}

// validations
function validateEmail() {
  let emailVal = email.value;

  if (emailVal === "") {
    alert("Please provide an email.");
    email.focus();
    return false;
  }

  const atpos = emailVal.indexOf("@");
  const dotpos = emailVal.lastIndexOf(".");

  if (atpos < 1) {
    alert(
      "Your email must include an @ symbol which must not be at the beginning of the email."
    );
    email.focus();
    return false;
  }

  if (dotpos - atpos < 2) {
    alert(
      "Invalid structure: @.\nYou must include a domain name after the @ symbol."
    );
    email.focus();
    return false;
  }

  return emailVal;
}

// Name
function validateName() {
  if (name.value === "") {
    alert("Please provide a name.");
    name.focus();
    return false;
  }
  return name.value;
}

// Password 
function validatePassword() {
  if (password.value === "") {
    alert("Please provide a password.");
    password.focus();
    return false;
  }
  return password.value;
}

// State 
function validateState() {
  if (state.value === "") {
    alert("Please provide a state.");
    state.focus();
    return false;
  }
  return state.value;
}

// Zip Code 
function validateZip() {
  if (zip.value === "") {
    alert("Please provide a zip code.");
    zip.focus();
    return false;
  }

  if (zip.value.length !== 5 || isNaN(Number(zip.value))) {
    alert("Zip codes must be in the format #####.");
    zip.focus();
    return false;
  }

  return zip.value;
}

// login form

function validateForm(e) {
  let username = document.forms["loginForm"]["username"].value;
  let password = document.forms["loginForm"]["password"].value;

  let usernameError = document.getElementById("usernameError");
  let passwordError = document.getElementById("passwordError");

  usernameError.textContent = username === "" ? "Username must be filled out" : "";
  passwordError.textContent = password === "" ? "Password must be filled out" : "";
e.preventDefault();
  return !(username === "" || password === "");
}


//Footer

function pageFooter() {
 
  const footer = document.createElement('footer');
  footer.style.backgroundColor = '#212529';
  footer.style.color = "white"
  footer.style.padding = '20px';
  footer.style.textAlign = 'center';


  var footerContent = document.createElement('p');
  footerContent.textContent = '© 2002-2023 Asian HotPot, 1223 Broadway, NewYork, 12345';
  

  footer.appendChild(footerContent);

  document.body.appendChild(footer);
}
pageFooter();