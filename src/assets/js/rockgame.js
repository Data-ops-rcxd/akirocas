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

export const questionsDelgado = [
  {
    question: "¿Cúal es su origen?",
    answers: ["Fanerítico", "Afanítico", "Vítreo", "Vesicular"],
  },
];

export function determineRockTypeMano(answers) {
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
      image: "./src/assets/Therockimg.png",
      description: "Se fue caminando...",
    };
  }
}

export function determineRockTypeDelgado(answers) {
  if (answers[0] === "Fanerítico") {
    return {
      name: "Granito",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh_d7gxhUzVvS3MhxbLxprrJPTdEDkXBsxoQOEWsH0D1HmrEp_NgPAvSv1W-EzRFP26n-3bClgshJ5wf7n-Pdno7lV6bA6Z0B-olT9IUsUpDgdbYoSHz3GJuqz2J8Dzwc8tviBUM9Hh8gM/s1600/granito.jpg",
      description:
        "El granito es una roca ígnea plutónica formada por la solidificación lenta de una masa de magma a gran profundidad en la corteza terrestre. Está compuesto por cuarzo, feldespato y mica.",
    };
  } else {
    return {
      name: "No hay roca aquí",
      image: "./src/assets/Therockimg.png",
      description: "Se fue caminando...",
    };
  }
}
