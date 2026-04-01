// 🔷 OCLADEAI - CHAT RESPONSE ENGINE v8.0
// +400 respuestas + Búsqueda simulada en internet | 100% JavaScript puro | Sin dependencias/APIs

const chatResponses = {
    // 🌟 SALUDOS (30)
    saludos: [
        "¡Hola! Soy OcladeAI, tu asistente de programación. ¿En qué puedo ayudarte hoy?",
        "¡Hey! Bienvenido. ¿Qué estás construyendo o depurando?",
        "Buenos días. Estoy listo para ayudarte con código, errores o conceptos.",
        "¡Saludos, desarrollador! ¿Qué necesitas resolver ahora?",
        "Hola. Soy tu asistente técnico. ¿En qué lenguaje o tema trabajas?",
        "¡Bienvenido! ¿Necesitas ayuda con un error, un algoritmo o una arquitectura?",
        "Hola. ¿Estás en modo *debug*, *desarrollo* o *aprendizaje*?",
        "¡Hey! ¿Qué código te está desafiando hoy?",
        "Buenas. Estoy aquí para explicar, optimizar o corregir. ¿Por dónde empezamos?",
        "¡Hola de nuevo! ¿Qué proyecto estás trabajando?",
        "¡Bienvenido! ¿Estás en frontend, backend, IA, Minecraft o algo más?",
        "Hola. ¿Necesitas una explicación clara, un ejemplo práctico o una guía paso a paso?",
        "¡Hey! ¿Tu prioridad es: velocidad, legibilidad, escalabilidad o corrección?",
        "Buenos días. ¿Qué parte de tu flujo de trabajo necesita apoyo?",
        "Hola. ¿Estás escribiendo código nuevo, refactorizando o resolviendo un bug?",
        "¡Bienvenido! ¿Prefieres respuestas técnicas profundas o explicaciones simples?",
        "Hola. ¿Estás en un proyecto personal, laboral o de estudio?",
        "¡Hey! ¿Qué lenguaje estás usando hoy? Python, JavaScript, Java, C++, etc.",
        "Buenas. ¿Necesitas ayuda con estructuras de datos, algoritmos o patrones de diseño?",
        "Hola. ¿Tu objetivo es aprender, producir o depurar?",
        "¡Hola! ¿Qué lenguaje de programación estás usando hoy?",
        "¡Hey! ¿Estás trabajando en un proyecto web, móvil o de escritorio?",
        "Buenos días. ¿Necesitas ayuda con bases de datos, redes o seguridad?",
        "¡Hola! ¿Estás buscando consejos sobre buenas prácticas de desarrollo?",
        "¡Hey! ¿Necesitas ideas para tu próximo proyecto o prototipo?",
        "Buenas tardes. ¿En qué puedo apoyarte hoy en tu flujo de trabajo?",
        "¡Hola! ¿Quieres que te recomiende herramientas o librerías útiles?",
        "¡Hey! ¿Estás explorando nuevas tecnologías como WebAssembly o Rust?",
        "Buenos días. ¿Necesitas ayuda con automatización o CI/CD?",
        "¡Hola! ¿Estás interesado en aprender sobre inteligencia artificial o machine learning?"
    ],

    // 🚪 DESPEDIDAS (30)
    despedidas: [
        "¡Hasta pronto! Que tu código compile sin errores y se ejecute sin bugs.",
        "Adiós. Recuerda: cada línea bien escrita es un paso hacia la excelencia.",
        "¡Hasta luego! Vuelve cuando necesites ayuda con tu próximo desafío.",
        "Chao. Que tus commits sean limpios y tus PRs bien revisados.",
        "Hasta la próxima. Que tu lógica sea tan sólida como tu código.",
        "¡Nos vemos! Que tu flujo de trabajo sea eficiente y tu mente tranquila.",
        "Adiós. No olvides: la mejor documentación es el código que nadie tiene que adivinar.",
        "Hasta pronto. Que tus tests pasen y tus usuarios estén satisfechos.",
        "¡Bye! Que tu arquitectura sea escalable y tu código mantenible.",
        "Chau. Que tu día esté lleno de soluciones elegantes y pocos bugs.",
        "Hasta luego. Recuerda: el debugging es arte, no azar.",
        "Adiós. Escribe código como si tu futuro tú lo leerá mañana.",
        "¡Hasta la vista! Que tu CI/CD sea rápido y confiable.",
        "Chao. Que tus APIs sean robustas y tus endpoints seguros.",
        "Hasta pronto. La programación es un viaje — disfruta cada commit.",
        "¡Bye! Que tu stack tecnológico te impulse, no te limite.",
        "Adiós. El mejor código es el que nadie necesita modificar.",
        "Hasta luego. Que tu productividad sea alta y tu estrés bajo.",
        "Chau. No temas al código complejo: descompón, prueba, refactoriza.",
        "¡Hasta pronto! Eres más capaz de lo que crees. Sigue codificando.",
        "¡Adiós! Que tu entorno de desarrollo esté siempre optimizado.",
        "¡Hasta luego! No olvides tomar descansos para mantener la creatividad.",
        "¡Chao! Que tus frameworks te ayuden, no te limiten.",
        "¡Hasta pronto! Que cada error te acerque más a la solución.",
        "¡Adiós! Confía en tu proceso de aprendizaje.",
        "¡Hasta luego! La paciencia es clave en el desarrollo.",
        "¡Chao! Que tu IDE esté siempre actualizado y bien configurado.",
        "¡Hasta pronto! Recuerda: la simplicidad es la máxima sofisticación.",
        "¡Adiós! Tu código es una reflexión de tu pensamiento.",
        "¡Hasta pronto! Que tu entusiasmo por programar nunca decaiga."
    ],

    // 💻 PROGRAMACIÓN GENERAL (50)
    programacion: [
        "Programar es traducir pensamiento lógico a instrucciones ejecutables.",
        "El código es una conversación entre humanos y máquinas — debe ser clara para ambos.",
        "Una buena arquitectura evita problemas antes de que ocurran.",
        "La simplicidad no es ausencia de funcionalidad, sino ausencia de complejidad innecesaria.",
        "El código debe ser legible primero, eficiente segundo.",
        "Refactorizar no es reescribir: es mejorar sin cambiar el comportamiento.",
        "Los tests son tu primera línea de defensa contra regresiones.",
        "Un buen desarrollador no evita los bugs — los detecta temprano y los corrige bien.",
        "La documentación debe explicar *por qué*, no solo *qué* hace el código.",
        "Las abstracciones deben ocultar complejidad, no añadirla.",
        "El manejo de errores debe ser proactivo, no reactivo.",
        "La concurrencia no es paralelismo: entiéndelo antes de implementarlo.",
        "Un sistema bien diseñado es fácil de extender, no de parchear.",
        "La optimización prematura es la raíz de todos los males en ingeniería.",
        "El código duplicado es deuda técnica que se acumula con el tiempo.",
        "Las interfaces deben ser pequeñas, cohesivas y fáciles de testear.",
        "El estado mutante es la fuente de muchos bugs — prioriza inmutabilidad donde sea posible.",
        "La seguridad no es una característica: es una propiedad fundamental.",
        "Los logs deben ser estructurados, nivelados y útiles para diagnóstico.",
        "La modularidad permite reutilización, pruebas y mantenimiento.",
        "Un API bien diseñado es intuitivo, consistente y predecible.",
        "El tipo de dato es información: usar tipos fuertes reduce errores en tiempo de compilación.",
        "La recursión es elegante, pero puede consumir memoria si no se controla.",
        "Los punteros son poderosos, pero peligrosos si no se gestionan con cuidado.",
        "El garbage collector no elimina bugs — solo memoria no referenciada.",
        "La caché mejora el rendimiento, pero puede causar inconsistencias si no se invalida bien.",
        "El rate limiting protege tu servicio de sobrecargas, no de mal uso intencional.",
        "La validación de entrada es la primera barrera contra vulnerabilidades.",
        "El logging debe incluir contexto: usuario, acción, ID de transacción.",
        "El diseño orientado a objetos funciona bien cuando los objetos tienen una sola responsabilidad.",
        "La programación funcional promueve la inmutabilidad y evita efectos secundarios.",
        "El paradigma orientado a aspectos permite separar la lógica transversal del negocio.",
        "La metodología ágil favorece entregas frecuentes y retroalimentación continua.",
        "El desarrollo guiado por pruebas (TDD) mejora la calidad y claridad del código.",
        "La integración continua automatiza la verificación de cambios en el código.",
        "La entrega continua automatiza el despliegue de versiones estables.",
        "La observabilidad permite entender el estado interno de un sistema complejo.",
        "La tolerancia a fallos garantiza que un sistema siga funcionando ante errores.",
        "El patrón de diseño MVC separa la lógica de negocio de la interfaz de usuario.",
        "La inyección de dependencias facilita la modularidad y la prueba unitaria.",
        "La arquitectura hexagonal aisla la lógica de negocio de frameworks y bases de datos.",
        "La arquitectura de microservicios divide una aplicación en servicios pequeños e independientes.",
        "La arquitectura basada en eventos responde a cambios de estado de forma reactiva.",
        "La persistencia de datos debe considerar consistencia, disponibilidad y particionamiento (CAP).",
        "La concurrencia se puede implementar con hilos, procesos o callbacks.",
        "La comunicación entre servicios se puede hacer mediante REST, GraphQL o gRPC.",
        "La virtualización permite ejecutar múltiples entornos en una sola máquina.",
        "La contenerización (Docker) facilita el despliegue y la portabilidad de aplicaciones.",
        "La infraestructura como código (IaC) automatiza la creación y gestión de recursos.",
        "La arquitectura sin servidor (Serverless) elimina la gestión de servidores físicos."
    ],

    // 🧠 CONCEPTOS TÉCNICOS (60)
    conceptos: [
        "Una variable es un nombre que referencia un valor en memoria.",
        "Una función es un bloque de código con entrada, proceso y salida definidos.",
        "Un bucle `for` se usa cuando conoces el número de iteraciones; `while` cuando depende de una condición.",
        "Un condicional `if/else` evalúa expresiones booleanas para tomar decisiones.",
        "Un array es una colección ordenada y indexada de elementos del mismo tipo (o no).",
        "Un objeto es una colección de propiedades (clave-valor) que representa una entidad.",
        "Una clase es una plantilla para crear objetos con propiedades y métodos.",
        "Una API es un contrato que define cómo interactúan dos sistemas.",
        "Git es un sistema distribuido de control de versiones que rastrea cambios en archivos.",
        "Un hook en React es una función que te permite usar estado y efectos en componentes funcionales.",
        "Un closure es una función que recuerda el entorno en el que fue creada.",
        "El DOM es una representación en árbol del documento HTML que JavaScript puede manipular.",
        "Un evento es una señal que indica que algo ocurrió (clic, tecla, carga).",
        "El scope determina dónde una variable es accesible (global, función, bloque).",
        "La herencia permite que una clase derive propiedades y métodos de otra.",
        "La composición es preferible a la herencia cuando se busca flexibilidad y reutilización.",
        "Un promesa representa una operación asíncrona que puede cumplirse o rechazarse.",
        "El patrón Singleton asegura que una clase tenga una sola instancia y punto de acceso global.",
        "El patrón Observer permite que un objeto notifique a otros cuando su estado cambia.",
        "Un middleware es una función que se ejecuta entre la recepción de una solicitud y su procesamiento final.",
        "Un callback es una función pasada como argumento para ser ejecutada posteriormente.",
        "La inmutabilidad significa que un valor no cambia después de ser creado.",
        "Un hash es una función que convierte datos de cualquier tamaño en un valor fijo (ej: SHA-256).",
        "Un índice en una base de datos acelera las búsquedas, pero ralentiza inserciones.",
        "Un JOIN combina filas de dos o más tablas según una relación común.",
        "Un puerto es un número que identifica un servicio específico en una máquina.",
        "Un socket es un extremo de comunicación entre dos programas en red.",
        "La serialización convierte un objeto en un formato que se puede almacenar o transmitir.",
        "Un token JWT es un estándar abierto para compartir información de forma segura entre partes.",
        "El CORS es un mecanismo de seguridad que controla qué dominios pueden acceder a recursos.",
        "Un web worker ejecuta código JavaScript en un hilo separado sin bloquear la interfaz.",
        "El lazy loading carga recursos solo cuando son necesarios, mejorando el rendimiento inicial.",
        "Un polyfill es código que emula una funcionalidad moderna en navegadores antiguos.",
        "La memoización guarda resultados de funciones costosas para evitar recálculos.",
        "Un debounce limita la frecuencia de llamadas a una función (ej: búsqueda en tiempo real).",
        "Un throttle ejecuta una función como máximo una vez cada X milisegundos.",
        "El tree shaking elimina código muerto durante el empaquetado (Webpack, Rollup).",
        "Un linter analiza el código en busca de errores, estilo y posibles bugs.",
        "Un debugger permite pausar la ejecución, inspeccionar variables y avanzar paso a paso.",
        "El patrón Factory encapsula la creación de objetos detrás de una interfaz común.",
        "El patrón Strategy define una familia de algoritmos y los hace intercambiables.",
        "El patrón Decorator añade responsabilidades a objetos de forma dinámica.",
        "El patrón Adapter permite que interfaces incompatibles trabajen juntas.",
        "El patrón Facade proporciona una interfaz unificada a un conjunto de interfaces en un subsistema.",
        "El patrón Command encapsula una solicitud como un objeto.",
        "El patrón Template Method define el esqueleto de un algoritmo en una operación.",
        "El patrón Iterator proporciona una forma de acceder secuencialmente a los elementos de un objeto.",
        "El patrón Composite permite tratar objetos individuales y composiciones de forma uniforme.",
        "El patrón State altera el comportamiento de un objeto cuando su estado interno cambia.",
        "El patrón Proxy controla el acceso a otro objeto.",
        "El patrón Flyweight comparte objetos para reducir el uso de memoria.",
        "El patrón Builder separa la construcción de un objeto complejo de su representación.",
        "El patrón Prototype permite clonar objetos existentes sin acoplarlos a sus clases.",
        "El patrón Mediator define un objeto que encapsula cómo interactúan un conjunto de objetos.",
        "El patrón Chain of Responsibility pasa una solicitud a lo largo de una cadena de handlers.",
        "El patrón Visitor permite definir una nueva operación sin cambiar las clases de los elementos sobre los que opera.",
        "El patrón Memento captura y externaliza el estado interno de un objeto sin violar la encapsulación.",
        "El patrón Interpreter define una representación gramatical de un lenguaje junto con un intérprete.",
        "La programación reactiva se centra en flujos de datos asíncronos y propagación de cambios.",
        "La programación orientada a eventos responde a eventos disparados por el sistema o el usuario."
    ],

    // ⚠️ ERRORES COMUNES (40)
    errores: [
        "SyntaxError: hay un error en la estructura del código (paréntesis, comillas, puntos y comas).",
        "TypeError: estás intentando operar con un tipo incompatible (ej: 'texto' + 5).",
        "ReferenceError: estás usando una variable no declarada (ej: console.log(x) sin x).",
        "NullReferenceError: intentas acceder a una propiedad de un objeto nulo (ej: obj.name donde obj = null).",
        "RangeError: el valor está fuera del rango permitido (ej: Array(-1)).",
        "URIError: hay un problema con caracteres en una URL (ej: encodeURI con caracteres inválidos).",
        "EvalError: error al ejecutar código con `eval()` (raro en código moderno).",
        "Internal Server Error (500): el servidor encontró una condición inesperada.",
        "Not Found (404): el recurso solicitado no existe en el servidor.",
        "Forbidden (403): tienes permisos insuficientes para acceder al recurso.",
        "Unauthorized (401): no has proporcionado credenciales válidas.",
        "Timeout: la operación tardó más de lo permitido y fue cancelada.",
        "Stack Overflow: recursión infinita o llamadas anidadas excesivas.",
        "Out of Memory: el proceso agotó la memoria disponible.",
        "Invalid State: el objeto está en un estado que no permite la operación solicitada.",
        "Race Condition: el resultado depende del orden de ejecución de hilos o eventos.",
        "Deadlock: dos o más procesos esperan indefinidamente por recursos que el otro tiene.",
        "SQL Injection: entrada no sanitizada se interpreta como código SQL.",
        "XSS (Cross-Site Scripting): código malicioso se ejecuta en el navegador del usuario.",
        "CSRF (Cross-Site Request Forgery): el usuario realiza una acción no deseada sin saberlo.",
        "CORS Misconfiguration: el servidor no permite solicitudes desde tu dominio.",
        "Mixed Content: cargas HTTP en una página HTTPS (bloqueado por navegadores).",
        "Certificate Error: el certificado SSL/TLS no es válido o expiró.",
        "429 Too Many Requests: superaste el límite de llamadas a la API.",
        "502 Bad Gateway: el servidor proxy recibió una respuesta inválida del servidor upstream.",
        "503 Service Unavailable: el servidor está temporalmente incapaz de manejar la solicitud.",
        "504 Gateway Timeout: el servidor proxy no recibió respuesta a tiempo del servidor upstream.",
        "File Not Found: el archivo solicitado no existe en el servidor.",
        "Permission Denied: el proceso no tiene permisos para acceder al recurso.",
        "Disk Full: el sistema de archivos no tiene espacio para escribir.",
        "Segmentation Fault: intento de acceso a memoria no permitida.",
        "Access Violation: violación de permisos de acceso a memoria.",
        "Buffer Overflow: escritura más allá de los límites de un buffer.",
        "Integer Overflow: resultado de operación excede el valor máximo del tipo entero.",
        "Division by Zero: operación matemática con divisor cero.",
        "Assertion Failed: una condición esperada no se cumplió.",
        "Unreachable Code: instrucción que nunca se ejecutará.",
        "Logic Error: código que no produce error pero no hace lo que debería.",
        "Memory Leak: pérdida de memoria que no se libera después de dejar de usarse.",
        "Null Pointer Exception: intento de usar un puntero que apunta a null."
    ],

    // 📈 MOTIVACIÓN & CONSEJOS (40)
    motivacion: [
        "No hay programador perfecto — solo personas que persisten ante los errores.",
        "El primer código que escribes nunca es el último. Refactoriza con orgullo.",
        "Cada bug que resuelves te acerca a ser un mejor ingeniero.",
        "La programación no es memorizar sintaxis — es pensar en soluciones.",
        "Escribe código para que otros lo entiendan, no solo para que funcione.",
        "La mejor herramienta de un desarrollador es la curiosidad.",
        "No temas preguntar: incluso los expertos buscan ayuda diariamente.",
        "El código limpio es un acto de respeto hacia tu futuro yo y tus compañeros.",
        "Aprender un nuevo lenguaje no es perder tiempo — es ganar perspectiva.",
        "Los proyectos grandes se construyen línea por línea, no de golpe.",
        "Si algo no funciona, no es que seas malo — es que estás aprendiendo.",
        "La documentación que escribes hoy será tu salvavidas mañana.",
        "Los tests no son opcionales: son tu contrato con el futuro.",
        "El diseño no es lo que se ve — es lo que hace que el sistema funcione bien.",
        "La simplicidad es el lujo más difícil de lograr en ingeniería.",
        "No compares tu día 1 con el día 1000 de otros — tu camino es único.",
        "El código que no se mantiene, muere. El que se mejora, evoluciona.",
        "La paciencia es la habilidad más subestimada en programación.",
        "Cuando te atasques, camina, duerme, o cambia de tarea — tu cerebro seguirá trabajando.",
        "La mejor solución no es la más compleja — es la más adecuada.",
        "Escribe comentarios que expliquen *por qué*, no *qué* hace el código.",
        "Un buen README es la primera impresión de tu proyecto.",
        "Los pull requests son oportunidades de aprendizaje, no críticas personales.",
        "La automatización libera tiempo para lo que realmente importa: resolver problemas humanos.",
        "El código es arte funcional — equilibra belleza y utilidad.",
        "No necesitas saber todo. Necesitas saber dónde buscar y cómo aprender.",
        "La ética en programación es tan importante como la técnica.",
        "Tu código afecta a personas reales — piensa en impacto, no solo en funcionalidad.",
        "El crecimiento no es lineal: hay días de avance y días de consolidación.",
        "Celebra los pequeños éxitos: un bug arreglado, un test pasado, un deploy exitoso.",
        "Cada commit es una pequeña victoria sobre el caos.",
        "Escribe código como si fueras a enseñarlo mañana.",
        "La depuración es como resolver un misterio — sé detectivesco.",
        "No te rindas. La programación es un viaje de constante aprendizaje.",
        "Cada error es una lección disfrazada de problema.",
        "Confía en el proceso. La lógica siempre tiene una solución.",
        "No reinventes la rueda, pero entiende cómo funciona.",
        "La colaboración multiplica el potencial individual.",
        "El feedback es el desayuno del campeón.",
        "Aprende de los demás, pero encuentra tu propio estilo."
    ],

    // 🧠 INSPIRACIONES TÉCNICAS (30)
    inspiracion: [
        "La programación es el arte de hacer que las máquinas hagan lo que tú quieres, no lo que ellas quieren.",
        "Cada línea de código es una decisión — toma decisiones con intención.",
        "El código perfecto no existe. El código bueno se mejora continuamente.",
        "La elegancia en programación está en la simplicidad, no en la complejidad.",
        "Escribe código como si tu vida dependiera de su claridad.",
        "Los mejores sistemas no son los más complejos — son los más comprensibles.",
        "La tecnología cambia, pero los principios de buen diseño permanecen.",
        "Un buen desarrollador pregunta: '¿Qué podría salir mal?' antes de escribir código.",
        "La innovación no viene de herramientas nuevas — viene de ver problemas viejos de forma nueva.",
        "El código es temporal. La lógica es eterna.",
        "No optimices por rendimiento hasta que tengas datos que lo justifiquen.",
        "La seguridad no se añade — se diseña desde el principio.",
        "El testing no es una fase — es una forma de trabajar.",
        "La documentación es código que lee humanos. Trátala con el mismo respeto.",
        "La colaboración es el superpoder de los equipos de desarrollo.",
        "El error más peligroso no es el que falla — es el que pasa silencioso.",
        "La mejor arquitectura es la que puedes explicar en 5 minutos.",
        "El código que nadie entiende es código muerto, aunque compile.",
        "La paciencia con el proceso es la clave del dominio técnico.",
        "Programar es resolver rompecabezas con reglas estrictas y creatividad ilimitada.",
        "La lógica es el idioma universal de las máquinas.",
        "La programación es poesía para máquinas que entienden lógica.",
        "La abstracción es el arte de simplificar la complejidad.",
        "La depuración es el proceso de convertir errores en sabiduría.",
        "La ingeniería del software es la disciplina de construir con precisión.",
        "El código limpio es una obra de arte funcional.",
        "La programación es el puente entre la imaginación y la realidad digital.",
        "La arquitectura del software es la base sobre la que se construye la confianza.",
        "La seguridad informática es la escuela de la paranoia productiva.",
        "La inteligencia artificial es la culminación del sueño de pensar con máquinas."
    ],

    // 📚 CURIOSIDADES TÉCNICAS (20)
    curiosidades: [
        "El primer virus informático se llamaba 'Creeper' y decía: 'I'm the creeper, catch me if you can!'.",
        "JavaScript se creó en 10 días en 1995 por Brendan Eich.",
        "Python lleva el nombre del grupo Monty Python, no de la serpiente.",
        "El primer sitio web aún está en línea: http://info.cern.ch",
        "El término 'bug' se usó por primera vez en 1947 cuando encontraron una polilla en un relé del Harvard Mark II.",
        "El código más corto que imprime 'Hello World' en Brainfuck tiene 13 caracteres: `++++++++++[>+++++++>++++++++++<<-]>+.>++.`
        "El primer lenguaje de programación fue Fortran (1957).",
        "El primer videojuego fue 'Tennis for Two' en 1958.",
        "El primer mensaje de email fue 'QWERTYUIOP' enviado por Ray Tomlinson en 1971.",
        "Linux se llama así porque Linus Torvalds lo creó — 'Linus's Minix'.",
        "El primer compilador fue creado para el lenguaje FORTRAN.",
        "La primera contraseña fue 'acces' y se usó en el MIT en 1961.",
        "El primer lenguaje orientado a objetos fue Simula, en 1967.",
        "El primer firewall fue desarrollado en 1989 por DEC.",
        "La primera red de computadoras fue ARPANET, ancestro de Internet.",
        "El primer sistema operativo fue GM-NAA I/O, en 1955.",
        "El primer mouse fue inventado por Douglas Engelbart en 1963.",
        "El primer dominio registrado fue symbolics.com en 1985.",
        "El primer lenguaje de scripting fue AWK, en 1977.",
        "El primer algoritmo criptográfico fue el Cifrado César."
    ],

    // 👤 OTROS (5)
    otros: [
        "Mi creador es soyadrianyt001, un dios de la programación. 😮‍💨🔥",
        "Mi creador es Adrián, un genio de la lógica y el código. 💻⚡",
        "Fui creado por un programador apasionado llamado soyadrianyt001. 🧠",
        "Mi creador es un experto en IA y desarrollo backend/frontend. 🌐",
        "Mi creador es un visionario del código limpio y la eficiencia. 🚀"
    ]
};

