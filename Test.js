// function to shorten the use of "console.log"
function bark(input) {
  console.log("ADMIN MESSAGE-----> " + input);
}

// function to shorten the use of "console.log"
function Pbark(input) {
  console.log("\n\t" + input);
}

        // let input = prompt("Input your pets name here:");
        // console.log(input);
// ======================GLOBAL VARIABLES
let g_Name = "";
let g_DaysAlive = 0;
// ======================CLASS DECLARATIONS
class Pet {
constructor(name, species) {
  // let input = prompt("Input your pets name here:"); use this for web
  this._name = name;
  this._age = 0;
  this._sizeArray = ["Tiny", "Small", "Medium","Large", "Huge", "Colossal"]
  this._size = this._sizeArray[0]
  this._species = species;
  this._thirst = 100;
  this._hunger = 100;
  this._morale = 100;
  this._alive = true;
  this._attArray = [this._hunger, this._thirst, this._morale];
  }
  
  //==========GETTERS===========
  get name() {
    return this._name;
  }
  get species() {
    return this._species;
  }
  get thirst() {
    return this._thirst;
  }
  get hunger() {
    return this._hunger;
  }
  get morale() {
    return this._morale;
  }
  get size() {
    return this._size;
  }
  get age() {
    return this._age;
  }

  //==========METHODS===========
  FN_changeThirst(input) {
    this.FN_Evaluate()
    if (this._thirst <= 0) {
      this._alive = false;
      Pbark(
        "Oh no! " +
          this._name +
          " died of thirst, right next to a tap."
      );
    } else if (this._thirst >= 0) {
      this._thirst += input;
      this._attArray = [this._hunger, this._thirst, this._morale];

    }
  }

  FN_changeHunger(input) {
    this.FN_Evaluate()
    if (this._hunger <= 0) {
      // bark("FIRED THE FN_changeHunger function...");
      // bark("Wiggles._hunger = " + Wiggles._hunger);
      // bark("Wiggles._alive (BEFORE checking) = " + Wiggles._alive);
      this._alive = false;
      // bark("Wiggles._alive (AFTER checking) = " + this._alive);
      Pbark("Oh no! " + this._name + " died of hunger!");
    } else if (this._hunger >= 0) {
      this._hunger += input;
      this._attArray = [this._hunger, this._thirst, this._morale];
    }
  }

  FN_changeMorale(input) {
    this.FN_Evaluate()
    if (this._morale <= 0) {
      // bark("FIRED THE FN_changeMorale function...");
      // bark("Wiggles._morale = " + Wiggles._morale);
      // bark("Wiggles._alive (BEFORE checking) = " + Wiggles._alive);
      this._alive = false;
      // bark("this._alive (AFTER checking) = " + this._alive);
      Pbark(
        "Oh no! " +
          this._name +
          " died of boredom, what a reflection on your personality!"
      );
    } else if (Wiggles._morale >= 0) {
      this._morale += input;
      this._attArray = [this._hunger, this._thirst, this._morale];
      
    }
  }

