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