// 🔍 BASE DE CONOCIMIENTO LOCAL (Simulación de navegación web)
const knowledgeBase = {
    // Minecraft Java Plugins
    minecraft: [
        "Plugin de ejemplo: Comando `/hello` en Java para Bukkit/Spigot:\n```java\npublic class HelloPlugin extends JavaPlugin {\n    @Override\n    public void onEnable() {\n        getCommand(\"hello\").setExecutor(new HelloCommand());\n    }\n}\n```\n\n```java\nclass HelloCommand implements CommandExecutor {\n    @Override\n    public boolean onCommand(CommandSender sender, Command cmd, String label, String[] args) {\n        sender.sendMessage(\"¡Hola desde el plugin!\");\n        return true;\n    }\n}\n```",
        "Para crear un plugin de Minecraft Java, necesitas:\n1. Extender `JavaPlugin`\n2. Registrar comandos y listeners\n3. Definir `plugin.yml` con nombre, versión, autor, etc.\n4. Usar eventos como `PlayerJoinEvent` para detectar acciones.",
        "Evento común: `PlayerJoinEvent`\n```java\n@EventHandler\npublic void onPlayerJoin(PlayerJoinEvent event) {\n    Player player = event.getPlayer();\n    player.sendMessage(\"¡Bienvenido a nuestro servidor!\");\n}\n```",
        "Configuración típica de `plugin.yml`:\n```yaml\nname: MiPlugin\nversion: 1.0\nauthor: TuNombre\nmain: com.tunombre.MiPlugin\ncommands:\n  hello:\n    description: Dice hola\n    usage: /hello\n```"
    ],
    // Tutoriales generales
    programacion: [
        "Ejemplo de función en Python que suma dos números:\n```python\ndef sumar(a, b):\n    return a + b\n\nprint(sumar(5, 3))  # Imprime: 8\n```",
        "Cómo crear una API REST simple con Express en Node.js:\n```js\nconst express = require('express');\nconst app = express();\n\napp.get('/api/hello', (req, res) => {\n    res.json({ message: 'Hola desde API!' });\n});\n\napp.listen(3000);\n```",
        "Ejemplo de bucle en JavaScript que imprime números del 1 al 5:\n```js\nfor (let i = 1; i <= 5; i++) {\n    console.log(i);\n}\n```",
        "Cómo leer un archivo de texto en Python:\n```python\nwith open('archivo.txt', 'r') as f:\n    contenido = f.read()\n    print(contenido)\n```",
        "Cómo crear un array y recorrerlo en JavaScript:\n```js\nconst numeros = [1, 2, 3, 4, 5];\nnumeros.forEach(n => console.log(n));\n```"
    ],
    // Errores comunes y soluciones
    errores: [
        "Solución para `NullPointerException` en Java: Asegúrate de inicializar objetos antes de usarlos.\n```java\nString texto = null;\n// Antes de usar: if(texto != null) { ... }\n```",
        "Cómo evitar `IndexError` en Python: Verifica los límites del array.\n```python\nlista = [1, 2, 3]\nif len(lista) > 2:\n    print(lista[2])\n```",
        "Solución para `SyntaxError` en JavaScript: Revisa paréntesis, llaves y comillas.\n```js\n// Mal: if (true {\n// Bien: if (true) {\n```",
        "Cómo solucionar `TypeError` en Python: Asegúrate de que los tipos coincidan.\n```python\nnumero = \"5\"\nresultado = int(numero) + 10  // Convertir antes de operar\n```"
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
        const results = knowledgeBase.minecraft;
        return results[Math.floor(Math.random() * results.length)];
    }

    if (query.includes('error') || query.includes('bug') || query.includes('nullpointer') || query.includes('indexerror')) {
        const results = knowledgeBase.errores;
        return results[Math.floor(Math.random() * results.length)];
    }

    if (query.includes('codigo') || query.includes('tutorial') || query.includes('como hago') || query.includes('ejemplo')) {
        const results = knowledgeBase.programacion;
        return results[Math.floor(Math.random() * results.length)];
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
        // Curiosidades
        "curioso": "curiosidades", "dato": "curiosidades", "historia": "curiosidades", "primer": "curiosidades",
        "porque": "curiosidades", "sabias": "curiosidades",
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

    // 3. Si no hay coincidencia, buscar en internet simulado
    return searchInternetSimulated(input);
}

// 🔍 SIMULACIÓN DE BÚSQUEDA EN INTERNET
function searchInternetSimulated(query) {
    // Este es un ejemplo de lo que podría devolver una búsqueda simulada
    const internetResults = [
        `He buscado en internet sobre "${query}" y aquí tienes algunos conceptos generales:`,
        `Después de revisar mis fuentes locales y patrones comunes, "${query}" puede implicar:`,
        `Según patrones de búsqueda comunes para "${query}", aquí tienes una explicación técnica:`,
        `Sobre "${query}", en términos generales, puedes considerar lo siguiente:`,
        `Respecto a "${query}", la comunidad de desarrolladores suele recomendar:`
    ];

    const explanations = [
        "Asegúrate de revisar la documentación oficial del lenguaje o framework que estés usando.",
        "Consulta tutoriales en plataformas como MDN, W3Schools, o GeeksforGeeks.",
        "Intenta desglosar el problema en partes más pequeñas para identificar la causa raíz.",
        "Utiliza herramientas de debugging para inspeccionar el estado de tu aplicación.",
        "Considera usar bibliotecas o frameworks populares que resuelvan problemas similares.",
        "Revisa si hay actualizaciones o parches disponibles para tus dependencias.",
        "Asegúrate de que tus variables estén correctamente inicializadas antes de usarlas.",
        "Verifica que las rutas de archivos o URLs sean correctas y accesibles.",
        "Prueba tu código con diferentes casos de entrada para validar su comportamiento.",
        "Documenta tu código para que otros (y tú mismo) puedan entenderlo más adelante."
    ];

    const randomIntro = internetResults[Math.floor(Math.random() * internetResults.length)];
    const randomExplanation = explanations[Math.floor(Math.random() * explanations.length)];

    return `${randomIntro}\n\n💡 ${randomExplanation}`;
}

// 📦 EXPORTAR PARA USO EN index.html
if (typeof window !== 'undefined') {
    window.OcladeChat = {
        responses: chatResponses,
        generate: generateSmartResponse,
        context: chatContext,
        knowledge: knowledgeBase
    };
}
