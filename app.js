// 🧠 OCLADEAI - CEREBRO PRINCIPAL
// Decide si usar programacionDB o chatDB según el mensaje

class OcladeBrain {
    analizar(mensaje) {
        const m = mensaje.toLowerCase().trim();

        // 1. Si es un saludo, usar chatDB
        if (this.esSaludo(m)) {
            const idx = Math.floor(Math.random() * chatDB.saludos.length);
            return chatDB.saludos[idx];
        }

        // 2. Si es una despedida, usar chatDB
        if (this.esDespedida(m)) {
            const idx = Math.floor(Math.random() * chatDB.despedidas.length);
            return chatDB.despedidas[idx];
        }

        // 3. Si es conversación general, usar chatDB
        if (this.esConversacionGeneral(m)) {
            const idx = Math.floor(Math.random() * chatDB.conversaciones.length);
            return chatDB.conversaciones[idx];
        }

        // 4. Si es sobre programación, usar programacionDB
        for (const [clave, respuesta] of Object.entries(programacionDB.lenguajes)) {
            if (m.includes(clave)) return respuesta;
        }
        for (const [clave, respuesta] of Object.entries(programacionDB.conceptos)) {
            if (m.includes(clave)) return `**${clave.toUpperCase()}**: ${respuesta}`;
        }
        for (const [clave, respuesta] of Object.entries(programacionDB.errores)) {
            if (m.includes(clave))Perfecto. Vamos a crear una **estructura limpia** con:

- ✅ `programacion.js` — para respuestas técnicas (variables, bucles, errores, lenguajes).
- ✅ `chat.js` — para saludos, despedidas, conversación general ("hola", "qué tal", "cómo estás").
- ✅ Un `index.html` que los **integra sin conflictos**.
- ✅ Tu `app.js` que **elige de qué archivo tomar la respuesta** según el contenido del mensaje.

---

### ✅ Paso 1: `programacion.js`

```javascript
// 🧠 PROGRAMACION.JS - Base Técnica
// 30 respuestas sobre lenguajes, errores y conceptos

const programacionDB = {
    lenguajes: {
        "python": "Python es ideal para IA y datos. ¿Qué estás construyendo?",
        "javascript": "JavaScript es el lenguaje de la web. ¿Frontend o backend?",
        "java": "Java es orientado a objetos. ¿Para Android o enterprise?",
        "c++": "C++ es de alto rendimiento. ¿Juegos o sistemas?",
        "sql": "SQL maneja bases de datos. ¿Necesitas una consulta?",
        "html": "HTML es la estructura. ¿Qué etiqueta necesitas?",
        "css": "CSS da estilo. ¿Qué quieres estilizar?",
        "php": "PHP es para backend web. ¿Qué funcionalidad?",
        "react": "React es para interfaces. ¿Componentes o estado?",
        "node": "Node.js ejecuta JS en el servidor. ¿API o servidor?"
    },
    conceptos: {
        "variable": "Contenedor para guardar datos. Ej: `let x = 5;`",
        "funcion": "Bloque reutilizable. Ej: `function saludar() { ... }`",
        "bucle": "Repite código. `for`, `while`. Ej: `for(i=0; i<5; i++)`",
        "condicional": "Toma decisiones. `if`, `else`. Ej: `if(x > 5) { ... }`",
        "array": "Lista de valores. Ej: `let nums = [1,2,3];`",
        "objeto": "Datos clave-valor. Ej: `let user = {n:'Oclade'};`",
        "clase": "Molde para objetos. POO.",
        "api": "Comunicación entre sistemas. REST, GraphQL.",
        "git": "Control de versiones. Commit, push, pull.",
        "debug": "Encontrar errores. Usa `console.log`, `breakpoints`."
    },
    errores: {
        "syntaxerror": "Error de estructura. Revisa paréntesis/comillas.",
        "typeerror": "Tipo incompatible. (Ej: `'str' + 5`).",
        "referenceerror": "Variable no declarada.",
        "404": "Recurso no encontrado. Verifica la URL.",
        "500": "Error del servidor. Revisa logs.",
        "nullpointer": "Objeto es null. Valida antes de usarlo.",
        "indexoutofbounds": "Índice no existe en array.",
        "stackoverflow": "Recursión infinita.",
        "outofmemory": "Proceso agotó memoria.",
        "permissiondenied": "No tienes permisos para acceder."
    }
};
