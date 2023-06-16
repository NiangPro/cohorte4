function tableDeMultiplication(valeur)
{
    document.write(`La table de multiplication de ${valeur} est <br/>`);
    for (let i = 1; i <= 10; i++) {
        document.write(`${valeur} x ${i} = ${valeur * i}<br />`);
    }
}

function factoriel(nombre){
    let produit = 1;
    let message = "";
    for (let i = 1; i <= nombre; i++) {
        // message += (i == 1)? i : "x"+i;
        if (i == 1) {
            message = i;
        } else {
            message += "x"+i;
        }
        produit *= i;
    }

    document.write(`${nombre}! = ${message} = ${produit}`)
}