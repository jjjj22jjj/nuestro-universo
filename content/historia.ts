export type Hito = {
  id: string;
  fecha: string;
  titulo: string;
  descripcion: string;
  destacado?: boolean;
};

export const historia: Hito[] = [
  {
    id: "comienzo",
    fecha: "13 de abril",
    titulo: "El día que empezó todo",
    descripcion:
      "El 13 de cada mes es nuestro. Desde ese día, cada 13 se celebra algo: un mes más, un recuerdo más, un motivo más para elegirnos.",
    destacado: true,
  },
  {
    id: "perro",
    fecha: "Primeras salidas",
    titulo: "El perro salchicha",
    descripcion:
      "La primera foto juntos. Un perro salchicha se cruzó y sin saberlo estábamos empezando nuestra historia.",
  },
  {
    id: "comer",
    fecha: "Primeras salidas",
    titulo: "Las primeras veces que salimos a comer",
    descripcion:
      "No me acuerdo qué comimos. Me acuerdo de vos, de cómo me mirabas, de lo nervioso que estaba por caerte bien.",
  },
  {
    id: "paseo",
    fecha: "Primeras salidas",
    titulo: "Los primeros paseos",
    descripcion:
      "Abrazados sin soltarnos. Ahí ya sabía que esto era distinto a todo lo que había vivido antes.",
  },
  {
    id: "gym",
    fecha: "Detalles",
    titulo: "Sorpresas a la salida del gym",
    descripcion:
      "Empecé a ir a dejarte regalitos a la salida del gym. Verte la cara cuando me veías no tiene precio.",
  },
  {
    id: "anillo",
    fecha: "Un día especial",
    titulo: "El anillo y el ramito",
    descripcion:
      "Te regalé un anillo con un ramito de flores. Me temblaban las manos, vos lo sabés.",
  },
  {
    id: "bici",
    fecha: "Vóley",
    titulo: "La sorpresa en bici",
    descripcion:
      "Fui en bici de sorpresa a llevarte un regalito a la salida de vóley. Llegué transpirado pero feliz.",
  },
  {
    id: "plazas",
    fecha: "Nuestros lugares",
    titulo: "Las plazas",
    descripcion:
      "Villa SavEDra, Plaza Italia. Ahí aprendimos que estar callados abrazados también es una forma de hablar.",
  },
  {
    id: "silencio",
    fecha: "El descubrimiento",
    titulo: "El abrazo en silencio",
    descripcion:
      "Nos dimos cuenta de lo lindo que se sentía abrazarnos y quedarnos callados sin que nadie nos moleste. Ese es mi lugar favorito en el mundo.",
  },
  {
    id: "hoy",
    fecha: "Hoy",
    titulo: "Seguimos eligiéndonos",
    descripcion:
      "Cada día te elijo de nuevo. Cada 13 celebramos un mes más. Cada pelea nos deja más cerca, no más lejos.",
  },
  {
    id: "futuro",
    fecha: "El futuro",
    titulo: "Nuestro plan a futuro",
    descripcion:
      "Casados. Con hijos. Con una casa que sea nuestra. Con esa vida tranquila que nos imaginamos en las plazas. Ojalá, mi amor. Ojalá.",
    destacado: true,
  },
];