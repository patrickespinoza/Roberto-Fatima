import { motion } from "framer-motion";

/* =========================================
   EVENTO Y DIRECCIÓN — ROBERTO & MARTHA
   Azul marino + naranja + blanco
========================================= */

const palette = {
  navy: "#0B1F3A",
  navySoft: "#17365D",
  orange: "#C65A1E",
  orangeDark: "#9B3F13",
  orangeLight: "#D97332",
  white: "#FFFFFF",
  cream: "#FBF8F3",
  black: "#161616",
  gray: "#666666",
};

/* =========================================
   ANIMACIONES
========================================= */

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 28,
  },

  show: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.95,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* =========================================
   ORNAMENTO DE ESQUINA
========================================= */

function CornerOrnament({ className = "" }) {
  return (
    <svg
      viewBox="0 0 90 90"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M5 85V30C5 16.2 16.2 5 30 5h55"
        stroke="currentColor"
        strokeWidth="1"
      />

      <path
        d="M15 72V34c0-10.5 8.5-19 19-19h38"
        stroke="currentColor"
        strokeWidth="0.65"
      />

      <path
        d="M30 5C30 18.8 18.8 30 5 30"
        stroke="currentColor"
        strokeWidth="0.75"
      />

      <circle cx="15" cy="15" r="2" fill="currentColor" />
    </svg>
  );
}

/* =========================================
   RAMA BOTÁNICA
========================================= */

function BotanicalBranch({ className = "" }) {
  return (
    <svg
      viewBox="0 0 150 260"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M76 252C80 192 78 130 71 12"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />

      <path
        d="M76 205C54 192 41 174 35 151"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinecap="round"
      />

      <path
        d="M75 167C97 153 109 133 113 109"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinecap="round"
      />

      <path
        d="M73 123C53 110 43 93 39 72"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinecap="round"
      />

      <path
        d="M72 83C91 71 101 53 103 34"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinecap="round"
      />

      <path
        d="M35 151C49 150 60 158 67 173C52 172 41 165 35 151Z"
        stroke="currentColor"
        strokeWidth="0.7"
      />

      <path
        d="M113 109C99 109 88 117 80 132C96 131 107 123 113 109Z"
        stroke="currentColor"
        strokeWidth="0.7"
      />

      <path
        d="M39 72C53 73 63 81 69 95C54 94 44 86 39 72Z"
        stroke="currentColor"
        strokeWidth="0.7"
      />

      <path
        d="M103 34C90 35 80 42 74 55C88 54 98 47 103 34Z"
        stroke="currentColor"
        strokeWidth="0.7"
      />
    </svg>
  );
}

/* =========================================
   SEPARADOR
========================================= */

function DecorativeDivider({ light = false, compact = false }) {
  const color = light
    ? "rgba(255,255,255,0.75)"
    : "rgba(198,90,30,0.80)";

  return (
    <div className="flex items-center justify-center gap-3">
      <span
        className={compact ? "h-px w-8 sm:w-12" : "h-px w-10 sm:w-16"}
        style={{
          background: `linear-gradient(to right, transparent, ${color})`,
        }}
      />

      <span
        className="h-[5px] w-[5px] rotate-45 border"
        style={{
          borderColor: color,
        }}
      />

      <span
        className={compact ? "h-px w-8 sm:w-12" : "h-px w-10 sm:w-16"}
        style={{
          background: `linear-gradient(to left, transparent, ${color})`,
        }}
      />
    </div>
  );
}

/* =========================================
   ICONO UBICACIÓN
========================================= */

function LocationIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-4 w-4"
    >
      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

/* =========================================
   COMPONENTE
========================================= */

