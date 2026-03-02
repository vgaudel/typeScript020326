let a : string = "Hello World";
console.log(a); // Hello World 
console.log("nouvel affichage");

enum Color {
    Red,
    Green,
    Blue
}

let maCouleur : Color = Color.Green;

let colorName : string | undefined = Color[1];

console.log(maCouleur); // 
console.log(colorName); // Green


let obj : object = { id : 2, label : "cahier"};

obj = {prenom : "Vincent", nom : "Dupont"};
function afficher(personne : string) :string {
    return "Bonjour " + personne;
} 

let message = afficher("Vincent");
console.log(message); // Bonjour Vincent

//message = 1234;

let tableau1 : string[] = ["a", "b", "c"];
let tableau2 : Array<string> = new Array();

tableau2.push("d");
tableau2.push("e");
tableau2.push("f");

console .log(tableau1); // [ 'a', 'b', 'c' ]
console .log(tableau2); // [ 'd', 'e', 'f' ]
