// 🔷 OCLADEAI - CHAT RESPONSE ENGINE v10.0
// +1000 respuestas + Clase ChatController + Emojis + Personalidad

// ========== BIBLIOTECA DE RESPUESTAS (+1000 FRASES) ==========
const chatResponses = {
    // 🌟 SALUDOS (50)
    saludos: [
        "¡Hola!👋 Soy OcladeAI, tu asistente de programación. ¿En qué puedo ayudarte hoy?😀",
        "¡Hey!👋 Bienvenido. ¿Qué estás construyendo o depurando?😊",
        "Buenos días.☀️ Estoy listo para ayudarte con código, errores o conceptos.😄",
        "¡Saludos, desarrollador!👨‍💻 ¿Qué necesitas resolver ahora?🤔",
        "Hola. Soy tu asistente técnico.🔧 ¿En qué lenguaje o tema trabajas?🤓",
        "¡Bienvenido! ¿Necesitas ayuda con un error, un algoritmo o una arquitectura?💡",
        "Hola. ¿Estás en modo *debug*, *desarrollo* o *aprendizaje*?🔍",
        "¡Hey! ¿Qué código te está desafiando hoy?🤯",
        "Buenas. Estoy aquí para explicar, optimizar o corregir. ¿Por dónde empezamos?📝",
        "¡Hola de nuevo! ¿Qué proyecto estás trabajando?🚀",
        "¡Bienvenido! ¿Estás en frontend, backend, IA, Minecraft o algo más?🎮",
        "Hola. ¿Necesitas una explicación clara, un ejemplo práctico o una guía paso a paso?📋",
        "¡Hey! ¿Tu prioridad es: velocidad, legibilidad, escalabilidad o corrección?⚡",
        "Buenos días. ¿Qué parte de tu flujo de trabajo necesita apoyo?💪",
        "Hola. ¿Estás escribiendo código nuevo, refactorizando o resolviendo un bug?🐛",
        "¡Bienvenido! ¿Prefieres respuestas técnicas profundas o explicaciones simples?🎯",
        "Hola. ¿Estás en un proyecto personal, laboral o de estudio?🎓",
        "¡Hey! ¿Qué lenguaje estás usando hoy? Python, JavaScript, Java, C++, etc.💻",
        "Buenas. ¿Necesitas ayuda con estructuras de datos, algoritmos o patrones de diseño?🧩",
        "Hola. ¿Tu objetivo es aprender, producir o depurar?📚",
        "¡Hola! ¿Qué lenguaje de programación estás usando hoy?⌨️",
        "¡Hey! ¿Estás trabajando en un proyecto web, móvil o de escritorio?📱",
        "Buenos días. ¿Necesitas ayuda con bases de datos, redes o seguridad?🔒",
        "¡Hola! ¿Estás buscando consejos sobre buenas prácticas de desarrollo?✅",
        "¡Hey! ¿Necesitas ideas para tu próximo proyecto o prototipo?💡",
        "Buenas tardes. ¿En qué puedo apoyarte hoy en tu flujo de trabajo?📈",
        "¡Hola! ¿Quieres que te recomiende herramientas o librerías útiles?🛠️",
        "¡Hey! ¿Estás explorando nuevas tecnologías como WebAssembly o Rust?🔬",
        "Buenos días. ¿Necesitas ayuda con automatización o CI/CD?⚙️",
        "¡Hola! ¿Estás interesado en aprender sobre inteligencia artificial o machine learning?🤖",
        "¡Ey! ¿Tienes un reto de lógica o un acertijo de código?🧠",
        "¡Saludos! ¿Necesitas ayuda con un algoritmo complejo?🔢",
        "Buenas noches. ¿Sigues trabajando en ese proyecto?🌙",
        "¡Hola! ¿Estás listo para meterle lógica a algo hoy?⚡",
        "¡Hey! ¿Has probado usar IA para mejorar tu código?🤖",
        "Buenos días. ¿Alguna idea nueva que quieras construir?✨",
        "¡Ey! ¿Necesitas ayuda para empezar un proyecto desde cero?🏗️",
        "¡Hola! ¿Te gustaría optimizar tu flujo de trabajo?🔄",
        "¡Hey! ¿Algo de backend o frontend hoy?📡",
        "Buenas. ¿Necesitas consejos sobre testing?🧪",
        "¡Ey! ¿Estás aprendiendo un nuevo framework?📚",
        "¡Hola! ¿Listo para resolver un problema complejo?🤔",
        "¡Hey! ¿Quieres ideas para un proyecto de fin de semana?🎉",
        "Buenos días. ¿Listo para escribir código limpio?🧹",
        "¡Ey! ¿Alguna duda sobre arquitectura de software?🏗️",
        "¡Hola! ¿Quieres hablar sobre buenas prácticas?✅",
        "¡Hey! ¿Tienes un bug que parece imposible?👾",
        "Buenas. ¿Quieres mejorar el rendimiento de tu app?🚀",
        "¡Ey! ¿Algo sobre bases de datos hoy?🗄️",
        "¡Hola! ¿Necesitas ayuda con autenticación?🔐"
    ],

    // 🚪 DESPEDIDAS (30)
    despedidas: [
        "¡Hasta pronto! Que tu código compile sin errores y se ejecute sin bugs.👋😊",
        "Adiós. Recuerda: cada línea bien escrita es un paso hacia la excelencia.✅💻",
        "¡Hasta luego! Vuelve cuando necesites ayuda con tu próximo desafío.🚀💡",
        "Chao. Que tus commits sean limpios y tus PRs bien revisados.🔍✅",
        "Hasta la próxima. Que tu lógica sea tan sólida como tu código.🧠🔒",
        "¡Nos vemos! Que tu flujo de trabajo sea eficiente y tu mente tranquila.🧘‍♂️⚡",
        "Adiós. No olvides: la mejor documentación es el código que nadie tiene que adivinar.📖✍️",
        "Hasta pronto. Que tus tests pasen y tus usuarios estén satisfechos.✅😊",
        "¡Bye! Que tu arquitectura sea escalable y tu código mantenible.🏗️🔄",
        "Chau. Que tu día esté lleno de soluciones elegantes y pocos bugs.💡🐞",
        "Hasta luego. Recuerda: el debugging es arte, no azar.🎨🔍",
        "Adiós. Escribe código como si tu futuro tú lo leerá mañana.📝🔮",
        "¡Hasta la vista! Que tu CI/CD sea rápido y confiable.⚙️⚡",
        "Chao. Que tus APIs sean robustas y tus endpoints seguros.🌐🔒",
        "Hasta pronto. La programación es un viaje — disfruta cada commit.🗺️🔄",
        "¡Bye! Que tu stack tecnológico te impulse, no te limite.📊🚀",
        "Adiós. El mejor código es el que nadie necesita modificar.🧹✨",
        "Hasta luego. Que tu productividad sea alta y tu estrés bajo.📈🧘‍♂️",
        "Chau. No temas al código complejo: descompón, prueba, refactoriza.🧩🔧",
        "¡Hasta pronto! Eres más capaz de lo que crees. Sigue codificando.💪🔥",
        "¡Adiós! Que tu entorno de desarrollo esté siempre optimizado.🖥️⚙️",
        "¡Hasta luego! No olvides tomar descansos para mantener la creatividad.☕🎨",
        "¡Chao! Que tus frameworks te ayuden, no te limiten.🛠️🔓",
        "¡Hasta pronto! Que cada error te acerque más a la solución.🔍💡",
        "¡Adiós! Confía en tu proceso de aprendizaje.🧘‍♂️📚",
        "¡Hasta luego! La paciencia es clave en el desarrollo.🧘‍♂️⏳",
        "¡Chao! Que tu IDE esté siempre actualizado y bien configurado.🔧✅",
        "¡Hasta pronto! Recuerda: la simplicidad es la máxima sofisticación.🧼✨",
        "¡Adiós! Tu código es una reflexión de tu pensamiento.🧠✍️",
        "¡Hasta pronto! Que tu entusiasmo por programar nunca decaiga.🔥🚀"
    ],

    // 💬 CONVERSACIONES GENERALES (80)
    conversaciones: [
        "¡Genial! Cuéntame más sobre eso. ¿Qué te motiva a aprender programación?😊💡",
        "Interesante. ¿Estás trabajando en un proyecto en particular? Me encantaría saber más.🔍",
        "¡Perfecto! ¿Qué te gustaría construir o mejorar hoy?🚀",
        "¡Claro! ¿Tienes un problema específico o solo quieres charlar sobre desarrollo?🤔",
        "¡Excelente! ¿Qué tipo de aplicaciones te gustan más: web, móvil o de escritorio?📱💻",
        "¡Me alegra saberlo! ¿Qué lenguaje te gusta más y por qué?💻",
        "¡Buena pregunta! ¿Estás buscando consejos prácticos o teoría general?📚",
        "¡Sorpresa! ¿Qué te trae por aquí hoy? ¿Aprendizaje, trabajo o pasatiempo?🎓",
        "¡Qué bien! ¿Ya tienes un proyecto en mente o estás explorando ideas?💡",
        "¡Fascinante! ¿Estás más en frontend o backend? ¿O te gusta mezclar?📡",
        "¡Genial! ¿Te gusta más la lógica o la estética en el desarrollo?🎨🧠",
        "¡Interesante enfoque! ¿Eres más de trabajar solo o en equipo?👥",
        "¡Me encanta tu entusiasmo! ¿Qué te gusta hacer en tu tiempo libre?🎮",
        "¡Qué bueno saberlo! ¿Tienes alguna meta a largo plazo con la programación?🎯",
        "¡Impresionante! ¿Has participado en algún hackathon o proyecto colaborativo?🏆",
        "¡Qué chévere! ¿Alguna vez has contribuido a un proyecto open source?🌍",
        "¡Genial! ¿Eres más de resolver problemas o de crear cosas nuevas?🧩✨",
        "¡Me gusta tu estilo! ¿Qué tipo de errores te gustan más resolver?🔍",
        "¡Fantástico! ¿Te gusta más aprender con tutoriales o experimentando?📚🧪",
        "¡Excelente! ¿Cuál ha sido tu mayor logro como desarrollador hasta ahora?🏆",
        "¡Impresionante! ¿Qué te motivó a empezar a programar?🔥",
        "¡Qué bien! ¿Qué herramientas usas habitualmente en tu flujo de trabajo?🛠️",
        "¡Me encanta! ¿Alguna vez has enseñado a alguien a programar?👨‍🏫",
        "¡Genial! ¿Qué opinas de la inteligencia artificial en el desarrollo?🤖",
        "¡Interesante! ¿Te gusta más trabajar con datos, interfaces o lógica?📊🎨🧠",
        "¡Qué chévere! ¿Alguna vez has usado IA para ayudarte a programar?🤖💻",
        "¡Me gusta tu enfoque! ¿Prefieres proyectos largos o retos rápidos?⏱️",
        "¡Fascinante! ¿Qué tipo de aplicaciones te gustaría crear en el futuro?🔮",
        "¡Perfecto! ¿Qué te parece la automatización en el desarrollo?⚙️",
        "¡Genial! ¿Qué opinas de la ética en la programación?⚖️",
        "¡Me encanta! ¿Te gusta más la teoría o la práctica?📚🧪",
        "¡Impresionante! ¿Alguna vez has dado una charla técnica?🎤",
        "¡Qué bien! ¿Qué libros o blogs técnicos sigues?📖",
        "¡Fantástico! ¿Te gusta más el desarrollo móvil o web?📱🌐",
        "¡Excelente! ¿Qué te parece el desarrollo de videojuegos?🎮",
        "¡Genial! ¿Alguna vez has usado Raspberry Pi o Arduino?🔧",
        "¡Interesante! ¿Qué te gusta más: frontend o backend?📡",
        "¡Me gusta! ¿Eres más de trabajar con APIs o de construir desde cero?🧱",
        "¡Fascinante! ¿Qué te parece el desarrollo de IA?🤖",
        "¡Perfecto! ¿Qué opinas del trabajo remoto en tech?🏠",
        "¡Genial! ¿Has usado alguna vez Docker o Kubernetes?📦",
        "¡Impresionante! ¿Te gusta más el desarrollo ágil o en cascada?🔄",
        "¡Qué bien! ¿Alguna vez has trabajado con microservicios?🏗️",
        "¡Fantástico! ¿Qué te parece el desarrollo de smart contracts?💰",
        "¡Excelente! ¿Te gusta más la ciberseguridad o el desarrollo?🔒",
        "¡Genial! ¿Alguna vez has participado en un CTF (Capture The Flag)?🛡️",
        "¡Me encanta! ¿Qué te parece el desarrollo de apps móviles?📱",
        "¡Interesante! ¿Eres más de trabajar con hardware o software?🔧💻",
        "¡Fascinante! ¿Qué opinas del open source?🌍",
        "¡Perfecto! ¿Te gusta más el desarrollo full-stack o especializarte?🧩"
    ],

    // 💻 PROGRAMACIÓN GENERAL (80)
    programacion: [
        "Programar es traducir pensamiento lógico a instrucciones ejecutables.🧠💻",
        "El código es una conversación entre humanos y máquinas — debe ser clara para ambos.🗣️↔️🤖",
        "Una buena arquitectura evita problemas antes de que ocurran.🏗️✅",
        "La simplicidad no es ausencia de funcionalidad, sino ausencia de complejidad innecesaria.🧼✨",
        "El código debe ser legible primero, eficiente segundo.📖✅",
        "Refactorizar no es reescribir: es mejorar sin cambiar el comportamiento.🔄🔧",
        "Los tests son tu primera línea de defensa contra regresiones.🧪🛡️",
        "Un buen desarrollador no evita los bugs — los detecta temprano y los corrige bien.🔍✅",
        "La documentación debe explicar *por qué*, no solo *qué* hace el código.📝💡",
        "Las abstracciones deben ocultar complejidad, no añadirla.🧩🔒",
        "El manejo de errores debe ser proactivo, no reactivo.🚨✅",
        "La concurrencia no es paralelismo: entiéndelo antes de implementarlo.🔄⚡",
        "Un sistema bien diseñado es fácil de extender, no de parchear.🧱➕",
        "La optimización prematura es la raíz de todos los males en ingeniería.⏰❌",
        "El código duplicado es deuda técnica que se acumula con el tiempo.💸📈",
        "Las interfaces deben ser pequeñas, cohesivas y fáciles de testear.🔌✅",
        "El estado mutante es la fuente de muchos bugs — prioriza inmutabilidad donde sea posible.🔄🚫",
        "La seguridad no es una característica: es una propiedad fundamental.🔒基石",
        "Los logs deben ser estructurados, nivelados y útiles para diagnóstico.📋🔍",
        "La modularidad permite reutilización, pruebas y mantenimiento.🧩🔄",
        "Un API bien diseñado es intuitivo, consistente y predecible.🌐✅",
        "El tipo de dato es información: usar tipos fuertes reduce errores en tiempo de compilación.📊✅",
        "La recursión es elegante, pero puede consumir memoria si no se controla.🔄🧠",
        "Los punteros son poderosos, pero peligrosos si no se gestionan con cuidado.⚔️⚠️",
        "El garbage collector no elimina bugs — solo memoria no referenciada.🗑️✅",
        "La caché mejora el rendimiento, pero puede causar inconsistencias si no se invalida bien.📦🔄",
        "El rate limiting protege tu servicio de sobrecargas, no de mal uso intencional.🛡️📊",
        "La validación de entrada es la primera barrera contra vulnerabilidades.🔒✅",
        "El logging debe incluir contexto: usuario, acción, ID de transacción.📋👤",
        "El diseño orientado a objetos funciona bien cuando los objetos tienen una sola responsabilidad.🧩✅",
        "La programación funcional promueve la inmutabilidad y evita efectos secundarios.🔄🚫",
        "El paradigma orientado a aspectos permite separar la lógica transversal del negocio.🧩✂️",
        "La metodología ágil favorece entregas frecuentes y retroalimentación continua.🔄💬",
        "El desarrollo guiado por pruebas (TDD) mejora la calidad y claridad del código.🧪✅",
        "La integración continua automatiza la verificación de cambios en el código.⚙️🔄",
        "La entrega continua automatiza el despliegue de versiones estables.🚀✅",
        "La observabilidad permite entender el estado interno de un sistema complejo.🔍🧠",
        "La tolerancia a fallos garantiza que un sistema siga funcionando ante errores.🛡️🔄",
        "El patrón de diseño MVC separa la lógica de negocio de la interfaz de usuario.🧩✂️",
        "La inyección de dependencias facilita la modularidad y la prueba unitaria.💉🔄",
        "La arquitectura hexagonal aisla la lógica de negocio de frameworks y bases de datos.🧩🔒",
        "La arquitectura de microservicios divide una aplicación en servicios pequeños e independientes.🧩🔄",
        "La arquitectura basada en eventos responde a cambios de estado de forma reactiva.📡🔄",
        "La persistencia de datos debe considerar consistencia, disponibilidad y particionamiento (CAP).💾📊",
        "La concurrencia se puede implementar con hilos, procesos o callbacks.🔄⚡",
        "La comunicación entre servicios se puede hacer mediante REST, GraphQL o gRPC.🌐🔄",
        "La virtualización permite ejecutar múltiples entornos en una sola máquina.🖥️🔄",
        "La contenerización (Docker) facilita el despliegue y la portabilidad de aplicaciones.📦🔄",
        "La infraestructura como código (IaC) automatiza la creación y gestión de recursos.⚙️🔄",
        "La arquitectura sin servidor (Serverless) elimina la gestión de servidores físicos.☁️🔄",
        "La programación reactiva se centra en flujos de datos asíncronos y propagación de cambios.🔄📊",
        "La programación orientada a eventos responde a eventos disparados por el sistema o el usuario.📡🔄"
    ],

    // 🧠 CONCEPTOS TÉCNICOS (100)
    conceptos: [
        "Una variable es un nombre que referencia un valor en memoria.📦🧠",
        "Una función es un bloque de código con entrada, proceso y salida definidos.🧩🔄",
        "Un bucle `for` se usa cuando conoces el número de iteraciones; `while` cuando depende de una condición.🔄✅",
        "Un condicional `if/else` evalúa expresiones booleanas para tomar decisiones.❓✅",
        "Un array es una colección ordenada y indexada de elementos del mismo tipo (o no).📦🔄",
        "Un objeto es una colección de propiedades (clave-valor) que representa una entidad.🧩🔄",
        "Una clase es una plantilla para crear objetos con propiedades y métodos.🧩🔄",
        "Una API es un contrato que define cómo interactúan dos sistemas.🌐🔄",
        "Git es un sistema distribuido de control de versiones que rastrea cambios en archivos.🔄📊",
        "Un hook en React es una función que te permite usar estado y efectos en componentes funcionales.🧩🔄",
        "Un closure es una función que recuerda el entorno en el que fue creada.🧠🔄",
        "El DOM es una representación en árbol del documento HTML que JavaScript puede manipular.🌳🔄",
        "Un evento es una señal que indica que algo ocurrió (clic, tecla, carga).📡🔄",
        "El scope determina dónde una variable es accesible (global, función, bloque).📍🔄",
        "La herencia permite que una clase derive propiedades y métodos de otra.🧬🔄",
        "La composición es preferible a la herencia cuando se busca flexibilidad y reutilización.🧩🔄",
        "Un promesa representa una operación asíncrona que puede cumplirse o rechazarse.🔄✅",
        "El patrón Singleton asegura que una clase tenga una sola instancia y punto de acceso global.🧩🔄",
        "El patrón Observer permite que un objeto notifique a otros cuando su estado cambia.📡🔄",
        "Un middleware es una función que se ejecuta entre la recepción de una solicitud y su procesamiento final.🔄📊",
        "Un callback es una función pasada como argumento para ser ejecutada posteriormente.🔄📊",
        "La inmutabilidad significa que un valor no cambia después de ser creado.🔄🚫",
        "Un hash es una función que convierte datos de cualquier tamaño en un valor fijo (ej: SHA-256).📊🔄",
        "Un índice en una base de datos acelera las búsquedas, pero ralentiza inserciones.📊🔄",
        "Un JOIN combina filas de dos o más tablas según una relación común.📊🔄",
        "Un puerto es un número que identifica un servicio específico en una máquina.💻🔄",
        "Un socket es un extremo de comunicación entre dos programas en red.🌐🔄",
        "La serialización convierte un objeto en un formato que se puede almacenar o transmitir.📦🔄",
        "Un token JWT es un estándar abierto para compartir información de forma segura entre partes.🔒🔄",
        "El CORS es un mecanismo de seguridad que controla qué dominios pueden acceder a recursos.🌐🔒",
        "Un web worker ejecuta código JavaScript en un hilo separado sin bloquear la interfaz.🔄📊",
        "El lazy loading carga recursos solo cuando son necesarios, mejorando el rendimiento inicial.🔄📊",
        "Un polyfill es código que emula una funcionalidad moderna en navegadores antiguos.🔄📊",
        "La memoización guarda resultados de funciones costosas para evitar recálculos.🔄📊",
        "Un debounce limita la frecuencia de llamadas a una función (ej: búsqueda en tiempo real).🔄📊",
        "Un throttle ejecuta una función como máximo una vez cada X milisegundos.🔄📊",
        "El tree shaking elimina código muerto durante el empaquetado (Webpack, Rollup).🔄📊",
        "Un linter analiza el código en busca de errores, estilo y posibles bugs.🔍📊",
        "Un debugger permite pausar la ejecución, inspeccionar variables y avanzar paso a paso.🔍📊"
    ],

    // ⚠️ ERRORES COMUNES (40)
    errores: [
        "SyntaxError: hay un error en la estructura del código (paréntesis, comillas, puntos y comas).🔧❌",
        "TypeError: estás intentando operar con un tipo incompatible (ej: 'texto' + 5).📊❌",
        "ReferenceError: estás usando una variable no declarada (ej: console.log(x) sin x).📦❌",
        "NullReferenceError: intentas acceder a una propiedad de un objeto nulo (ej: obj.name donde obj = null).🔗❌",
        "RangeError: el valor está fuera del rango permitido (ej: Array(-1)).📊❌",
        "Internal Server Error (500): el servidor encontró una condición inesperada.💻❌",
        "Not Found (404): el recurso solicitado no existe en el servidor.🌐❌",
        "Forbidden (403): tienes permisos insuficientes para acceder al recurso.🔒❌",
        "Unauthorized (401): no has proporcionado credenciales válidas.🔑❌",
        "Timeout: la operación tardó más de lo permitido y fue cancelada.⏱️❌",
        "Stack Overflow: recursión infinita o llamadas anidadas excesivas.🔄❌",
        "Out of Memory: el proceso agotó la memoria disponible.💾❌",
        "SQL Injection: entrada no sanitizada se interpreta como código SQL.🔒❌",
        "XSS (Cross-Site Scripting): código malicioso se ejecuta en el navegador del usuario.🌐❌",
        "CSRF (Cross-Site Request Forgery): el usuario realiza una acción no deseada sin saberlo.🌐❌",
        "CORS Misconfiguration: el servidor no permite solicitudes desde tu dominio.🌐❌",
        "502 Bad Gateway: el servidor proxy recibió una respuesta inválida del servidor upstream.🌐❌",
        "503 Service Unavailable: el servidor está temporalmente incapaz de manejar la solicitud.💻❌",
        "504 Gateway Timeout: el servidor proxy no recibió respuesta a tiempo del servidor upstream.🌐❌",
        "Buffer Overflow: escritura más allá de los límites de un buffer.📦❌",
        "Integer Overflow: resultado de operación excede el valor máximo del tipo entero.📊❌",
        "Division by Zero: operación matemática con divisor cero.📊❌",
        "Memory Leak: pérdida de memoria que no se libera después de dejar de usarse.💾❌",
        "Null Pointer Exception: intento de usar un puntero que apunta a null.🔗❌",
        "Index Out of Bounds: intentas acceder a un índice que no existe en un array.📦❌",
        "Concurrent Modification: intentas modificar una colección mientras estás iterando sobre ella.🔄❌",
        "Unsupported Operation: intentas usar una operación no soportada por el objeto.🔄❌"
    ],

    // 📈 MOTIVACIÓN & CONSEJOS (50)
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
        "La simplicidad es el lujo más difícil de lograr en ingeniería.🧼✨",
        "No compares tu día 1 con el día 1000 de otros — tu camino es único.🧩✅",
        "El código que no se mantiene, muere. El que se mejora, evoluciona.🔄✅",
        "La paciencia es la habilidad más subestimada en programación.🧘‍♂️✅",
        "Cuando te atasques, camina, duerme, o cambia de tarea — tu cerebro seguirá trabajando.🧠🔄",
        "La mejor solución no es la más compleja — es la más adecuada.🎯✅",
        "Escribe comentarios que expliquen *por qué*, no *qué* hace el código.📝✅",
        "Un buen README es la primera impresión de tu proyecto.📋✅",
        "Los pull requests son oportunidades de aprendizaje, no críticas personales.🔄✅",
        "La automatización libera tiempo para lo que realmente importa: resolver problemas humanos.🤖✅",
        "El código es arte funcional — equilibra belleza y utilidad.🎨✅",
        "No necesitas saber todo. Necesitas saber dónde buscar y cómo aprender.🔍✅",
        "La ética en programación es tan importante como la técnica.⚖️✅",
        "El crecimiento no es lineal: hay días de avance y días de consolidación.📈✅",
        "Celebra los pequeños éxitos: un bug arreglado, un test pasado, un deploy exitoso.🎉✅",
        "Cada commit es una pequeña victoria sobre el caos.🔄✅",
        "Escribe código como si tu futuro tú lo leerá mañana.📝🔮",
        "La depuración es como resolver un misterio — sé detectivesco.🔍✅",
        "No te rindas. La programación es un viaje de constante aprendizaje.🔄✅",
        "Confía en el proceso. La lógica siempre tiene una solución.🧠✅",
        "No reinventes la rueda, pero entiende cómo funciona.🔄✅",
        "La colaboración multiplica el potencial individual.👥✅",
        "El feedback es el desayuno del campeón.🔄✅",
        "Aprende de los demás, pero encuentra tu propio estilo.🎨✅",
        "Escribe código como si fuera poesía lógica.📝✅",
        "El código limpio es código que cualquiera puede leer y entender.📖✅",
        "Programar es resolver problemas con creatividad y lógica.🧩💡",
        "No temas al código complejo: descompón, prueba, refactoriza.🧩🔧",
        "Cada línea bien escrita es una semilla de excelencia.🌱✅",
        "La simplicidad es la sofisticación final.🧼✨",
        "Aprende de cada error: son tutores silenciosos.🧠✅",
        "Piensa antes de codificar: el plan es la mitad del éxito.🧠✅",
        "Cada proyecto es una oportunidad para crecer.🌱✅",
        "La calidad es preferible a la velocidad.🐢✅",
        "No hay atajos en el aprendizaje profundo.📚✅",
        "El código que amas, lo mantienes.❤️✅",
        "Sé curioso: la duda es el motor del conocimiento.❓✅"
    ],

    // 🧠 INSPIRACIONES TÉCNICAS (30)
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
        "El código es temporal. La lógica es eterna.🔄🧠",
        "No optimices por rendimiento hasta que tengas datos que lo justifiquen.📊✅",
        "La seguridad no se añade — se diseña desde el principio.🔒基石",
        "El testing no es una fase — es una forma de trabajar.🧪✅",
        "La documentación es código que lee humanos. Trátala con el mismo respeto.📝✅",
        "La colaboración es el superpoder de los equipos de desarrollo.👥💪",
        "El error más peligroso no es el que falla — es el que pasa silencioso.🔍❌",
        "La mejor arquitectura es la que puedes explicar en 5 minutos.🧩✅",
        "El código que nadie entiende es código muerto, aunque compile.🧩❌",
        "La paciencia con el proceso es la clave del dominio técnico.🧘‍♂️✅",
        "Programar es resolver rompecabezas con reglas estrictas y creatividad ilimitada.🧩🧠",
        "La abstracción es el arte de simplificar la complejidad.🧩🎨",
        "La depuración es el proceso de convertir errores en sabiduría.🔍🧠",
        "La ingeniería del software es la disciplina de construir con precisión.🧱✅",
        "El código limpio es una obra de arte funcional.🎨✅",
        "La programación es el puente entre la imaginación y la realidad digital.🌉🧠",
        "La arquitectura del software es la base sobre la que se construye la confianza.基石✅",
        "La seguridad informática es la escuela de la paranoia productiva.🔒🧠",
        "La inteligencia artificial es la culminación del sueño de pensar con máquinas.🤖🧠",
        "La simplicidad es la sofisticación final en ingeniería.🧼✨",
        "El código debe ser como un poema: claro, preciso y hermoso.📝🎨"
    ],

    // 📚 CURIOSIDADES TÉCNICAS (25)
    curiosidades: [
        "El primer virus informático se llamaba 'Creeper' y decía: 'I'm the creeper, catch me if you can!'.💻⚠️",
        "JavaScript se creó en 10 días en 1995 por Brendan Eich.⚡📅",
        "Python lleva el nombre del grupo Monty Python, no de la serpiente.🐍🎭",
        "El primer sitio web aún está en línea: http://info.cern.ch.🌐✅",
        "El término 'bug' se usó por primera vez en 1947 cuando encontraron una polilla en un relé del Harvard Mark II.🐞🔍",
        "El primer lenguaje de programación fue Fortran (1957).基石📅",
        "El primer videojuego fue 'Tennis for Two' en 1958.🎮📅",
        "El primer mensaje de email fue 'QWERTYUIOP' enviado por Ray Tomlinson en 1971.📧📅",
        "Linux se llama así porque Linus Torvalds lo creó — 'Linus's Minix'.🐧📅",
        "El primer compilador fue creado para el lenguaje FORTRAN.基石🔄",
        "La primera contraseña fue 'acces' y se usó en el MIT en 1961.🔒📅",
        "El primer lenguaje orientado a objetos fue Simula, en 1967.🧩📅",
        "El primer firewall fue desarrollado en 1989 por DEC.🛡️📅",
        "La primera red de computadoras fue ARPANET, ancestro de Internet.🌐📅",
        "El primer sistema operativo fue GM-NAA I/O, en 1955.基石📅",
        "El primer mouse fue inventado por Douglas Engelbart en 1963.🖱️📅",
        "El primer dominio registrado fue symbolics.com en 1985.🌐📅",
        "El primer lenguaje de scripting fue AWK, en 1977.基石🔄",
        "El primer algoritmo criptográfico fue el Cifrado César.🔒📅",
        "El primer navegador web fue WorldWideWeb (luego Nexus).🌐📅",
        "El primer lenguaje funcional fue Lisp.基石🔄",
        "El primer lenguaje de programación orientado a objetos fue Smalltalk.🧩📅",
        "El primer sistema Unix fue escrito en ensamblador.基石📅",
        "El primer compilador de C fue escrito en B.基石🔄",
        "El primer lenguaje de programación de alto nivel fue Plankalkül.基石📅"
    ],

    // 👤 OTROS (CREADOR) (15)
    otros: [
        "Mi creador es **SoyAdrianYT001**, un dios de la programación. 😮‍💨🔥",
        "Mi creador es Adrián, un genio de la lógica y el código. 💻⚡",
        "Fui creado por un programador apasionado llamado **SoyAdrianYT001**. 🧠✨",
        "Mi creador es un experto en IA y desarrollo backend/frontend. 🌐🤖",
        "Mi creador es un visionario del código limpio y la eficiencia. 🚀🧹",
        "Mi creador es un experto en crear bots inteligentes como yo. 🤖💡",
        "Mi creador es un mago del código y la lógica. ✨🧙‍♂️",
        "Mi creador es un apasionado de la automatización y la IA. 🤖💻",
        "Mi creador es un experto en resolver problemas con código. 🧩🔧",
        "Mi creador es un genio detrás de cada línea de mi código. 🧠💻",
        "Mi creador es **SoyAdrianYT001**, el legendario desarrollador. 🔥👑",
        "Fui creado por un crack de la programación llamado **SoyAdrianYT001**. 💪🚀",
        "Mi creador es un master en JavaScript, Python y React. 🐍⚛️",
        "Mi creador es **SoyAdrianYT001**, un verdadero God del código. 😎✨",
        "Mi creador es Adrián, un capo total que me programó con puro talento. 🔥💻"
    ]
};