export default function EventoDireccion() {
  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        amount: 0.1,
      }}
      className="
        relative
        flex
        min-h-screen
        w-full
        items-center
        justify-center
        overflow-hidden
        px-5
        py-24
        sm:px-8
        sm:py-28
        lg:px-12
        lg:py-32
      "
      style={{
        background: `
          linear-gradient(
            145deg,
            #07172B 0%,
            ${palette.navy} 45%,
            #102A4D 100%
          )
        `,
      }}
    >
      {/* TEXTURA */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.08]
        "
        style={{
          backgroundImage: `
            radial-gradient(
              rgba(255,255,255,0.4) 0.5px,
              transparent 0.5px
            )
          `,
          backgroundSize: "6px 6px",
        }}
      />

      {/* MARCO */}

      <div
        className="
          pointer-events-none
          absolute
          inset-5
          border
          sm:inset-8
          lg:inset-10
        "
        style={{
          borderColor: "rgba(198,90,30,0.55)",
        }}
      />

      <div
        className="
          pointer-events-none
          absolute
          inset-[26px]
          border
          sm:inset-[38px]
          lg:inset-[46px]
        "
        style={{
          borderColor: "rgba(255,255,255,0.08)",
        }}
      />

      {/* ORNAMENTOS */}

      <CornerOrnament
        className="
          pointer-events-none
          absolute
          left-6
          top-6
          h-16
          w-16
          text-[#C65A1E]/70
          sm:left-9
          sm:top-9
          sm:h-20
          sm:w-20
        "
      />

      <CornerOrnament
        className="
          pointer-events-none
          absolute
          right-6
          top-6
          h-16
          w-16
          rotate-90
          text-[#C65A1E]/70
          sm:right-9
          sm:top-9
          sm:h-20
          sm:w-20
        "
      />

      <CornerOrnament
        className="
          pointer-events-none
          absolute
          bottom-6
          left-6
          h-16
          w-16
          -rotate-90
          text-[#C65A1E]/70
          sm:bottom-9
          sm:left-9
          sm:h-20
          sm:w-20
        "
      />

      <CornerOrnament
        className="
          pointer-events-none
          absolute
          bottom-6
          right-6
          h-16
          w-16
          rotate-180
          text-[#C65A1E]/70
          sm:bottom-9
          sm:right-9
          sm:h-20
          sm:w-20
        "
      />

      {/* RAMAS */}

      <BotanicalBranch
        className="
          pointer-events-none
          absolute
          -bottom-16
          -left-8
          h-[250px]
          w-[145px]
          -rotate-12
          text-[#C65A1E]/20
          sm:h-[310px]
          sm:w-[180px]
        "
      />

      <BotanicalBranch
        className="
          pointer-events-none
          absolute
          -right-8
          -top-16
          h-[250px]
          w-[145px]
          rotate-[168deg]
          text-[#C65A1E]/20
          sm:h-[310px]
          sm:w-[180px]
        "
      />

      {/* CONTENIDO */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-6xl
        "
      >
        {/* ENCABEZADO */}

        <motion.div
          className="
            mx-auto
            mb-12
            max-w-3xl
            text-center
            sm:mb-16
          "
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <p
            className="
              text-[15px]
              uppercase
              tracking-[0.45em]
              sm:text-[17px]
            "
            style={{
              color: palette.white,
            }}
          >
            Nuestra celebración
          </p>

          <div className="mt-5">
            <DecorativeDivider light />
          </div>


          <p
            className="
              mx-auto
              mt-5
              max-w-xl
              font-serif
              text-[14px]
              italic
              leading-7
              text-white/70
              sm:text-base
              px-3
            "
          >
            Nos hará muy felices compartir con ustedes el comienzo de este
            nuevo capítulo.
          </p>
        </motion.div>

        {/* TARJETA */}

        <motion.div
          className="
            relative
            overflow-hidden
            border
            bg-white
            lg:grid
            lg:grid-cols-[0.88fr_1.12fr]
          "
          style={{
            borderColor: "rgba(198,90,30,0.6)",
            boxShadow: "0 30px 75px rgba(0,0,0,0.28)",
          }}
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 1,
            delay: 0.12,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {/* BORDE INTERIOR */}

          <div
            className="
              pointer-events-none
              absolute
              inset-[7px]
              z-20
              border
            "
            style={{
              borderColor: "rgba(198,90,30,0.20)",
            }}
          />

          {/* FECHA */}

          <div
            className="
              relative
              flex
              min-h-[410px]
              flex-col
              items-center
              justify-center
              border-b
              px-7
              py-16
              text-center
              sm:min-h-[460px]
              sm:px-10
              lg:min-h-[560px]
              lg:border-b-0
              lg:border-r
            "
            style={{
              background: `
                linear-gradient(
                  145deg,
                  #B94813 0%,
                  ${palette.orange} 55%,
                  #DE7436 100%
                )
              `,
              borderColor: "rgba(11,31,58,0.15)",
            }}
          >
            <p
              className="
                text-[12px]
                uppercase
                tracking-[0.45em]
                text-white/75
                sm:text-[14px]
              "
            >
              Reserva la fecha
            </p>

            <div className="my-7 h-px w-16 bg-white/60" />

            <p
              className="
                font-serif
                text-lg
                uppercase
                tracking-[0.18em]
                text-white
                sm:text-xl
              "
            >
              Sábado
            </p>

            <p
              className="
                my-3
                font-serif
                text-[105px]
                font-normal
                leading-none
                tracking-[-0.06em]
                text-white
                sm:text-[128px]
                lg:text-[138px]
              "
            >
              10
            </p>

            <p
              className="
                font-serif
                text-[12px]
                uppercase
                tracking-[0.38em]
                text-white
                sm:text-sm
              "
            >
              Octubre · 2026
            </p>

            <div className="mt-8">
              <DecorativeDivider light compact />
            </div>
          </div>

          {/* MISA / UBICACIÓN */}

          <div
            className="
              relative
              flex
              min-h-[540px]
              flex-col
              items-center
              justify-center
              px-7
              py-16
              text-center
              sm:px-12
              lg:min-h-[560px]
              lg:px-16
            "
          >
            <p
              className="
                text-[9px]
                uppercase
                tracking-[0.44em]
                sm:text-[10px]
              "
              style={{
                color: palette.orangeDark,
              }}
            >
              Misa
            </p>

            <h3
              className="
                mt-6
                font-serif
                text-[36px]
                font-normal
                leading-tight
                sm:text-[46px]
              "
              style={{
                color: palette.navy,
              }}
            >
              Ceremonia religiosa
            </h3>

            <div className="my-7">
              <DecorativeDivider />
            </div>

            {/* HORA */}

            <p
              className="
                text-[8px]
                uppercase
                tracking-[0.35em]
              "
              style={{
                color: palette.gray,
              }}
            >
              Hora
            </p>

            <p
              className="
                mt-3
                font-serif
                text-[52px]
                font-normal
                leading-none
                sm:text-[66px]
              "
              style={{
                color: palette.black,
              }}
            >
              2:00 pm
            </p>

            <p
              className="
                mt-3
                text-[8px]
                uppercase
                tracking-[0.4em]
              "
              style={{
                color: palette.orangeDark,
              }}
            >
              PM
            </p>

            {/* LUGAR */}

            <div className="mt-10">
              <p
                className="
                  text-[8px]
                  uppercase
                  tracking-[0.38em]
                "
                style={{
                  color: palette.gray,
                }}
              >
                Lugar
              </p>

              <p
                className="
                  mt-4
                  font-serif
                  text-[27px]
                  font-normal
                  sm:text-[32px]
                "
                style={{
                  color: palette.navy,
                }}
              >
                Jardín Sorelle
              </p>

              <p
                className="
                  mx-auto
                  mt-4
                  max-w-md
                  text-[12px]
                  leading-6
                  sm:text-[14px]
                  sm:leading-7
                "
                style={{
                  color: palette.gray,
                }}
              >
                Las Rosas, San Juan Moyotepec,
                <br />
                Xochimilco, 16630
                <br />
                Ciudad de México, CDMX
              </p>
            </div>

            {/* BOTÓN */}

            <motion.a
              href="https://maps.app.goo.gl/cHkq2W2TDa1cSzFr7"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir ubicación de Jardín Sorelle en Google Maps"
              className="
                mt-9
                inline-flex
                min-w-[225px]
                items-center
                justify-center
                gap-3
                border
                px-8
                py-4
                sm:min-w-[250px]
              "
              style={{
                backgroundColor: palette.navy,
                borderColor: palette.navy,
                color: palette.white,
                boxShadow: "0 12px 28px rgba(11,31,58,0.18)",
              }}
              whileHover={{
                y: -3,
                backgroundColor: palette.orange,
                borderColor: palette.orange,
              }}
              whileTap={{
                scale: 0.985,
              }}
            >
              <LocationIcon />

              <span
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.28em]
                  sm:text-[10px]
                "
              >
                Ver ubicación
              </span>
            </motion.a>
          </div>
        </motion.div>

        {/* CIERRE */}

        <motion.p
          className="
            mx-auto
            mt-12
            max-w-xl
            text-center
            font-serif
            text-[14px]
            italic
            leading-7
            text-white/65
            sm:mt-14
            sm:text-base
            px-4
          "
          initial={{
            opacity: 0,
            y: 12,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
            delay: 0.45,
          }}
        >
          Esperamos contar con su presencia en un día que guardaremos para
          siempre en nuestra memoria.
        </motion.p>
      </div>
    </motion.section>
  );
}