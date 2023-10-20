import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Image } from "@nextui-org/react";

const { faScrewdriverWrench } = require("@fortawesome/free-solid-svg-icons");

const contentOurServices = [
  {
    title: "Serviços de Campo",
    description:
      "Nossos profissionais são qualificados e habilitados em atendimento à NR10. Também são treinados e reciclados conforme previsto na NR10 e SEP.",
    src: "./images/icons/chave.png",
  },
  {
    title: "Serviços de Oficina",
    description:
      "Nossos profissionais são treinados pelos principais fabricantes de equipamentos elétricos.",
    src: "./images/icons/maleta.png",
  },
  {
    title: "Ensaios especiais",
    description:
      "Para sua comodidade dispomos de laboratório móvel para testes em EPI's e EPC's. Atendemos em todo território nacional.",
    src: "./images/icons/escudo.png",
  },
  {
    title: "Transformadores",
    description:
      "Para sua comodidade dispomos de laboratório móvel para testes em EPI's e EPC's. Atendemos em todo território nacional.",
    src: "./images/icons/transformador.png",
  },
  {
    title: "Testes em EPI's e EPC's",
    description:
      "Para sua comodidade dispomos de laboratório móvel para testes em EPI's e EPC's. Atendemos em todo território nacional.",
    src: "./images/icons/engrenagem.png",
  },
];

export default function ContentOurServices() {
  return (
    <div className="bg-white rounded-2xl">
      <div className="hidden xl:grid grid-cols-5 gap-5 ">
        {contentOurServices.map((contentOurService, index) => (
          <div
            key={index}
            className=" p-5 grid place-content-start place-items-center text-center gap-6  "
          >
            <Image
              loading="lazy"
              src={contentOurService.src}
              alt={contentOurService.title}
              width={40}
              className="rounded-none min-w-unit-5"
            />
            <h3 className="font-semibold text-base ">
              {contentOurService.title}
            </h3>
            <p className="text-slate-500 text-sm">
              {contentOurService.description}
            </p>
          </div>
        ))}
      </div>
      <div className="block xl:hidden">
        <div className="grid md:grid-cols-3 gap-5">
          {contentOurServices.slice(0, 3).map((contentOurService, index) => (
            <div
              key={index}
              className=" p-5 grid place-content-start place-items-center text-center gap-6  "
            >
              <Image
                loading="lazy"
                src={contentOurService.src}
                alt={contentOurService.title}
                width={40}
                className="rounded-none min-w-unit-5"
              />
              <h3 className="font-semibold text-base ">
                {contentOurService.title}
              </h3>
              <p className="text-slate-500 text-sm">
                {contentOurService.description}
              </p>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <div className="flex flex-col md:flex-row justify-center md:w-4/5 gap-5">
            {contentOurServices.slice(3).map((contentOurService, index) => (
              <div
                key={index}
                className=" p-5 grid place-content-start place-items-center text-center gap-6  "
              >
                <Image
                  loading="lazy"
                  src={contentOurService.src}
                  alt={contentOurService.title}
                  width={40}
                  className="rounded-none min-w-unit-5"
                />
                <h3 className="font-semibold text-base ">
                  {contentOurService.title}
                </h3>
                <p className="text-slate-500 text-sm">
                  {contentOurService.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
