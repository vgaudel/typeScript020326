class Animal {
    private _size : number;
    name : string;

    constructor(nom : string = "default"){
        this.name = nom;
        this._size = 100; //valeur par défaut 
    }

    move(meters: number = 0){
        console.log(this.name+ " moved " + meters + "m." + " size =" + this._size);
    }

    public get size() : number{ 
        return this._size;
    }
        
    public set size(newSize : number){
        if (newSize >= 0) this._size = newSize;
        else throw "negative size is invalid";
    }
}

//Différence entre une erreur et une exception :
// Une erreur c'est que le programme n'arrive pas à faire ce qu'il doit faire. Il y a un problème
// Une exeption : cas particulier qu'on ne peut éliminer et qui ne permet pas au programme de fonctionner correctement.

let chat = new Animal("Babac");
let chien = new Animal("Médor");
//Erreur, on ne peut pas acceder à un attribut private depuis l'extérieur d'un objet
//console.log(chat._size);

console.log("Taille de " + chat.name + " : " + chat.size);

try{
    chat.size = -50;
}catch(err){
    console.log(err + " but i will finish my execution anyway")
}


chat.move(10)
chien.move(100)

