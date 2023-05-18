// pourbutton confirmer
document.getElementById("forgotPasswordForm").addEventListener("submit", function(event) {
    // Empêcher le formulaire de se soumettre normalement
    event.preventDefault();
    document.getElementById("close-button").addEventListener("click", function(event) {
        event.preventDefault();
        
        // Masquer le formulaire de mot de passe oublié
        document.getElementById("password-form").style.display = "none";
        
        // Afficher le formulaire de connexion
        document.getElementById("reset-form").style.display = "block";
      });
  
    // Effectuer les actions souhaitées (par exemple, valider le formulaire, envoyer une requête, etc.)
  
    // Rediriger vers la page de confirmation
    //window.location.href = "page_envoyer_le_code.html";
  });
