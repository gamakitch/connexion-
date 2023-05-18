
function submitForm(event) {
  event.preventDefault();

  // Get input values
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Validate input fields
  if (username.trim() === "") {
    alert("Veuillez entrer un nom d'utilisateur valide.");
    return false;
  }

  if (password.trim() === "") {
    alert("Veuillez entrer un mot de passe valide.");
    return false;
  }

  // Send HTTP request to authenticate user
  const xhr = new XMLHttpRequest();
  const url = "authenticate.php"; // Remplacez par le script d'authentification côté serveur
  const params = `username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`;
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      const response = JSON.parse(xhr.responseText);
      if (response.success) {
        // Rediriger l'utilisateur vers la page du tableau de bord
        window.location.href = "dashboard.html"; // Remplacez par l'URL de votre page de tableau de bord
      } else {
        alert(response.message);
      }
    }
  };
  xhr.send(params);
}

const form = document.querySelector("form");
form.addEventListener("submit", submitForm);

function forgotPassword() {
  var email = prompt("Veuillez saisir votre adresse e-mail :");

  // Vérification de l'adresse e-mail
  if (email !== null && email !== "") {
    // Envoyer une demande de réinitialisation du mot de passe
    // Vous pouvez ajouter votre propre logique ici, comme appeler une API ou rediriger l'utilisateur vers une page spécifique.
    alert("Un e-mail de réinitialisation du mot de passe a été envoyé à " + email);
  }
}

// Pour se déplacer vers la page de mot de passe oublié
function redirectToForgotPassword() {
  window.location.href = "forgot_password.html";
}
