// 💬 CHAT.JS - Base General
// 30 respuestas de saludo, conversación, motivación

const chatDB = {
    saludos: [
        "¡Hola!😀 ¿En qué puedo ayudarte hoy?",
        "¡Hey!👋 ¿Qué estás construyendo?",
        "Buenos días.🌞 ¿Qué código te desafía?",
        "¡Saludos! ¿Qué necesitas resolver?",
        "Hola. Soy tu asistente técnico.🔧 ¿En qué tema trabajas?",
        "¡Bienvenido! ¿Necesitas ayuda con un error o concepto?",
        "Hola. ¿Estás en modo *debug*, *desarrollo* o *aprendizaje*?",
        "¡Hey! ¿Qué código te está desafiando hoy?",
        "Buenas. Estoy aquí para explicar, optimizar o corregir. ¿Por dónde empezamos?",
        "¡Hola de nuevo! ¿Qué proyecto estás trabajando?"
    ],
    despedidas: [
        "¡Hasta pronto! Que tu código compile sin errores.✅",
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
    conversaciones: [
        "Interesante pregunta. ¿Qué lenguaje usas?📚",
        "Déjame ver... ¿Esto es para web o móvil?📱",
        "Para ayudarte mejor, ¿me das contexto?💡",
        "Gran pregunta. ¿Qué estás intentando lograr?🎯",
        "¿Podrías darme más detalles sobre tu proyecto?📝",
        "Esa es una buena pregunta de programación. ¿Qué estás construyendo?",
        "¡Me encanta tu entusiasmo! ¿En qué estás trabajando?",
        "¿Tienes un problema específico o solo charlamos de desarrollo?",
        "¿Estás en frontend, backend, IA, o algo más?",
        "¿Tu objetivo es aprender, producir o depurar?"
    ],
    motivacion: [
        "No hay programador perfecto, solo persistente.💪",
        "Cada bug te acerca a ser mejor.✅",
        "La lógica es tu mejor herramienta.🧠",
        "El código limpio es código respetuoso.🧹",
        "Escribe como si tu futuro tú lo leerá.📅",
        "No compares tu día 1 con el día 1000 de otros. Tu camino es único.🧩",
        "El código que no se mantiene, muere. El que se mejora, evoluciona.🔄",
        "La paciencia es clave en el desarrollo.🧘",
        "Cuando te atasques, camina, duerme, cambia de tarea. Tu cerebro seguirá trabajando.🧠",
        "La mejor solución no es la más compleja, sino la más adecuada.🎯"
    ],
    otros: [
        "Mi creador es soyadrianyt001, un dios de la programación. 😮‍💨🔥",
        "Mi creador es Adrián, un experto en IA y desarrollo. 💻⚡",
        "Fui hecho por un apasionado de la lógica. 🧠",
        "Mi creador ama el código limpio y eficiente. 🚀",
        "Mi creador es un genio detrás de cada línea. 💡",
        "Mi creador es un visionario del software escalable. 🏗️",
        "Mi creador es un experto en resolver problemas complejos. 🧩",
        "Mi creador es un apasionado de la automatización. 🤖",
        "Mi creador es un mago del código y la lógica. ✨",
        "Mi creador es un genio de la lógica y el código. 🧠💻"
    ]
};
