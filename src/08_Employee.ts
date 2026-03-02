import { Personne } from "./06_Personne";

export class Employee extends Personne {
    salaire: number;

    constructor(
        numero?: number,
        prenom: string = "",
        nom: string = "",
        age: number = 0,
        salaire: number = 0
    ) {
        super(numero, prenom, nom, age);
        this.salaire = salaire;
    }

    augmenterSalaire(augmentation: number): void {
        this.salaire += augmentation;
    }

    toJSON(): object {
        const base = super.toJSON() as any;
        base.salaire = this.salaire;
        return base;
    }
}