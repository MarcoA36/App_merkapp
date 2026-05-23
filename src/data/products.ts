export const products = [
  // =========================
  // BODEGA
  // =========================

  {
    id: "coca-225",
    name: "Coca Cola 2.25L",
    description:
      "Gaseosa Coca Cola sabor original en presentación retornable de 2.25 litros. Ideal para compartir en almuerzos, reuniones y comidas familiares. Bebida refrescante con el sabor clásico de siempre.",
    image:
      "https://placehold.co/400x400/png",

    price: 3500,
    oldPrice: 4200,
    offer: true,
    stock: true,
    brandId: "coca-cola",

    categoryId: "bebidas",
  },

  {
    id: "pepsi-15",
    name: "Pepsi 1.5L",
    description:
      "Gaseosa Pepsi descartable de 1.5 litros con sabor intenso y refrescante. Perfecta para acompañar comidas, snacks o disfrutar bien fría en cualquier momento del día.",
    image:
      "https://placehold.co/400x400/png",

    price: 2900,
    offer: false,
    stock: true,
    brandId: "pepsi",

    categoryId: "bebidas",
  },

  {
    id: "papas-lays",
    name: "Papas Lays Clásicas",
    description:
      "Papas fritas Lays clásicas crocantes y livianas. Elaboradas con papas seleccionadas y sal justa para disfrutar en reuniones, picadas o como snack diario.",
    image:
      "https://placehold.co/400x400/png",

    price: 1800,
    offer: true,
    oldPrice: 2300,
    stock: true,
    brandId: "lays",
    categoryId: "snacks",
  },

  {
    id: "oreo",
    name: "Galletitas Oreo",
    description:
      "Galletitas Oreo rellenas sabor vainilla con el clásico sabor dulce y crocante. Ideales para meriendas, postres o acompañar café y leche.",
    image:
      "https://placehold.co/400x400/png",

    price: 2100,
    offer: false,
    stock: true,
    brandId: "oreo",

    categoryId: "snacks",
  },

  {
    id: "detergente-ariel",
    name: "Detergente Ariel",
    description:
      "Detergente líquido Ariel de alta limpieza para ropa. Ayuda a remover manchas difíciles y deja una fragancia fresca y duradera.",
    image:
      "https://placehold.co/400x400/png",

    price: 4600,
    oldPrice: 5200,
    offer: true,
    stock: true,
    brandId: "ariel",

    categoryId: "limpieza",
  },

  {
    id: "lavandina",
    name: "Lavandina Premium",
    description:
      "Lavandina concentrada multiuso para limpieza profunda y desinfección de superficies, pisos y baños. Excelente rendimiento para el hogar.",
    image:
      "https://placehold.co/400x400/png",

    price: 2500,
    offer: false,
    stock: true,
    brandId: "ayudin",
    categoryId: "limpieza",
  },

  {
    id: "cafe",
    name: "Café Instantáneo",
    description:
      "Café instantáneo premium con aroma intenso y sabor equilibrado. Fácil de preparar y perfecto para comenzar el día con energía.",
    image:
      "https://placehold.co/400x400/png",

    price: 6700,
    oldPrice: 7600,
    offer: true,
    stock: true,
    brandId: "nescafe",

    categoryId: "desayuno",
  },

  {
    id: "cereal",
    name: "Cereal de Chocolate",
    description:
      "Cereal crocante sabor chocolate ideal para desayunos y meriendas. Fuente de energía para toda la familia con sabor irresistible.",
    image:
      "https://placehold.co/400x400/png",

    price: 3200,
    offer: false,
    stock: true,
    brandId: "nestle",

    categoryId: "desayuno",
  },

  {
    id: "dog-food",
    name: "Alimento Balanceado Perro",
    description:
      "Alimento premium para perros adultos con nutrientes esenciales, proteínas y vitaminas que ayudan a mantener la salud y energía diaria.",
    image:
      "https://placehold.co/400x400/png",

    price: 8900,
    oldPrice: 9800,
    offer: true,
    stock: true,
    brandId: "dogchow",

    categoryId: "mascotas",
  },

  {
    id: "cat-food",
    name: "Alimento para Gato",
    description:
      "Balanceado completo sabor salmón para gatos adultos. Fórmula rica en proteínas y minerales para una alimentación saludable.",
    image:
      "https://placehold.co/400x400/png",

    price: 7900,
    offer: false,
    stock: true,
    brandId: "catchow",

    categoryId: "mascotas",
  },

  // =========================
  // FARMACIA
  // =========================

  {
    id: "ibuprofeno",
    name: "Ibuprofeno 600mg",
    description:
      "Medicamento analgésico y antiinflamatorio utilizado para aliviar dolores musculares, fiebre, inflamaciones y molestias generales.",
    image:
      "https://placehold.co/400x400/png",

    price: 4200,
    oldPrice: 5000,
    offer: true,
    stock: true,
    brandId: "bayer",

    categoryId: "analgesicos",
  },

  {
    id: "paracetamol",
    name: "Paracetamol 500mg",
    description:
      "Analgésico y antifebril de rápida acción indicado para aliviar dolores leves y moderados además de reducir la fiebre.",
    image:
      "https://placehold.co/400x400/png",

    price: 3100,
    offer: false,
    stock: true,
    brandId: "bayer",

    categoryId: "analgesicos",
  },

  {
    id: "centrum",
    name: "Vitaminas Centrum",
    description:
      "Complejo multivitamínico diario con vitaminas y minerales esenciales para complementar la alimentación y fortalecer el organismo.",
    image:
      "https://placehold.co/400x400/png",

    price: 7800,
    oldPrice: 9200,
    offer: true,
    stock: true,
    brandId: "centrum",
    categoryId: "vitaminas",
  },

  {
    id: "vitamina-c",
    name: "Vitamina C 1g",
    description:
      "Suplemento de vitamina C de alta concentración que ayuda al sistema inmunológico y aporta energía para el día a día.",
    image:
      "https://placehold.co/400x400/png",

    price: 3900,
    offer: false,
    stock: true,
    brandId: "centrum",

    categoryId: "vitaminas",
  },

  {
    id: "shampoo",
    name: "Shampoo Nivea",
    description:
      "Shampoo hidratante de uso diario que limpia profundamente el cabello dejando suavidad, brillo y aroma fresco.",
    image:
      "https://placehold.co/400x400/png",

    price: 5200,
    oldPrice: 6100,
    offer: true,
    stock: true,
    brandId: "nivea",

    categoryId: "higiene",
  },

  {
    id: "jabon-liquido",
    name: "Jabón Líquido",
    description:
      "Jabón líquido antibacterial ideal para manos y cuerpo. Fórmula suave que limpia y protege la piel diariamente.",
    image:
      "https://placehold.co/400x400/png",

    price: 2700,
    offer: false,
    stock: true,
    brandId: "nivea",

    categoryId: "higiene",
  },

  {
    id: "panales",
    name: "Pañales Huggies",
    description:
      "Pañales descartables talle grande con máxima absorción y protección prolongada para mayor comodidad del bebé.",
    image:
      "https://placehold.co/400x400/png",

    price: 13500,
    oldPrice: 14900,
    offer: true,
    stock: true,
    brandId: "huggies",

    categoryId: "bebes",
  },

  {
    id: "toallitas",
    name: "Toallitas Húmedas",
    description:
      "Toallitas húmedas suaves y refrescantes para higiene diaria del bebé. Aptas para piel sensible.",
    image:
      "https://placehold.co/400x400/png",

    price: 3400,
    offer: false,
    stock: true,
    brandId: "huggies",
    categoryId: "bebes",
  },

  {
    id: "crema-facial",
    name: "Crema Facial Nivea",
    description:
      "Crema hidratante facial para uso diario que ayuda a mantener la piel suave, humectada y protegida.",
    image:
      "https://placehold.co/400x400/png",

    price: 6200,
    oldPrice: 7100,
    offer: true,
    stock: true,
    brandId: "nivea",
    categoryId: "dermocosmetica",
  },

  {
    id: "protector-solar",
    name: "Protector Solar FPS 50",
    description:
      "Protector solar de alta cobertura FPS 50 que ayuda a proteger la piel de los rayos UV y prevenir daños solares.",
    image:
      "https://placehold.co/400x400/png",

    price: 8700,
    offer: false,
    stock: true,
    brandId: "nivea",
    categoryId: "dermocosmetica",
  },
];