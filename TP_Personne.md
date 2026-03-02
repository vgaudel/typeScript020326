## TP " Employe héritant de Personne (TypeScript)"

### Consignes du TP
Créer un nouveau fichier personnes.ts dans src

Au sein de ce fichier, coder et tester une classe Personne comportant les éléments
suivants :
- numero (de type number et pouvant être undefined )
- prenom (de type string )
- nom (de type string )
- _age (numérique et censé être toujour positif via get / set )
- Constructeur avec des valeurs par défaut
- Méthode incrementerAge() déclenchant this.age++;

Ajouter et tester une nouvelle classe Employee dans src comportant les éléments suivants :
- Héritage vis-à-vis de Personne
- Attribut supplémentaire salaire (de type number )
- Constructeur avec lien avec super-classe
- Méthode augmenterSalaire(augmentation: number)

Ajouter facultativement une interface IPerson imposant au minimum les parties suivantes :
- numero ( number )
- nom ( string )

Exemple de résultats attendus (à la console) :

``` json
exception normale:age negatif invalide
Personne p1 avec nom=toto et age=1
Personne p2 avec nom=Bon et age=45
p2 au format json={"numero":2,"prenom":"jean","nom":"Bon","_age":45}
Empoye e1 au format json=
{"numero":1,"prenom":"Alex","nom":"Therieur","_age":40,"salaire":3000} et
est de type=object
````