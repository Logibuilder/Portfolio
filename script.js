document.querySelector("#cv_btn").addEventListener('click', () => {
    var link = document.createElement('a');
    link.href = 'Assane_KANE_MON_CV.pdf';  // Remplacez par le chemin de votre fichier
    link.download = 'cv_Assane_KANE.pdf';  // Le nom du fichier qui sera téléchargé
    link.click();  // Déclenche le téléchargement
});