/**
 * Télécharge un fichier
 * @param {string} url - URL du fichier
 * @param {string} nom - Nom du fichier
 */

function downloadFile(url , nom) {
    const link = document.createElement('a');
    link.href = url //chemin du fichier
    link.download = nom // nom du fichier a telecharger
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
