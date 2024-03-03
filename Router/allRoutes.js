import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/galerie", "Galerie", "/pages/galerie.html"),
    new Route("/carte", "Carte et menus", "/pages/carte.html"),
    new Route("/connexion", "Connexion", "/pages/auth/connexion.html"),
    new Route("/inscription", "Inscription", "/pages/auth/inscription.html"),
    new Route("/account", "Compte", "/pages/auth/account.html"),
 ];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai Antique";