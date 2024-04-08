// 1. Crea una classe User per la creazione di oggetti di tipo “utente”. Il suo costruttore dovrà
// inizializzare ogni oggetto utente con i seguenti attributi:
// - firstName
// - lastName
// - age
// - location
// Aggiungi alla classe User anche un metodo che restituisca il confronto con l'età di un'altra persona.
// Ad esempio, date due istanze della classe utente “x” e “y” inizializzate con le proprietà sopra descritte,
// il metodo dovrà restituire una frase simile a “x è più vecchio di y” a seconda del risultato del confronto.
// Crea degli oggetti a partire dalla classe User e verifica che la comparazione tra le età funzioni correttamente.

class User {
  constructor(firstName, lastName, age, location) {
    this.name = firstName;
    this.surname = lastName;
    this.age = parseInt(age);
    this.age = location;
  }

  ageEguality(userToCompare) {
    if (this.age != userToCompare.age) {
      if (this.age < userToCompare.age) {
        return `${this.name} is older than ${userToCompare.name}`;
      } else {
        return `${userToCompare.name} is older than ${this.name}`;
      }
    }
    {
      return `${this.name} and ${userToCompare.name} have the same age!`;
    }
  }
}

const pippo = new User("Pippo", "de' Pippis", 40, "Topolinia");
const gerry = new User("Gerry", "Scotti", 67, "Mirandolo Terme");

console.log(pippo.ageEguality(gerry));

//per provare entrambi i metodi
class User2 {
  constructor(firstName, lastName, age, location) {
    this.name = firstName;
    this.surname = lastName;
    this.age = parseInt(age);
    this.age = location;
  }

  static ageEguality(userToCompare, userCompared) {
    if (userCompared != userToCompare.age) {
      if (this.age < userToCompare.age) {
        return `${userCompared} is older than ${userToCompare.name}`;
      } else {
        return `${userToCompare.name} is older than ${userCompared.name}`;
      }
    }
    {
      return `${userCompared} and ${userToCompare.name} have the same age!`;
    }
  }
}

const pippos = new User("Pippo", "de' Pippis", 40, "Topolinia");
const gerrys = new User("Gerry", "Scotti", 67, "Mirandolo Terme");

console.log(User2.ageEguality(pippos, gerrys));

// 2-Crea un form per la creazione di oggetti “Pet” (animali domestici). La classe Pet dovrà essere dotata delle seguenti proprietà:
// - petName
// - ownerName
// - species (cane, gatto, coniglio etc.)
// - breed (labrador, soriano, nano etc.)
// Nella classe che utilizzerai per creare questi oggetti aggiungi anche un metodo che restituisca true se due animali condividono lo stesso padrone.
// Crea, raccogliendo i dati dal form, diverse istanze della classe Pet e mostrane i dati in una lista sottostante.

const form = document.getElementById("petRegistrationaForm");
const petList = document.getElementById("petList");
const petArray = [];

class CreatePet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }

  comparePetOwners(petArray) {
    for (let i = 0; i < petArray.length; i++) {
      if (petArray[i][1] === this.ownerName) {
        return true;
      }
    }
    return false;
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const petName = document.querySelector("#petName").value.toLowerCase();
  const ownerName = document.querySelector("#ownerName").value.toLowerCase();
  const species = document.querySelector("#species").value.toLowerCase();
  const breed = document.querySelector("#breed").value.toLowerCase();

  const lookTheresACutePet = new CreatePet(petName, ownerName, species, breed);

  console.log(lookTheresACutePet.comparePetOwners(petArray));
  petArray.push([petName, ownerName, species, breed]);
  addPetToList(lookTheresACutePet);
  form.reset();
});

const addPetToList = (pet) => {
  const petItem = document.createElement("li");
  petItem.classList.add("list-group-item");
  petItem.textContent = `Pet Name: ${pet.petName}, Owner Name: ${pet.ownerName}, Species: ${pet.species}, Breed: ${pet.breed}`;
  petList.appendChild(petItem);
};
