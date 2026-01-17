// const VALIDATION_PATTERNS = {
//     // 1. No vacío: Al menos un carácter que no sea espacio.
//     // ✅ Válido: "a", " Hola ", "123" | ❌ Inválido: "", "   "
//     notEmptyText: /^(?!\s*$).+/,

//     // 2. Correo electrónico: Formato estándar de email.
//     // ✅ Válido: "user@test.com", "nombre.apellido@empresa.es"
//     email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,

//     // 3. Solo letras: Incluye tildes, eñes y espacios.
//     // ✅ Válido: "Juan Pérez", "Niño", "Mónica" | ❌ Inválido: "Juan3", "Hola!"
//     onlyLetters: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/,

//     // 4. Solo números: Enteros positivos sin signos ni puntos.
//     // ✅ Válido: "123", "007" | ❌ Inválido: "12.5", "-5", "100€"
//     onlyNumbers: /^\d+$/,

//     // 5. Teléfono internacional: Opcional '+', seguido de 7 a 15 dígitos.
//     // ✅ Válido: "+521234567890", "573102223344" | ❌ Inválido: "123", "abc-123"
//     phone: /^\+?[1-9]\d{1,14}$/,

//     // 6. Contraseña fuerte: Mín. 8 caracteres, 1 Mayús, 1 Minús, 1 Núm, 1 Especial.
//     // ✅ Válido: "Password123!", "Admin.2024" | ❌ Inválido: "12345678", "password"
//     strongPassword: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,

//     // 7. Precio o decimales: Enteros o con hasta 2 decimales tras un punto.
//     // ✅ Válido: "10", "10.5", "99.99" | ❌ Inválido: "10,50" (usa coma), "10.555"
//     decimal: /^\d+(\.\d{1,2})?$/,

//     // 8. URL completa: Acepta con o sin protocolo (http/https/www).
//     // ✅ Válido: "https://google.com", "www.sitio.es", "mi-web.net/contacto"
//     url: /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,

//     // 9. Nombre de usuario: 3 a 16 caracteres, letras, números, guion y punto.
//     // ✅ Válido: "user_99", "juan.perez" | ❌ Inválido: "yo", "usuario muy largo 123"
//     username: /^[a-z0-9_-]{3,16}$/,

//     // 10. Fecha DD/MM/AAAA: Valida el formato numérico.
//     // ✅ Válido: "01/01/2024", "31-12-1990", "15.05.2000" | ❌ Inválido: "1/1/24"
//     date: /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/
// };



export const VALIDATION_PATTERNS = {
    notEmptyText: /^(?!\s*$).+/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    onlyLetters: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/,
    onlyNumbers: /^\d+$/,
    phone: /^\+?[1-9]\d{1,14}$/,
    strongPassword: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    decimal: /^\d+(\.\d{1,2})?$/,
    url: /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
    username: /^[a-z0-9_-]{3,16}$/,
    date: /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/
};



// Creamos el tipo basado en las llaves del objeto
export type ValidationType = keyof typeof VALIDATION_PATTERNS;


// mensajes de erro para los regex
export const ERROR_MESSAGES: Record<ValidationType, string> = {
    notEmptyText: "Este campo no puede estar vacío.",
    email: "Por favor, introduce un correo electrónico válido.",
    onlyLetters: "Este campo solo debe contener letras.",
    onlyNumbers: "Solo se permiten números enteros.",
    phone: "El número de teléfono no es válido (ej: +52123...).",
    strongPassword: "La contraseña debe tener al menos 8 caracteres, incluir mayúsculas, números y símbolos.",
    decimal: "Usa un formato numérico válido (ej: 10.50).",
    url: "La dirección web no es válida (ej: https://...).",
    username: "El usuario debe tener entre 3 y 16 caracteres (letras, números o guiones).",
    date: "El formato de fecha debe ser DD/MM/AAAA."
};

export const regexValidateFn = (value: string, regexName: ValidationType): { testValue: boolean, errorMsg: string; } => {

    const testValue = VALIDATION_PATTERNS[regexName].test(value);
    const errorMsg = testValue ? '' : ERROR_MESSAGES[regexName];

    return { testValue, errorMsg };
};