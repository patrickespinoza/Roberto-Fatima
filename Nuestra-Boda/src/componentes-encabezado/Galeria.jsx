import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/* =========================================
   GALERÍA — ROBERTO & MARTHA
   Fondo blanco + tonos azules
========================================= */

const palette = {
  navy: "#0B1F3A",
  navySoft: "#17365D",

  blue: "#1E4F8A",
  blueDark: "#123A68",
  blueLight: "#5E88B5",

  white: "#FFFFFF",
  offWhite: "#FBFAF7",

  black: "#161616",
  gray: "#6B6B6B",
  lightGray: "#E9E9E9",
};

/* =========================================
   IMÁGENES
========================================= */

// Ajusta aquí la posición de CADA fotografía.
// Formato: "horizontal% vertical%"
// vertical: 0% = arriba | 50% = centro | 100% = abajo
// horizontal: 0% = izquierda | 50% = centro | 100% = derecha
//
// mobilePosition  = celulares
// desktopPosition = tablet / computadora
const images = [
  {
    src: "/Carrusel01v.jpeg",
    mobilePosition: "50% 85%",
    desktopPosition: "50% 90%",
  },
  {
    src: "/Carrusel02.jpeg",
    mobilePosition: "50% 80%",
    desktopPosition: "50% 50%",
  },
  {
    src: "/Carrusel03.jpeg",
    mobilePosition: "10% 50%",
    desktopPosition: "50% 20%",
  },
  {
    src: "/Carrusel04.jpeg",
    mobilePosition: "50% 70%",
    desktopPosition: "50% 75%",
  },
  {
    src: "/Carrusel05.jpeg",
    mobilePosition: "50% 80%",
    desktopPosition: "50% 45%",
  },
  {
    src: "/Carrusel06.jpeg",
    mobilePosition: "50% 90%",
    desktopPosition: "50% 50%",
  },
];

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
   RAMA DECORATIVA
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
   FLOR DECORATIVA
========================================= */

function FloralAccent({ className = "" }) {
  return (
    <svg
      viewBox="0 0 160 160"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M78 151C80 116 83 82 92 44"
        stroke="currentColor"
        strokeWidth="1"
      />

      <path
        d="M88 62C68 57 52 45 43 28"
        stroke="currentColor"
        strokeWidth="0.8"
      />

      <path
        d="M84 89C104 82 120 70 130 53"
        stroke="currentColor"
        strokeWidth="0.8"
      />

      <path
        d="M43 28C60 27 72 34 80 46C65 47 52 41 43 28Z"
        stroke="currentColor"
        strokeWidth="0.7"
      />

      <path
        d="M130 53C114 53 102 60 94 73C109 74 121 67 130 53Z"
        stroke="currentColor"
        strokeWidth="0.7"
      />

      <circle
        cx="92"
        cy="42"
        r="7"
        stroke="currentColor"
        strokeWidth="0.8"
      />

      <circle cx="92" cy="42" r="2.2" fill="currentColor" />
    </svg>
  );
}

/* =========================================
   DIVISOR
========================================= */

function DecorativeDivider() {
  return (
    <div className="flex items-center justify-center gap-3">
      <span
        className="h-px w-12 sm:w-16"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(30,79,138,0.85))",
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
            "linear-gradient(to left, transparent, rgba(30,79,138,0.85))",
        }}
      />
    </div>
  );
}

/* =========================================
   ICONOS
========================================= */

function PreviousIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-5 w-5"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function NextIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-5 w-5"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

/* =========================================
   COMPONENTE
========================================= */