  FN_Evaluate(){
    for (let i = 0; i < this._attArray.length; i++){
      // bark("\n\tInside the loop in FN_Evaluate: i="+i+", attArray.length = "+this._attArray.length+" and attArray[i] = "+this._attArray[i]+"\n")
    if(this._attArray[i] > 0 && this._attArray[i] <=10){
        if (i==0)
        {
          Pbark(this._name+ " is only skin and bone. Could be a good idea to feed them... like ten calzones at this point.")
        }
        else if (i==1)
        {
          Pbark(this._name+ " has a desert instead of a mouth. Could be a good idea to let them have a drink...like from a puddle at this point.")
        }
        else if (i==2)
        {
          Pbark(this._name+ " has no light in their eyes. Could be a good idea to play with them... like with an entire opera at this point.")
        }
        else
        {
          bark("Some shit went wrong when checking >0 and <10 in the 'FN_Evaluate' function")
        }
      }
      else if(this._attArray[i] > 10 && this._attArray[i] <=20){
      if (i==0)
      {
        Pbark(this._name+ " is looking pretty gaunt. Might be a good idea to feed them something.")
      }
      else if (i==1)
      {
        Pbark(this._name+ " is licking its own sweat for refreshment. Might be a good idea to give them some water.")
      }
      else if (i==2)
      {
        Pbark(this._name+ " looks a but like it would find stories about bridges entertaining. Might be a good idea to play with them.")
      }
      else
      {
        bark("Some shit went wrong when checking >10 and <20 in the 'FN_Evaluate' function")
      }
    }
      else if(this._attArray[i] > 20 && this._attArray[i] <=30){
      if (i==0)
      {
        Pbark(this._name+ " is looking pretty thin. Might be a good idea to feed them something.")
      }
      else if (i==1)
      {
        Pbark(this._name+ " has a very dry tongue. Might be a good idea to give them some water.")
      }
      else if (i==2)
      {
        Pbark(this._name+ " looks as if it can't be bothered with anything. Might be a good idea to play with them.")
      }
      else
      {
        bark("Some shit went wrong when checking >20 and <30 in the 'FN_Evaluate' function")
      }
    }
      else if(this._attArray[i] > 30 && this._attArray[i] <=40){
      if (i==0)
      {
        Pbark(this._name+ " looks like they need to eat. Feed them something!")
      }
      else if (i==1)
      {
        Pbark(this._name+ " is eagerly looking for a drink. Give them some water!")
      }
      else if (i==2)
      {
        Pbark(this._name+ " is lazing about aimlessly. Play with them!")
      }
      else
      {
        bark("Some shit went wrong when checking >30 and <40 in the 'FN_Evaluate' function")
      }
    }
      else if(this._attArray[i] > 40 && this._attArray[i] <=50){
      if (i==0)
      {
        Pbark(this._name+ " looks hungry. Feed them something.")
      }
      else if (i==1)
      {
        Pbark(this._name+ " looks thirsty. Give them some water.")
      }
      else if (i==2)
      {
        Pbark(this._name+ " keeps nuzzling your hand. Play with them.")
      }
      else
      {
        bark("Some shit went wrong when checking >40 and <50 in the 'FN_Evaluate' function")
      }
    }
      else if(this._attArray[i] > 50 && this._attArray[i] <=60){
      if (i==0)
      {
        Pbark(this._name+ " looks peckish. They keep eyeing the feeding bowl.")
      }
      else if (i==1)
      {
        Pbark(this._name+ " looks a little thirsty. They keep looking at your cup of tea")
      }
      else if (i==2)
      {
        Pbark(this._name+" looks bored. They're making random noises to pass the time.")
      }
      else
      {
        bark("Some shit went wrong when checking >40 and <50 in the 'FN_Evaluate' function")
      }
    }
      else if(this._attArray[i] > 60 && this._attArray[i] <=70){
      if (i==0)
      {
        Pbark(this._name+ " looks a little bit peckish. They occasionaly eye the feeding bowl.")
      }
      else if (i==1)
      {
        Pbark(this._name+ " looks a little bit thirsty. They sometimes look at your cup of tea")
      }
      else if (i==2)
      {
        Pbark(this._name+" looks a little bored. They sometimes make rasping noises to pass the time.")
      }
      else
      {
        bark("Some shit went wrong when checking >50 and <60 in the 'FN_Evaluate' function")
      }
    }
      else if(this._attArray[i] > 60 && this._attArray[i] <=70){
      if (i==0)
      {
        Pbark(this._name+ " looks a little peckish. They glance at the feeding bowl now and then.")
      }
      else if (i==1)
      {
        Pbark(this._name+ " looks a little bit thirsty. Now and then, they eye your drink.")
      }
      else if (i==2)
      {
        Pbark(this._name+" looks slightly bored. They look out the windows aimlessly now then.")
      }
      else
      {
        bark("Some shit went wrong when checking >60 and <70 in the 'FN_Evaluate' function")
      }
    }
      else if(this._attArray[i] > 70 && this._attArray[i] <=80){
      if (i==0)
      {
        Pbark(this._name+ " looks a tiny bit peckish. They sniff casually at the feeding bowl but walk away.")
      }
      else if (i==1)
      {
        Pbark(this._name+ " looks a tiny bit thirsty. They look at their water bowl every so often, but don't move to it.")
      }
      else if (i==2)
      {
        Pbark(this._name+" looks a tiny bit bored. They start channel surfing.")
      }
      else
      {
        bark("Some shit went wrong when checking >70 and <80 in the 'FN_Evaluate' function")
      }
    }
      else if(this._attArray[i] > 80 && this._attArray[i] <=90){
      if (i==0)
      {
        Pbark(this._name+ " looks a tiny bit peckish. They sniff casually at the feeding bowl but walk away.")
      }
      else if (i==1)
      {
        Pbark(this._name+ " looks a tiny bit thirsty. They look at their water bowl every so often, but don't move to it.")
      }
      else if (i==2)
      {
        Pbark(this._name+" looks a tiny bit bored. They start channel surfing.")
      }
      else
      {
        bark("Some shit went wrong when checking >80 and <90 in the 'FN_Evaluate' function")
      }
    }
      else if(this._attArray[i] > 90 && this._attArray[i] <= 100){
    if (i==0)
    {
      Pbark(this._name+ " isn't bothered by food at the moment. You light a cigar in celebration")
    }
    else if (i==1)
    {
      Pbark(this._name+ " doesn't care for water at the moment. They leave the taps on whilst brushing their teeth.")
    }
    else if (i==2)
    {
      Pbark(this._name+" isn't bored for now. They sit still, completley content.")
    }
    else
    {
      bark("Some shit went wrong when checking >90 and <100 in the 'FN_Evaluate' function")
    }
    }
  }
  }
}
//=========================VARIABLE DECLARATIONS
const Wiggles = new Pet("Wiggles", "Caribou");
const inquirer = require("inquirer");
//=========================GLOBABL FUNCTIONS
  
