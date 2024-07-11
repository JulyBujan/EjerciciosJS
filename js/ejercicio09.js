let frase = prompt("Ingrese una frase:");
let vocales = ""

for (let i=0; i < frase.length ; i++) {
    if ( (frase.charAt(i).toLowerCase() == 'a' ) || (frase.charAt(i).toLowerCase() == 'e' ) || (frase.charAt(i).toLowerCase() == 'i' ) || (frase.charAt(i).toLowerCase() == 'o' ) || (frase.charAt(i).toLowerCase() == 'u' ) ) {
        vocales = vocales + frase.charAt(i);
    }
}
document.write(vocales);
