/* ==========================================================================
   PLACEHOLDER CONTENT
   --------------------------------------------------------------------------
   All copy, stats, and project data below are illustrative placeholders
   based on the brief and Ingeorbe's public site metadata. Replace with
   real content, real numbers, and real project case studies before launch.
   ========================================================================== */

/* Maps a project's sector to a distinct placeholder icon under /public/sectors.
   Each project's `image` field below is set directly to match its `sector`
   using this mapping. Adding a new project: look up its sector here and use
   the matching path, or use /sectors/general.svg for an unmapped sector.
   Once real project photography exists, replace `image` with the real photo
   path and this mapping becomes purely historical reference. */
export const sectorPlaceholderImage: Record<string, string> = {
  "Infraestructura Pública": "/sectors/infraestructura-publica.svg",
  "Seguridad Vial": "/sectors/seguridad-vial.svg",
  Vivienda: "/sectors/vivienda.svg",
  Industrial: "/sectors/industrial.svg",
  "Desarrollo Urbano": "/sectors/desarrollo-urbano.svg",
  Ambiental: "/sectors/ambiental.svg",
};

export const stats = [
  { value: "20+", label: "Años de experiencia" },
  { value: "50+", label: "Proyectos ejecutados" },
  { value: "30+", label: "Clientes atendidos" },
  { value: "25", label: "Municipios cubiertos" },
];

export const services = [
  {
    code: "01",
    title: "Consultoría en Ingeniería Civil",
    description:
      "Asesoría técnica integral para proyectos de infraestructura pública y privada, desde la conceptualización hasta la entrega.",
    benefits: [
      "Diagnóstico técnico",
      "Diseño de soluciones",
      "Acompañamiento normativo",
    ],
    slug: "consultoria-ingenieria-civil",
    longDescription:
      "Acompañamos a entidades públicas y empresas privadas en cada decisión técnica de su proyecto de infraestructura, desde los estudios preliminares hasta la entrega final. Nuestro equipo evalúa alternativas, cuantifica riesgos y entrega recomendaciones claras y defendibles ante los entes de control.",
    process: [
      "Diagnóstico inicial",
      "Evaluación de alternativas",
      "Diseño de solución técnica",
      "Acompañamiento en ejecución",
    ],
  },
  {
    code: "02",
    title: "Estudios de Tránsito y Transporte",
    description:
      "Análisis de movilidad, capacidad vial y demanda de transporte para sustentar proyectos ante autoridades competentes.",
    benefits: [
      "Aforos y modelación",
      "Estudios de impacto",
      "Soporte ante entidades",
    ],
    slug: "estudios-transito-transporte",
    longDescription:
      "Realizamos aforos vehiculares y peatonales, modelamos escenarios de demanda y elaboramos los estudios de impacto que las secretarías de movilidad y tránsito exigen para aprobar un proyecto. Cada estudio se entrega con el respaldo técnico necesario para sustentarlo ante la entidad correspondiente.",
    process: [
      "Aforos en campo",
      "Modelación de demanda",
      "Estudio de impacto",
      "Radicación y seguimiento ante la entidad",
    ],
  },
  {
    code: "03",
    title: "Interventoría Técnica",
    description:
      "Supervisión independiente que garantiza el cumplimiento técnico, presupuestal y normativo durante la ejecución de obra.",
    benefits: [
      "Control de calidad",
      "Seguimiento de cronograma",
      "Verificación de especificaciones",
    ],
    slug: "interventoria-tecnica",
    longDescription:
      "Supervisamos la ejecución de la obra como un tercero independiente, verificando que lo construido corresponda a lo diseñado, dentro del presupuesto y el cronograma aprobados. Nuestros informes de interventoría son el respaldo documental que el contratante necesita frente a la entidad o el inversionista.",
    process: [
      "Revisión de diseños y especificaciones",
      "Supervisión en obra",
      "Control de cronograma y presupuesto",
      "Informes y acta de entrega",
    ],
  },
  {
    code: "04",
    title: "Planeación de Movilidad",
    description:
      "Planes estratégicos de movilidad urbana que equilibran capacidad vial, seguridad y crecimiento de la ciudad.",
    benefits: [
      "Planes maestros",
      "Modelación de escenarios",
      "Articulación institucional",
    ],
    slug: "planeacion-movilidad",
    longDescription:
      "Diseñamos planes maestros de movilidad que anticipan el crecimiento urbano y proponen soluciones de largo plazo, articulando los intereses de la entidad, la comunidad y los operadores de transporte. Trabajamos de la mano con las autoridades locales durante todo el proceso de aprobación.",
    process: [
      "Diagnóstico de movilidad actual",
      "Modelación de escenarios futuros",
      "Formulación del plan maestro",
      "Articulación institucional",
    ],
  },
  {
    code: "05",
    title: "Seguridad Vial",
    description:
      "Diseño e implementación de planes estratégicos y locales de seguridad vial alineados con la normativa vigente.",
    benefits: [
      "PESV y PLSV",
      "Auditorías de seguridad",
      "Reducción de siniestralidad",
    ],
    slug: "seguridad-vial",
    longDescription:
      "Formulamos e implementamos Planes Estratégicos y Locales de Seguridad Vial (PESV y PLSV) alineados con la normativa colombiana vigente, con el objetivo de reducir la siniestralidad y proteger a todos los actores de la vía.",
    process: [
      "Diagnóstico de siniestralidad",
      "Formulación del plan",
      "Implementación de medidas",
      "Seguimiento y auditoría",
    ],
  },
  {
    code: "06",
    title: "Gerencia de Proyectos",
    description:
      "Dirección integral de proyectos de infraestructura, con control de alcance, tiempo, costo y calidad.",
    benefits: [
      "Planeación integral",
      "Control de riesgos",
      "Reportería ejecutiva",
    ],
    slug: "gerencia-proyectos",
    longDescription:
      "Dirigimos proyectos de infraestructura de principio a fin, integrando alcance, tiempo, costo y calidad bajo un único equipo de gestión. Entregamos reportería ejecutiva clara para que el cliente tenga visibilidad total del estado del proyecto en cada momento.",
    process: [
      "Planeación integral del proyecto",
      "Gestión de alcance y cronograma",
      "Control de riesgos",
      "Reportería ejecutiva periódica",
    ],
  },
];

