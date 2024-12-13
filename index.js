// Import readline pour interagir avec l'utilisateur
const readline = require('readline');

// Création d'une classe Calculator respectant les principes SOLID
class Calculator {
    validateNumber(input) {
        const number = parseFloat(input);
        if (isNaN(number)) {
            throw new Error(`Entrée invalide : '${input}' n'est pas un nombre.`);
        }
        return number;
    }

    add(a, b) {
        return a + b;
    }

    subtract(a, b) {
        return a - b;
    }

    multiply(a, b) {
        return a * b;
    }

    divide(a, b) {
        if (b === 0) {
            throw new Error("Division par zéro impossible.");
        }
        return a / b;
    }

    power(a, b) {
        return Math.pow(a, b);
    }

    sqrt(a) {
        if (a < 0) {
            throw new Error("Impossible de calculer la racine carrée d'un nombre négatif.");
        }
        return Math.sqrt(a);
    }

    factorial(n) {
        if (n < 0) {
            throw new Error("La factorielle d'un nombre négatif n'est pas définie.");
        }
        if (n === 0 || n === 1) return 1;
        let result = 1;
        for (let i = 1; i <= n; i++) {
            result *= i;
        }
        return result;
    }
}

// Création de l'interface utilisateur
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const calculator = new Calculator();

function mainMenu() {
    console.log(`\n*** Calculatrice ***\n`);
    console.log("1. Addition (+)");
    console.log("2. Soustraction (-)");
    console.log("3. Multiplication (*)");
    console.log("4. Division (/)");
    console.log("5. Puissance (^)");
    console.log("6. Racine carrée (√)");
    console.log("7. Factorielle (!)");
    console.log("8. Quitter");

    rl.question("choissisez une option :", (choice) =>{
        if (choice ==8) {
            console.log("merci!");
            rl.close;
            return;
        }

        rl.question("entrer nombre 1 :", (firstInput) =>{
            rl.question("entrer nombre 2 :", (secondInput) =>{

    try{
                    const a = calculator.validateNumber(firstInput);
                    const b = calculator.validateNumber(secondInput);
                    let result;
        
            switch (choice){
            case 1:
                result = calculator.add(a, b);
            break;
            case 2:
                result = calculator.subtract(a, b);
            break;
            case 3:
                result = calculator.multiply(a, b);
            break;
            case 4:
                 result = calculator.divide(a, b);
            break;
            case 5:
                result = calculator.power(a, b);
            break;
            case 6:
                result = calculator.sqrt(a);
            break;
            case 7:
                result = calculator.factorial(a);
            break;
            default :
                console.error("choix invalid");
                mainMenu();
            return;
        }

        console.log(`Resultat est ${result}`);

    } catch (error){
            console.error(error.message);
    }
    mainMenu();
            });
        });
    });
}
mainMenu();