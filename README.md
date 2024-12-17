* Ajouter un nouveau vaccin (POST /vaccins)

En tant qu'administrateur,
Je veux enregistrer un vaccin dans le système,
Afin de le rendre disponible pour les utilisateurs avec toutes ses informations essentielles.

Critères d'acceptation :

- La requête doit inclure les informations suivantes : id, nom et date de création.
- Le système doit sauvegarder le vaccin dans la base de données.
- Si les données fournies sont invalides ou incomplètes, le système doit retourner : Une erreur 400 Bad Request accompagnée d’un message précisant les erreurs.
- Une fois le vaccin créé, le système doit renvoyer une réponse contenant les informations complètes du vaccin.