export const team = [
  {
    name: "Nombre Apellido",
    role: "Cargo / Posición",
    photo: "/placeholder-portrait.svg",
  },
  {
    name: "Nombre Apellido",
    role: "Cargo / Posición",
    photo: "/placeholder-portrait.svg",
  },
  {
    name: "Nombre Apellido",
    role: "Cargo / Posición",
    photo: "/placeholder-portrait.svg",
  },
];

// Placeholder client logos — swap each src for the real client logo (SVG or PNG, transparent bg recommended).
export const clientLogos = [
  { name: "ANSV Logo", src: "/logos/ansv_logo.svg" },
  { name: "CAF Logo", src: "/logos/caf_logo.svg" },
  { name: "CDM Logo", src: "/logos/cdm_logo.svg" },
  { name: "FONDO Logo", src: "/logos/fondo_logo.svg" },
  { name: "IDU Logo", src: "/logos/idu_logo.svg" },
  { name: "INVIAS Logo", src: "/logos/invias_logo.svg" },
  { name: "KENNEDY Logo", src: "/logos/kennedy_logo.svg" },
  { name: "MINTRANS Logo", src: "/logos/mintrans_logo.svg" },
  { name: "UN Logo", src: "/logos/nacional_logo.svg" },
  { name: "PARAGUAY Logo", src: "/logos/paraguay_logo.svg" },
  { name: "SIGMA Logo", src: "/logos/sigma_logo.svg" },
];

export const industries = [
  "Infraestructura Pública",
  "Transporte",
  "Desarrollo Urbano",
  "Vivienda",
  "Comercial",
  "Industrial",
  "Ambiental",
];