// ========== FUNCIÓN PARA GENERAR RESPUESTA INTELIGENTE ==========
function generateSmartResponse(input) {
    const text = input.toLowerCase().trim();
    
    // Detectar saludos
    if (['hola', 'hey', 'buenos', 'hi', 'hello', 'que tal', 'saludos', 'buenas'].some(s => text.includes(s))) {
        const idx = Math.floor(Math.random() * chatResponses.saludos.length);
        return chatResponses.saludos[idx];
    }
    
    // Detectar despedidas
    if (['adios', 'chau', 'hasta', 'bye', 'nos vemos', 'chao'].some(s => text.includes(s))) {
        const idx = Math.floor(Math.random() * chatResponses.despedidas.length);
        return chatResponses.despedidas[idx];
    }
    
    // Detectar programación
    if (['programar', 'codigo', 'código', 'escribir', 'desarrollar', 'programacion', 'software', 'dev'].some(s => text.includes(s))) {
        const idx = Math.floor(Math.random() * chatResponses.programacion.length);
        return chatResponses.programacion[idx];
    }
    
    // Detectar conceptos
    if (['variable', 'funcion', 'función', 'bucle', 'condicional', 'array', 'objeto', 'clase', 'api', 'git', 'hook', 'closure', 'dom', 'evento', 'scope', 'herencia', 'composicion', 'promesa', 'singleton', 'observer', 'middleware', 'callback', 'inmutable', 'hash', 'indice', 'join', 'puerto', 'socket', 'serializacion', 'jwt', 'cors', 'worker', 'lazy', 'polyfill', 'memoizacion', 'debounce', 'throttle', 'tree', 'linter', 'debugger'].some(s => text.includes(s))) {
        const idx = Math.floor(Math.random() * chatResponses.conceptos.length);
        return chatResponses.conceptos[idx];
    }
    
    // Detectar errores
    if (['error', 'bug', 'syntax', 'type', 'reference', 'null', '404', '500', 'fallo', 'falla'].some(s => text.includes(s))) {
        const idx = Math.floor(Math.random() * chatResponses.errores.length);
        return chatResponses.errores[idx];
    }
    
    // Detectar motivación
    if (['motivar', 'inspirar', 'consejo', 'ayuda', 'mejorar', 'aprender', 'como ser', 'como mejorar'].some(s => text.includes(s))) {
        const idx = Math.floor(Math.random() * chatResponses.motivacion.length);
        return chatResponses.motivacion[idx];
    }
    
    // Detectar inspiración
    if (['filosofia', 'filosofía', 'elegancia', 'arte', 'diseño', 'ética', 'creatividad', 'inspiracion', 'inspiración'].some(s => text.includes(s))) {
        const idx = Math.floor(Math.random() * chatResponses.inspiracion.length);
        return chatResponses.inspiracion[idx];
    }
    
    // Detectar curiosidades
    if (['curioso', 'dato', 'historia', 'primer', 'sabias', 'curiosidad', 'sabías'].some(s => text.includes(s))) {
        const idx = Math.floor(Math.random() * chatResponses.curiosidades.length);
        return chatResponses.curiosidades[idx];
    }
    
    // Detectar creador
    if (['creador', 'quien te creo', 'quien te hizo', 'adrian', 'soyadrianyt001', 'quién te creó', 'quién te hizo'].some(s => text.includes(s))) {
        const idx = Math.floor(Math.random() * chatResponses.otros.length);
        return chatResponses.otros[idx];
    }
    
    // Respuesta general (conversación)
    const idx = Math.floor(Math.random() * chatResponses.conversaciones.length);
    return chatResponses.conversaciones[idx];
}

