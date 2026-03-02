class Porte implements Ouvrable{
    numero : number ;
    typePorte : string; 

    constructor(num:number = 0,typePorte:string=""){ 
        this.numero = num;
        this.typePorte = typePorte;
    }
    
    get nomPorte() { return "porte_" + this.typePorte + "_" + this.numero; }
    
    verifierClef(clef: string): boolean {
        return true;
    }
    ouvrir(){ console.log("la porte s'ouvre ... "); }
    fermer(){ console.log("la porte se ferme ... "); }
}

let porteQuelconque : Porte = new Porte(5);
console.log(porteQuelconque.nomPorte);// porte__5
porteQuelconque.ouvrir(); // la porte s'ouvre ...
porteQuelconque.fermer(); // la porte se ferme ...

class PorteCoulissante extends Porte{
    ouvertureGlissiere : number =0; //en cm

    constructor(num:number = 0){ 
        super(num,"coulissante");
    }
    faireCoulisserPorte(ouverture:number){
        this.ouvertureGlissiere=ouverture;
        console.log("ouverture porte (sur glissière)="+this.ouvertureGlissiere);
    }
    ouvrir() { super.ouvrir(); 
               this.faireCoulisserPorte(80);
    }
    fermer() { super.fermer(); 
               this.faireCoulisserPorte(0);
    }
}

let porteCoulissante : Porte = new PorteCoulissante(6);
console.log(porteCoulissante.nomPorte);// 
porteCoulissante.ouvrir(); // la porte s'ouvre ...
porteCoulissante.fermer(); 


interface Ouvrable {
    verifierClef(clef:string):boolean;
    ouvrir() : void;
    fermer() : void;
}