function FN_gameOver(instance) {
//checks if the parameter (instance of pet class) is alive
bark("Entered the gameOver function")
  if (instance._alive == false) {
  console.log("*****************************************************")
  console.log(`Oh no! ${instance._name} died, after ${g_DaysAlive} of companionship. Once the greiving process is over, feel free to start a new game.`)
  console.log("*****************************************************")
}
}
//=========================CURRENT MAIN LOOPS
let initQuestions = [
{
  //create a numbered list to choose pet type
  type: "rawlist",
  name: "type",
  message: "What pet would you like?",
  choices: ["Cat", "Dog", "Rabbit"],
},
{
  //create an input to get the pets name
type: "input",
name: "name",
message: "What is your pet called?",
},
];

let loopQuestion = [
{
  //create an object with attributes belonging to 'inquirer'
  //need to fire this to get the player to choose what to do with their pet
  type: "rawlist",
  name: "action",
  message: "What would you like to do?",
  choices: ["Feed", "Give Water", "Play"],
},
];

function FN_getPlayerChoice(){
  inquirer
  .prompt(loopQuestion) //fire the class object above as a prompt
  .then((answers) => {
    if (answers.action === "Feed") {
      console.log("Player chose to feed Wiggles.")
      Wiggles.FN_changeHunger(20)
      Wiggles.FN_changeThirst(-5)
      Wiggles.FN_changeMorale(-4)
      // pet.food()
    } 
    else if (answers.action === "Play") {
      console.log("Player chose to play with Wiggles.")
      Wiggles.FN_changeHunger(-10)
      Wiggles.FN_changeThirst(-10)
      Wiggles.FN_changeMorale(25)
      // pet.play()
  } else {
    console.log("Player chose to give water to Wiggles.")
      Wiggles.FN_changeHunger(20)
      Wiggles.FN_changeThirst(-5)
      Wiggles.FN_changeMorale(-4)
      // pet.water()
  }
  });
}

FN_getPlayerChoice()
// const init = () => {
// inquirer.prompt(initQuestions)
//     .then((answers) => {
//         if (answers.type === "Cat") {
//             // pet = new Cat(answers.name)
//             console.log("Cat created")
//         } else if (answers.type === "Dog") {
//             // pet = new Dog(answers.name)
//             console.log("Dog created")
//         } else {
//             // pet = new Rabbit(answers.name)
//             console.log("Rabbit created")
//         }
//     })
//     .then(() => loopQuestion())}

init()

//=========================OLD MAIN LOOPS
// namePet
//     .prompt([
//         {
//             name: "greeting",
//             message: "What is your pet called?",
//             type: "input"
//             // default() {
//             //     return "Mingebag";
//         }])

//         .then(function(answers){
//               let greeting = answers.greeting;
//               // console.log("Greeting was answered with: "+greeting);
//               g_Name = greeting;
//               // console.log("Variable 'g_Name' was set to: "+g_Name);
//               Wiggles._name = g_Name;
//               // console.log("Class instance Wiggles had its _name set to: "+Wiggles._name);
//             });

// Wiggles._alive = false;

// FN_gameOver(Wiggles)

// for (let i = 1; i < 11; i++) {
 
//   // check if the pet is currently dead or not (and exit the loop if they are)
//   if (Wiggles._alive == false) {
//     Pbark("Consumed by sadness, you incinerate " + Wiggles._name + ".");
//     bark("BREAKING LOOP! SHOULDN'T FIRE AGAIN!")
//     break;
//   } else {
//     bark("Day: " + i);
//     Wiggles.FN_changeHunger(-15)

//   }}
