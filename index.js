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