export const projects = [
  {
    name: "INTERVENTORÍA - AUDITORIO LEÓN DE GREIFF - UNAL",
    location: "Bogotá, Colombia",
    sector: "Infraestructura Pública",
    client: "Entidad Distrital (placeholder)",
    scope: "Info Info info",
    outcome: "Info info info",
    // scope: "Estudios de tránsito y diseño geométrico para corredor de 4.2 km.",
    // outcome: "Reducción proyectada del 18% en tiempos de viaje en hora pico.",
    image: "/sectors/infraestructura-publica.svg",
  },
  {
    name: "PASO SUBTERRÁNEO CALLE 76 - AV. CARÁCAS – BOGOTÁ D.C",
    location: "Soacha, Cundinamarca",
    sector: "Seguridad Vial",
    client: "Municipio (placeholder)",
    scope: "Info Info info",
    outcome: "Info info info",
    // scope: "Estudios de tránsito y diseño geométrico para corredor de 4.2 km.",
    // outcome: "Reducción proyectada del 18% en tiempos de viaje en hora pico.",
    image: "/sectors/seguridad-vial.svg",
  },
  {
    name: "INTERVENTORÍA - AVENIDA DE LAS AMÉRICAS - BOGOTÁ D.C",
    location: "Chía, Cundinamarca",
    sector: "Vivienda",
    client: "Constructora privada (placeholder)",
    scope: "Info Info info",
    outcome: "Info info info",
    // scope: "Estudios de tránsito y diseño geométrico para corredor de 4.2 km.",
    // outcome: "Reducción proyectada del 18% en tiempos de viaje en hora pico.",
    image: "/sectors/vivienda.svg",
  },
  {
    name: "PLANES DE SEGURIDAD VIAL EN COLOMBIA",
    location: "Bogotá, Colombia",
    sector: "Industrial",
    client: "Parque industrial (placeholder)",
    scope: "Info Info info",
    outcome: "Info info info",
    // scope: "Estudios de tránsito y diseño geométrico para corredor de 4.2 km.",
    // outcome: "Reducción proyectada del 18% en tiempos de viaje en hora pico.",
    image: "/sectors/industrial.svg",
  },
  {
    name: "INTERVENTORÍA - CONSERVACIÓN DE PUENTES VEHÍCULARES Y PEATONALES - BOGOTÁ D.C",
    location: "Mosquera, Cundinamarca",
    sector: "Infraestructura Pública",
    client: "Entidad Municipal (placeholder)",
    scope: "Info Info info",
    outcome: "Info info info",
    // scope: "Estudios de tránsito y diseño geométrico para corredor de 4.2 km.",
    // outcome: "Reducción proyectada del 18% en tiempos de viaje en hora pico.",
    image: "/sectors/infraestructura-publica.svg",
  },
  {
    name: "INTERVENTORÍA - CONSTRUCCIÓN TRAMO AV. CIUDAD DE CALI - BOGOTÁ D.C",
    location: "Zipaquirá, Cundinamarca",
    sector: "Desarrollo Urbano",
    client: "Alcaldía Municipal (placeholder)",
    scope: "Info Info info",
    outcome: "Info info info",
    // scope: "Estudios de tránsito y diseño geométrico para corredor de 4.2 km.",
    // outcome: "Reducción proyectada del 18% en tiempos de viaje en hora pico.",
    image: "/sectors/desarrollo-urbano.svg",
  },
  {
    name: "PLAN DE MANEJO HIDROSEDIMENTOLÓGICO - CANAL DEL DIQUE",
    location: "Bogotá, Colombia",
    sector: "Ambiental",
    client: "Entidad Ambiental (placeholder)",
    scope: "Info Info info",
    outcome: "Info info info",
    // scope: "Estudios de tránsito y diseño geométrico para corredor de 4.2 km.",
    // outcome: "Reducción proyectada del 18% en tiempos de viaje en hora pico.",
    image: "/sectors/ambiental.svg",
  },
];

export const testimonials = [
  {
    quote:
      "El equipo de Ingeorbe acompañó nuestro proyecto con rigor técnico y comunicación constante en cada etapa.",
    name: "Nombre Apellido (placeholder)",
    role: "Gerente de Proyecto",
    company: "Constructora (placeholder)",
  },
  {
    quote:
      "Su conocimiento normativo y capacidad de respuesta fueron clave para sacar adelante el estudio dentro del plazo.",
    name: "Nombre Apellido (placeholder)",
    role: "Directora de Planeación",
    company: "Entidad Pública (placeholder)",
  },
];

export const differentiators = [
  {
    title: "Experiencia técnica",
    description:
      "Equipo multidisciplinario con trayectoria en proyectos públicos y privados.",
  },
  {
    title: "Conocimiento normativo",
    description:
      "Dominio de la regulación colombiana vigente en cada fase del proyecto.",
  },
  {
    title: "Presencia local",
    description:
      "Conocimiento profundo del contexto y los actores institucionales de la región.",
  },
  {
    title: "Equipo multidisciplinario",
    description:
      "Ingenieros civiles, de tránsito y especialistas en movilidad bajo un mismo equipo.",
  },
  {
    title: "Entrega comprobada",
    description:
      "Historial de proyectos entregados a tiempo y dentro del presupuesto.",
  },
];
