import { Personne } from "./06_Personne";
import { Employee } from "./08_Employee";
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