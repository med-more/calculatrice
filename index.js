//creation de classe calculator

class calculator{
    valid(input){
        const number = parseFloat(input);
        if (isNaN(number)) {
            throw new Error(`Entrée invalide : '${input}' pas un nombre`);
        }
        return number;
    }

    add(a, b){
        return a+b;
    }

    subtract(a, b){
        return a-b;
    }

    multiply(a, b){
        return a*b;
    }

    divide(a, b){
        if (b === 0) {
            throw new Error("Division par zéro");
        }
        return a/b;
    }

    power(a, b){
        return Math.pow(a, b);
    }

    sqrt(a){
        if(a<0){
            throw new Error("Impossible de calculer la racine carrée d'un nombre négatif");
        }
        return Math.sqrt(a);
    }

    factorial(n){
        if (n<0) {
            throw new Error("La factorielle d'un nombre négatif");
        }
        if(n === 0 || n ===1) return 1;
        let result = 1;
        for (let i = 1; i <= n; i++) {
            result *=i;   
        }
        return result;

        
    }
}

//importer readline 
const readline = require('readline');

//interface utilisateur

const rl = readline.createInterface({ 
    input: process.stdin,
    output: process.stdout
});

const calc = new calculator();

function mainMenu(){
    console.log(`\n*** Calculatrice ***\n`);
    console.log("1. Addition (+)");
    console.log("2. Soustraction (-)");
    console.log("3. Multiplication (*)");
    console.log("4. Division (/)");
    console.log("5. Puissance (^)");
    console.log("6. Racine carrée (√)");
    console.log("7. Factorielle (!)");
    console.log("8. Quitter");


    // lire les entrées de l'utilisateur 
    rl.question("choississez une option : ", (choice) => {
        handleChoice(choice);
    });
}

function handleChoice(choice){
    switch(choice){
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
            rl.question("entrer nombre 1 :", (firstInput)=>{
                rl.question("entrer nombre 2 :", (secondInput)=>{
                    try{
                        const a = calc.valid(firstInput);
                        const b = calc.valid(secondInput);
                        let result;
                        switch(choice){
                            case "1":
                                result = calc.add(a, b);
                                break;
                            case "2":
                                result = calc.subtract(a, b);
                                break;
                            case "3":
                                result = calc.multiply(a, b);
                                break;
                            case "4":
                                result = calc.divide(a, b);
                                break;
                            case "5":
                                result = calc.power(a, b);
                                break;
                        }
                        console.log(`Resultat est : ${result}`);
                    } catch (error) {
                        console.error(error.message);
                    }
                    mainMenu();
                });
            });
        break;
        case "6" :
            rl.question("entrer un nombre :", (input) =>{
                try{
                    const a = calc.valid(input);
                    const result = calc.sqrt(a);
                    console.log(`Resultat est : ${result}`);
                } catch (error) {
                    console.error(error.message);
                }
                mainMenu();
            });
        break;
        case "7":
            rl.question("entrer un nombre :", (input)=>{
                try{
                    const a = calc.valid(input);
                    const result = calc.factorial(n);
                    console.log(`Resultat est : ${result}`);
                } catch (error) {
                    console.error(error.message);
                }
                mainMenu();
            });
        break;
        case "8" :
            console.log("merci");
            rl.close();
        break;
        default : 
        console.error("choix invalide");
        mainMenu();
        break;
    }
}
mainMenu();