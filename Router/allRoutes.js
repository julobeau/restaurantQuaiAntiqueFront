import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/galerie", "Galerie", "/pages/galerie.html"),
    new Route("/carte", "Carte et menus", "/pages/carte.html"),
    new Route("/connexion", "Connexion", "/pages/auth/connexion.html", "/js/auth/connexion.js"),
    new Route("/inscription", "Inscription", "/pages/auth/inscription.html", "/js/auth/inscription.js"),
    new Route("/account", "Compte", "/pages/auth/account.html", "/js/auth/inscription.js"),
    new Route("/editPassword", "Changement de mot de passe", "/pages/auth/editPassword.html"),
    new Route("/allResa", "Vos réservations", "/pages/reservations/allResa.html"),
    new Route("/reserver", "Réserver", "/pages/reservations/reserver.html"),
 ];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai Antique";