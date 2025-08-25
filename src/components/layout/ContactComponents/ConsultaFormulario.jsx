import React, { useState } from "react";
import { FaFacebook } from "react-icons/fa";

const temas = [
  { label: "Negocio", icon: "/contacto/negocio.svg" },
  { label: "Startup", icon: "/contacto/startup.svg" },
  { label: "Inversores", icon: "/contacto/inversores.svg" },
  { label: "Noticias y prensa", icon: "/contacto/noticias.svg" },
  { label: "Socios y alianzas", icon: "/contacto/socios.svg" },
  { label: "Otros", icon: "/contacto/otros.svg" },
];

export default function ConsultaFormulario() {
  const [temaSeleccionado, setTemaSeleccionado] = useState(null);
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    pais: "",
    telefono: "",
    sector: "",
    mensaje: "",
  });
  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [nombreEnviado, setNombreEnviado] = useState(""); // 👈 nuevo estado

  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));

    if (name === "email") {
      if (!validateEmail(value)) {
        setErrors((prev) => ({
          ...prev,
          email: "Correo inválido",
        }));
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formData.nombre.trim()) newErrors.nombre = "Campo obligatorio";
    if (!formData.apellido.trim()) newErrors.apellido = "Campo obligatorio";
    if (!formData.email.trim() || !validateEmail(formData.email))
      newErrors.email = "Correo inválido";
    if (!formData.pais.trim()) newErrors.pais = "Campo obligatorio";
    if (!formData.telefono.trim()) newErrors.telefono = "Campo obligatorio";
    if (!formData.sector.trim()) newErrors.sector = "Campo obligatorio";
    if (!formData.mensaje.trim()) newErrors.mensaje = "Campo obligatorio";
    if (!temaSeleccionado) newErrors.tema = "Seleccione un tema";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const dataToSend = {
        ...formData,
        tema: temaSeleccionado,
      };

      setIsSubmitting(true);

      try {
        const response = await fetch("https://hook.us2.make.com/h3ko4cgt0lc61j2qnxu9ka95fpvg44e6", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataToSend),
        });

        if (!response.ok) {
          throw new Error("Error al enviar los datos");
        }

        const resJson = await response.text(); // 👈 si tu webhook responde con texto
        setNombreEnviado(resJson); // 👈 guardamos mensaje personalizado

        setShowSuccess(true);
        setFormData({
          nombre: "",
          apellido: "",
          email: "",
          pais: "",
          telefono: "",
          sector: "",
          mensaje: "",
        });
        setTemaSeleccionado(null);
        setErrors({});
      } catch (error) {
        alert("Hubo un problema al enviar tu mensaje. Intenta nuevamente.");
        console.error("Webhook error:", error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };
  return (
    <div className="relative min-h-screen bg-white p-6 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* Popup de éxito */}
      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-2xl shadow-xl text-center max-w-md mx-auto">
            <h2 className="text-2xl font-semibold text-sky-500 mb-2">
              {nombreEnviado || "¡Gracias por contactarnos!"}
            </h2>
            <p class="text-gray-600 mb-4">
              Tu mensaje ha sido enviado con éxito.<br />
              Gracias por confiar en nosotros.<br />
              Sigue creando, imaginando y creciendo. ¡Estamos aquí para acompañarte en cada paso!
            </p>
            <a
              href="https://www.facebook.com/profile.php?id=61556430680306"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#116BFF] text-white rounded-lg hover:bg-[#116cffd7] transition"
            >
              <FaFacebook className="w-5 h-5" />
              Síguenos en Facebook
            </a>
            <button
              onClick={() => setShowSuccess(false)}
              className="block mt-4 text-sm text-gray-500 hover:underline"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}

      {/* Sección de Temas */}
      <div>
        <h2 className="text-3xl font-light text-gray-700 mb-2">
          ELlIJA SU <span className="text-sky-400 font-bold">TEMA</span>
        </h2>
        <div className="grid grid-cols-2 gap-4 mt-6">
          {temas.map((tema) => (
            <button
              key={tema.label}
              type="button"
              onClick={() => setTemaSeleccionado(tema.label)}
              className={`flex flex-col items-center justify-center border rounded-md p-6 hover:bg-sky-100 transition-all duration-300 ${temaSeleccionado === tema.label ? "bg-sky-100 border-sky-400" : ""
                }`}
            >
              <img
                src={tema.icon}
                alt={tema.label}
                className="w-10 h-10 mb-2 object-contain"
              />
              <span className="text-gray-700 text-center text-sm font-light">
                {tema.label}
              </span>
            </button>
          ))}
        </div>
        {errors.tema && <p className="text-red-500 text-sm mt-2">{errors.tema}</p>}
      </div>

      {/* Formulario */}
      <form
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
        onSubmit={handleSubmit}
      >
        <div>
          <input
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            placeholder="Nombre*"
            className="border-b px-2 py-1 text-sm outline-none w-full"
          />
          {errors.nombre && <p className="text-red-500 text-sm">{errors.nombre}</p>}
        </div>

        <div>
          <input
            name="apellido"
            value={formData.apellido}
            onChange={handleChange}
            placeholder="Apellido*"
            className="border-b px-2 py-1 text-sm outline-none w-full"
          />
          {errors.apellido && <p className="text-red-500 text-sm">{errors.apellido}</p>}
        </div>

        <div>
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="E-mail*"
            className="border-b px-2 py-1 text-sm outline-none w-full"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>

        <div>
          <input
            name="pais"
            value={formData.pais}
            onChange={handleChange}
            placeholder="País*"
            className="border-b px-2 py-1 text-sm outline-none w-full"
          />
          {errors.pais && <p className="text-red-500 text-sm">{errors.pais}</p>}
        </div>

        <div>
          <input
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            placeholder="Teléfono*"
            className="border-b px-2 py-1 text-sm outline-none w-full"
          />
          {errors.telefono && <p className="text-red-500 text-sm">{errors.telefono}</p>}
        </div>

        <div>
          <input
            name="sector"
            value={formData.sector}
            onChange={handleChange}
            placeholder="Sector*"
            className="border-b px-2 py-1 text-sm outline-none w-full"
          />
          {errors.sector && <p className="text-red-500 text-sm">{errors.sector}</p>}
        </div>

        <div className="col-span-2">
          <textarea
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            placeholder="Mensaje*"
            className="border p-2 text-sm outline-none w-full h-40 resize-none"
          ></textarea>
          {errors.mensaje && <p className="text-red-500 text-sm">{errors.mensaje}</p>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`col-span-2 mt-4 py-2 rounded text-white ${isSubmitting ? "bg-gray-400 cursor-not-allowed" : "bg-sky-500 hover:bg-sky-600"
            }`}
        >
          {isSubmitting ? "Enviando..." : "Enviar"}
        </button>
      </form>
    </div>
  );
}
