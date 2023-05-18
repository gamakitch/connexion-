//// page connextion
function submitForm(event) {
  event.preventDefault();

  // Get input values
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Validate input fields
  if (email.trim() === "") {
    alert("Veuillez entrer l'adresse email valide.");
   
    return false;
    
  
    
  }
 
    document.getElementById("forgot-password-button").addEventListener("click", function(event) {
      event.preventDefault();
      
      // Masquer le formulaire de connexion
      document.getElementById("connexion").style.display = "none";
      
      // Afficher le formulaire de mot de passe oublié
      document.getElementById("password-form").style.display = "block";
    });
   
    

  if (password.trim() === "") {
    return false;
  }

  // Send HTTP request to authenticate user
  const xhr = new XMLHttpRequest();
  const url = "authenticate.php"; // Remplacez par le script d'authentification côté serveur
  const params = `username=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`;
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


