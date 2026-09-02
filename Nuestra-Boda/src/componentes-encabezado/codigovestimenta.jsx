import React from "react";
import { motion } from "framer-motion";

/* =========================================
   CÓDIGO DE VESTIMENTA — CLÁSICO SIN IMÁGENES
========================================= */

const palette = {
  ink: "#0B1F3A",
  inkSoft: "#17365D",
  paper: "#FFFFFF",
  paperLight: "#FFFFFF",
  paperDark: "#FFFFFF",
  antiqueGold: "#1E4F8A",
  antiqueGoldDark: "#123A68",
  warmGray: "#657180",
};

const reservedColors = [
  { name: "Taupe", color: "#B29A8D" },
  { name: "Beige", color: "#B8A18E" },
  { name: "Arena", color: "#CDB28F" },
  { name: "Champagne", color: "#DFCBB8" },
  { name: "Blanco", color: "#F2F2F0" },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 24,
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
   SEPARADOR CLÁSICO
========================================= */

function DecorativeDivider({ compact = false }) {
  return (
    <div className="flex items-center justify-center gap-3">
      <span
        className={compact ? "h-px w-8 sm:w-12" : "h-px w-10 sm:w-16"}
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(143,180,218,0.82))",
        }}
      />

      <span
        className="h-[5px] w-[5px] rotate-45 border"
        style={{
          borderColor: "rgba(143,180,218,0.82)",
        }}
      />

      <span
        className={compact ? "h-px w-8 sm:w-12" : "h-px w-10 sm:w-16"}
        style={{
          background:
            "linear-gradient(to left, transparent, rgba(143,180,218,0.82))",
        }}
      />
    </div>
  );
}

/* =========================================
   COMPONENTE PRINCIPAL
========================================= */

const DressCodePremium = () => {
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
        min-h-[760px]
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
        backgroundColor: palette.ink,
      }}
    >
      {/* TEXTURA DE PAPEL */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.16]
        "
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              0deg,
              rgba(255,255,255,0.025) 0px,
              rgba(255,255,255,0.025) 1px,
              transparent 1px,
              transparent 5px
            )
          `,
        }}
      />

      {/* MARCOS DE LA SECCIÓN */}

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
          borderColor: "rgba(255,255,255,0.18)",
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

      {/* ORNAMENTOS DE ESQUINA */}

      <CornerOrnament
        className="
          pointer-events-none
          absolute
          left-6
          top-6
          h-16
          w-16
          text-white/15
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
          text-white/15
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
          text-white/15
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
          text-white/15
          sm:bottom-9
          sm:right-9
          sm:h-20
          sm:w-20
        "
      />

      {/* DETALLES BOTÁNICOS */}

      <BotanicalBranch
        className="
          pointer-events-none
          absolute
          -bottom-16
          -left-8
          h-[250px]
          w-[145px]
          -rotate-12
          text-[#5E88B5]/25
          sm:h-[310px]
          sm:w-[180px]
          lg:left-2
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
          text-[#5E88B5]/25
          sm:h-[310px]
          sm:w-[180px]
          lg:right-2
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
            mb-14
            flex
            max-w-3xl
            flex-col
            items-center
            text-center
            sm:mb-16
            lg:mb-20
          "
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
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <p
            className="
              text-[8px]
              uppercase
              tracking-[0.44em]
              sm:text-[10px]
              sm:tracking-[0.55em]
            "
            style={{
              color: "#8FB4DA",
            }}
          >
            Detalles de la celebración
          </p>

          <div className="mt-5">
            <DecorativeDivider />
          </div>

          <h2
            className="
              mt-7
              font-serif
              text-[39px]
              font-normal
              leading-tight
              tracking-[-0.025em]
              sm:text-[54px]
              md:text-[64px]
            "
            style={{
              color: "#FFFFFF",
            }}
          >
            Código de vestimenta
          </h2>
        </motion.div>

        {/* VESTIMENTA GENERAL */}

        <motion.div
          className="
            relative
            mx-auto
            max-w-3xl
            border
            px-7
            py-12
            text-center
            sm:px-12
            sm:py-14
          "
          style={{
            backgroundColor: "rgba(23,54,93,0.72)",
            borderColor: "rgba(255,255,255,0.20)",
            boxShadow: "0 18px 45px rgba(0,0,0,0.14)",
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.85,
            delay: 0.12,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div
            className="pointer-events-none absolute inset-[7px] border"
            style={{
              borderColor: "rgba(255,255,255,0.08)",
            }}
          />

          <div>
            <DecorativeDivider compact />
          </div>

          <h3
            className="
              mt-7
              font-serif
              text-[32px]
              font-normal
              tracking-[-0.02em]
              sm:text-[40px]
            "
            style={{
              color: "#FFFFFF",
            }}
          >
            Formal
          </h3>

          <p
            className="
              mx-auto
              mt-6
              max-w-xl
              font-serif
              text-[15px]
              leading-7
              sm:text-base
            "
            style={{
              color: "rgba(255,255,255,0.82)",
            }}
          >
            Agradecemos asistir con vestimenta formal y elegante,
            acorde con la ocasión.
          </p>

          <p
            className="
              mx-auto
              mt-5
              max-w-lg
              font-serif
              text-[14px]
              italic
              leading-7
              sm:text-[15px]
            "
            style={{
              color: "rgba(255,255,255,0.70)",
            }}
          >
            No jeans · No calzado deportivo
          </p>
        </motion.div>

        {/* COLORES RESERVADOS PARA LOS NOVIOS */}

        <motion.div
          className="mx-auto mt-12 flex max-w-3xl flex-col items-center text-center sm:mt-16"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, delay: 0.36 }}
        >
          <DecorativeDivider compact />

          <p
            className="mt-6 text-[8px] uppercase tracking-[0.4em] sm:text-[9px]"
            style={{ color: palette.paper }}
          >
            Colores reservados
          </p>

          <h3
            className="mt-4 font-serif text-[25px] font-normal sm:text-[31px]"
            style={{ color: palette.ink }}
          >
            Exclusivos para los novios
          </h3>

          <p
            className="mx-auto mt-4 max-w-xl font-serif text-[14px] leading-7 sm:text-[15px] px-2"
            style={{ color: palette.warmGray }}
          >
            Agradecemos a damas y caballeros evitar los siguientes colores,
            ya que forman parte de la paleta reservada para los novios.
          </p>

          <div className="mt-8 flex w-full flex-wrap items-start justify-center gap-x-4 gap-y-6 sm:gap-x-6">
            {reservedColors.map((item) => (
              <div key={item.name} className="flex w-[72px] flex-col items-center sm:w-[88px]">
                <div
                  className="h-14 w-14 rounded-full border-2 border-white shadow-[0_0_0_1px_rgba(11,31,58,0.18)] sm:h-16 sm:w-16"
                  style={{ backgroundColor: item.color }}
                />
                <p
                  className="mt-3 text-[8px] uppercase tracking-[0.16em] sm:text-[9px]"
                  style={{ color: palette.paperLight }}
                >
                  {item.name}
                </p>
              </div>
            ))}
          </div>

          <p
            className="mt-8 font-serif text-[13px] italic leading-6 sm:text-[14px] px-2"
            style={{ color: palette.warmGray }}
          >
            Esta indicación aplica tanto para hombres como para mujeres.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default DressCodePremium;