const images = [
  "./Therockimg.png",
  "./Asteroid_16fc296ce02_original-ratio.jpg",
  "./flat,750x,075,f-pad,750x1000,f8f8f8.jpg",
  "./pulp-fiction-john-travolta.gif",
];

export const questionsMano = [
  {
    question: "¿Cúal es su origen?",
    answers: ["Fanerítico", "Afanítico", "Vítreo", "Vesicular"],
  },
  {
    question: "¿Cuál es su composición?",
    answers: ["Félsica", "Intermedia", "Máfica", "Ultramáfica"],
  },
  { question: "¿Tiene fenocristales y matriz?", answers: ["Si", "No"] },
];

export function determineRockTypeMano(answers) {
  const randomImage = images[Math.floor(Math.random() * images.length)];
  if (
    answers[0] === "Fanerítico" &&
    answers[1] === "Félsica" &&
    answers[2] === "No"
  ) {
    return {
      name: "Granito",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh_d7gxhUzVvS3MhxbLxprrJPTdEDkXBsxoQOEWsH0D1HmrEp_NgPAvSv1W-EzRFP26n-3bClgshJ5wf7n-Pdno7lV6bA6Z0B-olT9IUsUpDgdbYoSHz3GJuqz2J8Dzwc8tviBUM9Hh8gM/s1600/granito.jpg",
      description:
        "El granito es una roca ígnea plutónica formada por la solidificación lenta de una masa de magma a gran profundidad en la corteza terrestre. Está compuesto por cuarzo, feldespato y mica.",
    };
  }
  if (
    answers[0] === "Fanerítico" &&
    answers[1] === "Intermedia" &&
    answers[2] === "No"
  ) {
    return {
      name: "Diorita",
      image:
        "https://rockidentifier.com/image-handle/image/1080/153992178379522079.jpeg?x-oss-process=image/format,webp",
      description:
        "La diorita es una roca ígnea intermedia formada por el enfriamiento tanto lento como rápido del magma en la corteza terrestre. Está compuesta principalmente por feldespato plagioclasa, hornblenda y biotita, con textura granular y coloración generalmente grisácea.",
    };
  }

  if (
    answers[0] === "Fanerítico" &&
    answers[1] === "Intermedia" &&
    answers[2] === "Si"
  ) {
    return {
      name: "Pórfido Diorítico",
      image:
        "https://www.researchgate.net/profile/Figempa-Uce/publication/351102141/figure/fig1/AS:1016878323482630@1619454093588/Figura-3-a-Porfido-dioritico-con-vetillas-tipo-B-b-Tonalita-con-sulfuros-diseminados.ppm",
      description:
        "La diorita es una roca ígnea intermedia formada por el enfriamiento tanto lento como rápido del magma en la corteza terrestre. Está compuesta principalmente por feldespato plagioclasa, hornblenda y biotita, con textura granular y coloración generalmente grisácea, en este caso con dos velocidades de enfriamiento.",
    };
  }

  if (
    answers[0] === "Fanerítico" &&
    answers[1] === "Máfica" &&
    answers[2] === "No"
  ) {
    return {
      name: "Gabro",
      image:
        "https://rockidentifier.com/image-handle/image/1080/154071098403586083.jpeg?x-oss-process=image/format,webp",
      description:
        "El gabro es una roca ígnea intrusiva formada por el enfriamiento lento del magma en la corteza terrestre. Está compuesto principalmente por minerales como el feldespato plagioclasa, piroxeno y olivino, con una textura granular y una coloración oscura, que puede variar desde gris verdoso hasta negro.",
    };
  }

  if (
    answers[0] === "Fanerítico" &&
    answers[1] === "Ultramáfica" &&
    answers[2] === "No"
  ) {
    return {
      name: "Peridotita",
      image:
        "https://rockidentifier.com/image-handle/image/1080/154225730111143937.jpeg?x-oss-process=image/format,webp",
      description:
        "La peridotita es una roca ígnea ultramáfica que se encuentra comúnmente en la parte inferior de la corteza terrestre y en el manto superior. Está compuesta principalmente por minerales como olivino y piroxeno, con una textura granular y una coloración generalmente verde oliva debido a la presencia de olivino.",
    };
  }

  if (
    answers[0] === "Afanítico" &&
    answers[1] === "Félsica" &&
    answers[2] === "No"
  ) {
    return {
      name: "Riolita",
      image:
        "https://i0.wp.com/geotecniafacil.com/wp-content/uploads/2022/06/Riolita.jpg?w=800&ssl=1",
      description:
        "La riolita es una roca ígnea extrusiva formada por el enfriamiento rápido del magma volcánico en la superficie terrestre. Está compuesta principalmente por cuarzo, feldespato y minerales félsicos.",
    };
  }

  if (
    answers[0] === "Afanítico" &&
    answers[1] === "Intermedia" &&
    answers[2] === "No"
  ) {
    return {
      name: "Andesita",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Andesita_hornbl%C3%A9ndica.jpg/680px-Andesita_hornbl%C3%A9ndica.jpg",
      description:
        "La andesita es una roca ígnea intermedia formada por el enfriamiento tanto lento como rápido del magma en la corteza terrestre. Está compuesta principalmente por feldespato plagioclasa, hornblenda y biotita, con una textura generalmente porfídica y coloración grisácea.",
    };
  }

  if (
    answers[0] === "Afanítico" &&
    answers[1] === "Intermedia" &&
    answers[2] === "Si"
  ) {
    return {
      name: "Pórfido Andesítico",
      image:
        "https://bibdigital.epn.edu.ec/bitstream/15000/15577/1/ign-1-19-11-a.JPG",
      description:
        "La andesita es una roca ígnea intermedia formada por el enfriamiento tanto lento como rápido del magma en la corteza terrestre. Está compuesta principalmente por feldespato plagioclasa, hornblenda y biotita, con una textura generalmente porfídica y coloración grisácea. En este caso con dos velocidades de enfriamiento.",
    };
  }

  if (
    answers[0] === "Afanítico" &&
    answers[1] === "Máfica" &&
    answers[2] === "No"
  ) {
    return {
      name: "Basalto",
      image:
        "https://rockidentifier.com/image-handle/image/1080/154226687888850955.jpeg?x-oss-process=image/format,webp",
      description:
        "El basalto es una roca ígnea extrusiva formada por el enfriamiento rápido del magma volcánico en la superficie terrestre. Está compuesto principalmente por minerales como feldespato plagioclasa, piroxeno y olivino, con una textura generalmente fina y una coloración oscura, que varía desde negro a gris oscuro.",
    };
  }

  if (
    answers[0] === "Afanítico" &&
    answers[1] === "Ultramáfica" &&
    answers[2] === "No"
  ) {
    return {
      name: "Komalita",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/f/fd/KomatiiteCanada_682By512.jpg",
      description:
        "La komatiita es una roca ígnea extrusiva. Está compuesta principalmente por olivino y piroxeno, con una textura ultramáfica muy fina y una coloración verde oscuro a negra.",
    };
  }

  if (answers[0] === "Vítreo") {
    return {
      name: "Obsidiana",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/8/8c/ObsidianOregon.jpg",
      description:
        "La obsidiana es una roca ígnea extrusiva que se forma por el enfriamiento brusco o muy rápido de la lava expulsada durante erupciones volcánicas explosivas. Aunque a menudo se confunde con un mineral, geológicamente se clasifica como una roca debido a su composición vítrea y amorfa. Principalmente compuesta de sílice, la obsidiana es conocida por su color oscuro y su brillo vítreo.",
    };
  }

  if (
    answers[0] === "Vesicular" &&
    answers[1] === "Félsica" &&
    answers[2] === "No"
  ) {
    return {
      name: "Pumita",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Teidepumice.jpg/290px-Teidepumice.jpg",
      description:
        "La pumita, también conocida como piedra pómez, es una roca volcánica que se caracteriza por ser altamente porosa y tener una densidad muy baja. Está compuesta casi en su totalidad por vidrio volcánico, lo que le otorga una composición química félsica y colores claros. La pumita se forma cuando una roca supercalentada y altamente presurizada es expulsada violentamente desde un volcán.",
    };
  }

  if (
    answers[0] === "Vesicular" &&
    answers[1] === "Intermedia" &&
    answers[2] === "No"
  ) {
    return {
      name: "Escoria Volcánica",
      image:
        "https://i0.wp.com/geologyscience.com/wp-content/uploads/2023/08/R-13.jpeg?fit=750%2C558&ssl=1",
      description:
        "Se denomina escoria volcánica a varios materiales de origen volcánico. Uno de estos es material vesiculado de tamaño lapilli o mayor de composición basáltica o andesítica. Otro uso del término es para denominar la corteza áspera y vesiculada de corridas de lava andesitica o basáltica.",
    };
  }

  if (
    answers[0] === "Vesicular" &&
    answers[1] === "Máfica" &&
    answers[2] === "No"
  ) {
    return {
      name: "Escoria Volcánica",
      image:
        "https://i0.wp.com/geologyscience.com/wp-content/uploads/2023/08/R-13.jpeg?fit=750%2C558&ssl=1",
      description:
        "Se denomina escoria volcánica a varios materiales de origen volcánico. Uno de estos es material vesiculado de tamaño lapilli o mayor de composición basáltica o andesítica. Otro uso del término es para denominar la corteza áspera y vesiculada de corridas de lava andesitica o basáltica.",
    };
  } else {
    return {
      name: "No hay roca aquí",
      image: randomImage,
      description: "Se fue caminando...",
    };
  }
}

