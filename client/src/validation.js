export default function validate(input) {
    const errors = {};
    let regexName = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/; // Permite nombres con espacios sin números
    let regexUrl = /^(ftp|http|https):\/\/[^ "]+$/;
    let regexNumberUnderscore = /^\d+\s*-\s*\d+$/

    if (!input.name) errors.name = "Nombre de la raza";
    else if (!regexName.test(input.name)) errors.name = "Ingrese un nombre válido";

    if (!input.image) errors.image = "URL de la imagen";
    else if (!regexUrl.test(input.image)) errors.image = "Ingrese una URL válida";

    if (!input.height) errors.height = "Altura mínima-altura máxima";
    else if (!regexNumberUnderscore.test(input.height)) errors.height = "Ingrese un rango válido";

    if (!input.weight) errors.weight = "Peso mínimo-peso máximo";
    else if (!regexNumberUnderscore.test(input.weight)) errors.weight = "Ingrese un rango válido";

    if (!input.years) errors.years = "Rango de años de vida";
    else if (!regexNumberUnderscore.test(input.years)) errors.years = "Ingrese un rango válido";
    
    return errors;
  }