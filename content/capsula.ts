export type MensajeCapsula = {
  titulo: string;
  texto: string;
};

export const capsulaConfig = {
  // Se abre el 13 de cada mes
  diaMensual: 13,

  // Y también el 22 de diciembre (su cumpleaños)
  cumpleaños: { mes: 12, dia: 22 },

  // Mensaje que aparece si hoy toca abrir pero todavía no escribiste el mensaje
  mensajePendiente: {
    titulo: "Todavía no escribí este mensaje",
    texto:
      "Amor, hoy es día de abrir la cápsula pero me olvidé de escribirte el mensaje. Avisame y te lo mando por chat. Pero mientras tanto: te amo. Siempre te amo.",
  },
};

// =====================================================
// MENSAJES POR FECHA (formato: "AÑO-MES-DÍA")
// Cada 13 de cada mes. Y también cada 22 de diciembre.
// =====================================================

export const mensajesCapsula: Record<string, MensajeCapsula> = {
  // ============ 2026 ============
    "2026-10-13": {
    titulo: "Mi morocha",
    texto:
      "Hoolaaa amor, felices 6 meses juntos. Quiero decirte que te amo mucho y que sos el amor de mi vida. Gracias por estar conmigo siempre, en todo momento, en los malos días, en los días felices, en los días tristes y en los días en los que solo necesitaba un abrazo.\n\nMe gusta ver cómo cada día, cada semana, y cada mes vamos haciéndonos más maduros, más responsables, y vamos creando una relación más fuerte.\n\nPeleamos, nos reconciliamos, nos apoyamos y nunca nos dejamos.\n\nSi pudiera estar con vos ahora mismo, solo te diría algo: \"Nunca te vayas\".\n\nSi tenemos un problema lo podemos hablar y arreglar. No te preocupes por nada, ¿sí? Siempre podremos hacerlo juntos y siempre nos tendremos el uno al otro. Nunca más vas a estar sola.\n\nTe amo mucho, mi nico besha. Felices 6 meses. VAMOS POR MASSS.",
  },
  "2026-11-13": {
    titulo: "Noviembre",
    texto:
      "Amor:\n\nUn mes más, y ya casi un año. Me acuerdo del primer 13 como si fuera hoy. Y sin embargo, siento que ya te conozco de toda la vida.\n\nTe amo.",
  },
  "2026-12-13": {
    titulo: "Diciembre",
    texto:
      "Mi vida:\n\nSe termina el año y se termina un año lleno de vos. Gracias por cada día, cada abrazo, cada mensaje de buenas noches.\n\nEste mes hay doble regalo: el 13 y el 22.",
  },
  "2026-12-22": {
    titulo: "Feliz cumpleaños, mi amor 🎂",
    texto:
      "Negrita:\n\nHoy cumplís años. Hoy el mundo celebra el día que naciste, y yo celebro el día que empezó a existir la persona que amo.\n\nGracias por nacer. Gracias por crecer. Gracias por elegirme.\n\nOjalá este año que arranca sea el mejor de tu vida. Y ojalá yo pueda estar en él, al lado tuyo, todos los días.\n\nTe amo. Feliz cumpleaños.",
  },

  // ============ 2027 ============
  "2027-01-13": {
    titulo: "Enero",
    texto:
      "Amor:\n\nEmpezó un año nuevo y lo primero que hice fue pensar en vos. Que este año nos traiga todo lo que soñamos.\n\nTe amo.",
  },
  "2027-02-13": {
    titulo: "Febrero",
    texto:
      "Mi amor:\n\nOtro 13, otra excusa para decirte lo que ya sabés: sos mi persona favorita.\n\nTe amo.",
  },
  "2027-03-13": {
    titulo: "Marzo",
    texto:
      "Negrita:\n\nYa casi un año desde aquel 13 de abril. No me alcanzan las palabras para agradecerte todo lo que me diste este tiempo.\n\nTe amo.",
  },
  "2027-04-13": {
    titulo: "Un año juntos ❤️",
    texto:
      "Mi vida:\n\nHoy cumplimos un año. Un año de vos, de nosotros, de todo esto que construimos de a poquito.\n\nGracias por cada momento. Gracias por no irte cuando era más fácil irse. Gracias por elegirme todos los días.\n\nPor muchos años más, mi amor.\n\nTe amo con todo.",
  },
  "2027-05-13": {
    titulo: "Mayo",
    texto:
      "Amor:\n\nUn mes más. Ya pasó un año y seguimos acá, eligiéndonos como el primer día.\n\nNo me canso de vos. No me voy a cansar nunca.\n\nTe amo.",
  },
  "2027-06-13": {
    titulo: "Junio",
    texto:
      "Negrita:\n\nLlegó el frío y lo único que quiero es abrazarte. Vos sos mi lugar calentito en este mundo.\n\nTe amo.",
  },
  "2027-07-13": {
    titulo: "Julio",
    texto:
      "Mi amor:\n\nOtro 13, otro mes con vos. Ya perdí la cuenta de cuántas veces te dije te amo, y sin embargo todavía me quedo corto.\n\nTe amo.",
  },
  "2027-08-13": {
    titulo: "Agosto",
    texto:
      "Amor:\n\nNo sé qué me deparará este mes, pero sí sé con quién quiero vivirlo. Con vos.\n\nGracias por estar. Gracias por quedarte.\n\nTe amo.",
  },
  "2027-09-13": {
    titulo: "Septiembre",
    texto:
      "Negrita:\n\nOtro mes que pasa y sigo pensando lo mismo que el primer día: qué suerte tuve de encontrarte.\n\nTe amo.",
  },
  "2027-10-13": {
    titulo: "Octubre",
    texto:
      "Mi vida:\n\nYa pasó más de un año desde que empezamos. Y todavía me pongo nervioso cuando te veo llegar. Eso no me pasó nunca con nadie.\n\nTe amo.",
  },
  "2027-11-13": {
    titulo: "Noviembre",
    texto:
      "Amor:\n\nUn año y medio casi. No me imaginaba que iba a llegar tan lejos con alguien, y menos con alguien tan perfecta para mí.\n\nGracias por ser vos.\n\nTe amo.",
  },
  "2027-12-13": {
    titulo: "Diciembre",
    texto:
      "Negrita:\n\nSe termina otro año, y este lo terminé con vos. Como quiero terminar todos los que vengan.\n\nGracias por todo. Se viene tu cumple.",
  },
  "2027-12-22": {
    titulo: "Feliz cumpleaños, mi amor 🎂",
    texto:
      "Mi vida:\n\nOtro cumpleaños tuyo. Otra vez me toca celebrarte y no me alcanzan las palabras.\n\nOjalá la vida te dé todo lo que le pedís. Y ojalá yo pueda estar al lado tuyo para verlo.\n\nFeliz cumpleaños, negrita. Te amo.",
  },

  // ============ 2028 ============
  "2028-01-13": {
    titulo: "Enero",
    texto:
      "Amor:\n\nArranca otro año y yo sigo acá, con vos. Elegí bien, ¿no?\n\nTe amo. Que sea un gran año para los dos.",
  },
  "2028-02-13": {
    titulo: "Febrero",
    texto:
      "Negrita:\n\nUn mes más de nosotros. Ya son tantos que perdí la cuenta, pero cada uno vale como el primero.\n\nTe amo.",
  },
  "2028-03-13": {
    titulo: "Marzo",
    texto:
      "Mi amor:\n\nSe viene abril. Se vienen dos años. Y yo sigo con las mismas ganas que el primer día.\n\nTe amo.",
  },
  "2028-04-13": {
    titulo: "Dos años juntos ❤️",
    texto:
      "Mi vida:\n\nDos años. DOS. ¿Quién iba a decir? Yo no sabía que se podía amar así, de esta forma, tan tranquilo y tan fuerte al mismo tiempo.\n\nGracias por estos dos años. Gracias por cada día. Gracias por seguir eligiéndome.\n\nPor muchos años más.\n\nTe amo, y te voy a amar siempre.",
  },
  "2028-05-13": {
    titulo: "Mayo",
    texto:
      "Amor:\n\nDos años y seguimos. Ya no es una etapa, ya no es un momento. Es nuestra vida.\n\nY me encanta que así sea.\n\nTe amo.",
  },
  "2028-06-13": {
    titulo: "Junio",
    texto:
      "Negrita:\n\nOtro mes, otro abrazo, otro te amo. Parece rutina, pero no lo es. Cada vez lo siento más fuerte.\n\nTe amo.",
  },
  "2028-07-13": {
    titulo: "Julio",
    texto:
      "Mi amor:\n\nOtro 13 que me acuerdo de vos todo el día. Y no solo el 13, la verdad. Me acuerdo de vos siempre.\n\nTe amo.",
  },
  "2028-08-13": {
    titulo: "Agosto",
    texto:
      "Amor:\n\nYa no sé cómo hacer para explicarte lo que siento. Ojalá pudieras meterte en mi cabeza por un rato y ver.\n\nTe amo. Y ya.",
  },
  "2028-09-13": {
    titulo: "Septiembre",
    texto:
      "Negrita:\n\nUn mes más. Ya casi tres años desde aquel 13 de abril. Qué locura hermosa.\n\nTe amo.",
  },
  "2028-10-13": {
    titulo: "Octubre",
    texto:
      "Mi vida:\n\nOtro octubre, otro 13, otro mensaje para vos. No me cansa. No me va a cansar nunca.\n\nTe amo.",
  },
  "2028-11-13": {
    titulo: "Noviembre",
    texto:
      "Amor:\n\nYa viene diciembre, ya viene tu cumple, ya viene todo. Y yo quiero estar en todo eso con vos.\n\nTe amo.",
  },
  "2028-12-13": {
    titulo: "Diciembre",
    texto:
      "Negrita:\n\nOtro año que se termina. Otro año que pasé con vos. Y ya perdí la cuenta de todo lo lindo que vivimos juntos.\n\nGracias por todo. Se viene tu cumple.",
  },
  "2028-12-22": {
    titulo: "Feliz cumpleaños, mi amor 🎂",
    texto:
      "Mi vida:\n\nOtro cumpleaños tuyo, otra vez al lado tuyo. Ya van varios y espero que sean muchos más.\n\nFeliz día, negrita. Que la vida te dé todo lo que soñás, y que yo pueda estar al lado para verte sonreír.\n\nTe amo.",
  },
};