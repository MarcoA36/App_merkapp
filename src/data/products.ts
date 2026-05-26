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
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6R85vgVrqqVjd3JrPtoYtMpqiGzmUX7ciVQ&s",

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
      "https://casaomarynietos.com.ar/wp-content/uploads/2025/03/376545-800-auto.png",

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
      "https://arcordiezb2c.vteximg.com.br/arquivos/ids/178970/Papas-Fritas-Clasicas-Lays-230-Gr-1-16959.jpg?v=638270409665500000",

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
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDC3ezKHigVX2hZDaJ6ptSwaTm--Wdxw6aOA&s",

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
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrLqkXiJi55ZYeYMbDDlAjhWKU9j98OySrXg&s",

    price: 4600,
    oldPrice: 5200,
    offer: true,
    stock: true,
    brandId: "ariel",

    categoryId: "limpieza",
  },

  {
    id: "lavandina",
    name: "Ayudin Lavandina x 2 lts",
    description:
      "Lavandina concentrada multiuso para limpieza profunda y desinfección de superficies, pisos y baños. Excelente rendimiento para el hogar.",
    image:
      "https://distriflash.com.ar/wp-content/uploads/2018/10/0718-AYUDIN-LAVANDINA-CLASICA-x2ltr.jpg",

    price: 2500,
    offer: false,
    stock: true,
    brandId: "ayudin",
    categoryId: "limpieza",
  },

  {
    id: "cafe",
    name: "Cafe Instantane Nescafe Dolca 100 g",
    description:
      "Café instantáneo premium con aroma intenso y sabor equilibrado. Fácil de preparar y perfecto para comenzar el día con energía.",
    image:
      "https://shop.nestle.com.ar/cdn/shop/files/8445291082113.png?v=1771205649&width=1946",

    price: 6700,
    oldPrice: 7600,
    offer: true,
    stock: true,
    brandId: "nescafe",

    categoryId: "desayuno",
  },

  {
    id: "cereal",
    name: "Cereal Nesfit 220 g",
    description:
      "Cereal crocante sabor chocolate ideal para desayunos y meriendas. Fuente de energía para toda la familia con sabor irresistible.",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_937088-MLA92776665435_092025-O.webp",

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
      "https://chihuahua.com.ar/wp-content/uploads/2025/03/dog-chow-salsa-perro-adulto-1.png",

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
      "https://w7.pngwing.com/pngs/84/576/png-transparent-purina-cat-chow-complete-dry-cat-food-dog-cat-food-animals-pet.png",

    price: 7900,
    offer: false,
    stock: true,
    brandId: "dogchow",

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
  id: "colgate-total",
  name: "Colgate Total 12 Crema Dental 180g",
   description:
      "Dentifrico.",
  image:
    "https://farmaciasdelpueblo.vtexassets.com/arquivos/ids/189458/Colgate-Pasta-dental-Colgate-Total-Professional-Whitening-x-140-gr-7509546688367_img1.png?v=638509686224300000",

  price: 7500,
  oldPrice: 10900,
  offer: true,
  stock: true,

  brandId: "colgate",

  categoryId: "higiene",
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