# Entrena — App de entrenamiento

Aplicación web progresiva (PWA) en español, pensada para instalarse en iPhone y Android.

## Incluye
- Rutina semanal y explicaciones de ejercicios.
- Marcar ejercicios y sesiones completadas.
- Registro de carga, repeticiones, RIR y notas.
- Historial guardado localmente en el dispositivo.
- Temporizador de descanso.
- Diseño adaptable a móvil.
- Caché para abrir la app sin conexión después de la primera carga.

## Importante
Los datos se guardan en el almacenamiento local del navegador. Si borras los datos del sitio o cambias de dispositivo, los registros no se trasladan automáticamente. Esta versión no tiene cuentas ni sincronización en la nube.

## Cómo publicarla para instalarla
La instalación PWA requiere una dirección HTTPS (por ejemplo, GitHub Pages).

1. Crea un repositorio en GitHub, por ejemplo `entrena-app`.
2. Sube todos los archivos de esta carpeta a la raíz del repositorio.
3. En GitHub abre **Settings → Pages**.
4. En **Build and deployment**, selecciona **Deploy from a branch**.
5. Selecciona la rama `main` y la carpeta `/ (root)`, guarda.
6. Espera a que GitHub Pages publique el sitio y abre la dirección HTTPS desde Safari en tu iPhone.
7. En Safari pulsa **Compartir → Añadir a pantalla de inicio → Añadir**.

En iPhone, abre la URL publicada directamente en Safari para añadirla a la pantalla de inicio.

## Personalización
- `app.js`: ejercicios, días, series, repeticiones y lógica.
- `styles.css`: colores, tamaños y diseño.
- `manifest.webmanifest`: nombre e icono de la app.
- `apple-touch-icon.png`: icono para la pantalla de inicio de iPhone.
