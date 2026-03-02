// Correction du TP: Employe héritant de Personne

// interface facultative
interface IPerson {
    numero: number | undefined;
    nom: string;
}

class Personne implements IPerson 
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

class Employee extends Personne {
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

// petits tests à l'exécution
function runTests() {
    try {
        const bad = new Personne(0, "", "", -1);
    } catch (e) {
        console.log(`exception normale:${(e as Error).message}`);
    }

    const p1 = new Personne(1, "", "toto", 1);
    console.log(`Personne p1 avec nom=${p1.nom} et age=${p1.age}`);

    const p2 = new Personne(2, "jean", "Bon", 45);
    console.log(`Personne p2 avec nom=${p2.nom} et age=${p2.age}`);
    console.log(`p2 au format json=${JSON.stringify(p2.toJSON())}`);

    const e1 = new Employee(1, "Alex", "Therieur", 40, 3000);
    console.log(
        `Employe e1 au format json=${JSON.stringify(e1.toJSON())} et\n` +
            `est de type=${typeof e1}`
    );
}

runTests();
