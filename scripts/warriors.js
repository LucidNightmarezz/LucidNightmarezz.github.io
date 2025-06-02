//TODO
//apprentices
//eating

//sets food to hundreths decimal place
function hundredths( x ) {

    return parseFloat( Number.parseFloat( x ).toFixed( 2 ) )

}
function sortObjectsByAttribute(arr, attribute) {
    arr.sort((a, b) => {
      if (a[attribute] < b[attribute]) {
        return -1; // a comes before b
      }
      if (a[attribute] > b[attribute]) {
        return 1; // a comes after b
      }
      return 0; // a and b are equal
    });
  }
//cat prefixes
const prefixes = [ "Feather", "Jay", "Fire", "Bramble","Holly", "Kink", "Shaded", "Gray", "Moon" ]
//cat suffixes
const suffixes = ["claw", "fang", "foot", "tail", "heart", "shadow", "spirit", "fur"]
const pelts = ["Gray Stripped Tabby", "Orange Tabby", "Sandy Long Fur", "Tortiseshell", "Black Short Hair"]
const clannames = ["Windclan","Thunderclan","Riverclan","Shadowclan","Skyclan"]
let clans = []
let time = {Day:0,Moon:1,Time:"Midday",increment(){
    for (let i = 0; i < clans.length; i++){
        clans[i].increment(time.Time)
    }
}}
class Clan {
    constructor(name){
        this.name = name
        this.cats = []
        this.borderstrength = 1
        this.preypile = 0
    }
    addCat(cat){
        this.cats.push(cat)
    }
    listCats(){
        console.log("===================")
        console.log("     List Cats     ")
        for (let i = 0; i < this.cats.length; i++){
            let scat = this.cats[i]
            console.log("===================")
            console.log("Name: " + scat.name)
            console.log("Clan: " + scat.clan.name)
            console.log("Gender: " + scat.gender)
            console.log("Role: " + scat.role)
        }
    }
    feast(cats){
        console.log("===================")
        console.log("    Cats Feast     ")
        let catsHungry = sortObjectsByAttribute(cats, fed)
        for (let x = 0; x < cats.length; x++){
            for (let y = 0; y < cats.length; y++){
                
            }
         }
        console.log("===================")
        console.log('Prey pile is at: '+this.preypile)
    }
    patrol(cats){
        console.log("===================")
        console.log("      Patrol     ")
        let length = Math.floor(Math.random()*7+3)
        for (let i = 0; i < length; i++){
            for (let x = 0; x < cats.length; x++){
                    cats[x].energy -= 0.5
                    cats[x].fed -= 0.5

                    if (cats[x].energy > 0 && cats[x].fed > 0) {
                let choice = Math.floor(Math.random()*2)
                if (choice == 0) { //scent mark action
                    //TO DO: make what they can mark be based of terrain of clan
                    //TO DO: Events like finding foxes or badgers
                    let choice2 = Math.floor(Math.random()*3)
                    if (choice2 == 0) { 
                        console.log("===================")
                        console.log(cats[x].name + " marked their scent on a tree. Curent border strength is "+this.borderstrength+"/1.0")
                    } else if (choice2 == 1){
                        console.log("===================")
                        console.log(cats[x].name + " marked their scent on a bush. Curent border strength is "+this.borderstrength+"/1.0")
                    } else if (choice2 == 2){
                        console.log("===================")
                        console.log(cats[x].name + " marked their scent on a patch of grass. Curent border strength is "+this.borderstrength+"/1.0")
                    }
                    if (this.borderstrength < 1){
                        this.borderstrength += 0.1
                    }
                    if (this.borderstrength > 1){
                        this.borderstrength = 1
                    }
                } else if (choice == 1) { //idle banter
                    let choice2 = Math.floor(Math.random()*3)
                    if (choice2 == 0) { 
                        console.log("===================")
                        console.log(cats[x].name + " padded around looking out for any danger.")
                    } else if (choice2 == 1){
                        console.log("===================")
                        console.log(cats[x].name + " noticed a bird fluttering tree to tree.")
                    } else if (choice2 == 2){
                        console.log("===================")
                        console.log(cats[x].name + " is looking very alert.")
                    }
                }
            console.log(cats[x].name + " is at " + cats[x].energy + "/10 energy.")
            } else if (cats[x].energy <= 0){
                console.log(cats[x].name + " is too tired to continue!")
            } else if (cats[x].fed <= 0){
                console.log(cats[x].name + " is too hungry to continue!")
            }

            }
        }
        for (let x = 0; x < cats.length; x++){
            cats[x].doing = "idle"
        }
    }
    hunt(cats){
        console.log("===================")
        console.log("       Hunt        ")
        console.log("===================")
        console.log("    Cats On Hunt   ")
        for (let i = 0; i < cats.length; i++){
            console.log(cats[i].name)
        }
        let preyamount = 0 
        let length = Math.floor(Math.random()*7+3)
        for (let i = 0; i < length; i++){
            for (let x = 0; x < cats.length; x++){
                cats[x].energy -= 0.5
                cats[x].fed -= 0.5

                if (cats[x].energy > 0 && cats[x].fed > 0) {
                cats[x].fed -= 0.5
                let choice = Math.floor(Math.random()*2)
                if (choice == 0) { //win hunt
                    let choice2 = Math.floor(Math.random()*3)
                    if (choice2 == 0) { 
                        console.log("===================")
                        console.log(cats[x].name + " snuck up behind a thrush and launched themselves and caught it.")
                    } else if (choice2 == 1) {
                        console.log("===================")
                        console.log(cats[x].name + " chased after a vole and caught it right before it was going into a hole.")
                    } else if (choice2 == 2) {
                        console.log("===================")
                        console.log(cats[x].name + " swiped a squirrel from a patch of grass.")
                    }
                    let preySize = hundredths(Math.random()*2)//size of prey
                    if (preySize < 0.25) {
                        console.log("This prey is really tiny...")
                        //tiny
                    } else if(preySize < 0.5){ 
                        console.log("This prey is kinda small...")
                        //small
                    } else if (preySize < 0.75){
                        console.log("Hmmm this prey is ok...")
                        //ok
                    } else if(preySize < 1.0){
                        console.log("Hey this is some decent prey...")
                        //decent
                    }  else if(preySize < 1.5){
                        console.log("Wow this was a good catch!")
                        //good
                    }  else if(preySize < 1.75){
                        console.log("That is one big piece of prey!!")
                        //big
                    } else if(preySize < 2){
                        console.log("Holy Starclan that is a GIANT piece of prey!!!")
                        //giant
                    }
                    
                    console.log()
                    this.preypile += preySize
                    preyamount += preySize
                } else { //fail hunt
                    let choice2 = Math.floor(Math.random()*3)
                    if (choice2 == 0) { 
                        console.log("===================")
                        console.log(cats[x].name + " snuck up behind a thrush and launched themselves and barely missed it.")
                    } else if (choice2 == 1) {
                        console.log("===================")
                        console.log(cats[x].name + " chased after a vole and it went into a hole.")
                    } else if (choice2 == 3) {
                        console.log("===================")
                        console.log(cats[x].name + " swiped and missed a squirrel and it ran away.")
                    }
                }
                console.log(cats[x].name + " is at " + cats[x].energy + "/10 energy.")

            } else if (cats[x].energy <= 0){
                console.log(cats[x].name + " is too tired to continue!")
            } else if (cats[x].fed <= 0){
                console.log(cats[x].name + " is too hungry to continue!")
            }
        }
        }
        for (let x = 0; x < cats.length; x++){
            cats[x].doing = "idle"
        }
        console.log("===================")
        console.log("You ended the hunt patrol with " + preyamount + " amount of prey!")
    }
    increment(time){
        this.borderstrength -= 0.4
        if (time == "Dawn") {
            let mpatrol = []
            let i = 0;
            let catNum = Math.floor(Math.random()*3+2);
            while (i < catNum){
                let scat = this.cats[Math.floor(Math.random()*this.cats.length)]
                if (scat.doing == "idle"){
                    scat.doing = "patrol"
                    mpatrol.push(scat)
                i++
                }
            }
            
            let mpatrol2 = []
            i = 0;
            catNum = Math.floor(Math.random()*3+2);
            while (i < catNum){
                let scat = this.cats[Math.floor(Math.random()*this.cats.length)]
                if (scat.doing == "idle"){
                    scat.doing = "hunt"
                    mpatrol2.push(scat)
                i++
                }
            }
            this.patrol(mpatrol)
            this.hunt(mpatrol)
            //morning patrol
            //hunting patrol
        } else if(time = "Midday"){
            let mpatrol = []
            let i = 0;
            let catNum = Math.floor(Math.random()*3+2);
            while (i < catNum){
                let scat = this.cats[Math.floor(Math.random()*this.cats.length)]
                if (scat.doing == "idle"){
                    scat.doing = "patrol"
                    mpatrol.push(scat)
                i++
                }
            }
            let mpatrol2 = []
            i = 0;
            catNum = Math.floor(Math.random()*3+2);
            while (i < catNum){
                let scat = this.cats[Math.floor(Math.random()*this.cats.length)]
                if (scat.doing == "idle"){
                    scat.doing = "hunt"
                    mpatrol2.push(scat)
                i++
                }
            }
            this.hunt(mpatrol)
            this.patrol(mpatrol2)
            this.feast(this.cats)
            
        }
    }
}

