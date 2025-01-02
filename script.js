document.querySelector("#cv_btn").addEventListener('click', () => {
    var link = document.createElement('a');
    link.href = 'Assane_KANE_MON_CV.pdf';  // Remplacez par le chemin de votre fichier
    link.download = 'cv_Assane_KANE.pdf';  // Le nom du fichier qui sera téléchargé
    link.click();  // Déclenche le téléchargement
});


window.onload = function() {
    // Affiche la modale lorsque la page est chargée
    const modal = document.querySelector('.en-developpement');
    const closeButton = document.querySelector('.fermer');
    
    // Afficher la modale
    modal.style.display = "flex";

    // Fermer la modale au clic sur le bouton "Fermer"
    closeButton.addEventListener("click", function() {
        modal.style.display = "none";
    });
};




document.addEventListener('DOMContentLoaded', () => {

    nom_element = document.querySelector("#nom-prenom");
    const nom = "Assane KANE";
    let index = 0;

    function ecrireParLettre()  {
        if (index < nom.length  ) {
            nom_element.innerHTML += nom[index];// Ajouter une lettre
            index++;
            setTimeout(ecrireParLettre, 100); // Délai de 100ms entre chaque lettre
        }
    }

    ecrireParLettre(); // Appel de la fonction pour commencer à écrire
});