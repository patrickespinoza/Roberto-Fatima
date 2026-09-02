import { motion } from "framer-motion";

/* =========================================
   FAMILIA & PADRINOS — ROBERTO & MARTHA
========================================= */

const palette = {
  navy: "#0B1F3A",
  navySoft: "#17365D",
  blue: "#1E4F8A",
  blueDark: "#123A68",
  blueLight: "#5E88B5",
  white: "#FFFFFF",
  gray: "#657180",
};

/* =========================================
   DATOS
========================================= */

const familias = [
  {
    label: "Padres del novio",
    nombres: [
      "Rafael López Alonso",
      "Noemí Maciel Mercado",
    ],
  },
  {
    label: "Padres de la novia",
    nombres: [
      "Concepción Tercero Hernández",
      "Jorge Tercero Gonzalez",
    ],
  },
];

const padrinos = [
  "Jorge Martin Tercero Hernández",
  "Nancy Maldonado Vázquez",
];

/* =========================================
   ANIMACIÓN
========================================= */

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 25,
  },

  show: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* =========================================
   DIVISOR DECORATIVO
========================================= */

function DecorativeDivider() {
  return (
    <div className="flex items-center justify-center gap-3">
      <span
        className="h-px w-12 sm:w-16"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(30,79,138,0.75))",
        }}
      />

      <span
        className="h-[6px] w-[6px] rotate-45 border"
        style={{
          borderColor: palette.blue,
        }}
      />

      <span
        className="h-px w-12 sm:w-16"
        style={{
          background:
            "linear-gradient(to left, transparent, rgba(30,79,138,0.75))",
        }}
      />
    </div>
  );
}

/* =========================================
   ORNAMENTO BOTÁNICO
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
   BLOQUE DE PADRES
========================================= */

function FamilyBlock({ label, nombres, index }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 24,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.25,
      }}
      transition={{
        duration: 0.85,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        relative
        flex
        flex-col
        items-center
        px-6
        py-10
        text-center
        sm:px-10
        sm:py-12
      "
    >
      {/* Línea superior */}

      <div
        className="mb-7 h-px w-10"
        style={{
          backgroundColor: palette.blue,
        }}
      />

      {/* Título */}

      <p
        className="
          text-[9px]
          uppercase
          tracking-[0.38em]
          sm:text-[10px]
        "
        style={{
          color: palette.blue,
        }}
      >
        {label}
      </p>

      {/* Nombres */}

      <div className="mt-7 space-y-4">
        {nombres.map((nombre) => (
          <p
            key={nombre}
            className="
              font-serif
              text-[23px]
              font-normal
              leading-snug
              tracking-[-0.015em]
              sm:text-[28px]
            "
            style={{
              color: palette.navy,
            }}
          >
            {nombre}
          </p>
        ))}
      </div>
    </motion.div>
  );
}

/* =========================================
   COMPONENTE PRINCIPAL
========================================= */

