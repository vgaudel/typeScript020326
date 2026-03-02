// Correction du TP: Employe héritant de Personne
import type {IPerson}  from "./07_IPerson";

export class Personne implements IPerson 
{
    constructor(
        public numero: number | undefined,
        public prenom: string = "",
        public nom: string = "",
        private _age: number = 0
    ) {
    }

    get age(): number {
        return this._age;
    }

    set age(value: number) {
        if (value < 0) {
            // l'âge ne peut être négatif, déclenchement d'une exception
            throw new Error("age negatif invalide");
        }
        this._age = value;
    }

    incrementerAge(): void {
        this.age = this.age + 1;
    }

    toJSON(): object {
        // On expose le champ _age pour correspondre à l'exemple attendu
        return {
            numero: this.numero,
            prenom: this.prenom,
            nom: this.nom,
            _age: this._age,
        };
    }
}




/*
function add(x: number,y : number) : number{
    return x + y;
}

function mult(x: number,y : number) : number{
    return x * y;
}

export {add, mult as multiplier};*/