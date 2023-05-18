//pour le button confirmer
document.getElementById("forgotPasswordForm").addEventListener("submit", function(event) {
    // Empêcher le formulaire de se soumettre normalement
    event.preventDefault();
  
    // Effectuer les actions souhaitées (par exemple, valider le formulaire, envoyer une requête, etc.)
  
    // Rediriger vers la page de confirmation
    window.location.href = "page_envoyer_le_code.html";
  });
  
  
  
  
  