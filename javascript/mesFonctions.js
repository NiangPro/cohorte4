function tableDeMultiplication(valeur)
{
    document.write(`La table de multiplication de ${valeur} est <br/>`);
    for (let i = 1; i <= 10; i++) {
        document.write(`${valeur} x ${i} = ${valeur * i}<br />`);
    }
}