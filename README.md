# USER STORIES VACCINES

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

## Supprimer un vaccin (DELETE /vaccines/vaccine/:id)

**En tant qu'administrateur,**  
Je souhaite supprimer un vaccin,  
Afin de retirer les vaccins qui ne sont plus nécessaires.

### Critères d'acceptation :
- Le système doit supprimer le vaccin correspondant à l'`ID` fourni en paramètre de la requête.
- Si l'`ID` du vaccin n'existe pas, une erreur `404` doit être renvoyée.
- En cas de suppression réussie, un message de confirmation doit être retourné.
- Une fois supprimé, le vaccin ne doit plus être accessible dans la base de données.

---

## Récupérer tous les vaccins (GET /vaccines)

**En tant qu'administrateur,**  
Je souhaite récupérer la liste de tous les vaccins existants dans la base de données

### Critères d'acceptation :
- Le système doit récupérer l'ensemble des vaccins existant et me le renvoyer dans un tableau
- Si aucun vaccin n'est présent dans la base de données, le système me renvoi un tableau vide

---

## Récupérer un vaccin (GET /vaccines/vaccine/:id)

**En tant qu'administrateur,**  
Je souhaite récupérer un vaccin en particulier

### Critères d'acceptation :
- Le système doit récupérer le vaccin correspondant à l'`ID` fourni en paramètre de la requête.
- Si l'`ID` du vaccin n'existe pas, une erreur `404` doit être renvoyée.
- Si le vaccin a été trouvé, le système le retourne dans la réponse de la requête.

---

## Mettre à jour un vaccin (GET /vaccines/vaccine/:id)

**En tant qu'administrateur,**  
Je veux mettre à jour les informations d'un vaccin, Afin de pouvoir modifier ses données si nécessaire.

### Critères d'acceptation :
- Le système met à jour le vaccin sur la base de l'ID fourni en paramètre et du corps de la requête.
- Si l'`ID` du vaccin n'existe pas, une erreur `404` doit être renvoyée.
- Si les données saisies sont invalides, le système renvoie une erreur 400
- Si le vaccin est trouvé et que les données saisies sont valides, le vaccin est mis à jour et les modifications sont visibles dans la base de données

---

# USER STORIES CAMPAIGNS

## Ajouter une nouvelle campagne (POST /campaigns)

**En tant qu'administrateur,**  
Je souhaite enregistrer une nouvelle campagne dans le système,  
Afin de la rendre disponible pour les utilisateurs avec toutes ses informations essentielles.

### Critères d'acceptation :
- La requête doit inclure les informations suivantes : `id`, `nom`, `date de l'événement`, et `lieu`.
- Le système doit sauvegarder la campagne dans la base de données.
- Si les données fournies sont invalides ou incomplètes, le système doit retourner une erreur `400 Bad Request` accompagnée d’un message précisant les erreurs.
- Une fois la campagne créée, le système doit renvoyer une réponse contenant les informations complètes de la campagne.

---