export default function FamiliaYPadrinos() {
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
        w-full
        overflow-hidden
        bg-white
        px-5
        py-24
        sm:px-8
        sm:py-28
        lg:px-12
        lg:py-32
      "
    >
      {/* =========================================
          ORNAMENTOS DE FONDO
      ========================================= */}

      <BotanicalBranch
        className="
          pointer-events-none
          absolute
          -left-12
          -top-8
          h-[270px]
          w-[155px]
          -rotate-12
          text-[#1E4F8A]/10
          sm:h-[340px]
          sm:w-[195px]
        "
      />

      <BotanicalBranch
        className="
          pointer-events-none
          absolute
          -bottom-10
          -right-12
          h-[270px]
          w-[155px]
          rotate-[168deg]
          text-[#0B1F3A]/10
          sm:h-[340px]
          sm:w-[195px]
        "
      />

      {/* Marco exterior */}

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
          borderColor: "rgba(30,79,138,0.16)",
        }}
      />

      {/* =========================================
          CONTENIDO
      ========================================= */}

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
          initial={{
            opacity: 0,
            y: 18,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
          }}
          className="
            mx-auto
            mb-14
            flex
            max-w-3xl
            flex-col
            items-center
            text-center
            sm:mb-20
          "
        >
          <p
            className="
              text-[8px]
              uppercase
              tracking-[0.46em]
              sm:text-[10px]
              sm:tracking-[0.55em]
            "
            style={{
              color: palette.blue,
            }}
          >
            Con la bendición de
          </p>

          <div className="mt-5">
            <DecorativeDivider />
          </div>

          <h2
            className="
              mt-7
              font-serif
              text-[40px]
              font-normal
              leading-tight
              tracking-[-0.025em]
              sm:text-[54px]
              md:text-[64px]
            "
            style={{
              color: palette.navy,
            }}
          >
            Nuestras familias
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-xl
              font-serif
              text-[14px]
              italic
              leading-7
              sm:text-base
              px-2
            "
            style={{
              color: palette.gray,
            }}
          >
            Quienes con su amor, ejemplo y compañía han sido parte
            fundamental de nuestra historia.
          </p>
        </motion.div>

        {/* =========================================
            PADRES
        ========================================= */}

        <div
          className="
            mx-auto
            grid
            max-w-5xl
            overflow-hidden
            border
            bg-white
            md:grid-cols-2
          "
          style={{
            borderColor: "rgba(30,79,138,0.22)",
            boxShadow: "0 12px 35px rgba(11,31,58,0.06)",
          }}
        >
          {familias.map((familia, index) => (
            <div
              key={familia.label}
              className={`
                relative
                ${
                  index === 0
                    ? "border-b md:border-b-0 md:border-r"
                    : ""
                }
              `}
              style={{
                borderColor: "rgba(30,79,138,0.18)",
              }}
            >
              <FamilyBlock
                label={familia.label}
                nombres={familia.nombres}
                index={index}
              />
            </div>
          ))}
        </div>

        {/* =========================================
            PADRINOS
        ========================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 24,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.9,
            delay: 0.2,
          }}
          className="
            relative
            mx-auto
            mt-14
            max-w-3xl
            px-5
            text-center
            sm:mt-20
          "
        >
          <DecorativeDivider />

          <p
            className="
              mt-7
              text-[9px]
              uppercase
              tracking-[0.42em]
              sm:text-[10px]
            "
            style={{
              color: palette.blue,
            }}
          >
            Nuestros padrinos
          </p>

          <div className="mt-7">
            <p
              className="
                font-serif
                text-[25px]
                leading-snug
                sm:text-[31px]
              "
              style={{
                color: palette.navy,
              }}
            >
              {padrinos[0]}
            </p>

            {/* & decorativo */}

            <div className="my-3 flex items-center justify-center gap-4">
              <span
                className="h-px w-8"
                style={{
                  backgroundColor: "rgba(30,79,138,0.35)",
                }}
              />

              <span
                className="
                  font-serif
                  text-xl
                  italic
                "
                style={{
                  color: palette.blue,
                }}
              >
                &
              </span>

              <span
                className="h-px w-8"
                style={{
                  backgroundColor: "rgba(30,79,138,0.35)",
                }}
              />
            </div>

            <p
              className="
                font-serif
                text-[25px]
                leading-snug
                sm:text-[31px]
              "
              style={{
                color: palette.navy,
              }}
            >
              {padrinos[1]}
            </p>
          </div>
        </motion.div>

        {/* CIERRE */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: 0.3,
          }}
          className="
            mx-auto
            mt-16
            max-w-xl
            text-center
            sm:mt-20
          "
        >
          <div
            className="
              mx-auto
              mb-6
              h-px
              w-16
            "
            style={{
              backgroundColor: palette.blue,
            }}
          />

          <p
            className="
              font-serif
              text-[14px]
              italic
              leading-7
              sm:text-base
              px-2
            "
            style={{
              color: palette.gray,
            }}
          >
            Gracias por acompañarnos en el comienzo de este nuevo capítulo.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}