class Compte{
    numero: number;
    label: string;
    solde: number;

    constructor(numero : number, label : string = "Compte Anonyme", solde : number = 0){
        this.numero = numero;
        this.label = label;
        this.solde = solde;
    }

    debiter(montant : number) : void {
        this.solde -= montant;
    }

    crediter(montant : number) : void {
        this.solde += montant;
    }

}

// En Ts et Js pas de surcharge de fonction
// Il faut donc utiliser les valeurs par défaut
// pour obtenir le même comportement avec un
// nombre de paramètres variable
let compte1 = new Compte(1,"TimotheAccount",1000000);

let compte2 = new Compte(2);

compte1.debiter(1000000);
compte2.crediter(1000000);

console.log("Solde de compte1: " + compte1.solde);
console.log("Solde de compte2: " + compte2.solde);