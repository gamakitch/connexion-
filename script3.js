
// script de la page envyer le code.js


document.getElementById("reset-password-form").addEventListener("submit", function(event) {
  event.preventDefault();

  // Récupérer les valeurs saisies par l'utilisateur
  var resetCode = document.getElementById("reset-code").value;
  var newPassword = document.getElementById("new-password").value;
  var confirmPassword = document.getElementById("confirm-password").value;
  console.log(typeof(newPassword))
  // Vérifier si les mots de passe correspondent
  if (newPassword !== confirmPassword) {
    alert("Les mots de passe ne correspondent pas.");
    return;
  }

  // Envoyer la demande de réinitialisation de mot de passe (vous devrez implémenter cette logique côté serveur)

  // Afficher un message de succès
  alert("Votre mot de passe a été réinitialisé avec succès.");

  // Rediriger vers la page de connexion (ou une autre page de votre choix)
 // window.location.href = "connexion.html";
 
 document.getElementById("reset-form").style.display = "none";
  
 // Afficher le formulaire de connexion
 document.getElementById("connexion").style.display = "block";
 });
 
 document.getElementById("send-code-button").addEventListener("click", function(event) {
   event.preventDefault();
 });
//les liens pour leer les pages forgot and envoyer le code
// Code pour récupérer le code de réinitialisation à partir de l'URL
var urlParams = new URLSearchParams(window.location.search);
var resetCode = urlParams.get("code");

// Pré-remplir le champ de code de réinitialisation
document.getElementById("reset-code").value = resetCode;