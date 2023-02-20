// Get DOM elements
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateBtn = document.getElementById("generate-btn");
const passwordEl = document.getElementById("password");
const copyBtn = document.getElementById("copy-btn");

// Define character sets
const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_-+=";

// Generate password
function generatePassword() {
  const length = +lengthEl.value;
  const uppercase = uppercaseEl.checked;
  const numbers = numbersEl.checked;
  const symbols = symbolsEl.checked;

  let chars = lowercaseChars;
  if (uppercase) chars += uppercaseChars;
  if (numbers) chars += numberChars;
  if (symbols) chars += symbolChars;

  let password = "";
  for (let i = 0; i < length; i++) {
    password += chars[Math.floor(Math.random() * chars.length)];
  }

  return password;
}

// Update password display
function updatePassword() {
  passwordEl.value = generatePassword();
}

// Copy password to clipboard
function copyPassword() {
  passwordEl.select();
  document.execCommand("copy");
}

// Event listeners
generateBtn.addEventListener("click", updatePassword);
copyBtn.addEventListener("click", copyPassword);
