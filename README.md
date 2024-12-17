# USER STORIES

## Ajouter un nouveau vaccin (POST /vaccines)

**En tant qu'administrateur,**  
Je souhaite enregistrer un vaccin dans le système,  
Afin de le rendre disponible pour les utilisateurs avec toutes ses informations essentielles.

### Critères d'acceptation :
- La requête doit inclure les informations suivantes : `id`, `nom` et `date de création`.
- Le système doit sauvegarder le vaccin dans la base de données.
- Si les données fournies sont invalides ou incomplètes, le système doit retourner une erreur `400 Bad Request` accompagnée d’un message précisant les erreurs.
- Une fois le vaccin créé, le système doit renvoyer une réponse contenant les informations complètes du vaccin.

---

## Supprimer un vaccin (DELETE /vaccines/vaccin/:id)

**En tant qu'administrateur,**  
Je souhaite supprimer un vaccin,  
Afin de retirer les vaccins qui ne sont plus nécessaires.

### Critères d'acceptation :
- Le système doit supprimer le vaccin correspondant à l'`ID` fourni en paramètre de la requête.
- Si l'`ID` du vaccin n'existe pas, une erreur `404` doit être renvoyée.
- En cas de suppression réussie, un message de confirmation doit être retourné.
- Une fois supprimé, le vaccin ne doit plus être accessible dans la base de données.