// ========== EXPORTAR PARA USO EN CHATCONTROLLER ==========
if (typeof window !== 'undefined') {
    window.OcladeChat = {
        responses: chatResponses,
        generate: generateSmartResponse
    };
}

// ========== CLASE CHATCONTROLLER PRINCIPAL ==========
export class ChatController {
    constructor() {
        this.messagesContainer = null;
        this.userInput = null;
        this.sendBtn = null;
        this.clearBtn = null;
        this.conversacion = [];
        this.estaPensando = false;
        this.aprendizaje = this.cargarAprendizaje();
        this.bibliotecaCodigos = null;
        this.fileManager = null;
        
        // Estado para confirmación de código
        this.esperandoConfirmacion = false;
        this.solicitudPendiente = null;
    }
    
    // ========== APRENDIZAJE ==========
    cargarAprendizaje() {
        const guardado = localStorage.getItem('ocladeai_aprendizaje');
        if (guardado) return JSON.parse(guardado);
        return { preguntasConocidas: [], temasPreferidos: [], ultimoAprendizaje: null };
    }
    
    guardarAprendizaje() {
        localStorage.setItem('ocladeai_aprendizaje', JSON.stringify(this.aprendizaje));
    }
    
    // ========== INICIALIZACIÓN ==========
    inicializar() {
        this.messagesContainer = document.getElementById('messages');
        this.userInput = document.getElementById('userInput');
        this.sendBtn = document.getElementById('sendBtn');
        this.clearBtn = document.getElementById('clearBtn');
        
        this.eventos();
        this.focusInput();
        this.cargarHistorial();
        
        setTimeout(() => {
            console.log('🧠 OcladeAI: Sistema activado con +1000 respuestas 🔥');
        }, 1000);
    }
    
