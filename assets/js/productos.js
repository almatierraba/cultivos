/* Catálogo Krepitar — datos de producto.
   Fuente: "WEB KREPITAR.docx" (textos) + carpeta TEXTOS&FOTOS (imágenes).
   Los textos en inglés se conservan para habilitar el sitio bilingüe más adelante
   sin volver a la fuente original; hoy solo se renderiza el español. */

/* Única fuente de verdad para el host de imágenes.
   Cambiar solo esta línea si se migra de CDN. */
var CDN_BASE = 'https://cdn.jsdelivr.net/gh/almatierraba/krepitar-assets@v4/img';

var PRODUCTOS = [
  {
    slug: 'peak',
    nombre: 'Puffco Peak',
    tagline: 'Simplemente perfecto.',
    descripcion: 'El Peak es la experiencia de dab más sencilla de la historia. Más inteligente, sencillo y cómodo en la mano, nuestro vaporizador inteligente original ahora cuenta con una cámara 3D, una tapa de joystick y control de temperatura en tiempo real. Con su interfaz de un solo botón sin interrupciones, filtración premium de agua y cuatro preajustes de calefacción ajustados, el Peak hace que disfrutar el concentrado sea fácil — siempre.',
    descripcionEn: 'The Peak is the simplest dab experience ever. Smarter, simpler, and comfortable in your hand, our original smart vaporizer now features a 3D chamber, a joystick lid, and real-time temperature control. With its seamless one-button interface, premium water filtration, and four tuned heat presets, the Peak makes enjoying hash easy — every time.',
    taglineEn: 'Simply perfect.',
    colores: ['Ónix', 'Zest', 'Zafiro'],
    notas: [],
    imagenes: [
      'peak/onyx-front.webp',
      'peak/onyx-3quarters-left.webp',
      'peak/onyx-left.webp',
      'peak/onyx-back.webp'
    ]
  },
  {
    slug: 'peak-pro-3dxl',
    nombre: 'Puffco Peak Pro 3DXL',
    tagline: '',
    descripcion: 'Conocé la nueva Puffco Peak Pro 3DXL, que cuenta con la innovadora recámara 3DXL. Con un bol un 78% más grande y el doble de vapor, este dispositivo proporciona calentamientos más rápidos y un control preciso a través de la app Puffco Connect. Tanto en casa como en cualquier lugar, disfrutá de la carga inalámbrica y de una experiencia inigualable con un vaporizador de concentrados bellamente diseñado que combina funcionalidad y elegancia.',
    descripcionEn: 'Meet the new Puffco Peak Pro 3DXL from Puffco, featuring the innovative 3DXL chamber. With a bowl 78% bigger and double the vapor, this device delivers faster heats and precise control through the Puffco Connect app. Whether at home or on the go, enjoy wireless charging and an unmatched experience with a beautifully designed concentrate vaporizer that blends functionality and style.',
    taglineEn: '',
    colores: [],
    notas: [],
    imagenes: [
      'peak-pro-3dxl/01.webp',
      'peak-pro-3dxl/pearl.webp',
      'peak-pro-3dxl/quarter.webp',
      'peak-pro-3dxl/colores.webp',
      'peak-pro-3dxl/02.jpg',
      'peak-pro-3dxl/03.jpg',
      'peak-pro-3dxl/pearl-joystick-detalle.jpg',
      'peak-pro-3dxl/chamber-detalle.jpg',
      'peak-pro-3dxl/con-hot-knife.jpg',
      'peak-pro-3dxl/peak-y-3dxl.webp'
    ]
  },
  {
    slug: 'pivot',
    nombre: 'Pivot',
    tagline: 'Perfil bajo. Alto rendimiento.',
    descripcion: 'El Pivot pone toda la experiencia Puffco en tu bolsillo. Del tamaño de un bolígrafo, este vaporizador móvil y discreto cuenta con una cámara 3D de liberación rápida que ofrece sabor premium y control de temperatura en tiempo real. Con una barra de luz que sirve como temporizador visual para dab, retroalimentación háptica, una interfaz de un solo botón y cuatro ajustes de calor predefinidos, el Pivot es un verdadero dab que podés llevar a cualquier lugar.',
    descripcionEn: 'The Pivot puts the full Puffco experience in your pocket. The same size as a pen, this discreet, mobile vaporizer features a quick-release 3D Chamber that delivers premium flavor and real-time temperature control. With a light bar that serves as a visual dab timer, haptic feedback, a single-button interface, and four dialed heat presets, the Pivot is a true dab you can take anywhere.',
    taglineEn: 'Low profile. High performance.',
    colores: ['Ónix', 'Zafiro'],
    notas: [],
    imagenes: [
      'pivot/zafiro-front-light-on.webp',
      'pivot/zafiro-floating.webp',
      'pivot/zafiro-3dchamber-release.webp',
      'pivot/zafiro-back.webp'
    ]
  },
  {
    slug: 'proxy-core',
    nombre: 'Proxy Core',
    tagline: 'Esta no es una experiencia reducida. Es una experiencia concentrada.',
    descripcion: 'El nuevo Proxy Core está diseñado para la vida diaria: máxima portabilidad, potencia sin compromisos. Impulsado por nuestra cámara 3D patentada y la personalización avanzada de la app Puffco Connect, Core ofrece sabor de espectro completo y nubes impresionantes en un formato sin vidrio y muy fácil de llevar en el bolsillo. Y cuando combinás las perlas de terpenos de cerámica con el diseño de conducto de aire de impacto de Core, obtenés una inhalación directa e íntima que vibra al inhalar.',
    descripcionEn: 'The new Proxy Core is engineered for daily life – maximum portability, uncompromising power. Driven by our patented 3D Chamber and the Puffco Connect app’s deep customization, Core delivers full spectrum flavor and impressive clouds in a glass-free, highly pocketable form. And when you combine the ceramic terp pearls with Core’s impact airpath design, you’re getting a direct, intimate hit that rumbles as you inhale.',
    taglineEn: 'This isn’t a scaled-down experience. It’s a concentrated one.',
    colores: [],
    notas: [
      'Solo compatible con el nuevo Proxy con Bluetooth.',
      'Este producto NO es para usar con tabaco, líquidos electrónicos que contengan nicotina, ni con nicotina sintética o sustitutos de la nicotina.'
    ],
    imagenes: [
      'proxy-core/01.webp',
      'proxy-core/02.webp',
      'proxy-core/03.webp',
      'proxy-core/04.webp',
      'proxy-core/05.webp',
      'proxy-core/06.webp',
      'proxy-core/07.webp',
      'proxy-core/08.webp',
      'proxy-core/09.webp',
      'proxy-core/10.webp'
    ]
  },
  {
    slug: 'proxy',
    nombre: 'Proxy Pipe Kit',
    tagline: 'No te limites a experimentar el hash. Exploralo.',
    descripcion: 'El nuevo Proxy es más inteligente, suave y potente. Una forma refinada ofrece vaporizaciones más grandes y limpias, con una sensación sofisticada en la mano. La cámara 3D mejorada desbloquea dosis más grandes, mejor sabor y reduce el salpicado. El control Bluetooth mediante la app Puffco Connect pone en tus manos el control total de la temperatura, el tiempo de sesión, el nivel de vapor y la iluminación ambiental. Con una mayor duración de la batería y compatibilidad con todas las piezas de Proxy, es el Proxy que conocés, ahora evolucionado para llevarte más lejos.',
    descripcionEn: 'The new Proxy is smarter, smoother, and more powerful. A refined shape delivers bigger, cleaner hits with a refined feel in your hand. The upgraded 3D Chamber unlocks bigger dabs, better flavor, and reduces splash out. Bluetooth control via the Puffco Connect App puts full control of temp, session time, vapor level, and mood lighting in your hands. With improved battery life and compatibility with all Proxy pieces, it’s the Proxy you know—now evolved to take you further.',
    taglineEn: 'Don’t just experience hash. Explore it.',
    colores: [],
    notas: [
      'Este producto no es para su uso con tabaco, líquidos electrónicos que contengan nicotina, ni con nicotina sintética o sustitutos de la nicotina.'
    ],
    imagenes: [
      'proxy/onyx-profile-left.webp',
      'proxy/onyx-chamber-float.webp',
      'proxy/onyx-finger-tilted.webp',
      'proxy/onyx-pull-apart.webp',
      'proxy/onyx-side-by-side.webp',
      'proxy/en-caja.webp'
    ]
  },
  {
    slug: 'hot-knife',
    nombre: 'Hot Knife',
    tagline: '',
    descripcion: 'El Hot Knife lleva nuestra herramienta de carga calentada al siguiente nivel. Es una herramienta de carga eléctrica, no un vaporizador: sirve específicamente para transferir concentrados pegajosos (wax, rosin) hacia la cámara del dispositivo (Peak, Peak Pro, Proxy, etc.) de forma limpia, sin tener que raspar con herramientas frías. No vaporiza el concentrado, solo lo derrite lo suficiente para que se desprenda y caiga en la cámara. Un cuerpo mejorado con una conexión de tapa más segura y lista para viajar. Una punta de cerámica remodelada y esmaltada diseñada para dejar más hachís en la cámara. Además, un botón rediseñado con funciones ampliadas. La carga rápida USB-C ofrece una carga completa en solo 25 minutos: triple clic para revisar la batería, mantener presionado para calentar. Y el nuevo lazo para cordón en la tapa hace que cargar sobre la marcha sea más fácil que nunca.',
    descripcionEn: 'The Hot Knife takes our game-changing heated loading tool to the next level. The Hot Knife is an electrically powered loading tool, not a vaporizer itself — it’s specifically for transferring sticky concentrates (wax, rosin) into the device’s chamber (Peak, Peak Pro, Proxy, etc.) cleanly, without having to scrape with cold tools. It doesn’t vaporize the concentrate, it just melts it enough so it can drop into the chamber. An upgraded body with a more secure, travel-friendly cap connection. A reshaped and glazed ceramic tip designed to leave more hash in the chamber. Plus, a reimagined button with expanded functions. Fast USB-C charging delivers a full charge in just 25 minutes. Triple-click to check battery life, press + hold to heat. And the new lanyard loop on the cap makes loading on-the-go easier than ever.',
    taglineEn: '',
    colores: [],
    notas: [],
    imagenes: [
      'hot-knife/onyx-cap-off.webp',
      'hot-knife/onyx-cap-on.webp',
      'hot-knife/onyx-en-mano.webp',
      'hot-knife/onyx-caja-abierta.webp',
      'hot-knife/onyx-caja.webp'
    ]
  },
  {
    slug: 'chamber-3dxl',
    nombre: 'Chamber 3DXL',
    tagline: 'Lo mejor acaba de hacerse más grande.',
    descripcion: 'Cazuela un 78% más grande. 2 veces más vapor. El Peak Pro 3DXL es la primera cámara de e-rig de alta capacidad del mundo. Ofreciendo el mismo sabor y consistencia increíbles por los que nuestra tecnología 3D patentada es conocida, la cámara más profunda del 3DXL y el Joystick XL te permiten cargar más y vaporizar más fuerte, con menos residuos. El 3DXL también desbloquea un nuevo nivel de control de vapor en la app Puffco Connect.',
    descripcionEn: '78% larger bowl. 2x more vapor. The Peak Pro 3DXL is the world’s first high capacity e-rig chamber. Delivering the same incredible flavor and consistency our patented 3D technology is known for, the 3DXL’s deeper chamber and XL Joystick let you load fuller and rip harder—with less reclaim. The 3DXL also unlocks a new level of vapor control in the Puffco Connect app.',
    taglineEn: 'The best just got bigger.',
    colores: [],
    incluye: ['Cámara Peak Pro 3DXL', 'Tapa con Joystick XL'],
    incluyeEn: ['Peak Pro 3DXL Chamber', 'XL Joystick Cap'],
    notas: [],
    imagenes: [
      'chamber-3dxl/01-interior.webp',
      'chamber-3dxl/02.webp',
      'chamber-3dxl/04.webp',
      'chamber-3dxl/05.webp',
      'chamber-3dxl/06.webp',
      'chamber-3dxl/07.webp',
      'chamber-3dxl/03-caja.webp'
    ]
  },
  {
    slug: 'chamber-3d',
    nombre: 'Cámara 3D Chamber',
    tagline: 'A menudo imitada, nunca superada.',
    descripcion: 'Nuestra cámara 3D patentada te ofrece mejor sabor y un golpe consistente cada vez. Sensores innovadores proporcionan control de temperatura en tiempo real, mientras que las trazas de calor incrustadas en las paredes de cerámica vaporizan el concentrado desde los lados, no desde el fondo. Esta tecnología de primera protege los terpenos y cannabinoides de degradarse, asegurando que obtengas efectos y sabor óptimos.',
    descripcionEn: 'Our patented 3D Chamber gives you better flavor and a consistent hit every time. Innovative sensors provide real-time temperature control, while heat traces embedded in the ceramic walls vaporize concentrate from the sides – not the bottom. This top-tier technology protects the terpenes and cannabinoids from degrading, ensuring you get optimal effects and optimal flavor.',
    taglineEn: 'Often imitated, never beaten.',
    colores: [],
    notas: [
      'Este producto no es apto para usar con tabaco, líquidos con nicotina ni ningún tipo de nicotina sintética o sustituto de nicotina.'
    ],
    imagenes: [
      'chamber-3d/01.webp',
      'chamber-3d/02.webp'
    ]
  },
  {
    slug: 'travel-glass',
    nombre: 'Travel Glass',
    tagline: 'Hacé un viaje.',
    descripcion: 'El Puffco Travel Glass es una tapa patentada para el Peak Pro y el Peak que te permite mantener el agua dentro de la cámara girando la boquilla. Menos derrames, mejor portabilidad, ahorra agua. Dabs mientras viajás.',
    descripcionEn: 'Take a trip. The Puffco Travel Glass is a patented Top for the Peak Pro and Peak that allows you to lock water inside the chamber by twisting the mouthpiece. Less spills, better portability, saves water. Dab on the go.',
    taglineEn: 'Take a trip.',
    colores: [],
    notas: [],
    imagenes: [
      'travel-glass/black-01.webp',
      'travel-glass/black-02.webp',
      'travel-glass/03.webp',
      'travel-glass/04.webp',
      'travel-glass/05.webp',
      'travel-glass/06.webp'
    ]
  },
  {
    slug: 'travel-case',
    nombre: 'Travel Case',
    tagline: '',
    descripcion: 'El Travel Case mantiene tu equipo organizado. Cuenta con un exterior rígido de aluminio con relieve, una tapa con cierre magnético y un interior de silicona suave para reducir el ruido. Tiene espacio para un Pivot + Hot Knife, hasta 3 frascos, hisopos de algodón, una sección cubierta para basura y cualquier otra cosa que puedas necesitar.',
    descripcionEn: 'The Travel Case keeps your stash organized. Featuring a ridged hard aluminum exterior with a magnetic lid closure and soft silicone inside to reduce rattling, the Travel Case has room for a Pivot + Hot Knife, up to 3 jars, cotton swabs, a covered section for trash, and anything else you might need.',
    taglineEn: '',
    colores: ['Perla', 'Amanecer', 'Zafiro'],
    notas: [
      'Los artículos que se muestran en el Travel Case no están incluidos.'
    ],
    imagenes: [
      'travel-case/01.webp',
      'travel-case/02.webp',
      'travel-case/03.webp',
      'travel-case/04.webp',
      'travel-case/06.webp',
      'travel-case/07.webp',
      'travel-case/08.webp',
      'travel-case/3dxl.webp'
    ]
  },
  {
    slug: 'joystick-cap',
    nombre: 'Joystick Cap',
    tagline: 'Nunca se atasca. Menos mantenimiento. Siempre divertido.',
    descripcion: 'La tapa de joystick Peak Pro ofrece un flujo de aire direccional de 360º preciso para una calefacción más consistente, dándote nubes más grandes y mejor sabor. Hecha de acero inoxidable irrompible y silicona, el diseño del joystick es fácil de limpiar y evita que los residuos bloqueen tu flujo.',
    descripcionEn: 'Never stuck. Less maintenance. Always fun. The Peak Pro Joystick Cap provides precise 360º directional airflow for more consistent heating, giving you bigger clouds and better flavor. Made of shatterproof stainless steel and silicone, the Joystick’s design is easy to clean and prevents reclaim from stopping your flow. And it’s fidget friendly.',
    taglineEn: 'Never stuck. Less maintenance. Always fun.',
    colores: [],
    notas: [],
    imagenes: [
      'joystick-cap/01.webp',
      'joystick-cap/02.webp',
      'joystick-cap/03.webp',
      'joystick-cap/onyx-detalle.webp'
    ]
  }
];

/* Imágenes de ambiente, sin producto asignado. Uso decorativo (hero, separadores). */
var IMAGENES_GENERALES = [
  'general/01.webp',
  'general/02.webp',
  'general/03.webp',
  'general/04.webp',
  'general/05.webp',
  'general/06.webp'
];

function urlImagen(ruta) {
  return CDN_BASE + '/' + ruta;
}
