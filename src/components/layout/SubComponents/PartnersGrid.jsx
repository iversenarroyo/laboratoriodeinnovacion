import { ArrowRight } from "lucide-react";

const partners = [
  {
    name: "Red Universitaria de Innovación",
    logo: "/home/ruicolor2.png",
    styles:
      "bg-white text-black border-black group-hover:bg-black group-hover:text-white hover:border-white",
    stylesImagen:
      "brightness-0 group-hover:brightness-100 transition duration-300",
    enlace: "https://www.ruiperu.com/",
  },
  {
    name: "Koica Perú",
    logo: "/home/koikacolor.png",
    styles:
      "bg-[#258CFF] text-white border-white group-hover:bg-black group-hover:text-white ",
    stylesImagen:
      "brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition duration-300",
    enlace: "https://www.koica.go.kr/sites/per_na/index.do",
  },

  {
    name: "Inha University",
    logo: "/home/inhacolor.png",
    styles:
      "bg-gray-300 text-black border-black group-hover:bg-black group-hover:text-white",
    stylesImagen:
      "brightness-0 group-hover:brightness-100 transition duration-300 h-32",
    enlace: "https://eng.inha.ac.kr/eng/index.do",
  },
  {
    name: "Instituto Senati",
    logo: "/home/senaticolor.png",
    styles:
      "bg-[#024085] text-white border-white group-hover:bg-white group-hover:text-black",
    stylesImagen:
      "brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition duration-300 h-28",
    enlace: "https://www.senati.edu.pe/",
  },
  {
    name: "Hub Minero",
    logo: "/home/hubColor.png",
    styles:
      "bg-black text-white border-white group-hover:bg-white group-hover:text-black",
    stylesImagen:
      "brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition duration-300 h-32",
    enlace: "https://hubinnovacionminera.pe/",
  },
];

const internacionales = [
  {
    name: "European Network of Research",
    logo: "/home/enrich.png",
    styles:
      "bg-[#258CFF] text-black border-black group-hover:bg-black group-hover:text-[#258CFF]",
    stylesImagen:
      "brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition duration-300 h-24",
    enlace: "https://enrichinlac.eu/",
  },
  {
    name: "Universidad Federal de Paraná",
    logo: "/home/parama.png",
    styles:
      "bg-[#024085] text-white border-white group-hover:bg-white group-hover:text-black",
    stylesImagen:
      "brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition duration-300 h-24",
    enlace: "https://ufpr.br/",
  },
  {
    name: "Universidad de Campinas",
    logo: "/home/unicamp.png",
    styles:
      "bg-[#D9D9D9] text-white border-white group-hover:bg-black group-hover:text-white",
    stylesImagen:
      "brightness-0 group-hover:brightness-100 transition duration-300 ",
    enlace: "https://unicamp.br/es/",
  },
];

export default function PartnersGrid() {
  return (
    <>
      <p className="  ps-10 text-[#877D7F] text-lg mt-15">
        ALIADOS <span className=" text-black">NACIONALES</span>
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 mt-10">
        {/* Primeros dos partners */}
        {partners.slice(0, 2).map((p, i) => (
          <div
            key={i}
            className={`relative  p-6 flex flex-col justify-between  ${
              p.styles.split(" ")[0]
            }`}
          >
            <a href={p.enlace} target="_blank">
              <div className="flex flex-col items-start group ">
                <img
                  src={p.logo}
                  alt={p.name}
                  className={` h-32 w-auto mb-2 object-contain  ${p.stylesImagen}`}
                />
                <span
                  className={`text-xs sm:text-sm uppercase opacity-70 ${
                    p.styles.split(" ")[1]
                  }`}
                >
                  SOCIO
                </span>
                <div className="flex justify-between items-center w-full">
                  {/* Texto */}
                  <span
                    className={`text-base sm:text-lg ${p.styles.split(" ")[1]}`}
                  >
                    {p.name.split(" ")[0]}{" "}
                    <strong className="font-bold ">
                      {p.name.split(" ").slice(1).join(" ")}
                    </strong>
                  </span>

                  {/* Botón */}
                  <button
                    className={`rounded-full border w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center ${
                      p.styles.split(" ")[3]
                    }  ${p.styles.split(" ")[4]}  transition duration-300  ${
                      p.styles.split(" ")[2]
                    } ${p.styles.split(" ")[1]}`}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </a>
          </div>
        ))}

        {/* Astronauta */}
        <div className="relative rounded-xl p-6 flex items-center justify-center bg-transparent">
          <img
            src="/home/astro.png"
            alt="Astronauta"
            className="w-full h-full max-h-60 object-contain scale-125 absolute -z-10"
          />
        </div>

        {/* Resto de partners */}
        {partners.slice(2).map((p, i) => (
          <div
            key={i + 2}
            className={`relative  p-6 flex flex-col justify-between ${
              p.styles.split(" ")[0]
            }`}
          >
            <a href={p.enlace} target="_blank">
              {" "}
              <div className="flex flex-col items-start  group">
                <img
                  src={p.logo}
                  alt={p.name}
                  className={`  w-auto mb-2 object-contain  ${p.stylesImagen}`}
                />
                <span
                  className={`text-xs sm:text-sm uppercase opacity-70 ${
                    p.styles.split(" ")[1]
                  }`}
                >
                  SOCIO
                </span>
                <div className="flex justify-between items-center w-full">
                  {/* Texto */}
                  <span
                    className={`text-base sm:text-lg ${p.styles.split(" ")[1]}`}
                  >
                    {p.name.split(" ")[0]}{" "}
                    <strong className="font-bold">
                      {p.name.split(" ").slice(1).join(" ")}
                    </strong>
                  </span>

                  {/* Botón */}
                  <button
                    className={`rounded-full border w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center ${
                      p.styles.split(" ")[3]
                    } ${p.styles.split(" ")[4]} transition duration-300 ${
                      p.styles.split(" ")[2]
                    } ${p.styles.split(" ")[1]}`}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>

      <p className="  ps-10 text-[#877D7F] text-lg mt-15">
        ALIADOS <span className=" text-black">INTERNACIONALES</span>
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 mt-10">
        {/* Primeros dos partners */}
        {internacionales.slice(0, 3).map((p, i) => (
          <div
            key={i}
            className={`relative rounded-xl p-6 flex flex-col justify-between ${
              p.styles.split(" ")[0]
            }`}
          >
            <a href={p.enlace} target="_blank">
              <div className="flex flex-col items-start group ">
                <img
                  src={p.logo}
                  alt={p.name}
                  className={` h-32 w-auto mb-2 object-contain  ${p.stylesImagen}`}
                />
                <span
                  className={`text-xs sm:text-sm uppercase opacity-70 font-extralight  ${
                    p.styles.split(" ")[1]
                  }`}
                >
                  SOCIO
                </span>
                <div className="flex justify-between items-center w-full">
                  {/* Texto */}
                  <span
                    className={`text-base sm:text-lg ${p.styles.split(" ")[1]}`}
                  >
                    {p.name.split(" ")[0]}{" "}
                    <strong className="font-bold">
                      {p.name.split(" ").slice(1).join(" ")}
                    </strong>
                  </span>

                  {/* Botón */}
                  <button
                    className={`rounded-full border w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center ${
                      p.styles.split(" ")[3]
                    } ${p.styles.split(" ")[4]} transition duration-300 ${
                      p.styles.split(" ")[2]
                    } ${p.styles.split(" ")[1]}`}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </a>
          </div>
        ))}

        {/* Resto de partners */}
      </div>
    </>
  );
}
