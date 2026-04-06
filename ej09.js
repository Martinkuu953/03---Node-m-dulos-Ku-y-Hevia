function validarPassword(password) {
    let tieneMayuscula = false;
    let tieneNumero = false;
    if (password.length < 8) {
        console.log("Password inválida");
        return; 
    }
    for (let i = 0; i < password.length; i++) {
        const char = password[i];
        if (!isNaN(char) && char !== " ") {
            tieneNumero = true;
        } 
        else if (char === char.toUpperCase() && char !== char.toLowerCase()) {
            tieneMayuscula = true;
        }
    }
    if (tieneMayuscula && tieneNumero) {
        console.log("Password válida");
    } else {
        console.log("Password inválida");
    }
}
validarPassword("hola1234"); 
validarPassword("HOLAMUNDO");    
validarPassword("Abc1");          
validarPassword("Password123");  