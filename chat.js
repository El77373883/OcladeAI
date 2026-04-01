// chat.js - Controlador principal de OcladeAI con +1000 respuestas
import { bibliotecaCodigos } from './codigos.js';
import { buscarInternet, leerPagina, necesitaBusqueda, buscarYResumir } from './websearch.js';
import { memoriaIA } from './memoria.js';
import { generadorCodigo } from './generador-codigo.js';
import { FileManager } from './file-manager.js';

// ========== BIBLIOTECA DE RESPUESTAS (+1000 FRASES CON EMOJIS) ==========
const chatResponses = {
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
        "¡Genial! ¿Alguna vez has participado en un CTF?🛡️",
        "¡Me encanta! ¿Qué te parece el desarrollo de apps móviles?📱",
        "¡Interesante! ¿Eres más de trabajar con hardware o software?🔧💻",
        "¡Fascinante! ¿Qué opinas del open source?🌍",
        "¡Perfecto! ¿Te gusta más el desarrollo full-stack o especializarte?🧩"
    ],
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
        "El estado mutante es la fuente de muchos bugs — prioriza inmutabilidad.🔄🚫",
        "La seguridad no es una característica: es una propiedad fundamental.🔒基石",
        "Los logs deben ser estructurados, nivelados y útiles para diagnóstico.📋🔍",
        "La modularidad permite reutilización, pruebas y mantenimiento.🧩🔄",
        "Un API bien diseñado es intuitivo, consistente y predecible.🌐✅",
        "El tipo de dato es información: usar tipos fuertes reduce errores.📊✅",
        "La recursión es elegante, pero puede consumir memoria si no se controla.🔄🧠",
        "Los punteros son poderosos, pero peligrosos si no se gestionan con cuidado.⚔️⚠️",
        "El garbage collector no elimina bugs — solo memoria no referenciada.🗑️✅",
        "La caché mejora el rendimiento, pero puede causar inconsistencias.📦🔄",
        "El rate limiting protege tu servicio de sobrecargas.🛡️📊",
        "La validación de entrada es la primera barrera contra vulnerabilidades.🔒✅",
        "El logging debe incluir contexto: usuario, acción, ID de transacción.📋👤",
        "El diseño orientado a objetos funciona bien con una sola responsabilidad.🧩✅",
        "La programación funcional promueve la inmutabilidad.🔄🚫",
        "La metodología ágil favorece entregas frecuentes y retroalimentación continua.🔄💬",
        "El desarrollo guiado por pruebas (TDD) mejora la calidad del código.🧪✅",
        "La integración continua automatiza la verificación de cambios.⚙️🔄",
        "La entrega continua automatiza el despliegue de versiones estables.🚀✅",
        "La observabilidad permite entender el estado interno de un sistema complejo.🔍🧠",
        "La tolerancia a fallos garantiza que un sistema siga funcionando ante errores.🛡️🔄",
        "El patrón MVC separa la lógica de negocio de la interfaz de usuario.🧩✂️",
        "La inyección de dependencias facilita la modularidad y la prueba unitaria.💉🔄",
        "La arquitectura hexagonal aisla la lógica de negocio de frameworks.🧩🔒",
        "Los microservicios dividen una aplicación en servicios pequeños e independientes.🧩🔄",
        "La arquitectura basada en eventos responde a cambios de estado de forma reactiva.📡🔄",
        "La persistencia de datos debe considerar consistencia, disponibilidad y particionamiento.💾📊",
        "La concurrencia se puede implementar con hilos, procesos o callbacks.🔄⚡",
        "La comunicación entre servicios puede ser REST, GraphQL o gRPC.🌐🔄",
        "La virtualización permite ejecutar múltiples entornos en una sola máquina.🖥️🔄",
        "Docker facilita el despliegue y la portabilidad de aplicaciones.📦🔄",
        "La infraestructura como código (IaC) automatiza la creación de recursos.⚙️🔄",
        "Serverless elimina la gestión de servidores físicos.☁️🔄",
        "La programación reactiva se centra en flujos de datos asíncronos.🔄📊"
    ],
    conceptos: [
        "Una variable es un nombre que referencia un valor en memoria.📦🧠",
        "Una función es un bloque de código con entrada, proceso y salida definidos.🧩🔄",
        "Un bucle `for` se usa cuando conoces el número de iteraciones; `while` cuando depende de una condición.🔄✅",
        "Un condicional `if/else` evalúa expresiones booleanas para tomar decisiones.❓✅",
        "Un array es una colección ordenada y indexada de elementos.📦🔄",
        "Un objeto es una colección de propiedades (clave-valor) que representa una entidad.🧩🔄",
        "Una clase es una plantilla para crear objetos con propiedades y métodos.🧩🔄",
        "Una API es un contrato que define cómo interactúan dos sistemas.🌐🔄",
        "Git es un sistema distribuido de control de versiones.🔄📊",
        "Un hook en React permite usar estado y efectos en componentes funcionales.🧩🔄",
        "Un closure es una función que recuerda el entorno en el que fue creada.🧠🔄",
        "El DOM es una representación en árbol del documento HTML.🌳🔄",
        "Un evento es una señal que indica que algo ocurrió (clic, tecla, carga).📡🔄",
        "El scope determina dónde una variable es accesible (global, función, bloque).📍🔄",
        "La herencia permite que una clase derive propiedades de otra.🧬🔄",
        "La composición es preferible a la herencia para flexibilidad.🧩🔄",
        "Una promesa representa una operación asíncrona que puede cumplirse o rechazarse.🔄✅",
        "El patrón Singleton asegura una sola instancia de una clase.🧩🔄",
        "El patrón Observer permite notificar cambios de estado a otros objetos.📡🔄",
        "Un middleware se ejecuta entre la solicitud y el procesamiento final.🔄📊",
        "Un callback es una función pasada como argumento para ejecutarse después.🔄📊",
        "La inmutabilidad significa que un valor no cambia después de ser creado.🔄🚫",
        "Un hash convierte datos en un valor fijo (ej: SHA-256).📊🔄",
        "Un índice en BD acelera búsquedas, pero ralentiza inserciones.📊🔄",
        "Un JOIN combina filas de dos o más tablas según una relación común.📊🔄",
        "Un puerto identifica un servicio específico en una máquina.💻🔄",
        "Un socket es un extremo de comunicación entre dos programas en red.🌐🔄",
        "La serialización convierte un objeto en formato almacenable o transmisible.📦🔄",
        "Un token JWT comparte información de forma segura entre partes.🔒🔄",
        "El CORS controla qué dominios pueden acceder a recursos.🌐🔒",
        "Un web worker ejecuta código en un hilo separado sin bloquear la interfaz.🔄📊",
        "El lazy loading carga recursos solo cuando son necesarios.🔄📊",
        "Un polyfill emula funcionalidad moderna en navegadores antiguos.🔄📊",
        "La memoización guarda resultados de funciones costosas.🔄📊",
        "Un debounce limita la frecuencia de llamadas a una función.🔄📊",
        "Un throttle ejecuta una función como máximo cada X milisegundos.🔄📊",
        "El tree shaking elimina código muerto durante el empaquetado.🔄📊",
        "Un linter analiza el código en busca de errores y estilo.🔍📊",
        "Un debugger permite pausar la ejecución e inspeccionar variables.🔍📊",
        "El patrón Factory encapsula la creación de objetos.🧩🔄",
        "El patrón Strategy define una familia de algoritmos intercambiables.🧩🔄",
        "El patrón Decorator añade responsabilidades a objetos dinámicamente.🧩🔄",
        "El patrón Adapter permite que interfaces incompatibles trabajen juntas.🧩🔄",
        "El patrón Facade proporciona una interfaz unificada a un subsistema.🧩🔄",
        "El patrón Command encapsula una solicitud como un objeto.🧩🔄",
        "El patrón Template Method define el esqueleto de un algoritmo.🧩🔄",
        "El patrón Iterator accede secuencialmente a elementos de un objeto.🧩🔄",
        "El patrón State altera el comportamiento cuando el estado cambia.🧩🔄",
        "El patrón Proxy controla el acceso a otro objeto.🧩🔄",
        "El patrón Builder separa la construcción de un objeto complejo.🧩🔄"
    ],
    errores: [
        "SyntaxError: error en la estructura del código (paréntesis, comillas, puntos y comas).🔧❌",
        "TypeError: estás operando con un tipo incompatible (ej: 'texto' + 5).📊❌",
        "ReferenceError: estás usando una variable no declarada.📦❌",
        "NullReferenceError: intentas acceder a propiedad de un objeto nulo.🔗❌",
        "RangeError: el valor está fuera del rango permitido (ej: Array(-1)).📊❌",
        "Internal Server Error (500): el servidor encontró una condición inesperada.💻❌",
        "Not Found (404): el recurso solicitado no existe.🌐❌",
        "Forbidden (403): permisos insuficientes para acceder al recurso.🔒❌",
        "Unauthorized (401): no has proporcionado credenciales válidas.🔑❌",
        "Timeout: la operación tardó más de lo permitido y fue cancelada.⏱️❌",
        "Stack Overflow: recursión infinita o llamadas anidadas excesivas.🔄❌",
        "Out of Memory: el proceso agotó la memoria disponible.💾❌",
        "SQL Injection: entrada no sanitizada se interpreta como código SQL.🔒❌",
        "XSS: código malicioso se ejecuta en el navegador del usuario.🌐❌",
        "CSRF: el usuario realiza una acción no deseada sin saberlo.🌐❌",
        "CORS Misconfiguration: el servidor no permite solicitudes desde tu dominio.🌐❌",
        "502 Bad Gateway: el servidor proxy recibió respuesta inválida.🌐❌",
        "503 Service Unavailable: el servidor está temporalmente incapaz.💻❌",
        "504 Gateway Timeout: el servidor proxy no recibió respuesta a tiempo.🌐❌",
        "Buffer Overflow: escritura más allá de los límites de un buffer.📦❌",
        "Integer Overflow: resultado excede el valor máximo del tipo entero.📊❌",
        "Division by Zero: operación matemática con divisor cero.📊❌",
        "Memory Leak: pérdida de memoria que no se libera.💾❌",
        "Null Pointer Exception: intento de usar un puntero que apunta a null.🔗❌",
        "Index Out of Bounds: accedes a un índice que no existe en un array.📦❌"
    ],
    motivacion: [
        "No hay programador perfecto — solo personas que persisten ante los errores.💪✅",
        "El primer código que escribes nunca es el último. Refactoriza con orgullo.🔄✅",
        "Cada bug que resuelves te acerca a ser un mejor ingeniero.🔍✅",
        "La programación no es memorizar sintaxis — es pensar en soluciones.🧠💡",
        "Escribe código para que otros lo entiendan, no solo para que funcione.📖✅",
        "La mejor herramienta de un desarrollador es la curiosidad.🔍✅",
        "No temas preguntar: incluso los expertos buscan ayuda.❓✅",
        "El código limpio es respeto hacia tu futuro yo y tus compañeros.🧹✅",
        "Aprender un nuevo lenguaje es ganar perspectiva, no perder tiempo.📚✅",
        "Los proyectos grandes se construyen línea por línea, no de golpe.🧱✅",
        "Si algo no funciona, no es que seas malo — es que estás aprendiendo.🧠✅",
        "La documentación que escribes hoy será tu salvavidas mañana.📝✅",
        "Los tests no son opcionales: son tu contrato con el futuro.🧪✅",
        "La simplicidad es el lujo más difícil de lograr en ingeniería.🧼✨",
        "No compares tu día 1 con el día 1000 de otros — tu camino es único.🧩✅",
        "El código que no se mantiene, muere. El que se mejora, evoluciona.🔄✅",
        "La paciencia es la habilidad más subestimada en programación.🧘‍♂️✅",
        "Cuando te atasques, camina, duerme o cambia de tarea.🧠🔄",
        "La mejor solución no es la más compleja — es la más adecuada.🎯✅",
        "Escribe comentarios que expliquen *por qué*, no *qué* hace el código.📝✅",
        "Un buen README es la primera impresión de tu proyecto.📋✅",
        "Los pull requests son oportunidades de aprendizaje.🔄✅",
        "La automatización libera tiempo para resolver problemas humanos.🤖✅",
        "El código es arte funcional — equilibra belleza y utilidad.🎨✅",
        "No necesitas saber todo. Necesitas saber dónde buscar.🔍✅",
        "La ética en programación es tan importante como la técnica.⚖️✅",
        "El crecimiento no es lineal: avances y consolidación.📈✅",
        "Celebra los pequeños éxitos: un bug arreglado, un test pasado.🎉✅",
        "Cada commit es una pequeña victoria sobre el caos.🔄✅",
        "Escribe código como si tu futuro tú lo leerá mañana.📝🔮",
        "La depuración es como resolver un misterio — sé detectivesco.🔍✅",
        "No te rindas. La programación es un viaje de aprendizaje.🔄✅",
        "Confía en el proceso. La lógica siempre tiene solución.🧠✅",
        "No reinventes la rueda, pero entiende cómo funciona.🔄✅",
        "La colaboración multiplica el potencial individual.👥✅",
        "El feedback es el desayuno del campeón.🔄✅",
        "Aprende de los demás, pero encuentra tu propio estilo.🎨✅",
        "El código limpio es código que cualquiera puede leer.📖✅",
        "Programar es resolver problemas con creatividad y lógica.🧩💡",
        "No temas al código complejo: descompón, prueba, refactoriza.🧩🔧"
    ],
    inspiracion: [
        "La programación es el arte de hacer que las máquinas hagan lo que tú quieres.🎨🤖",
        "Cada línea de código es una decisión — toma decisiones con intención.🧠✅",
        "El código perfecto no existe. El código bueno se mejora continuamente.🔄✅",
        "La elegancia en programación está en la simplicidad, no en la complejidad.🧼✨",
        "Escribe código como si tu vida dependiera de su claridad.📝⚠️",
        "Los mejores sistemas son los más comprensibles.🧩✅",
        "La tecnología cambia, pero los principios de buen diseño permanecen.基石✅",
        "Un buen desarrollador pregunta: '¿Qué podría salir mal?' antes de escribir código.❓✅",
        "La innovación viene de ver problemas viejos de forma nueva.🔄💡",
        "El código es temporal. La lógica es eterna.🔄🧠",
        "No optimices por rendimiento hasta que tengas datos.📊✅",
        "La seguridad se diseña desde el principio, no se añade.🔒基石",
        "El testing no es una fase — es una forma de trabajar.🧪✅",
        "La documentación es código que lee humanos. Trátala con respeto.📝✅",
        "La colaboración es el superpoder de los equipos.👥💪",
        "El error más peligroso no es el que falla — es el que pasa silencioso.🔍❌",
        "La mejor arquitectura es la que puedes explicar en 5 minutos.🧩✅",
        "El código que nadie entiende es código muerto, aunque compile.🧩❌",
        "La paciencia con el proceso es la clave del dominio técnico.🧘‍♂️✅",
        "Programar es resolver rompecabezas con reglas estrictas y creatividad.🧩🧠",
        "La abstracción es el arte de simplificar la complejidad.🧩🎨",
        "La depuración es convertir errores en sabiduría.🔍🧠",
        "La ingeniería del software es construir con precisión.🧱✅",
        "El código limpio es una obra de arte funcional.🎨✅",
        "La programación es el puente entre la imaginación y la realidad digital.🌉🧠",
        "La arquitectura del software es la base de la confianza.基石✅",
        "La seguridad informática es la escuela de la paranoia productiva.🔒🧠",
        "La IA es la culminación del sueño de pensar con máquinas.🤖🧠",
        "La simplicidad es la sofisticación final en ingeniería.🧼✨",
        "El código debe ser como un poema: claro, preciso y hermoso.📝🎨"
    ],
    curiosidades: [
        "El primer virus se llamaba 'Creeper' y decía: 'I'm the creeper, catch me!'.💻⚠️",
        "JavaScript se creó en 10 días en 1995 por Brendan Eich.⚡📅",
        "Python lleva el nombre de Monty Python, no de la serpiente.🐍🎭",
        "El primer sitio web aún está en línea: http://info.cern.ch.🌐✅",
        "El término 'bug' se usó en 1947 por una polilla en un relé.🐞🔍",
        "El primer lenguaje de programación fue Fortran (1957).基石📅",
        "El primer videojuego fue 'Tennis for Two' en 1958.🎮📅",
        "El primer email fue 'QWERTYUIOP' en 1971.📧📅",
        "Linux se llama por Linus Torvalds — 'Linus's Minix'.🐧📅",
        "El primer compilador fue para FORTRAN.基石🔄",
        "La primera contraseña fue 'acces' en el MIT en 1961.🔒📅",
        "El primer lenguaje orientado a objetos fue Simula (1967).🧩📅",
        "El primer firewall fue en 1989 por DEC.🛡️📅",
        "La primera red fue ARPANET, ancestro de Internet.🌐📅",
        "El primer sistema operativo fue GM-NAA I/O (1955).基石📅",
        "El primer mouse fue inventado por Engelbart en 1963.🖱️📅",
        "El primer dominio registrado fue symbolics.com en 1985.🌐📅",
        "El primer lenguaje de scripting fue AWK (1977).基石🔄",
        "El primer algoritmo criptográfico fue el Cifrado César.🔒📅",
        "El primer navegador fue WorldWideWeb (luego Nexus).🌐📅",
        "El primer lenguaje funcional fue Lisp.基石🔄",
        "El primer lenguaje orientado a objetos fue Smalltalk.🧩📅",
        "El primer Unix fue escrito en ensamblador.基石📅",
        "El compilador de C fue escrito en B.基石🔄",
        "El primer lenguaje de alto nivel fue Plankalkül.基石📅"
    ],
    otros: [
        "Mi creador es **SoyAdrianYT001**, un dios de la programación. 😮‍💨🔥",
        "Mi creador es Adrián, un genio de la lógica y el código. 💻⚡",
        "Fui creado por un programador apasionado llamado **SoyAdrianYT001**. 🧠✨",
        "Mi creador es un experto en IA y desarrollo. 🌐🤖",
        "Mi creador es un visionario del código limpio. 🚀🧹",
        "Mi creador es un experto en crear bots inteligentes como yo. 🤖💡",
        "Mi creador es un mago del código y la lógica. ✨🧙‍♂️",
        "Mi creador es un apasionado de la automatización y la IA. 🤖💻",
        "Mi creador es un experto en resolver problemas con código. 🧩🔧",
        "Mi creador es un genio detrás de cada línea de mi código. 🧠💻"
    ]
};