export default function Galeria() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  const totalImages = images.length;
  const currentImage = images[index];

  /* =========================================
     PRECARGA DE IMÁGENES
  ========================================= */

  useEffect(() => {
    const preloadedImages = images.map(({ src }) => {
      const img = new Image();
      img.decoding = "async";
      img.src = src;

      if (img.decode) {
        img.decode().catch(() => {});
      }

      return img;
    });

    return () => {
      preloadedImages.forEach((img) => {
        img.onload = null;
        img.onerror = null;
      });
    };
  }, []);

  /* =========================================
     CAMBIO AUTOMÁTICO
  ========================================= */

  useEffect(() => {
    if (isPaused) return undefined;

    const intervalId = window.setInterval(() => {
      setDirection(1);

      setIndex((previousIndex) => {
        return (previousIndex + 1) % totalImages;
      });
    }, 4500);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [isPaused, totalImages]);

  /* =========================================
     SIGUIENTE
  ========================================= */

  const nextImage = () => {
    setDirection(1);

    setIndex((previousIndex) => {
      return (previousIndex + 1) % totalImages;
    });
  };

  /* =========================================
     ANTERIOR
  ========================================= */

  const previousImage = () => {
    setDirection(-1);

    setIndex((previousIndex) => {
      return previousIndex === 0
        ? totalImages - 1
        : previousIndex - 1;
    });
  };

  /* =========================================
     IR A IMAGEN
  ========================================= */

  const goToImage = (imageIndex) => {
    if (imageIndex === index) return;

    setDirection(imageIndex > index ? 1 : -1);
    setIndex(imageIndex);
  };

  return (
    <>
      <style>{`
        .gallery-photo {
          object-position: var(--position-mobile);
        }

        @media (min-width: 768px) {
          .gallery-photo {
            object-position: var(--position-desktop);
          }
        }
      `}</style>

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
        px-5
        py-24
        sm:px-8
        sm:py-28
        lg:px-12
        lg:py-32
      "
      style={{
        backgroundColor: palette.white,
      }}
    >
      {/* =========================================
          RAMAS DEL FONDO
      ========================================= */}

      <BotanicalBranch
        className="
          pointer-events-none
          absolute
          -left-12
          top-8
          h-[260px]
          w-[150px]
          -rotate-12
          text-[#1E4F8A]/18
          sm:h-[320px]
          sm:w-[190px]
        "
      />

      <BotanicalBranch
        className="
          pointer-events-none
          absolute
          -right-12
          top-8
          h-[260px]
          w-[150px]
          rotate-[168deg]
          text-[#1E4F8A]/18
          sm:h-[320px]
          sm:w-[190px]
        "
      />

      {/* =========================================
          FLORES INFERIORES
      ========================================= */}

      <FloralAccent
        className="
          pointer-events-none
          absolute
          -bottom-8
          -left-6
          h-[160px]
          w-[160px]
          -rotate-12
          text-[#0B1F3A]/10
          sm:h-[220px]
          sm:w-[220px]
        "
      />

      <FloralAccent
        className="
          pointer-events-none
          absolute
          -bottom-10
          -right-8
          h-[170px]
          w-[170px]
          rotate-[170deg]
          text-[#1E4F8A]/12
          sm:h-[230px]
          sm:w-[230px]
        "
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
          max-w-7xl
        "
      >
        {/* =========================================
            ENCABEZADO
        ========================================= */}

        <motion.div
          className="
            mx-auto
            mb-12
            flex
            max-w-3xl
            flex-col
            items-center
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
            Nuestros momentos
          </p>

          <div className="mt-5">
            <DecorativeDivider />
          </div>

          <h2
            className="
              mt-6
              font-serif
              text-[40px]
              font-normal
              leading-tight
              tracking-[-0.025em]
              sm:text-[56px]
              md:text-[66px]
            "
          style={{ color: palette.navy }}
          >
            Nuestra historia
          </h2>

          <p
            className="
              mx-auto
              mt-3
              max-w-xl
              font-serif
              text-[12px]
              italic
              leading-7
              sm:text-base
            "
          style={{ color: palette.navySoft }}
          >
            Hay momentos que merecen quedarse para siempre.
          </p>
        </motion.div>

        {/* =========================================
            GALERÍA
        ========================================= */}

        <motion.div
          className="
            relative
            mx-auto
            w-full
            max-w-5xl
          "
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
            amount: 0.12,
          }}
          transition={{
            duration: 1,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* MARCO BLANCO */}

          <div
            className="
              relative
              bg-white
              p-2.5
              sm:p-4
              lg:p-5
            "
            style={{
              boxShadow: "0 10px 28px rgba(11,31,58,0.08)",
            }}
          >
            {/* MARCO AZUL */}

            <div
              className="
                relative
                border
                p-[5px]
                sm:p-[7px]
              "
              style={{
                borderColor: palette.navy,
              }}
            >
              {/* LÍNEA NARANJA */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-[4px]
                  border
                "
                style={{
                  borderColor: "rgba(30,79,138,0.45)",
                }}
              />

              {/* =========================================
                  FOTO
              ========================================= */}

              <div
                className="
                  relative
                  h-[430px]
                  overflow-hidden
                  bg-[#EAEAEA]
                  sm:h-[580px]
                  md:h-[650px]
                  lg:h-[690px]
                "
              >
                <AnimatePresence custom={direction} mode="sync">
                  <motion.img
                    key={currentImage.src}
                    custom={direction}
                    src={currentImage.src}
                    alt={`Fotografía ${index + 1} de Roberto y Martha`}
                    className="
                      gallery-photo
                      absolute
                      inset-0
                      h-full
                      w-full
                      object-cover
                    "
                    style={{
                      "--position-mobile": currentImage.mobilePosition,
                      "--position-desktop": currentImage.desktopPosition,
                    }}
                    initial={{
                      opacity: 0,
                      scale: 1.02,
                      x: direction > 0 ? 16 : -16,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      x: 0,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 1.01,
                      x: direction > 0 ? -16 : 16,
                    }}
                    transition={{
                      opacity: {
                        duration: 0.55,
                      },

                      scale: {
                        duration: 1.1,
                        ease: [0.22, 1, 0.36, 1],
                      },

                      x: {
                        duration: 0.7,
                        ease: [0.22, 1, 0.36, 1],
                      },
                    }}
                  />
                </AnimatePresence>




                {/* =========================================
                    ANTERIOR
                ========================================= */}

                <motion.button
                  type="button"
                  onClick={previousImage}
                  aria-label="Mostrar fotografía anterior"
                  className="
                    absolute
                    left-3
                    top-1/2
                    z-30
                    flex
                    h-11
                    w-11
                    -translate-y-1/2
                    items-center
                    justify-center
                    rounded-full
                    border
                    bg-white
                    sm:left-5
                    sm:h-12
                    sm:w-12
                  "
                  style={{
                    borderColor: "rgba(30,79,138,0.45)",
                    color: palette.navy,
                    boxShadow: "0 8px 20px rgba(0,0,0,0.14)",
                  }}
                  whileHover={{
                    y: "-50%",
                    scale: 1.06,
                    backgroundColor: palette.blue,
                    color: palette.white,
                  }}
                  whileTap={{
                    scale: 0.96,
                  }}
                >
                  <PreviousIcon />
                </motion.button>

                {/* =========================================
                    SIGUIENTE
                ========================================= */}

                <motion.button
                  type="button"
                  onClick={nextImage}
                  aria-label="Mostrar siguiente fotografía"
                  className="
                    absolute
                    right-3
                    top-1/2
                    z-30
                    flex
                    h-11
                    w-11
                    -translate-y-1/2
                    items-center
                    justify-center
                    rounded-full
                    border
                    bg-white
                    sm:right-5
                    sm:h-12
                    sm:w-12
                  "
                  style={{
                    borderColor: "rgba(30,79,138,0.45)",
                    color: palette.navy,
                    boxShadow: "0 8px 20px rgba(0,0,0,0.14)",
                  }}
                  whileHover={{
                    y: "-50%",
                    scale: 1.06,
                    backgroundColor: palette.blue,
                    color: palette.white,
                  }}
                  whileTap={{
                    scale: 0.96,
                  }}
                >
                  <NextIcon />
                </motion.button>
              </div>
            </div>

            {/* =========================================
                PIE
            ========================================= */}

            <div
              className="
                relative
                flex
                flex-col
                items-center
                px-4
                pb-5
                pt-7
                text-center
                sm:px-8
                sm:pb-6
                sm:pt-9
              "
            >
              {/* CONTADOR */}

              <motion.div
                key={`counter-${index}`}
                className="
                  flex
                  items-end
                  justify-center
                  gap-2
                "
                initial={{
                  opacity: 0,
                  y: 6,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.4,
                }}
              >
                <span
                  className="
                    font-serif
                    text-[28px]
                    leading-none
                    sm:text-[32px]
                  "
                  style={{
                    color: palette.navy,
                  }}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span
                  className="
                    pb-[2px]
                    text-sm
                  "
                  style={{
                    color: palette.blue,
                  }}
                >
                  /
                </span>

                <span
                  className="
                    pb-[2px]
                    font-serif
                    text-lg
                  "
                  style={{
                    color: palette.gray,
                  }}
                >
                  {String(totalImages).padStart(2, "0")}
                </span>
              </motion.div>

              {/* INDICADORES */}

              <div
                className="
                  mt-5
                  flex
                  items-center
                  justify-center
                  gap-2.5
                "
              >
                {images.map((_, imageIndex) => {
                  const isActive = index === imageIndex;

                  return (
                    <motion.button
                      key={`indicator-${imageIndex}`}
                      type="button"
                      onClick={() => goToImage(imageIndex)}
                      aria-label={`Mostrar fotografía ${imageIndex + 1}`}
                      aria-current={isActive ? "true" : undefined}
                      className="
                        h-[6px]
                        border
                      "
                      animate={{
                        width: isActive ? 34 : 7,
                      }}
                      transition={{
                        duration: 0.4,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      style={{
                        backgroundColor: isActive
                          ? palette.blue
                          : "transparent",

                        borderColor: isActive
                          ? palette.blue
                          : "rgba(11,31,58,0.35)",
                      }}
                    />
                  );
                })}
              </div>

              <p
                className="
                  mt-5
                  text-[8px]
                  uppercase
                  tracking-[0.3em]
                  sm:text-[9px]
                "
                style={{
                  color: palette.gray,
                }}
              >
                Nuestra historia en fotografías
              </p>
            </div>
          </div>
        </motion.div>

        {/* =========================================
            CIERRE
        ========================================= */}

        <motion.div
          className="
            mx-auto
            mt-12
            max-w-xl
            text-center
            sm:mt-16
          "
          initial={{
            opacity: 0,
            y: 14,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
            delay: 0.3,
          }}
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
            "
            style={{
              color: palette.navySoft,
            }}
          >
            Cada fotografía guarda un instante de nuestro camino y una parte de
            la historia que hoy celebramos.
          </p>
        </motion.div>
      </div>
    </motion.section>
    </>
  );
}