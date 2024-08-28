document.getElementById('encryptButton').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value;
    
    if (validateInput(inputText)) {
        const encryptedText = encrypt(inputText);
        document.getElementById('outputText').textContent = encryptedText;

        // Copiar el texto encriptado al portapapeles
        copyToClipboard(encryptedText);
    } else {
        alert("Por favor, ingresa solo letras minúsculas y espacios.");
    }
});

document.getElementById('decryptButton').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value;
    
    if (validateInput(inputText)) {
        const decryptedText = decrypt(inputText);
        document.getElementById('outputText').textContent = decryptedText;
    } else {
        alert("El texto para desencriptar contiene caracteres no válidos.");
    }
});

function validateInput(text) {
    for (let i = 0; i < text.length; i++) {
        let charCode = text.charCodeAt(i);
        if ((charCode < 97 || charCode > 122) && charCode !== 32) { // Letras minúsculas y espacio
            return false;
        }
    }
    return true;
}

function encrypt(text) {
    let encryptedText = text.toLowerCase();
    encryptedText = encryptedText.replace(/e/g, "enter");
    encryptedText = encryptedText.replace(/i/g, "imes");
    encryptedText = encryptedText.replace(/a/g, "ai");
    encryptedText = encryptedText.replace(/o/g, "ober");
    encryptedText = encryptedText.replace(/u/g, "ufat");
    return encryptedText;
}

function decrypt(text) {
    let decryptedText = text.toLowerCase();
    decryptedText = decryptedText.replace(/enter/g, "e");
    decryptedText = decryptedText.replace(/imes/g, "i");
    decryptedText = decryptedText.replace(/ai/g, "a");
    decryptedText = decryptedText.replace(/ober/g, "o");
    decryptedText = decryptedText.replace(/ufat/g, "u");
    return decryptedText;
}

function copyToClipboard(text) {
    const tempTextArea = document.createElement('textarea');
    tempTextArea.value = text;
    tempTextArea.style.position = 'absolute';
    tempTextArea.style.left = '-9999px';
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    document.execCommand('copy');
    document.body.removeChild(tempTextArea);
}

//Impidiendo que el usuario pueda ingresar carácteres no deseados
document.getElementById('inputText').addEventListener('input', function() {
    // Capturamos el valor actual del input
    let inputText = this.value;

    // Filtramos caracteres no deseados, permitiendo solo letras minúsculas y espacios
    inputText = inputText.replace(/[^a-z\s]/g, '').toLowerCase();

    // Actualizamos el valor del input con el texto filtrado
    this.value = inputText;
});