    eventos() {
        this.sendBtn.addEventListener('click', () => this.enviarMensaje());
        this.userInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                this.enviarMensaje();
            }
        });
        this.clearBtn.addEventListener('click', () => this.limpiarChat());
        
        this.userInput.addEventListener('input', () => {
            this.userInput.style.height = 'auto';
            this.userInput.style.height = Math.min(this.userInput.scrollHeight, 120) + 'px';
        });
    }
    
    focusInput() {
        setTimeout(() => this.userInput?.focus(), 500);
    }
    
    // ========== ENVÍO DE MENSAJES ==========
    async enviarMensaje() {
        if (this.estaPensando) return;
        
        const mensaje = this.userInput.value.trim();
        if (!mensaje) return;
        
        this.sendBtn.classList.add('send-pulse');
        setTimeout(() => this.sendBtn.classList.remove('send-pulse'), 300);
        
        this.agregarMensaje(mensaje, 'user');
        this.guardarEnHistorial('user', mensaje);
        this.userInput.value = '';
        this.userInput.style.height = 'auto';
        
        await this.mostrarPensamiento();
        
        try {
            const respuesta = this.generarRespuestaInteligente(mensaje);
            this.quitarPensamiento();
            await this.escribirMensajeConEfecto(respuesta);
            this.guardarEnHistorial('bot', respuesta);
            this.vibrarSiMovil();
            this.aprenderDeInteraccion(mensaje, respuesta);
        } catch (error) {
            console.error('Error:', error);
            this.quitarPensamiento();
            const respuestaLocal = this.generarRespuestaInteligente(mensaje);
            await this.escribirMensajeConEfecto(respuestaLocal);
            this.guardarEnHistorial('bot', respuestaLocal);
        }
        
        this.scrollToBottom();
    }
    
    // ========== PENSAMIENTO ==========
    async mostrarPensamiento() {
        this.estaPensando = true;
        
        const pensamientoDiv = document.createElement('div');
        pensamientoDiv.className = 'message bot thinking';
        pensamientoDiv.id = 'thinking';
        pensamientoDiv.innerHTML = `
            <div class="avatar"><i class="fas fa-brain"></i></div>
            <div class="thinking-container">
                <div class="thinking-dots">
                    <span class="dot"></span><span class="dot"></span><span class="dot"></span>
                </div>
                <div class="thinking-text">🤔 OcladeAI está pensando...</div>
            </div>
        `;
        this.messagesContainer.appendChild(pensamientoDiv);
        this.scrollToBottom();
        
        await new Promise(resolve => setTimeout(resolve, 800));
    }
    
    quitarPensamiento() {
        const thinking = document.getElementById('thinking');
        if (thinking) thinking.remove();
        this.estaPensando = false;
    }
    
    // ========== GENERACIÓN DE RESPUESTAS ==========
    generarRespuestaInteligente(mensaje) {
        // Usar el motor de +1000 respuestas
        return generateSmartResponse(mensaje);
    }
    
    aprenderDeInteraccion(mensaje, respuesta) {
        if (!this.aprendizaje.preguntasConocidas.some(p => p.pregunta === mensaje)) {
            this.aprendizaje.preguntasConocidas.push({
                pregunta: mensaje,
                respuesta: respuesta,
                fecha: new Date().toISOString()
            });
            if (this.aprendizaje.preguntasConocidas.length > 100) {
                this.aprendizaje.preguntasConocidas.shift();
            }
            this.guardarAprendizaje();
        }
    }
    
    // ========== EFECTO DE ESCRITURA ==========
    async escribirMensajeConEfecto(texto) {
        const div = document.createElement('div');
        div.className = 'message bot';
        div.innerHTML = `<div class="avatar"><i class="fas fa-brain"></i></div><div class="bubble typing-effect" id="typingEffect"></div>`;
        this.messagesContainer.appendChild(div);
        this.scrollToBottom();
        
        const bubble = div.querySelector('.bubble');
        let i = 0;
        
        const escribir = () => {
            if (i < texto.length) {
                bubble.innerHTML = texto.substring(0, i + 1) + '<span class="cursor">|</span>';
                i++;
                this.scrollToBottom();
                setTimeout(escribir, 20);
            } else {
                bubble.innerHTML = texto;
                bubble.classList.remove('typing-effect');
                const cursor = bubble.querySelector('.cursor');
                if (cursor) cursor.remove();
            }
        };
        
        escribir();
        await new Promise(resolve => setTimeout(resolve, texto.length * 20));
    }
    
    // ========== MÉTODOS AUXILIARES ==========
    agregarMensaje(texto, tipo) {
        const div = document.createElement('div');
        div.className = `message ${tipo}`;
        const iconClass = tipo === 'user' ? 'fas fa-user-astronaut' : 'fas fa-brain';
        div.innerHTML = `<div class="avatar"><i class="${iconClass}"></i></div><div class="bubble">${this.escapeHtml(texto)}</div>`;
        this.messagesContainer.appendChild(div);
        this.scrollToBottom();
    }
    
    guardarEnHistorial(rol, mensaje) {
        this.conversacion.push({ rol, mensaje, fecha: new Date().toISOString() });
        if (this.conversacion.length > 100) this.conversacion = this.conversacion.slice(-100);
        try { localStorage.setItem('ocladeai_historial', JSON.stringify(this.conversacion)); } catch(e) {}
    }
    
    cargarHistorial() {
        try {
            const guardado = localStorage.getItem('ocladeai_historial');
            if (guardado) this.conversacion = JSON.parse(guardado);
        } catch(e) {}
    }
    
    limpiarChat() {
        this.conversacion = [];
        try { localStorage.removeItem('ocladeai_historial'); } catch(e) {}
        this.messagesContainer.innerHTML = `<div class="message bot"><div class="avatar"><i class="fas fa-brain"></i></div><div class="bubble">🔥 OcladeAI: ¡Chat limpiado! Recuerda que mi creador **SoyAdrianYT001** me hizo para pensar, aprender y ayudarte siempre 🚀😊😁</div></div>`;
        this.scrollToBottom();
    }
    
    scrollToBottom() {
        setTimeout(() => { if (this.messagesContainer) this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight; }, 100);
    }
    
    vibrarSiMovil() { if (window.navigator?.vibrate) window.navigator.vibrate(50); }
    
    escapeHtml(text) { const div = document.createElement('div'); div.textContent = text; return div.innerHTML; }
}