export function determineRockTypeDelgadoFelsico(type, p1, p2) {
  const randomImage = images[Math.floor(Math.random() * images.length)];
  if (type == "Intrusivo" && p1 <= 10 && p2 <= 60 && p2 >= 20) {
    return {
      name: "GRANITOIDE DE FELDESPATO ALCALINO",
      image: "http://edafologia.ugr.es/rocas/fotos/granito-alcalino-ana-4.jpg",
      description:
        "Un granitoide de feldespato alcalino es una roca ígnea intrusiva que pertenece al grupo de los granitoides y contiene feldespatos alcalinos como componentes principales. Estos feldespatos alcalinos incluyen ortoclasa, microclina y a veces albita. Este tipo de roca puede variar en composición, pero tiende a tener una textura granular y puede contener otros minerales como cuarzo, biotita, hornblenda y moscovita.",
    };
  }

  if (type == "Intrusivo" && p1 <= 10 && p2 <= 20) {
    return {
      name: "SIENITA DE FELDESPATO ALCALINO",
      image:
        "http://edafologia.ugr.es/rocas/fotos3/Sienita-alcalina-14-1b-ana.jpg",
      description:
        "La sienita de feldespato alcalino es una roca ígnea plutónica compuesta principalmente por feldespato alcalino, como ortoclasa o microclina, junto con cantidades variables de otros minerales como plagioclasa, anfíbol (a menudo hornblenda), biotita y ocasionalmente otros minerales félsicos. Tiene una textura granular y puede exhibir una variedad de colores, incluidos tonos claros, grises, verdes o rosados, dependiendo de la composición mineralógica específica. La sienita de feldespato alcalino es más rica en feldespato alcalino en comparación con la sienita común, que está dominada por plagioclasa.",
    };
  }

  if (type == "Intrusivo" && p1 <= 60 && p1 >= 10 && p2 <= 60 && p2 >= 20) {
    return {
      name: "GRANITO",
      image: "http://edafologia.ugr.es/rocas/fotos/granito-biotitico-ana-1.jpg",
      description:
        "El granito es una roca ígnea plutónica formada por el enfriamiento lento del magma en la corteza terrestre. Está compuesto principalmente por cuarzo, feldespato y mica, con una textura granular y una coloración que varía desde blanco hasta gris, dependiendo de la composición mineralógica específica.",
    };
  }

  if (type == "Intrusivo" && p1 <= 30 && p1 >= 10 && p2 <= 20) {
    return {
      name: "SIENITA",
      image:
        "http://edafologia.ugr.es/rocas/fotos4/sienita-horblenda-13-8-ana.jpg",
      description:
        "La sienita es una roca ígnea plutónica compuesta principalmente por feldespato alcalino, generalmente feldespato potásico, junto con plagioclasa, anfíbol y/o piroxeno. Tiene una textura granular y una coloración que puede variar desde blanco hasta tonos más oscuros debido a la presencia de minerales ferromagnesianos.",
    };
  }

  if (type == "Intrusivo" && p1 <= 60 && p1 >= 30 && p2 <= 20) {
    return {
      name: "MONZONITA",
      image: "http://edafologia.ugr.es/rocas/fotos3/monzonita-6-1-ana.jpg",
      description:
        "La monzonita es una roca ígnea plutónica compuesta principalmente por feldespato plagioclasa y feldespato potásico, con cantidades variables de minerales ferromagnesianos como biotita y hornblenda. Tiene una textura granular y una coloración que puede variar desde gris claro hasta rosa, dependiendo de la composición mineralógica específica.",
    };
  }

  if (type == "Intrusivo" && p1 <= 90 && p1 >= 60 && p2 <= 20) {
    return {
      name: "MONZOGABRO",
      image:
        "https://petroignea.wordpress.com/wp-content/uploads/2013/03/1211-monzosienita-lc3a1mina-1b-prc3a1cticas.jpg?w=300",
      description:
        "La monzogabro es una roca ígnea plutónica que muestra características intermedias entre la monzonita y el gabro. Está compuesta principalmente por minerales como plagioclasa, piroxeno, y a veces hornblenda y biotita. Tiene una textura granular y una coloración generalmente oscura, que puede variar desde gris verdoso hasta negro.",
    };
  }

  if (type == "Intrusivo" && p1 <= 100 && p1 >= 90 && p2 <= 20) {
    return {
      name: "DIORITA O GABRO",
      image: "http://edafologia.ugr.es/rocas/fotos3/gabro-30-4-ana.jpg",
      description:
        "El gabro es una roca ígnea plutónica compuesta principalmente por minerales como feldespato plagioclasa, piroxeno y, en ocasiones, olivino. Tiene una textura granular y una coloración generalmente oscura, que varía desde gris verdoso hasta negro.",
    };
  }

  if (type == "Intrusivo" && p1 <= 90 && p1 >= 60 && p2 <= 60 && p2 >= 20) {
    return {
      name: "GRANODIORITA",
      image:
        "https://petroignea.wordpress.com/wp-content/uploads/2013/03/1203-granodiorita-1b-mia.jpg?w=300",
      description:
        "La granodiorita es una roca ígnea plutónica compuesta principalmente por feldespato plagioclasa y cuarzo, con cantidades menores de minerales ferromagnesianos como biotita y hornblenda. Tiene una textura granular y una coloración que puede variar desde gris claro hasta gris oscuro, con una apariencia moteada debido a la distribución de minerales.",
    };
  }

  if (type == "Intrusivo" && p1 <= 90 && p1 >= 10 && p2 <= 60 && p2 >= 20) {
    return {
      name: "TONALITA",
      image: "http://edafologia.ugr.es/rocas/fotos3/tonalita-24-12-ana.jpg",
      description:
        "La tonalita es una roca ígnea plutónica compuesta principalmente por feldespato plagioclasa y cuarzo, con cantidades menores de minerales ferromagnesianos como biotita y hornblenda. Tiene una textura granular y una coloración que puede variar desde gris claro hasta gris oscuro.",
    };
  }
  if (type == "Extrusivo" && p1 <= 10 && p2 <= 60 && p2 >= 20) {
    return {
      name: "RIOLITA DE FELDESPATO ALCALINO",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Imagen_no_disponible.svg/1200px-Imagen_no_disponible.svg.png",
      description:
        "La riolita de feldespato alcalino es una variedad de riolita que contiene cantidades significativas de feldespato alcalino, como feldespato potásico o feldespato sódico, además de los componentes típicos de la riolita. Tiene una textura similar a la riolita estándar, con una matriz vítrea o porfídica y cristales de feldespato alcalino incrustados en la misma.",
    };
  }

  if (type == "Extrusivo" && p1 <= 10 && p2 <= 20) {
    return {
      name: "TRAQUITA DE FELDESPATO ALCALINO",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Imagen_no_disponible.svg/1200px-Imagen_no_disponible.svg.png",
      description:
        "La traquita de feldespato alcalino es una roca ígnea extrusiva compuesta principalmente por feldespato alcalino, como feldespato potásico o feldespato sódico, junto con cantidades menores de minerales como cuarzo, biotita y hornblenda. Tiene una textura generalmente porfídica, con cristales de feldespato alcalino visibles incrustados en una matriz fina o vítrea. La coloración puede variar, pero tiende a ser de tonos claros a grises o rosados.",
    };
  }

  if (type == "Extrusivo" && p1 <= 60 && p1 >= 10 && p2 <= 60 && p2 >= 20) {
    return {
      name: "RIOLITA",
      image: "http://edafologia.ugr.es/rocas/fotos3/riolita-11-7-ana.jpg",
      description:
        "La riolita es una roca ígnea extrusiva formada por el enfriamiento rápido del magma volcánico en la superficie terrestre. Está compuesta principalmente por minerales como cuarzo, feldespato y feldespato potásico, con una textura generalmente vítrea o porfídica y una coloración que varía desde blanco hasta grisáceo o rojizo.",
    };
  }

  if (type == "Extrusivo" && p1 <= 30 && p1 >= 10 && p2 <= 20) {
    return {
      name: "TRAQUITA",
      image: "http://edafologia.ugr.es/rocas/fotos5/traquita-15-9-ana.jpg",
      description:
        "La traquita es una roca ígnea extrusiva compuesta principalmente por feldespato alcalino, como feldespato potásico o feldespato sódico, y biotita, con cantidades menores de otros minerales como cuarzo y hornblenda. Tiene una textura generalmente porfídica, con cristales de feldespato alcalino visibles incrustados en una matriz fina o vítrea. La coloración puede variar, pero tiende a ser de tonos claros a grises o rosados.",
    };
  }

  if (type == "Extrusivo" && p1 <= 60 && p1 >= 30 && p2 <= 20) {
    return {
      name: "LATITA",
      image: "http://edafologia.ugr.es/rocas/fotos3/latita-23-3-ana.jpg",
      description:
        "La latita es una roca ígnea volcánica de composición intermedia entre riolita y trachita. Contiene aproximadamente la misma cantidad de feldespato alcalino y plagioclasa, junto con cantidades variables de minerales máficos como biotita, hornblenda y/o piroxenos. Tiene una textura porfídica, donde cristales de tamaño visible se encuentran dispersos en una matriz fina o vítrea. La latita es de color claro a grisáceo y se forma a partir de magmas de composición intermedia que se enfrían rápidamente en la superficie terrestre durante erupciones volcánicas.",
    };
  }

  if (type == "Extrusivo" && p1 <= 90 && p1 >= 60 && p2 <= 20) {
    return {
      name: "LATITANDESITA",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Imagen_no_disponible.svg/1200px-Imagen_no_disponible.svg.png",
      description:
        "La latitandesita es una roca ígnea volcánica de composición intermedia entre la latita y la andesita. Tiene una proporción equilibrada de feldespatos alcalinos y plagioclasas, junto con minerales máficos como biotita, hornblenda y piroxenos. Su textura es generalmente porfídica, con cristales visibles incrustados en una matriz fina o vítrea. La latitandesita se forma a partir de magmas intermedios que se enfrían rápidamente en la superficie terrestre durante erupciones volcánicas, y su color varía desde tonos claros hasta grises o verdosos.",
    };
  }

  if (type == "Extrusivo" && p1 <= 100 && p1 >= 90 && p2 <= 20) {
    return {
      name: "ANDESITA O BASALTO",
      image:
        "http://edafologia.ugr.es/rocas/fotos3/andesita-hornblendica-27-1-ana.jpg",
      description:
        "La andesita es una roca ígnea volcánica de composición intermedia entre el basalto y el riolita, contiene principalmente plagioclasa, biotita, anfíbol y piroxeno, con una textura generalmente porfídica o a veces afanítica. Su color puede variar desde gris oscuro a gris verdoso, y puede contener cristales visibles incrustados en una matriz fina o vítrea. La andesita es una de las rocas volcánicas más comunes y se encuentra en muchas zonas de actividad volcánica alrededor del mundo/. El basalto es una roca ígnea volcánica de composición máfica que se forma a partir del enfriamiento rápido del magma basáltico en la superficie terrestre. Está compuesto principalmente por minerales oscuros como plagioclasa, piroxenos y olivino, con una textura generalmente fina a vesicular. Su color varía desde negro a gris oscuro y a veces puede presentar tonos rojizos debido a la oxidación. El basalto es una de las rocas más comunes en la corteza terrestre y constituye una parte significativa del lecho oceánico y de muchas llanuras basálticas en la superficie terrestre. (REF de la iamgen Andesita)",
    };
  }

  if (type == "Extrusivo" && p1 <= 90 && p1 >= 60 && p2 <= 60 && p2 >= 20) {
    return {
      name: "DACITA",
      image: "http://edafologia.ugr.es/rocas/fotos4/dacita-26-1-ana.jpg",
      description:
        "La dacita es una roca ígnea volcánica de composición intermedia entre la riolita y la andesita. Se forma por el enfriamiento de magma en la superficie terrestre o en la corteza a profundidades medias. La dacita contiene principalmente plagioclasa, cuarzo y biotita, con una textura generalmente porfídica o afanítica. Su color puede variar desde gris claro a gris verdoso, y puede contener cristales visibles incrustados en una matriz fina o vítrea. La dacita es común en zonas de actividad volcánica y se encuentra en muchas partes del mundo.",
    };
  }

  if (type == "Extrusivo" && p1 <= 100 && p1 >= 90 && p2 <= 60 && p2 >= 20) {
    return {
      name: "CUARZO ANDESITA",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Imagen_no_disponible.svg/1200px-Imagen_no_disponible.svg.png",
      description:
        "La cuarzo andesita es una variante de la roca ígnea conocida como andesita que contiene una cantidad significativa de cuarzo. Se forma por el enfriamiento de magma en la superficie terrestre o en la corteza a profundidades medias, y su composición es intermedia entre el basalto y la riolita. La cuarzo andesita contiene principalmente plagioclasa, cuarzo, biotita y anfíbol, con una textura generalmente porfídica o afanítica. Su color puede variar desde gris claro a gris verdoso, y puede contener cristales visibles incrustados en una matriz fina o vítrea. La cuarzo andesita es común en zonas de actividad volcánica y se encuentra en muchas partes del mundo.",
    };
  } else {
    return {
      name: "No se conoce",
      image: randomImage,
      description: "No sé exactamente cual es :C",
    };
  }
}
export function determineRockTypeDelgadoMafico(type, p1, p2, p3) {
  const randomImage = images[Math.floor(Math.random() * images.length)];
  if (type == "Con Anfibol" && p1 <= 100 && p1 >= 90 && p2 <= 10 && p3 <= 10) {
    return {
      name: "DUNITA",
      image: "http://edafologia.ugr.es/rocas/fotos3/dunita-41-2-ana.jpg",
      description:
        "La dunita es una roca ígnea ultramáfica que se compone principalmente de olivino, a menudo con cantidades menores de ortopiroxeno y/o clinopiroxeno. Esta roca se encuentra comúnmente en la parte superior del manto terrestre y en complejos ofiolíticos. La dunita es de color verde a negro y tiene una textura granular. Es una parte importante de la geología del manto y puede proporcionar información sobre la composición y la historia de la Tierra profunda.",
    };
  }

  if (
    type == "Con Anfibol" &&
    p1 <= 90 &&
    p1 >= 40 &&
    p2 <= 55 &&
    p2 >= 5 &&
    p3 <= 55 &&
    p3 >= 5
  ) {
    return {
      name: "PERIDOTITA HORNBLÉNDICA PIROXÉNICA",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Imagen_no_disponible.svg/1200px-Imagen_no_disponible.svg.png",
      description:
        "La peridotita hornblendica piroxénica es una variedad de roca ígnea ultramáfica que contiene principalmente olivino y piroxenos, como ortopiroxeno y clinopiroxeno, junto con cantidades significativas de hornblenda. Esta roca puede encontrarse en ambientes plutónicos y ofiolíticos, y es una parte importante de la litosfera terrestre. La presencia de hornblenda junto con los piroxenos y el olivino le confiere a la roca propiedades mineralógicas únicas y una apariencia distintiva. La peridotita hornblendica piroxénica es rica en magnesio y hierro, y puede variar en color desde verde a negro. Es importante en el estudio de la geología del manto terrestre y los procesos geodinámicos asociados con la tectónica de placas.",
    };
  }

  if (
    type == "Con Anfibol" &&
    p1 <= 40 &&
    p1 >= 5 &&
    p2 <= 90 &&
    p2 >= 30 &&
    p3 <= 55 &&
    p3 >= 5
  ) {
    return {
      name: "PIROXENITA HORBLÉNDICA OLIVÍNICA",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Imagen_no_disponible.svg/1200px-Imagen_no_disponible.svg.png",
      description:
        "La piroxenita hornblendica olivínica es una variedad de roca ígnea compuesta principalmente por piroxenos (como ortopiroxeno y clinopiroxeno), hornblenda y olivino. Esta roca puede encontrarse en ambientes plutónicos y ofiolíticos, y es una parte importante de la litosfera terrestre. La presencia de hornblenda junto con los piroxenos y el olivino le confiere propiedades mineralógicas únicas y una apariencia distintiva. La piroxenita hornblendica olivínica es rica en magnesio y hierro, y puede variar en color desde verde a negro. Es importante en el estudio de la geología del manto terrestre y los procesos geodinámicos asociados con la tectónica de placas.",
    };
  }

  if (
    type == "Con Anfibol" &&
    p1 <= 40 &&
    p1 >= 5 &&
    p2 <= 55 &&
    p2 >= 5 &&
    p3 <= 90 &&
    p3 >= 30
  ) {
    return {
      name: "HORNBLENDITA PIROXÉNICA OLIVÍNICA",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Imagen_no_disponible.svg/1200px-Imagen_no_disponible.svg.png",
      description:
        "La hornblendita piroxénica olivínica es una roca ígnea que contiene principalmente hornblenda, piroxenos (como ortopiroxeno y clinopiroxeno) y olivino como minerales dominantes. Esta roca se puede encontrar en ambientes plutónicos y ofiolíticos y es una parte importante de la litosfera terrestre. La presencia de hornblenda junto con los piroxenos y el olivino le confiere propiedades mineralógicas únicas y una apariencia distintiva. La hornblendita piroxénica olivínica es rica en magnesio y hierro y puede variar en color desde verde hasta negro. Es relevante en el estudio de la geología del manto terrestre y los procesos geodinámicos asociados con la tectónica de placas.",
    };
  }

  if (
    type == "Con Anfibol" &&
    p1 <= 5 &&
    p2 <= 90 &&
    p2 >= 45 &&
    p3 <= 50 &&
    p3 >= 5
  ) {
    return {
      name: "PIROXENITA HORNBLÉNDICA",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Imagen_no_disponible.svg/1200px-Imagen_no_disponible.svg.png",
      description:
        "La piroxenita hornblendica es una roca ígnea compuesta principalmente por piroxenos, como ortopiroxeno y clinopiroxeno, junto con hornblenda como mineral accesorio. Esta roca puede encontrarse en ambientes plutónicos y ofiolíticos y es una parte importante de la litosfera terrestre. La presencia de hornblenda junto con los piroxenos le confiere a la roca propiedades mineralógicas únicas y una apariencia distintiva. La piroxenita hornblendica puede variar en color desde verde a negro. Es relevante en el estudio de la geología del manto terrestre y los procesos geodinámicos asociados con la tectónica de placas.",
    };
  }

  if (
    type == "Con Anfibol" &&
    p1 <= 5 &&
    p2 <= 50 &&
    p2 >= 5 &&
    p3 <= 90 &&
    p3 >= 45
  ) {
    return {
      name: "HORNBLENDITA PIROXÉNICA",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Imagen_no_disponible.svg/1200px-Imagen_no_disponible.svg.png",
      description:
        "La hornblendita piroxénica es una roca ígnea compuesta principalmente por hornblenda y piroxenos, como ortopiroxeno y clinopiroxeno. Esta roca puede encontrarse en ambientes plutónicos y volcánicos y es una parte importante de la litosfera terrestre. La combinación de hornblenda y piroxenos le confiere a la roca propiedades mineralógicas únicas y una apariencia distintiva. La hornblendita piroxénica puede variar en color desde verde a negro, dependiendo de la composición mineralógica específica. Es relevante en el estudio de la geología del manto terrestre y los procesos geodinámicos asociados con la tectónica de placas.",
    };
  }

  if (type == "Con Anfibol" && p1 <= 10 && p2 <= 10 && p3 <= 90 && p3 >= 55) {
    return {
      name: "HORNBLENDITA",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Imagen_no_disponible.svg/1200px-Imagen_no_disponible.svg.png",
      description:
        "La hornblendita es una roca ígnea metamórfica que se compone principalmente de hornblenda, un mineral del grupo de los anfiboles. La hornblenda generalmente se forma en condiciones de metamorfismo regional de rocas ricas en silicatos, como basaltos y andesitas, o como un mineral accesorio en granitos y gneises. La hornblendita es típicamente de color oscuro, variando de verde a negro, y puede tener una textura granular o fibrosa dependiendo de las condiciones de formación. Es importante en el estudio de la geología metamórfica y puede proporcionar información sobre las condiciones de metamorfismo y las historias geológicas regionales.",
    };
  }

  if (
    type == "Con Anfibol" &&
    p1 <= 40 &&
    p1 >= 5 &&
    p2 <= 5 &&
    p3 <= 90 &&
    p3 >= 55
  ) {
    return {
      name: "HORNBLENDITA OLIVÍNICA",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Imagen_no_disponible.svg/1200px-Imagen_no_disponible.svg.png",
      description:
        "La hornblendita olivínica es una roca ígnea que contiene principalmente hornblenda y olivino como minerales dominantes. Esta combinación le confiere propiedades mineralógicas únicas y una apariencia distintiva. La hornblendita olivínica es común en ambientes plutónicos y ofiolíticos y es una parte importante de la litosfera terrestre. Es rica en magnesio y hierro y puede variar en color desde verde a negro. La hornblendita olivínica es relevante en el estudio de la geología del manto terrestre y los procesos geodinámicos asociados con la tectónica de placas.",
    };
  }

  if (
    type == "Con Anfibol" &&
    p1 <= 90 &&
    p1 >= 40 &&
    p2 <= 5 &&
    p3 <= 60 &&
    p3 >= 5
  ) {
    return {
      name: "PERIDOTITA HORNBLÉNDICA",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Imagen_no_disponible.svg/1200px-Imagen_no_disponible.svg.png",
      description:
        "La peridotita hornblendica es una variedad de roca ígnea ultramáfica que contiene principalmente olivino y hornblenda como minerales dominantes. Esta combinación le confiere propiedades mineralógicas únicas y una apariencia distintiva. La peridotita hornblendica es común en ambientes plutónicos y ofiolíticos y es una parte importante de la litosfera terrestre. Es rica en magnesio y hierro y puede variar en color desde verde a negro. La peridotita hornblendica es relevante en el estudio de la geología del manto terrestre y los procesos geodinámicos asociados con la tectónica de placas.",
    };
  }

  if (type == "Con Anfibol" && p1 <= 10 && p2 <= 100 && p2 >= 90 && p3 <= 10) {
    return {
      name: "PIROXENITA",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Imagen_no_disponible.svg/1200px-Imagen_no_disponible.svg.png",
      description:
        "La piroxenita es una roca ígnea compuesta principalmente por minerales de piroxeno, como ortopiroxeno y clinopiroxeno. Estos minerales de piroxeno pueden estar acompañados por otros minerales, como olivino, plagioclasa y en algunos casos, hornblenda. La piroxenita puede tener una variedad de colores, que van desde el verde al negro, dependiendo de la composición mineralógica específica. Esta roca es común en ambientes plutónicos y ofiolíticos, y es importante en el estudio de la geología del manto terrestre y los procesos tectónicos asociados.",
    };
  }

  if (
    type == "Con Anfibol" &&
    p1 <= 40 &&
    p1 >= 5 &&
    p2 <= 90 &&
    p2 >= 55 &&
    p3 <= 5
  ) {
    return {
      name: "PIROXENITA OLIVÍNICA",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Imagen_no_disponible.svg/1200px-Imagen_no_disponible.svg.png",
      description:
        "La piroxenita olivínica es una roca ígnea compuesta principalmente por minerales de piroxeno, como ortopiroxeno y clinopiroxeno, junto con olivino como mineral dominante. Esta combinación le confiere a la roca propiedades mineralógicas únicas y una apariencia distintiva. La piroxenita olivínica es común en ambientes plutónicos y ofiolíticos y es una parte importante de la litosfera terrestre. Es rica en magnesio y hierro y puede variar en color desde verde a negro. La piroxenita olivínica es relevante en el estudio de la geología del manto terrestre y los procesos geodinámicos asociados con la tectónica de placas.",
    };
  }

  if (
    type == "Con Anfibol" &&
    p1 <= 90 &&
    p1 >= 40 &&
    p2 <= 60 &&
    p2 >= 5 &&
    p3 <= 5
  ) {
    return {
      name: "PERIDOTITA PIROXÉNICA",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Imagen_no_disponible.svg/1200px-Imagen_no_disponible.svg.png",
      description:
        "La peridotita piroxénica es una roca ígnea ultramáfica compuesta principalmente por olivino y piroxenos, como ortopiroxeno y clinopiroxeno. Esta combinación le confiere propiedades mineralógicas únicas y una apariencia distintiva. La peridotita piroxénica es común en ambientes plutónicos y ofiolíticos y es una parte importante de la litosfera terrestre. Es rica en magnesio y hierro y puede variar en color desde verde a negro. La peridotita piroxénica es relevante en el estudio de la geología del manto terrestre y los procesos geodinámicos asociados con la tectónica de placas.",
    };
  }
  if (type == "Sin Anfibol" && p1 <= 100 && p1 >= 90 && p2 <= 10 && p3 <= 10) {
    return {
      name: "DUNITA",
      image: "http://edafologia.ugr.es/rocas/fotos3/dunita-41-1-ana.jpg",
      description:
        "La dunita es una roca ígnea ultramáfica compuesta principalmente por olivino, con cantidades menores de otros minerales como piroxenos y espinela. Se forma en la parte superior del manto terrestre, en áreas donde las condiciones de presión y temperatura son adecuadas para la cristalización del olivino. La dunita es una roca muy rica en magnesio y es comúnmente asociada con la corteza oceánica y con los mantos de los arcos de islas. Tiene una textura generalmente granular y su color varía desde verde a negro, dependiendo de la composición mineralógica y la presencia de minerales accesorios.",
    };
  }

  if (
    type == "Sin Anfibol" &&
    p1 <= 90 &&
    p1 >= 40 &&
    p2 <= 55 &&
    p2 >= 5 &&
    p3 <= 55 &&
    p3 >= 5
  ) {
    return {
      name: "LHERZOLITA",
      image:
        "https://c7.alamy.com/comp/AX1388/lherzolite-rock-thin-section-showing-minerals-through-cross-polarized-AX1388.jpg",
      description:
        "La lherzolita es una roca ultramáfica que se encuentra comúnmente en el manto superior de la Tierra y es una de las principales rocas que componen el manto. Está compuesta principalmente por olivino, ortopiroxeno y clinopiroxeno, con cantidades menores de espinela cromítica u otros minerales. La lherzolita es importante en el estudio de la geología del manto y se cree que es el tipo de roca dominante en la astenosfera. Tiene una textura granular y puede variar en color desde verde oliva hasta negro, dependiendo de la composición mineralógica específica y las condiciones de metamorfismo.",
    };
  }

  if (
    type == "Sin Anfibol" &&
    p1 <= 40 &&
    p1 >= 5 &&
    p2 <= 90 &&
    p2 >= 5 &&
    p3 <= 90 &&
    p3 >= 5
  ) {
    return {
      name: "WEBSTERITA OLIVÍNICA",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Imagen_no_disponible.svg/1200px-Imagen_no_disponible.svg.png",
      description:
        "Es una roca ígnea compuesta principalmente por olivino y piroxeno, con cantidades menores de plagioclasa y espinela cromítica. La websterita olivínica se caracteriza por tener una textura porfídica, donde cristales grandes de olivino y piroxeno se encuentran dispersos en una matriz fina de plagioclasa y espinela. Se cree que se forma por procesos magmáticos en el interior de la Luna y es importante en el estudio de la geología lunar y la historia geológica del satélite terrestre.",
    };
  }

  if (
    type == "Sin Anfibol" &&
    p1 <= 5 &&
    p2 <= 90 &&
    p2 >= 5 &&
    p3 <= 90 &&
    p3 >= 5
  ) {
    return {
      name: "WEBSTERITA",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Imagen_no_disponible.svg/1200px-Imagen_no_disponible.svg.png",
      description:
        "Se compone principalmente de plagioclasa, olivino y piroxeno, y ocasionalmente contiene minerales accesorios como espinela y óxidos de titanio y hierro. La websterita se caracteriza por tener una textura porfídica, con cristales de diferentes tamaños incrustados en una matriz fina. Esta roca es importante para comprender la geología y la historia de la formación de la Luna.",
    };
  }

  if (type == "Sin Anfibol" && p1 <= 10 && p2 <= 100 && p2 >= 90 && p3 <= 10) {
    return {
      name: "CLINOPIROXENITA",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Imagen_no_disponible.svg/1200px-Imagen_no_disponible.svg.png",
      description:
        "La clinopiroxenita es una roca ígnea compuesta principalmente por clinopiroxeno, un grupo de minerales de piroxeno con estructura cristalina monoclinica. Este tipo de roca es común en ambientes ígneos, especialmente en rocas plutónicas como gabros y en diques intrusivos. La clinopiroxenita puede tener una textura variada, desde granular hasta afanítica, dependiendo de la velocidad de enfriamiento del magma. Su color puede variar desde blanco hasta gris oscuro, dependiendo de la composición mineralógica específica.",
    };
  }

  if (
    type == "Sin Anfibol" &&
    p1 <= 40 &&
    p1 >= 5 &&
    p2 <= 90 &&
    p2 >= 55 &&
    p3 <= 5
  ) {
    return {
      name: "CLINOPIROXENITA OLIVÍNICA",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Imagen_no_disponible.svg/1200px-Imagen_no_disponible.svg.png",
      description:
        "La clinopiroxenita olivínica es una roca ígnea que contiene principalmente clinopiroxeno y olivino como minerales principales. Esta roca es típicamente encontrada en ambientes intrusivos, como diques y plutones, donde se forma a partir del enfriamiento y solidificación de magma en la corteza terrestre. La presencia de olivino junto con clinopiroxeno le confiere a la roca una apariencia distintiva y propiedades mineralógicas únicas. La clinopiroxenita olivínica puede variar en t",
    };
  }

  if (
    type == "Sin Anfibol" &&
    p1 <= 90 &&
    p1 >= 40 &&
    p2 <= 60 &&
    p2 >= 5 &&
    p3 <= 5
  ) {
    return {
      name: "WEHRITA",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Imagen_no_disponible.svg/1200px-Imagen_no_disponible.svg.png",
      description:
        "La wehrlita es una roca ígnea ultramáfica que se encuentra en ambientes intrusivos, como diques y plutones, así como en complejos ofiolíticos. Se compone principalmente de minerales de piroxeno y olivino, con cantidades menores de otros minerales, como espinela y plagioclasa. La wehrlita es una roca rica en magnesio y hierro, y su color varía desde verde a negro. Es importante en el estudio de la geología del manto terrestre y se cree que es una roca común en la parte superior del manto.",
    };
  }

  if (type == "Sin Anfibol" && p1 <= 10 && p2 <= 10 && p3 <= 100 && p3 >= 90) {
    return {
      name: "ORTOPIROXENITA",
      image:
        "https://petroignea.wordpress.com/wp-content/uploads/2013/03/2113-opx-2amc3ada.jpg?w=300",
      description:
        "La ortopiroxenita es una roca ígnea ultramáfica compuesta principalmente por ortopiroxeno, un mineral del grupo de los piroxenos. Esta roca se encuentra comúnmente en ambientes plutónicos y ofiolíticos, y es una parte importante de la litosfera terrestre. La ortopiroxenita es rica en magnesio y hierro, y puede contener cantidades variables de otros minerales como olivino, plagioclasa y espinela. Su color puede variar desde verde a negro, dependiendo de la composición mineralógica específica. La ortopiroxenita es importante en el estudio de la geología del manto terrestre y los procesos geodinámicos asociados con la tectónica de placas.",
    };
  }

  if (
    type == "Sin Anfibol" &&
    p1 <= 40 &&
    p1 >= 5 &&
    p2 <= 5 &&
    p3 <= 90 &&
    p3 >= 55
  ) {
    return {
      name: "ORTOPIROXENITA OLIVÍNIICA",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Imagen_no_disponible.svg/1200px-Imagen_no_disponible.svg.png",
      description:
        "La ortopiroxenita olivínica es una variedad de roca ígnea ultramáfica que contiene principalmente ortopiroxeno y olivino como minerales dominantes. Esta roca se encuentra comúnmente en ambientes plutónicos y ofiolíticos, y es una parte importante de la litosfera terrestre. La presencia de olivino junto con ortopiroxeno le confiere a la roca propiedades mineralógicas únicas y una apariencia distintiva. La ortopiroxenita olivínica es rica en magnesio y hierro, y puede variar en color desde verde a negro, dependiendo de la composición mineralógica específica. Es importante en el estudio de la geología del manto terrestre y los procesos geodinámicos asociados con la tectónica de placas.",
    };
  }

  if (
    type == "Sin Anfibol" &&
    p1 <= 90 &&
    p1 >= 40 &&
    p2 <= 5 &&
    p3 <= 60 &&
    p3 >= 5
  ) {
    return {
      name: "HARZBURGITA",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Imagen_no_disponible.svg/1200px-Imagen_no_disponible.svg.png",
      description:
        "La harzburgita es una roca ígnea ultramáfica compuesta principalmente por olivino y ortopiroxeno. Es una de las principales rocas que componen el manto terrestre y se forma a partir de magmas ultramáficos que cristalizan en profundidades muy elevadas bajo condiciones de alta presión y temperatura. La harzburgita es de color verde oscuro a negro y tiene una textura granular. Es importante en el estudio de la geología del manto y en la comprensión de los procesos geodinámicos que tienen lugar en el interior de la Tierra.",
    };
  } else {
    return {
      name: "No se conoce",
      image: randomImage,
      description:
        "No sé exactamente cual es :C \n Trata de cambiar los valores de los porcentajes",
    };
  }
}
