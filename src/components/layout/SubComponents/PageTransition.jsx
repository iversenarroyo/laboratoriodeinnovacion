import { motion } from "framer-motion";

const Spark = ({ x, y, delay, color, size, dx, dy }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
    animate={{
      opacity: [1, 0],
      scale: [0, 1.2, 0],
      x: dx,
      y: dy,
    }}
    transition={{ duration: 0.8, delay, ease: "easeOut" }}
    className={`absolute rounded-full`}
    style={{
      top: y,
      left: x,
      width: size,
      height: size,
      backgroundColor: color,
    }}
  />
);

export const PageTransition = ({ children }) => {
  const colors = ["#22d3ee", "#06b6d4", "#0ea5e9", "#7dd3fc", "#38bdf8"];

  // Crear muchas chispas con posiciones, tamaños y movimientos aleatorios
  const sparks = Array.from({ length: 80 }, () => ({
    x: Math.random() * 300,
    y: Math.random() * 200,
    delay: Math.random() * 1,
    color: colors[Math.floor(Math.random() * colors.length)],
    size: 2 + Math.random() * 4, // tamaño aleatorio entre 2px y 6px
    dx: (Math.random() - 0.5) * 40, // movimiento horizontal aleatorio
    dy: (Math.random() - 0.5) * 40, // movimiento vertical aleatorio
  }));

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="relative w-full overflow-visible"
      style={{ display: "inline-block" }} // asegura que no empuje otros elementos
    >
      {/* Chispas en posición absoluta para que no alteren el layout */}
      <div className="absolute inset-0 pointer-events-none">
        {sparks.map((spark, i) => (
          <Spark key={i} {...spark} />
        ))}
      </div>

      {children}
    </motion.div>
  );
};
