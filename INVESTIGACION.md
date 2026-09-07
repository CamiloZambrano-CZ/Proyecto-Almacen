¿Qué es Firestore?
Es una base de datos en la nube que creó Google (forma parte de Firebase). Básicamente, es el lugar donde guardas toda la información de una app (como usuarios, mensajes o publicaciones) para que no se pierda cuando la cierras. Lo bueno es que es NoSQL, lo que significa que no usa las típicas tablas organizadas con filas y columnas tipo Excel, sino una estructura mucho más flexible.

¿Cómo funciona?
Funciona con un sistema de Colecciones y Documentos:

Documentos: Piensa en ellos como carpetas individuales o fichas de información. Por ejemplo, la ficha de un usuario con su nombre y edad.

Colecciones: Son los contenedores que agrupan esos documentos. Por ejemplo, una colección llamada Usuarios que guarda todas las fichas.

Lo mejor que tiene es que funciona en tiempo real. Si un usuario cambia su foto de perfil en la app, Firestore le avisa a la app al instante y la pantalla se actualiza sola sin tener que recargar. Además, si te quedas sin internet, guarda los cambios en el teléfono y los sincroniza solos con la nube en cuanto recuperas la señal.

Fuentes consultadas:

Documentación oficial de Firebase: Información sobre Firebase Realtime Database y Cloud Firestore (Google Developers).

Google Cloud Documentation: Conceptos básicos de Cloud Firestore y modelo de datos NoSQL.