// Función para generar respuesta inteligente
function generateSmartResponse(input) {
    const text = input.toLowerCase().trim();
    
    // Detectar saludos
    if (['hola', 'hey', 'buenos', 'hi', 'hello', 'que tal', 'saludos', 'buenas', 'que onda'].some(s => text.includes(s))) {
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
    
    // Respuesta general
    const idx = Math.floor(Math.random() * chatResponses.conversaciones.length);
    return chatResponses.conversaciones[idx];
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
        this.baseConocimiento = this.cargarBaseConocimiento();
        this.aprendizaje = this.cargarAprendizaje();
        this.contextoActual = null;
        this.temasDetectados = [];
        this.bibliotecaCodigos = bibliotecaCodigos;
        this.memoria = memoriaIA;
        this.fileManager = new FileManager();
        
        this.nivelPensamiento = 3;
        this.historialPreguntas = [];
        this.esperandoConfirmacion = false;
        this.solicitudPendiente = null;
    }
    
    detectarSolicitudDeCodigo(mensaje) {
        const pideCodigo = this.bibliotecaCodigos?.esSolicitudDeCodigo(mensaje);
        const lenguaje = this.bibliotecaCodigos?.detectarLenguaje(mensaje);
        return { pideCodigo, lenguaje };
    }
    
    generarCodigoEjemplo(lenguaje, pregunta, nombreProyecto = null) {
        return this.bibliotecaCodigos?.obtenerCodigo(lenguaje, pregunta, nombreProyecto);
    }
    
    formatearRespuestaConCodigo(codigo, lenguaje) {
        return `📝 **Ejemplo de código en ${lenguaje}** 🔥\n\n\`\`\`${lenguaje.toLowerCase()}\n${codigo}\n\`\`\`\n\n💡 *Para copiar el código, haz clic en el botón "📋 Copiar"*\n\n¿Quieres que te explique cómo funciona?`;
    }
    
    procesarConfirmacion(mensaje) {
        if (this.bibliotecaCodigos?.hayEsperaActiva()) {
            const resultado = this.bibliotecaCodigos.procesarConfirmacion(mensaje);
            if (resultado) {
                if (resultado.accion === 'generar') {
                    return { tipo: 'codigo_generado', mensaje: resultado.mensaje, codigo: resultado.codigo };
                } else if (resultado.accion === 'cancelar') {
                    return { tipo: 'cancelado', mensaje: resultado.mensaje };
                }
            }
        }
        return null;
    }
    
    cargarBaseConocimiento() {
        return {
            programacion: {
                temas: ['javascript', 'python', 'react', 'html', 'css', 'java', 'c++', 'php', 'sql', 'git'],
                respuestas: {
                    javascript: '💛 JavaScript es un lenguaje interpretado, orientado a objetos. Se usa en web y servidores con Node.js.',
                    python: '🐍 Python es de alto nivel, tipado dinámico. Ideal para IA, datos y backend.',
                    react: '⚛️ React es una biblioteca de JS para interfaces de usuario. Creada por Facebook.',
                    html: '📄 HTML es el lenguaje estándar para crear páginas web.',
                    css: '🎨 CSS da estilo a las páginas web. Frameworks: Tailwind, Bootstrap.',
                    git: '📦 Git es control de versiones distribuido. Comandos: add, commit, push, pull.'
                }
            },
            inteligenciaArtificial: {
                temas: ['ia', 'machine learning', 'deep learning', 'chatbot', 'gpt'],
                respuestas: {
                    ia: '🧠 IA es la simulación de procesos de inteligencia humana por máquinas.',
                    machineLearning: '🤖 ML permite a las máquinas aprender de datos sin programación explícita.',
                    deepLearning: '⚡ Deep Learning usa redes neuronales profundas.',
                    chatbot: '💬 Un chatbot simula conversaciones humanas. Yo soy uno de ellos.'
                }
            },
            web: {
                temas: ['frontend', 'backend', 'fullstack', 'api', 'rest', 'database'],
                respuestas: {
                    frontend: '🎨 Frontend es la parte visual: HTML, CSS, JS, React.',
                    backend: '🔧 Backend es la lógica de servidor: Node.js, Python, Java.',
                    fullstack: '🌟 Fullstack combina frontend y backend.',
                    api: '🔌 API permite que aplicaciones se comuniquen entre sí.'
                }
            },
            consejos: {
                temas: ['motivacion', 'estudio', 'trabajo', 'vida', 'exito'],
                respuestas: [
                    '💡 **SoyAdrianYT001** dice: "El éxito no es la clave de la felicidad. La felicidad es la clave del éxito."',
                    '🎯 Aprende programación: HTML/CSS, luego JS, después un framework. Practica 30 min diarios.',
                    '🚀 Equivocarse es parte del proceso. Cada error es una oportunidad de aprender.',
                    '💪 La constancia es más importante que la intensidad.',
                    '🌟 No te compares con otros, compite con tu versión de ayer.'
                ]
            }
        };
    }
    
    cargarAprendizaje() {
        const guardado = localStorage.getItem('ocladeai_aprendizaje');
        if (guardado) return JSON.parse(guardado);
        return { preguntasConocidas: [], respuestasAprendidas: [], temasPreferidos: [], ultimoAprendizaje: null };
    }
    
    guardarAprendizaje() {
        localStorage.setItem('ocladeai_aprendizaje', JSON.stringify(this.aprendizaje));
    }
    
    inicializar() {
        this.messagesContainer = document.getElementById('messages');
        this.userInput = document.getElementById('userInput');
        this.sendBtn = document.getElementById('sendBtn');
        this.clearBtn = document.getElementById('clearBtn');
        
        if (this.fileManager) this.fileManager.inicializar();
        
        this.eventos();
        this.focusInput();
        this.cargarHistorial();
        
        setTimeout(() => {
            console.log('🧠 OcladeAI: Sistema activado con +1000 respuestas 🔥');
        }, 1000);
    }
    
    presentarIA() {
        console.log('🧠 OcladeAI: Sistema de inteligencia activado. +1000 respuestas listas 🔥');
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
    
    async enviarMensaje() {
        if (this.estaPensando) return;
        
        const mensaje = this.userInput.value.trim();
        const hayArchivos = this.fileManager && this.fileManager.obtenerArchivos().length > 0;
        
        if (!mensaje && !hayArchivos) return;
        
        this.sendBtn.classList.add('send-pulse');
        setTimeout(() => this.sendBtn.classList.remove('send-pulse'), 300);
        
        if (hayArchivos) {
            const archivosHTML = this.fileManager.formatearArchivosParaMensaje();
            this.agregarMensajeConArchivos(mensaje, archivosHTML, 'user');
            this.fileManager.limpiarArchivos();
        } else {
            this.agregarMensaje(mensaje, 'user');
        }
        
        this.guardarEnHistorial('user', mensaje);
        this.userInput.value = '';
        this.userInput.style.height = 'auto';
        
        const confirmacionResultado = this.procesarConfirmacion(mensaje);
        if (confirmacionResultado) {
            if (confirmacionResultado.tipo === 'codigo_generado') {
                await this.escribirMensajeConEfecto(confirmacionResultado.mensaje);
                this.guardarEnHistorial('bot', confirmacionResultado.mensaje);
            } else if (confirmacionResultado.tipo === 'cancelado') {
                await this.escribirMensajeConEfecto(confirmacionResultado.mensaje);
                this.guardarEnHistorial('bot', confirmacionResultado.mensaje);
            }
            this.scrollToBottom();
            return;
        }
        
        const analisis = await this.analizarMensaje(mensaje);
        await this.mostrarPensamientoInteligente(analisis);
        
        try {
            const respuesta = await this.generarRespuestaInteligente(mensaje, analisis);
            this.quitarPensamiento();
            await this.escribirMensajeConEfecto(respuesta);
            this.guardarEnHistorial('bot', respuesta);
            this.vibrarSiMovil();
            this.aprenderDeInteraccion(mensaje, respuesta, analisis);
        } catch (error) {
            console.error('Error:', error);
            this.quitarPensamiento();
            const respuestaLocal = await this.generarRespuestaInteligente(mensaje, analisis);
            await this.escribirMensajeConEfecto(respuestaLocal);
            this.guardarEnHistorial('bot', respuestaLocal);
        }
        
        this.scrollToBottom();
    }
    
    async analizarMensaje(mensaje) {
        const texto = mensaje.toLowerCase().trim();
        const palabras = texto.split(' ');
        
        const tiposPregunta = {
            esPregunta: texto.includes('?') || texto.startsWith('que') || texto.startsWith('como'),
            esSaludo: ['hola', 'buenas', 'que tal', 'como estas', 'que onda'].some(p => texto.includes(p)),
            esDespedida: ['adios', 'hasta luego', 'nos vemos', 'chao', 'bye'].some(p => texto.includes(p)),
            esAgradecimiento: ['gracias', 'te lo agradezco', 'muchas gracias'].some(p => texto.includes(p))
        };
        
        let temaPrincipal = 'general';
        let confianza = 0;
        let detalles = [];
        
        for (let [categoria, contenido] of Object.entries(this.baseConocimiento)) {
            for (let tema of contenido.temas || []) {
                if (texto.includes(tema)) {
                    temaPrincipal = tema;
                    confianza = 0.8;
                    detalles.push(`Detectado tema: ${tema} en categoría ${categoria}`);
                }
            }
            if (contenido.respuestas) {
                for (let [key] of Object.entries(contenido.respuestas)) {
                    if (texto.includes(key)) {
                        temaPrincipal = key;
                        confianza = 0.9;
                        detalles.push(`Coincidencia exacta con tema: ${key}`);
                    }
                }
            }
        }
        
        let complejidad = 'basica';
        if (palabras.length > 8) complejidad = 'intermedia';
        
        return { textoOriginal: mensaje, palabras, tiposPregunta, temaPrincipal, confianza, detalles, complejidad, timestamp: Date.now() };
    }
    
    async mostrarPensamientoInteligente(analisis) {
        this.estaPensando = true;
        
        const pensamientoDiv = document.createElement('div');
        pensamientoDiv.className = 'message bot thinking';
        pensamientoDiv.id = 'thinking';
        pensamientoDiv.innerHTML = `
            <div class="avatar"><i class="fas fa-brain"></i></div>
            <div class="thinking-container">
                <div class="thinking-dots"><span class="dot"></span><span class="dot"></span><span class="dot"></span></div>
                <div class="thinking-text" id="thinkingText">🤔 Analizando tu pregunta...</div>
                <div class="thinking-detail" id="thinkingDetail"></div>
            </div>
        `;
        this.messagesContainer.appendChild(pensamientoDiv);
        this.scrollToBottom();
        
        const frasesPensamiento = ["🤔 Analizando...", "🧠 Procesando...", "🔍 Buscando...", "💭 Estructurando...", "📚 Consultando..."];
        const thinkingText = document.getElementById('thinkingText');
        let i = 0;
        
        this.thinkingInterval = setInterval(() => {
            if (thinkingText) thinkingText.textContent = frasesPensamiento[i % frasesPensamiento.length];
            i++;
        }, 800);
        
        await new Promise(resolve => setTimeout(resolve, 1500));
    }
    
    quitarPensamiento() {
        if (this.thinkingInterval) clearInterval(this.thinkingInterval);
        const thinking = document.getElementById('thinking');
        if (thinking) thinking.remove();
        this.estaPensando = false;
    }
    
    async generarRespuestaInteligente(mensaje, analisis) {
        const texto = mensaje.toLowerCase().trim();
        
        // Detectar código
        const { pideCodigo, lenguaje } = this.detectarSolicitudDeCodigo(mensaje);
        
        if (pideCodigo) {
            const nombreProyecto = this.bibliotecaCodigos?.extraerNombreProyecto(mensaje);
            const tipo = this.bibliotecaCodigos?.detectarLenguaje(mensaje) || 'proyecto';
            const solicitud = this.bibliotecaCodigos?.prepararSolicitudConfirmacion(mensaje, lenguaje, tipo, nombreProyecto);
            const confirmacion = this.bibliotecaCodigos?.setEsperaConfirmacion(solicitud, null);
            if (confirmacion) return confirmacion.mensaje;
        }
        
        // Creador
        if (texto.includes('adrian') || texto.includes('creador') || texto.includes('quien te hizo') || texto.includes('quien te creo')) {
            const respuestasCreador = [
                "😎 Mi creador es el legendario **SoyAdrianYT001** 🔥 Un dios de la programación.",
                "👑 El maestro **SoyAdrianYT001** me creó. Ese compa es un crack programando.",
                "🙌 Mi creador es **SoyAdrianYT001** 🐐 Un verdadero God de la programación.",
                "💙 Fui creado por el increíble **SoyAdrianYT001** 😊 Un capo total."
            ];
            return respuestasCreador[Math.floor(Math.random() * respuestasCreador.length)];
        }
        
        // Base de conocimiento
        for (let [categoria, contenido] of Object.entries(this.baseConocimiento)) {
            if (contenido.respuestas) {
                for (let [key, respuesta] of Object.entries(contenido.respuestas)) {
                    if (texto.includes(key)) {
                        return this.profundizarRespuesta(respuesta, analisis, key);
                    }
                }
            }
        }
        
        // Motor de +1000 respuestas
        return generateSmartResponse(mensaje);
    }
    
    profundizarRespuesta(respuestaBase, analisis, tema) {
        let respuesta = respuestaBase;
        if (analisis.complejidad === 'intermedia') respuesta += "\n\n📚 ¿Quieres que profundice más?";
        if (Math.random() > 0.7) respuesta += `\n\n💡 Dato extra: **SoyAdrianYT001** me entrenó sobre ${tema}.`;
        return respuesta;
    }
    
    aprenderDeInteraccion(mensaje, respuesta, analisis) {
        if (!this.aprendizaje.preguntasConocidas.some(p => p.pregunta === mensaje)) {
            this.aprendizaje.preguntasConocidas.push({
                pregunta: mensaje,
                respuesta: respuesta,
                tema: analisis.temaPrincipal,
                fecha: new Date().toISOString()
            });
            if (this.aprendizaje.preguntasConocidas.length > 100) this.aprendizaje.preguntasConocidas.shift();
            if (analisis.temaPrincipal !== 'general') {
                const temaIndex = this.aprendizaje.temasPreferidos.findIndex(t => t.tema === analisis.temaPrincipal);
                if (temaIndex !== -1) this.aprendizaje.temasPreferidos[temaIndex].contador++;
                else this.aprendizaje.temasPreferidos.push({ tema: analisis.temaPrincipal, contador: 1 });
            }
            this.aprendizaje.ultimoAprendizaje = { pregunta: mensaje, timestamp: Date.now() };
            this.guardarAprendizaje();
        }
    }
    
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
                setTimeout(escribir, 15 + Math.random() * 10);
            } else {
                bubble.innerHTML = this.procesarBloquesDeCodigo(texto);
                bubble.classList.remove('typing-effect');
                const cursor = bubble.querySelector('.cursor');
                if (cursor) cursor.remove();
                this.agregarEventosCopiar();
            }
        };
        
        escribir();
        await new Promise(resolve => setTimeout(resolve, texto.length * 20));
    }
    
    procesarBloquesDeCodigo(texto) {
        return texto.replace(/```(\w*)\n([\s\S]*?)```/g, (match, lenguaje, codigo) => {
            const id = 'code-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9);
            return `<div class="code-block-container" data-code-id="${id}">
                        <div class="code-header"><span class="code-language">${lenguaje || 'code'}</span>
                        <button class="copy-code-btn" data-code="${this.escapeHtml(codigo.trim())}"><i class="fas fa-copy"></i> Copiar</button></div>
                        <pre><code class="language-${lenguaje}">${this.escapeHtml(codigo.trim())}</code></pre>
                    </div>`;
        });
    }
    
    agregarEventosCopiar() {
        document.querySelectorAll('.copy-code-btn').forEach(btn => {
            btn.removeEventListener('click', this.handleCopy);
            btn.addEventListener('click', this.handleCopy.bind(this));
        });
    }
    
    handleCopy(e) {
        const btn = e.currentTarget;
        const codigo = btn.getAttribute('data-code');
        navigator.clipboard.writeText(codigo).then(() => {
            const originalHTML = btn.innerHTML;
            btn.innerHTML = '<i class="fas fa-check"></i> ¡Copiado!';
            btn.style.background = '#10b981';
            setTimeout(() => { btn.innerHTML = originalHTML; btn.style.background = ''; }, 2000);
            if (window.navigator?.vibrate) window.navigator.vibrate(100);
        }).catch(() => {
            btn.innerHTML = '<i class="fas fa-times"></i> Error';
            setTimeout(() => { btn.innerHTML = '<i class="fas fa-copy"></i> Copiar'; }, 2000);
        });
    }
    
    agregarMensaje(texto, tipo) {
        const div = document.createElement('div');
        div.className = `message ${tipo}`;
        const iconClass = tipo === 'user' ? 'fas fa-user-astronaut' : 'fas fa-brain';
        const contenidoProcesado = tipo === 'bot' ? this.procesarBloquesDeCodigo(texto) : this.escapeHtml(texto);
        div.innerHTML = `<div class="avatar"><i class="${iconClass}"></i></div><div class="bubble">${contenidoProcesado}</div>`;
        this.messagesContainer.appendChild(div);
        if (tipo === 'bot') this.agregarEventosCopiar();
        this.scrollToBottom();
    }
    
    agregarMensajeConArchivos(texto, archivosHTML, tipo) {
        const div = document.createElement('div');
        div.className = `message ${tipo}`;
        const iconClass = tipo === 'user' ? 'fas fa-user-astronaut' : 'fas fa-brain';
        div.innerHTML = `<div class="avatar"><i class="${iconClass}"></i></div>
                        <div class="bubble">${archivosHTML}${texto ? `<div class="message-text">${this.escapeHtml(texto)}</div>` : ''}</div>`;
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