class Cat {
    constructor(name_prefix,name_suffix,gender,clan,role,pelt){
        this.name = name_prefix+name_suffix
        this.name_prefix = name_prefix
        this.name_suffix = name_suffix
        this.gender = gender
        this.role = role
        this.clan = clan
        this.pelt = pelt
        this.fed = 10
        this.energy = 10
        this.hp = 10
        this.doing = "idle"
    }
}

function createRandomCat(clan,role){
    let gender = Math.floor(Math.random()*2) ? "M" : "F"
    let prefix = prefixes[Math.floor(Math.random()*prefixes.length)]
    let suffix = suffixes[Math.floor(Math.random()*suffixes.length)]
    if (role == "Leader"){
        suffix = "star"
    }
    let pelt = pelts[Math.floor(Math.random()*pelts.length)]
    let newCat = new Cat(prefix, suffix,gender,clan,role,pelt)
    return newCat
}

function createRandomClan(){
    let clanname = clannames[Math.floor(Math.random()*clannames.length)]
    for (let i = 0; i < clans.length; i++){
        if (clanname == clan.name){
            clanname = clannames[Math.floor(Math.random()*clannames.length)]
        }
    }
    let myclan = new Clan(clannames[Math.floor(Math.random()*clannames.length)])
    for (let i = 0; i < Math.floor(Math.random()*10)+5; i ++){
        myclan.addCat(createRandomCat(myclan,'Warrior'))
    }
    myclan.addCat(createRandomCat(myclan,'Deputy'))
    myclan.addCat(createRandomCat(myclan,'Medicine Cat'))
    myclan.addCat(createRandomCat(myclan,'Leader'))
    clans.push(myclan)
}

createRandomClan()
for (let i = 0 ; i < clans.length; i ++){
    clans[i].listCats()
}

//time.increment()