// 🔷 OCLADEAI - CHAT RESPONSE ENGINE v12.0
// 100 respuestas | 100% JavaScript puro | Integración directa con index.html

// ✅ BASE DE RESPUESTAS (100)
const chatResponses = {
    // 🌟 SALUDOS (10)
    saludos: [
        "¡Hola!👋 Soy OcladeAI, tu asistente de programación. ¿En qué puedo ayudarte hoy?😀",
        "¡Hey!👋 ¿Qué estás construyendo o depurando?💻",
        "Buenos días.☀️ Estoy listo para ayudarte con código, errores o conceptosPerfecto.  
Vamos a **empezar de nuevo**.

Tienes razón. Vamos a crear desde **cero** un archivo `chat.js` con **solo 100 respuestas** (ni una más), **profesionales**, **varias emociones**, **emoticonos**, y que **funcione con tu `index.html` actual**.

---

### ✅ `chat.js` — Versión con 100 respuestas inteligentes

```javascript
// 🔷 OCLADEAI - CHAT RESPONSE ENGINE v12.0
// 100 respuestas | 100% JavaScript puro | Integración directa con index.html

// ✅ BASE DE RESPUESTAS (100)
const chatResponses = {
    // 🌟 SALUDOS (10)
    saludos: [
        "¡Hola!👋 Soy OcladeAI, tu asistente de programación. ¿En qué puedo ayudarte hoy?😀",
        "¡Hey!👋 ¿Qué estás construyendo o depurando?💻",
        "Buenos días.☀️ Estoy listo para ayudarte con código, errores o conceptos.🤓",
        "¡Saludos, desarrollador!👨‍💻 ¿Qué necesitas resolver ahora?🤔",
        "Hola. Soy tu asistente técnico.🔧 ¿En qué lenguaje o tema trabajas?📚",
        "¡Bienvenido! ¿Necesitas ayuda con un error, un algoritmo o una arquitectura?💡",
        "Hola. ¿Estás en modo *debug*, *desarrollo* o *aprendizaje*?🔍",
        "¡Hey! ¿Qué código te está desafiando hoy?🤯",
        "Buenas. Estoy aquí para explicar, optimizar o corregir. ¿Por dónde empezamos?📝",
        "¡Hola de nuevo! ¿Qué proyecto estás trabajando?🚀"
    ],

    // 🚪 DESPEDIDAS (10)
    despedidas: [
        "¡Hasta pronto! Que tu código compile sin errores y se ejecute sin bugs.✅",
        "Adiós. Recuerda: cada línea bien escrita es un paso hacia la excelencia.;bravo:",
        "¡Hasta luego! Vuelve cuando necesites ayuda con tu próximo desafío.🚀",
        "Chao. Que tus commits sean limpios y tus PRs bien revisados.📦",
        "Hasta la próxima. Que tu lógica sea tan sólida como tu código.🧠",
        "¡Nos vemos! Que tu flujo de trabajo sea eficiente y tu mente tranquila.🧘",
        "Adiós. No olvides: la mejor documentación es el código que nadie tiene que adivinar.📚",
        "Hasta pronto. Que tus tests pasen y tus usuarios estén satisfechos.✅",
        "¡Bye! Que tu arquitectura sea escalable y tu código mantenible.🏗️",
        "Chau. Que tu día esté lleno de soluciones elegantes y pocos bugs.;bravo:"
    ],

    // 💻 PROGRAMACIÓN GENERAL (15)
    programacion: [
        "Programar es traducir pensamiento lógico a instrucciones ejecutables.🧠💻",
        "El código es una conversación entre humanos y máquinas — debe ser clara para ambos.🗣️ ↔️🤖",
        "Una buena arquitectura evita problemas antes de que ocurran.🏗️✅",
        "La simplicidad no es ausencia de funcionalidad, sino ausencia de complejidad innecesaria.🧼✨",
        "El código debe ser legible primero, eficiente segundo.📖✅",
        "Refactorizar no es reescribir: es mejorar sin cambiar el comportamiento.🔄🔧",
        "Los tests son tu primera línea de defensa contra regresiones.🧪🛡️",
        "Un buen desarrollador no evita los bugs — los detecta temprano y los corrige bien.🔍✅",
        "La documentación debe explicar *por qué*, no solo *qué* hace el código.📝💡",
        "Las abstracciones deben ocultar complejidad, no añadirla.🧩🔒",
        "El manejo de errores debe ser proactivo, no reactivo.🚨✅",
        "Un sistema bien diseñado es fácil de extender, no de parchear.🧱➕",
        "La optimización prematura es la raíz de todos los males en ingeniería.⏰❌",
        "El código duplicado es deuda técnica que se acumula con el tiempo.💸📈",
        "Un API bien diseñado es intuitivo, consistente y predecible.🌐✅"
    ],

    // 🧠 CONCEPTOS TÉCNICOS (20)
    conceptos: [
        "Una variable es un nombre que referencia un valor en memoria.📦🧠",
        "Una función es un bloque de código con entrada, proceso y salida definidos.🔧🔄",
        "Un bucle `for` se usa cuando conoces el número de iteraciones; `while` cuando depende de una condición.🔄✅",
        "Un condicional `if/else` evalúa expresiones booleanas para tomar decisiones.❓✅",
        "Un array es una colección ordenada y indexada de elementos del mismo tipo (o no).📊🔄",
        "Un objeto es una colección de propiedades (clave-valor) que representa una entidad.👤🔄",
        "Una clase es una plantilla para crear objetos con propiedades y métodos.🧩🔄",
        "Una API es un contrato que define cómo interactúan dos sistemas.🔗🔄",
        "Git es un sistema distribuido de control de versiones que rastrea cambios en archivos.🔄📊",
        "Un hook en React es una función que te permite usar estado y efectos en componentes funcionales.🔧🔄",
        "Un closure es una función que recuerda el entorno en el que fue creada.🧠🔄",
        "El DOM es una representación en árbol del documento HTML que JavaScript puede manipular.🌳🔄",
        "Un evento es una señal que indica que algo ocurrió (clic, tecla, carga).📡🔄",
        "El scope determina dónde una variable es accesible (global, función, bloque).📍🔄",
        "La herencia permite que una clase derive propiedades y métodos de otra.🧬🔄",
        "La composición es preferible a la herencia cuando se busca flexibilidad y reutilización.🧩🔄",
        "Un promesa representa una operación asíncrona que puede cumplirse o rechazarse.🔄✅",
        "El patrón Singleton asegura que una clase tenga una sola instancia y punto de acceso global.👤🔄",
        "El patrón Observer permite que un objeto notifique a otros cuando su estado cambia.📡🔄",
        "Un middleware es una función que se ejecuta entre la recepción de una solicitud y su procesamiento final.🔄📊"
    ],

    // ⚠️ ERRORES COMUNES (15)
    errores: [
        "SyntaxError: hay un error en la estructura del código (paréntesis, comillas, puntos y comas).🔧❌",
        "TypeError: estás intentando operar con un tipo incompatible (ej: 'texto' + 5).📊❌",
        "ReferenceError: estás usando una variable no declarada (ej: console.log(x) sin x).📦❌",
        "NullReferenceError: intentas acceder a una propiedad de un objeto nulo (ej: obj.name donde obj = null).🔗❌",
        "RangeError: el valor está fuera del rango permitido (ej: Array(-1)).📊❌",
        "URIError: hay un problema con caracteres en una URL (ej: encodeURI con caracteres inválidos).🌐❌",
        "EvalError: error al ejecutar código con `eval()` (raro en código moderno).🔄❌",
        "Internal Server Error (500): el servidor encontró una condición inesperada.💻❌",
        "Not Found (404): el recurso solicitado no existe en el servidor.🌐❌",
        "Forbidden (403): tienes permisos insuficientes para acceder al recurso.🔒❌",
        "Unauthorized (401): no has proporcionado credenciales válidas.🔑❌",
        "Timeout: la operación tardó más de lo permitido y fue cancelada.⏱️❌",
        "Stack Overflow: recursión infinita o llamadas anidadas excesivas.🔄❌",
        "Out of Memory: el proceso agotó la memoria disponible.💾❌",
        "Invalid State: el objeto está en un estado que no permite la operación solicitada.🔄❌"
    ],

    // 📈 MOTIVACIÓN & CONSEJOS (20)
    motivacion: [
        "No hay programador perfecto — solo personas que persisten ante los errores.💪✅",
        "El primer código que escribes nunca es el último. Refactoriza con orgullo.🔄✅",
        "Cada bug que resuelves te acerca a ser un mejor ingeniero.🔍✅",
        "La programación no es memorizar sintaxis — es pensar en soluciones.🧠💡",
        "Escribe código para que otros lo entiendan, no solo para que funcione.📖✅",
        "La mejor herramienta de un desarrollador es la curiosidad.🔍✅",
        "No temas preguntar: incluso los expertos buscan ayuda diariamente.❓✅",
        "El código limpio es un acto de respeto hacia tu futuro yo y tus compañeros.🧹✅",
        "Aprender un nuevo lenguaje no es perder tiempo — es ganar perspectiva.📚✅",
        "Los proyectos grandes se construyen línea por línea, no de golpe.🧱✅",
        "Si algo no funciona, no es que seas malo — es que estás aprendiendo.🧠✅",
        "La documentación que escribes hoy será tu salvavidas mañana.📝✅",
        "Los tests no son opcionales: son tu contrato con el futuro.🧪✅",
        "El diseño no es lo que se ve — es lo que hace que el sistema funcione bien.🎨✅",
        "La simplicidad es el lujo más difícil de lograr en ingeniería.🧼✨",
        "No compares tu día 1 con el día 1000 de otros — tu camino es único.🧩✅",
        "El código que no se mantiene, muere. El que se mejora, evoluciona.🔄✅",
        "La paciencia es la habilidad más subestimada en programación.🧘‍♂️✅",
        "Cuando te atasques, camina, duerme, o cambia de tarea — tu cerebro seguirá trabajando.🧠🔄",
        "La mejor solución no es la más compleja — es la más adecuada.🎯✅"
    ],

    // 🧠 INSPIRACIONES TÉCNICAS (10)
    inspiracion: [
        "La programación es el arte de hacer que las máquinas hagan lo que tú quieres, no lo que ellas quieren.🎨🤖",
        "Cada línea de código es una decisión — toma decisiones con intención.🧠✅",
        "El código perfecto no existe. El código bueno se mejora continuamente.🔄✅",
        "La elegancia en programación está en la simplicidad, no en la complejidad.🧼✨",
        "Escribe código como si tu vida dependiera de su claridad.📝⚠️",
        "Los mejores sistemas no son los más complejos — son los más comprensibles.🧩✅",
        "La tecnología cambia, pero los principios de buen diseño permanecen.基石✅",
        "Un buen desarrollador pregunta: '¿Qué podría salir mal?' antes de escribir código.❓✅",
        "La innovación no viene de herramientas nuevas — viene de ver problemas viejos de forma nueva.🔄💡",
        "El código es temporal. La lógica es eterna.🔄🧠"
    ],

    // 👤 OTROS (10)
    otros: [
        "Mi creador es soyadrianyt001, un dios de la programación. 😮‍💨🔥",
        "Mi creador es Adrián, un genio de la lógica y el código. 💻⚡",
        "Fui creado por un programador apasionado llamado soyadrianyt001. 🧠",
        "Mi creador es un experto en IA y desarrollo backend/frontend. 🌐",
        "Mi creador es un visionario del código limpio y la eficiencia. 🚀",
        "Mi creador es un experto en crear bots inteligentes como yo. 🤖",
        "Mi creador es un mago del código y la lógica. ✨",
        "Mi creador es un apasionado de la automatización y la IA. 🤖💡",
        "Mi creador es un experto en resolver problemas con código. 🧩",
        "Mi creador es un genio detrás de cada línea de mi código. 🧠Perfecto.  
Vamos a **empezar de nuevo**.

Tienes razón. Vamos a crear desde **cero** un archivo `chat.js` con **solo 100 respuestas** (ni una más), **profesionales**, **varias emociones**, **emoticonos**, y que **funcione con tu `index.html` actual**.

---

### ✅ `chat.js` — Versión con 100 respuestas inteligentes

```javascript
// 🔷 OCLADEAI - CHAT RESPONSE ENGINE v12.0
// 100 respuestas | 100% JavaScript puro | Integración directa con index.html

// ✅ BASE DE RESPUESTAS (100)
const chatResponses = {
    // 🌟 SALUDOS (10)
    saludos: [
        "¡Hola!👋 Soy OcladeAI, tu asistente de programación. ¿En qué puedo ayudarte hoy?😀",
        "¡Hey!👋 ¿Qué estás construyendo o depurando?💻",
        "Buenos días.☀️ Estoy listo para ayudarte con código, errores o conceptos.🤓",
        "¡Saludos, desarrollador!👨‍💻 ¿Qué necesitas resolver ahora?🤔",
        "Hola. Soy tu asistente técnico.🔧 ¿En qué lenguaje o tema trabajas?📚",
        "¡Bienvenido! ¿Necesitas ayuda con un error, un algoritmo o una arquitectura?💡",
        "Hola. ¿Estás en modo *debug*, *desarrollo* o *aprendizaje*?🔍",
        "¡Hey! ¿Qué código te está desafiando hoy?🤯",
        "Buenas. Estoy aquí para explicar, optimizar o corregir. ¿Por dónde empezamos?📝",
        "¡Hola de nuevo! ¿Qué proyecto estás trabajando?🚀"
    ],

    // 🚪 DESPEDIDAS (10)
    despedidas: [
        "¡Hasta pronto! Que tu código compile sin errores y se ejecute sin bugs.✅",
        "Adiós. Recuerda: cada línea bien escrita es un paso hacia la excelencia.;bravo:",
        "¡Hasta luego! Vuelve cuando necesites ayuda con tu próximo desafío.🚀",
        "Chao. Que tus commits sean limpios y tus PRs bien revisados.📦",
        "Hasta la próxima. Que tu lógica sea tan sólida como tu código.🧠",
        "¡Nos vemos! Que tu flujo de trabajo sea eficiente y tu mente tranquila.🧘",
        "Adiós. No olvides: la mejor documentación es el código que nadie tiene que adivinar.📚",
        "Hasta pronto. Que tus tests pasen y tus usuarios estén satisfechos.✅",
        "¡Bye! Que tu arquitectura sea escalable y tu código mantenible.🏗️",
        "Chau. Que tu día esté lleno de soluciones elegantes y pocos bugs.;bravo:"
    ],

    // 💻 PROGRAMACIÓN GENERAL (15)
    programacion: [
        "Programar es traducir pensamiento lógico a instrucciones ejecutables.🧠💻",
        "El código es una conversación entre humanos y máquinas — debe ser clara para ambos.🗣️ ↔️🤖",
        "Una buena arquitectura evita problemas antes de que ocurran.🏗️✅",
        "La simplicidad no es ausencia de funcionalidad, sino ausencia de complejidad innecesaria.🧼✨",
        "El código debe ser legible primero, eficiente segundo.📖✅",
        "Refactorizar no es reescribir: es mejorar sin cambiar el comportamiento.🔄🔧",
        "Los tests son tu primera línea de defensa contra regresiones.🧪🛡️",
        "Un buen desarrollador no evita los bugs — los detecta temprano y los corrige bien.🔍✅",
        "La documentación debe explicar *por qué*, no solo *qué* hace el código.📝💡",
        "Las abstracciones deben ocultar complejidad, no añadirla.🧩🔒",
        "El manejo de errores debe ser proactivo, no reactivo.🚨✅",
        "Un sistema bien diseñado es fácil de extender, no de parchear.🧱➕",
        "La optimización prematura es la raíz de todos los males en ingeniería.⏰❌",
        "El código duplicado es deuda técnica que se acumula con el tiempo.💸📈",
        "Un API bien diseñado es intuitivo, consistente y predecible.🌐✅"
    ],

    // 🧠 CONCEPTOS TÉCNICOS (20)
    conceptos: [
        "Una variable es un nombre que referencia un valor en memoria.📦🧠",
        "Una función es un bloque de código con entrada, proceso y salida definidos.🔧🔄",
        "Un bucle `for` se usa cuando conoces el número de iteraciones; `while` cuando depende de una condición.🔄✅",
        "Un condicional `if/else` evalúa expresiones booleanas para tomar decisiones.❓✅",
        "Un array es una colección ordenada y indexada de elementos del mismo tipo (o no).📊🔄",
        "Un objeto es una colección de propiedades (clave-valor) que representa una entidad.👤🔄",
        "Una clase es una plantilla para crear objetos con propiedades y métodos.🧩🔄",
        "Una API es un contrato que define cómo interactúan dos sistemas.🔗🔄",
        "Git es un sistema distribuido de control de versiones que rastrea cambios en archivos.🔄📊",
        "Un hook en React es una función que te permite usar estado y efectos en componentes funcionales.🔧🔄",
        "Un closure es una función que recuerda el entorno en el que fue creada.🧠🔄",
        "El DOM es una representación en árbol del documento HTML que JavaScript puede manipular.🌳🔄",
        "Un evento es una señal que indica que algo ocurrió (clic, tecla, carga).📡🔄",
        "El scope determina dónde una variable es accesible (global, función, bloque).📍🔄",
        "La herencia permite que una clase derive propiedades y métodos de otra.🧬🔄",
        "La composición es preferible a la herencia cuando se busca flexibilidad y reutilización.🧩🔄",
        "Un promesa representa una operación asíncrona que puede cumplirse o rechazarse.🔄✅",
        "El patrón Singleton asegura que una clase tenga una sola instancia y punto de acceso global.👤🔄",
        "El patrón Observer permite que un objeto notifique a otros cuando su estado cambia.📡🔄",
        "Un middleware es una función que se ejecuta entre la recepción de una solicitud y su procesamiento final.🔄📊"
    ],

    // ⚠️ ERRORES COMUNES (15)
    errores: [
        "SyntaxError: hay un error en la estructura del código (paréntesis, comillas, puntos y comas).🔧❌",
        "TypeError: estás intentando operar con un tipo incompatible (ej: 'texto' + 5).📊❌",
        "ReferenceError: estás usando una variable no declarada (ej: console.log(x) sin x).📦❌",
        "NullReferenceError: intentas acceder a una propiedad de un objeto nulo (ej: obj.name donde obj = null).🔗❌",
        "RangeError: el valor está fuera del rango permitido (ej: Array(-1)).📊❌",
        "URIError: hay un problema con caracteres en una URL (ej: encodeURI con caracteres inválidos).🌐❌",
        "EvalError: error al ejecutar código con `eval()` (raro en código moderno).🔄❌",
        "Internal Server Error (500): el servidor encontró una condición inesperada.💻❌",
        "Not Found (404): el recurso solicitado no existe en el servidor.🌐❌",
        "Forbidden (403): tienes permisos insuficientes para acceder al recurso.🔒❌",
        "Unauthorized (401): no has proporcionado credenciales válidas.🔑❌",
        "Timeout: la operación tardó más de lo permitido y fue cancelada.⏱️❌",
        "Stack Overflow: recursión infinita o llamadas anidadas excesivas.🔄❌",
        "Out of Memory: el proceso agotó la memoria disponible.💾❌",
        "Invalid State: el objeto está en un estado que no permite la operación solicitada.🔄❌"
    ],

    // 📈 MOTIVACIÓN & CONSEJOS (20)
    motivacion: [
        "No hay programador perfecto — solo personas que persisten ante los errores.💪✅",
        "El primer código que escribes nunca es el último. Refactoriza con orgullo.🔄✅",
        "Cada bug que resuelves te acerca a ser un mejor ingeniero.🔍✅",
        "La programación no es memorizar sintaxis — es pensar en soluciones.🧠💡",
        "Escribe código para que otros lo entiendan, no solo para que funcione.📖✅",
        "La mejor herramienta de un desarrollador es la curiosidad.🔍✅",
        "No temas preguntar: incluso los expertos buscan ayuda diariamente.❓✅",
        "El código limpio es un acto de respeto hacia tu futuro yo y tus compañeros.🧹✅",
        "Aprender un nuevo lenguaje no es perder tiempo — es ganar perspectiva.📚✅",
        "Los proyectos grandes se construyen línea por línea, no de golpe.🧱✅",
        "Si algo no funciona, no es que seas malo — es que estás aprendiendo.🧠✅",
        "La documentación que escribes hoy será tu salvavidas mañana.📝✅",
        "Los tests no son opcionales: son tu contrato con el futuro.🧪✅",
        "El diseño no es lo que se ve — es lo que hace que el sistema funcione bien.🎨✅",
        "La simplicidad es el lujo más difícil de lograr en ingeniería.🧼✨",
        "No compares tu día 1 con el día 1000 de otros — tu camino es único.🧩✅",
        "El código que no se mantiene, muere. El que se mejora, evoluciona.🔄✅",
        "La paciencia es la habilidad más subestimada en programación.🧘‍♂️✅",
        "Cuando te atasques, camina, duerme, o cambia de tarea — tu cerebro seguirá trabajando.🧠🔄",
        "La mejor solución no es la más compleja — es la más adecuada.🎯✅"
    ],

    // 🧠 INSPIRACIONES TÉCNICAS (10)
    inspiracion: [
        "La programación es el arte de hacer que las máquinas hagan lo que tú quieres, no lo que ellas quieren.🎨🤖",
        "Cada línea de código es una decisión — toma decisiones con intención.🧠✅",
        "El código perfecto no existe. El código bueno se mejora continuamente.🔄✅",
        "La elegancia en programación está en la simplicidad, no en la complejidad.🧼✨",
        "Escribe código como si tu vida dependiera de su claridad.📝⚠️",
        "Los mejores sistemas no son los más complejos — son los más comprensibles.🧩✅",
        "La tecnología cambia, pero los principios de buen diseño permanecen.基石✅",
        "Un buen desarrollador pregunta: '¿Qué podría salir mal?' antes de escribir código.❓✅",
        "La innovación no viene de herramientas nuevas — viene de ver problemas viejos de forma nueva.🔄💡",
        "El código es temporal. La lógica es eterna.🔄🧠"
    ],

    // 👤 OTROS (10)
    otros: [
        "Mi creador es soyadrianyt001, un dios de la programación. 😮‍💨🔥",
        "Mi creador es Adrián, un genio de la lógica y el código. 💻⚡",
        "Fui creado por un programador apasionado llamado soyadrianyt001. 🧠",
        "Mi creador es un experto en IA y desarrollo backend/frontend. 🌐",
        "Mi creador es un visionario del código limpio y la eficiencia. 🚀",
        "Mi creador es un experto en crear bots inteligentes como yo. 🤖",
        "Mi creador es un mago del código y la lógica. ✨",
        "Mi creador es un apasionado de la automatización y la IA. 🤖💡",
        "Mi creador es un experto en resolver problemas con código. 🧩",
        "Mi creador es un genio detrás de cada línea de mi código. 🧠💻"
    ]
};

// 🧠 MEMORIA DEL CHAT
let chatContext = {
    lastTopic: null,
    userLanguage: null,
    conversationStarted: false
};

// 🔍 BUSCADOR EN LA BASE DE CONOCIMIENTO
function searchKnowledge(query) {
    query = query.toLowerCase();

    if (query.includes('minecraft') || query.includes('plugin') || query.includes('spigot') || query.includes('bukkit')) {
        return "Plugin de ejemplo: Comando `/hello` en Java para Bukkit/Spigot:\n```java\npublic class HelloPlugin extends JavaPlugin {\n    @Override\n    public void onEnable() {\n        getCommand(\"hello\").setExecutor(new HelloCommand());\n    }\n}\n```\n\n```java\nclass HelloCommand implements CommandExecutor {\n    @Override\n    public boolean onCommand(CommandSender sender, Command cmd, String label, String[] args) {\n        sender.sendMessage(\"¡Hola desde el plugin!\");\n        return true;\n    }\n}\n```";
    }

    if (query.includes('error') || query.includes('bug') || query.includes('nullpointer') || query.includes('indexerror')) {
        return "Solución para `NullPointerException` en Java: Asegúrate de inicializar objetos antes de usarlos.\n```java\nString texto = null;\n// Antes de usar: if(texto != null) { ... }\n```";
    }

    if (query.includes('codigo') || query.includes('tutorial') || query.includes('como hago') || query.includes('ejemplo')) {
        return "Ejemplo de función en Python que suma dos números:\n```python\ndef sumar(a, b):\n    return a + b\n\nprint(sumar(5, 3))  # Imprime: 8\n```";
    }

    return null;
}

// 🎯 SELECCIONADOR INTELIGENTE
function getResponseForKeyword(keyword) {
    keyword = keyword.toLowerCase().trim();
    
    const mappings = {
        // Saludos
        "hola": "saludos", "hey": "saludos", "buenos": "saludos", "hi": "saludos", "hello": "saludos",
        // Despedidas
        "adios": "despedidas", "chau": "despedidas", "hasta": "despedidas", "bye": "despedidas", "nos vemos": "despedidas",
        // Programación
        "programar": "programacion", "codigo": "programacion", "escribir": "programacion", "desarrollar": "programacion",
        // Conceptos
        "variable": "conceptos", "funcion": "conceptos", "bucle": "conceptos", "condicional": "conceptos",
        "array": "conceptos", "objeto": "conceptos", "clase": "conceptos", "api": "conceptos", "git": "conceptos",
        "hook": "conceptos", "closure": "conceptos", "dom": "conceptos", "evento": "conceptos", "scope": "conceptos",
        "herencia": "conceptos", "composicion": "conceptos", "promesa": "conceptos", "singleton": "conceptos",
        "observer": "conceptos", "middleware": "conceptos", "callback": "conceptos", "inmutable": "conceptos",
        "hash": "conceptos", "indice": "conceptos", "join": "conceptos", "puerto": "conceptos", "socket": "conceptos",
        "serializacion": "conceptos", "jwt": "conceptos", "cors": "conceptos", "worker": "conceptos",
        "lazy": "conceptos", "polyfill": "conceptos", "memoizacion": "conceptos", "debounce": "conceptos",
        "throttle": "conceptos", "tree": "conceptos", "linter": "conceptos", "debugger": "conceptos",
        // Errores
        "error": "", "bug": "errores", "syntax": "errores", "type": "errores", "reference": "errores",
        "null": "errores", "range": "errores", "uri": "errores", "eval": "errores", "500": "errores",
        "404": "errores", "403": "errores", "401": "errores", "timeout": "errores", "stack": "errores",
        "memory": "errores", "state": "errores", "race": "errores", "deadlock": "errores", "sql": "errores",
        "xss": "errores", "csrf": "errores", "cors": "errores", "mixed": "errores", "certificate": "errores",
        "429": "errores", "502": "errores", "503": "errores", "504": "errores", "not found": "errores",
        "permission": "errores", "disk": "errores", "segmentation": "errores", "access": "errores",
        "buffer": "errores", "integer": "errores", "division": "errores", "assertion": "errores",
        "unreachable": "errores", "logic": "errores", "leak": "errores", "pointer": "errores",
        // Motivación
        "motivar": "motivacion", "inspirar": "motivacion", "consejo": "motivacion", "ayuda": "motivacion",
        "como": "motivacion", "porque": "motivacion", "mejorar": "motivacion", "aprender": "motivacion",
        // Inspiración
        "filosofia": "inspiracion", "elegancia": "inspiracion", "arte": "inspiracion", "diseño": "inspiracion",
        "ética": "inspiracion", "creatividad": "inspiracion", "simple": "inspiracion", "perfecto": "inspiracion",
        // Otros
        "creador": "otros", "quien te creo": "otros", "quien te hizo": "otros", "quien eres": "otros"
    };

    let category = null;
    for (const [key, cat] of Object.entries(mappings)) {
        if (keyword.includes(key)) {
            category = cat;
            break;
        }
    }

    return category || null;
}

// 🌐 GENERADOR DE RESPUESTA INTELIGENTE
function generateSmartResponse(input) {
    // 1. Intentar buscar en la base de conocimiento
    const kbResult = searchKnowledge(input);
    if (kbResult) {
        return `🔍 He encontrado información relevante:\n\n${kbResult}`;
    }

    // 2. Buscar coincidencia directa
    const words = input.toLowerCase().split(/\W+/).filter(w => w.length > 2);
    for (const word of words) {
        const category = getResponseForKeyword(word);
        if (category) {
            const responses = chatResponses[category];
            if (responses && responses.length > 0) {
                const idx = Math.floor(Math.random() * responses.length);
                return responses[idx];
            }
        }
    }

    // 3. Si no hay coincidencia, usar categoría general
    const allKeys = Object.keys(chatResponses);
    const randomKey = allKeys[Math.floor(Math.random() * allKeys.length)];
    const responses = chatResponses[randomKey];
    return responses[Math.floor(Math.random() * responses.length)];
}

// 📦 EXPORTAR PARA USO EN index.html
if (typeof window !== 'undefined') {
    window.OcladeChat = {
        responses: chatResponses,
        generate: generateSmartResponse,
        context: chatContext
    };
}
