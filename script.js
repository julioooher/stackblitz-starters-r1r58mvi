document.addEventListener("DOMContentLoaded", function() {
  // 1. Tus recuerdos con todas las fotos y fechas
  const recuerdos = [
    {
      fecha: "2025-03-22",
      imagenes: [
        "https://i.postimg.cc/J0tNbdHv/foto1.jpg"
      ],
      titulo: "El retiro en el que nos conocimos.",
      mensaje: "Quien diría que esos dos tontos de esa foto random terminarían siendo novios."
    },
    {
      fecha: "2025-07-12",
      imagenes: [
        "https://i.postimg.cc/6qSdzLd4/foto2.jpg"
      ],
      titulo: "La actividad en  la que conectamos",
      mensaje: "Desde ese día sentí ese gran amor por tí y supe que te iba a amar para siempre."
    },
    {
      fecha: "2025-08-16",
      imagenes: [
        "https://i.postimg.cc/BZwcqsdS/foto3.jpg"
      ],
      titulo: "Nuestra primera salida.",
      mensaje: "La mejor salida del mundon, Dios no la podía hacer mas perfecta con esa canción al final."
    },
    {
      fecha: "2025-09-04",
      imagenes: [
        "https://i.postimg.cc/SNB6MdSH/foto5.jpg"
      ],
      titulo: "Reunión del Voluntariado.",
      mensaje: "Poco a poco nos ibamos enamorando mucho mas mientras le serviamos a Dios y a ls Virgen."
    },
    {
      fecha: "2025-09-07",
      imagenes: [
        "https://i.postimg.cc/cLfQM36L/foto6.jpg",
        "https://i.postimg.cc/W4j094Jr/foto7.jpg",
        "https://i.postimg.cc/6QwCHQGd/foto8.jpg"
      ],
      titulo: "Voluntariado.",
      mensaje: "Lo mejor del voluntariado fue poderlo compartir contigo (y lo que paso en la mañana tambien)."
    },
    {
      fecha: "2025-10-05",
      imagenes: [
        "https://i.postimg.cc/9fVyxfqZ/foto9.jpg"
      ],
      titulo: "Domingo de novios sin ser novios.",
      mensaje: "Nunca olvidaré la emoción que tenías ese dia porque fuí a pasar ese día contigo allá."
    },
    {
      fecha: "2025-10-14",
      imagenes: [
        "https://i.postimg.cc/Rhq7cbnv/foto10.jpg"
      ],
      titulo: "Saliditas despues de la uni.",
      mensaje: "Romantizando el centro despues de la uni osiosi."
    },
    {
      fecha: "2025-10-19",
      imagenes: [
        "https://i.postimg.cc/Zn08rDyz/foto11.jpg"
      ],
      titulo: "DOMUND 2025.",
      mensaje: "Que lindo como nos juntabamos mas y nuestro noviazgo (que en ese momento todavía no era) se iba acercando tambien a Dios."
    },
    {
      fecha: "2025-11-02",
      imagenes: [
        "https://i.postimg.cc/QCVQpnWr/foto12.jpg",
        "https://i.postimg.cc/SRj6Wtzx/foto14.jpg"
      ],
      titulo: "El día mas esperado",
      mensaje: "Despues de tanta espera por fin pasó y te pedí que fuermaos noviecitos muamuamua."
    },
    {
      fecha: "2025-12-07",
      imagenes: [
        "https://i.postimg.cc/5yjBwkFX/foto15.jpg"
      ],
      titulo: "Saliditas chill.",
      mensaje: "La primera salidita de diciembre osiosi, viva la navidad y el cascabeleo."
    },
    {
      fecha: "2025-12-21",
      imagenes: [
        "https://i.postimg.cc/J0gbKcbt/foto16.jpg",
        "https://i.postimg.cc/nrM4vwQj/foto17.jpg",
        "https://i.postimg.cc/MH4ytbyc/foto18.jpg"
      ],
      titulo: "Saliditas chill 2",
      mensaje: "Día de heladitos y beshitos y fotitos."
    },
    {
      fecha: "2025-12-28",
      imagenes: [
        "https://i.postimg.cc/90SG1tG7/foto19.jpg",
        "https://i.postimg.cc/2yJ4TF4v/foto20.jpg"
      ],
      titulo: "Mi pumple",
      mensaje: "Mi mejor pumple, pasando el mejor día, con la mejor persona y los mejores regalos."
    },
    {
      fecha: "2026-01-11",
      imagenes: [
        "https://i.postimg.cc/x87KgyKL/foto21.jpg",
        "https://i.postimg.cc/C5tjJHjC/foto22.jpg",
        "https://i.postimg.cc/8c3hwBh4/foto23.jpg"
      ],
      titulo: "CLASICOOOOOOO.",
      mensaje: "Tanto insistir hasta que por fin te pude llevar a ver un juego de futbol with me osiosi."
    },
    {
      fecha: "2026-01-30",
      imagenes: [
        "https://i.postimg.cc/cCjQTMQX/foto24.jpg"
      ],
      titulo: "Acompañandote y apoyandote siempre.",
      mensaje: "Apoyando a la mas bonita e inteligente del mundo osiosi."
    },
    {
      fecha: "2026-02-14",
      imagenes: [
        "https://i.postimg.cc/ZngrjFrj/foto25.jpg",
        "https://i.postimg.cc/PJcmKzmV/foto26.jpg",
        "https://i.postimg.cc/59kqx1ZJ/foto27.jpg"
      ],
      titulo: "Nuestro primer San Valentín.",
      mensaje: "Que bonito y emocionante fue pasar mi primer día de enamorados contigo como novia."
    },
    {
      fecha: "2026-03-01",
      imagenes: [
        "https://i.postimg.cc/zDPSJ59r/foto28.jpg"
      ],
      titulo: "Mi primera ida a tu casita.",
      mensaje: "Estaba nervioso pero que bonito día osiosi."
    },
    {
      fecha: "2026-03-08",
      imagenes: [
        "https://i.postimg.cc/ZYDFTZ1W/foto32.jpg",
        "https://i.postimg.cc/8knB1Dqv/foto31.jpg",
        "https://i.postimg.cc/DfYd2Ft2/foto29.jpg",
        "https://i.postimg.cc/qBZXk09R/foto30.jpg"
      ],
      titulo: "Día familiar",
      mensaje: "Que loco que estabas ahí pero muy cool shi jijiji."
    },
    {
      fecha: "2026-03-22",
      imagenes: [
        "https://i.postimg.cc/8knB1Dqv/foto33.jpg"
      ],
      titulo: "Otra activity de la Iglesia",
      mensaje: "Esta vez nos toco lejitos pero todo por servir a Dios."
    },
    {
      fecha: "2026-04-02",
      imagenes: [
        "https://i.postimg.cc/NGP7gYWR/foto34.jpg",
        "https://i.postimg.cc/ZYDFTZ1r/foto35.jpg"
      ],
      titulo: "TU PUMPLEEEEEEEEE",
      mensaje: "Lamentablemente no pude pasar todo el día contigo pero te pude llevar tus regalitos jijiji."
    },
    {
      fecha: "2026-04-11",
      imagenes: [
        "https://i.postimg.cc/VsHBY13q/foto36.jpg"
      ],
      titulo: "Saliditas chill 3",
      mensaje: "Día de beshitos y heladitos."
    },
    {
      fecha: "2026-05-01",
      imagenes: [
        "https://i.postimg.cc/tRmtXyLN/foto37.jpg",
        "https://i.postimg.cc/5NY5yTV8/foto38.jpg",
        "https://i.postimg.cc/9FRP0Kht/foto39.jpg"
      ],
      titulo: "Saliditas chill 4",
      mensaje: "No me acuerdo qeu hicimos pero seguro que los beshos, los abrazos y el heladito no faltó jejejeje."
    },
    {
      fecha: "2026-05-24",
      imagenes: [
        "https://i.postimg.cc/CLBC5Xg4/foto40.jpg",
        "https://i.postimg.cc/5NY5yTVP/foto41.jpg"
      ],
      titulo: "Pentecostés 2026",
      mensaje: "Que nunca me faltes en ninguna actividad nunca pofi, gracias por apoyarme desde abajito cuando estaba animando."
    },
    {
      fecha: "2026-05-29/31",
      imagenes: [
        "https://i.postimg.cc/gkXyjQW7/foto42.jpg",
        "https://i.postimg.cc/BQL5bk0y/foto43.jpg"
      ],
      titulo: "ESAM",
      mensaje: "Lastima que nos tocó en equipitos separados pero que bonito fue crecer y aprender mas de la fé para poder animar junto a ti, que se repita la noche en qeu casi ganamos la competencia pero nos robaron JAJAJAJAJAJ (No todo fue muy bonito pero mejor recordar lo que si lo fue)."
    },
    {
      fecha: "2026-06-24",
      imagenes: [
        "https://i.postimg.cc/qMhcqST9/foto44.jpg",
        "https://i.postimg.cc/652VqgXk/foto45.jpg"
      ],
      titulo: "Mejor no recordar",
      mensaje: "Hay salidas que prefiero no recordar pero igual la pasamos bonito antes shi."
    },
    {
      fecha: "2026-07-08",
      imagenes: [
        "https://i.postimg.cc/sDQPxqzF/foto46.jpg",
        "https://i.postimg.cc/28sQZGk0/foto47.jpg"
      ],
      titulo: "Otra vez en tu casita",
      mensaje: "Que vivan las idas a tu casa jijijiji."
    },
    {
      fecha: "2026-08-02",
      imagenes: [
        "https://i.postimg.cc/WbBGk8NY/foto48.jpg",
        "https://i.postimg.cc/zXsCg7zc/foto49.jpg",
        "https://i.postimg.cc/5NhBCg4h/foto50.jpg"
      ],
      titulo: "9 mesesotes",
      mensaje: "Creo que fue la primera vez que no me enferme y pudimos salir el día que si cumpliamos mes jijij, que bonita fue esa salida."
    },
    {
      fecha: "2026-08-09",
      imagenes: [
        "https://i.postimg.cc/J4fNkx7L/foto51.jpg",
        "https://i.postimg.cc/HsqwyzWd/foto52.jpg"
      ],
      titulo: "Saliditas chill 5",
      mensaje: "No la pasamos muy bien porque no quisiste hablar pero lo bueno fue que nos pudimos arreglar y eso fue lo importante."
    },
    {
      fecha: "2026-08-15",
      imagenes: [
        "https://i.postimg.cc/sDkYhmf2/foto53.jpg",
        "https://i.postimg.cc/28sQZGj6/foto54.jpg"
      ],
      titulo: "15 de agosto",
      mensaje: "Segundo seguidito que vienes a La Asunción jijiji."
    },
    {
      fecha: "2026-08-17",
      imagenes: [
        "https://i.postimg.cc/gkCVZscr/foto55.jpg",
        "https://i.postimg.cc/Qx2QTmNH/foto56.jpg",
        "https://i.postimg.cc/SxcW79jS/foto57.jpg"
      ],
      titulo: "SPIDERMAAAAAAAAAAAAAN",
      mensaje: "La mejor ida al cine osiosi."
    },
    {
      fecha: "2026-08-29",
      imagenes: [
        "https://i.postimg.cc/L8jzBPhn/foto60.jpg",
        "https://i.postimg.cc/y80FXRWD/foto61.jpg",
        "https://i.postimg.cc/528wqzjQ/foto62.jpg"
      ],
      titulo: "Reu OMP",
      mensaje: "A mí me dijeron que te llevara y yo te lleve jijijij."
    },
    {
      fecha: "2026-08-30",
      imagenes: [
        "https://i.postimg.cc/3x2gCGWK/foto58.jpg",
        "https://i.postimg.cc/8zLhBvsP/foto59.jpg"
      ],
      titulo: "Santa Rosa de Lima",
      mensaje: "Hace unos años me dicen que yo terminaría pasando un día completo allá y no les creería JAJAJAJAJ."
    },
    {
      fecha: "2026-09-06",
      imagenes: [
        "https://i.postimg.cc/Dw1qdGmb/foto63.jpg",
        "https://i.postimg.cc/htV9bmh1/foto64.jpg"
      ],
      titulo: "Jueguitos",
      mensaje: "No me llevas vida en ningun jueguito muejejejej."
    },
    {
      fecha: "2026-09-21",
      imagenes: [
        "https://i.postimg.cc/6pCdLZTz/foto65.jpg",
        "https://i.postimg.cc/htV9bmh0/foto66.jpg"
      ],
      titulo: "Flores amarillas",
      mensaje: "Sorpresita especial para una niñita muy monita y especial shi"
    },
    {
      fecha: "...",
      imagenes: [
        "https://i.postimg.cc/QCVQpnWr/foto12.jpg"
      ],
      titulo: "TE AMO ROSMIG",
      mensaje: "Gracias Rosmig, gracias por este año de mucho amor, gracias por las alegrías, las risas y todas las emociones que has traído a mi vida. Tal vez no sea mucho pero quise hacerte este pequeño obsequio recapitulando la mayorías de las salidas que hemos tenido (pido perdon si se me pasó alguna), a pesar de que no todas han sido de color de rosas, no las cambiaría por nada del mundo, porque todo lo que hemos pasado nos hizo llegar a lo que somos hoy en día. Gracias a todo eso hemos podido aprender de nuestros errores para así pode seguir adelante en nuestra ralción. Le agradesco a Dios ya la Virgen por poner en mi camino a una mujer como lo eres tu, tan bonita, inteligente y hermosa. Quiero pasar mi vida entera contigo y espero Dios así tambien lo quiera para que así pase. En fin, gracias por aguantarme y por segui conmigo a pesar de todo lo que te he hecho pasar. Te amo y te amaré toda la vida pase lo que pase mi Rosmig adorada, si no eres perfecta, eres lo mas cerca a la perfección."
    },
  ];

  // 2. Elementos del HTML
  const selectorFecha = document.getElementById("selector-fecha");
  const contenedorRecuerdo = document.getElementById("contenedor-recuerdo");

  // 3. Rellenar automáticamente el menú desplegable con las fechas
  recuerdos.forEach(function(recuerdo) {
    const option = document.createElement("option");
    option.value = recuerdo.fecha;
    option.textContent = `${recuerdo.fecha} — ${recuerdo.titulo}`;
    selectorFecha.appendChild(option);
  });

  // 4. Escuchar cuando el usuario elija una opción del menú
  selectorFecha.addEventListener("change", function(event) {
    const fechaSeleccionada = event.target.value;

    if (!fechaSeleccionada) {
      contenedorRecuerdo.innerHTML = `
        <p class="mensaje-bienvenida">Selecciona una fecha arriba para ver el recuerdo de ese día.</p>
      `;
      return;
    }

    const recuerdoEncontrado = recuerdos.find(function(recuerdo) {
      return recuerdo.fecha === fechaSeleccionada;
    });

    if (recuerdoEncontrado) {
      // AQUÍ ESTABA EL DETALLE: Recorremos el arreglo de imágenes para dibujarlas todas
      let htmlImagenes = "";
      recuerdoEncontrado.imagenes.forEach(function(foto) {
        htmlImagenes += `<img src="${foto}" alt="${recuerdoEncontrado.titulo}" class="imagen-recuerdo">`;
      });

      contenedorRecuerdo.innerHTML = `
        <div class="tarjeta-interior">
          <div class="galeria-fotos">
            ${htmlImagenes}
          </div>
          <h2 class="titulo-recuerdo">${recuerdoEncontrado.titulo}</h2>
          <p class="mensaje-recuerdo">${recuerdoEncontrado.mensaje}</p>
        </div>
      `;
    }
  });
});