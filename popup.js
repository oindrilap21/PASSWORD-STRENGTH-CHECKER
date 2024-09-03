function checkPasswordStrength() {
  var passwordInput = document.getElementById('password');
  var password = passwordInput.value;
  var suggestions = getSuggestions(password);
  var result = document.getElementById('result');
  
  if (suggestions.length === 0) {
    result.textContent = "Password is strong!";
  } else {
    var suggestionsText = "Suggestions: " + suggestions.join(", ");
    result.textContent = suggestionsText;
  }
}

function getSuggestions(password) {
  var suggestions = [];

  // Check if the password is too short
  if (password.length < 8) {
    suggestions.push("Password should be at least 8 characters long.");
  }

  // Check if the password contains uppercase letters
  if (!password.match(/[A-Z]/)) {
    suggestions.push("Add at least one uppercase letter.");
  }

  // Check if the password contains lowercase letters
  if (!password.match(/[a-z]/)) {
    suggestions.push("Add at least one lowercase letter.");
  }

  // Check if the password contains numbers
  if (!password.match(/\d+/)) {
    suggestions.push("Add at least one number.");
  }

  // Check if the password contains special characters
  if (!password.match(/[!@#$%^&*()?_~]/)) {
    suggestions.push("Add at least one special character.");
  }

  return suggestions;
}

document.addEventListener('DOMContentLoaded', function() {
  var checkButton = document.getElementById('checkButton');
  checkButton.addEventListener('click', checkPasswordStrength);
});
