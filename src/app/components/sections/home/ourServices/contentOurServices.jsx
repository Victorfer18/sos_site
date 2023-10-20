import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";
import { useMemo } from "react";

const ContentOurServices = () => {
  const contentOurServices = useMemo(
    () => [
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
    ],
    []
  );

  const cardsComponent = (contentOurService) => (
    <Card className=" grid place-content-start place-items-center text-center min-h-[280px]">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-cente gap-5">
        <div className="h-12">
          <Image
            loading="lazy"
            src={contentOurService.src}
            alt={contentOurService.title}
            width={50}
            height={50}
            className="rounded-none min-w-unit-5"
          />
        </div>
        <h4 className="font-semibold text-lg md:text-base">
          {contentOurService.title}
        </h4>
      </CardHeader>
      <CardBody>
        <p className="text-slate-500 md:text-sm">
          {contentOurService.description}
        </p>
      </CardBody>
    </Card>
  );

  return (
    <div className="">
      <div className="hidden xl:grid grid-cols-5 gap-5 ">
        {contentOurServices.map((contentOurService, index) => (
          <div key={index}>{cardsComponent(contentOurService)}</div>
        ))}
      </div>
      <div className="grid gap-5 xl:hidden">
        <div className="grid md:grid-cols-3 gap-5">
          {contentOurServices.slice(0, 3).map((contentOurService, index) => (
            <div key={index}>{cardsComponent(contentOurService)}</div>
          ))}
        </div>
        <div className="flex justify-center">
          <div className="flex flex-col md:flex-row justify-center md:w-4/5 gap-5">
            {contentOurServices.slice(3).map((contentOurService, index) => (
              <div key={index}>{cardsComponent(contentOurService)}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentOurServices;
