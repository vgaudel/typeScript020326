class CompteEpargne {
    static nbTotalCompte : number = 0;
    static tauxInteret: number= 1.5;
    constructor(public numero: number , 
                public solde :number = 0){
                  CompteEpargne.nbTotalCompte++;
                  this.numero = CompteEpargne.nbTotalCompte;
    }
    calculerInterets(){
      return this.solde * CompteEpargne.tauxInteret / 100;
    }
}

var compteEpargne1 = new CompteEpargne(1,200.0);
var compteEpargne2 = new CompteEpargne(200.0);
console.log("tauxInteret="+CompteEpargne.tauxInteret);
console.log("interets pour compteEpargne1="+compteEpargne1.calculerInterets());

console.log("cpt1 : "+compteEpargne1.numero)
console.log("cpt2 : "+compteEpargne2.numero)