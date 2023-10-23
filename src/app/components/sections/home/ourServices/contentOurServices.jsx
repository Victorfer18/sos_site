import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";
import { useMemo } from "react";

const ContentOurServices = () => {
  const contentOurServices = useMemo(
    () => [
      {
        title: "Contratos de Manutenção",
        description:
          "A SOS Service realiza a gestão da manutenção em subestações, ativos através de inspeções técnicas de analise, tendo como principal objetivo evitar falhas nos ativos ocasionando paradas não programadas.",
        src: "./images/icons/chave.png",
      },
      {
        title: "Serviços de Oficina",
        description:
          "A SOS SERVICE possui 03 oficinas (São Paulo, Paraná e Bahia) para revisão e reforma de disjuntores de Média Tensão e baixa tensão. Nossa equipe é composta por profissionais altamente treinados e qualificados, para realização dos trabalhos em equipamentos de todos fabricantes existente no mercado.",
        src: "./images/icons/maleta.png",
      },
      {
        title: "Testes em EPi's e EPC's",
        description:
          "Para sua comodidade dispomos de laboratório móvel para testes em EPI's e EPC's. Atendemos em todo território nacional. Realizamos ensaios em uma ampla gama de Equipamentos de Proteção Individual (EPI's) e Equipamentos de Proteção Coletiva (EPC's). Os ensaios abrangem diversos itens essenciais como.",
        src: "./images/icons/escudo.png",
      },
      {
        title: "Transformadores",
        description:
          "Para evitar ou corrigir as paradas súbitas dos equipamentos, a inconstância ou paralisação do fornecimento de energia, a perda de produtividade e até mesmo o risco de eventuais acidentes a SOS Service oferece diversos tipos de serviços em transformadores de potência.",
        src: "./images/icons/transformador.png",
      },
      {
        title: "Retrofit em equipamentos",
        description:
          "O retrofit é um processo que consiste em modernizar a infraestrutura elétrica de uma construção e conservar a estrutura original do local, promovendo a substituição ou acréscimo em elementos mais antigos.",
        src: "./images/icons/engrenagem.png",
      },
    ],
    []
  );

  const cardsComponent = (contentOurService) => (
    <Card className=" grid place-content-start place-items-center text-center h-full min-h-[280px] py-3">
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
        <p className="text-slate-500 md:text-sm text-center">
          {contentOurService.description.length > 100
            ? contentOurService.description.slice(0, 100) + "..."
            : contentOurService.description}
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
