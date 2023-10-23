import { Button } from "@nextui-org/react";
import Carousel from "../../../home/Carousel.jsx";
export default function HeaderHome({ onOpen }) {
  return (
    <section className="relative">
      <Carousel />
      <div className=" md:absolute top-10 md:top-7 lg:top-32 flex justify-center">
        <div className="flex flex-col items-center justify-center w-5/6 text-black md:text-white gap-6 text-xs md:text-base">
          <h2 className="text-redTheme md:text-white md:bg-redTheme/80 p-2 rounded-xl font-semibold  text-xl">
            ENERGIZANDO PARCERIAS
          </h2>
          <p className="text-sm md:text-lg leading-7 text-justify md:text-center">
            Fundada em 1995 por Engenheiros Eletricistas, a{" "}
            <b className="text-red-500">SOS SERVICE</b> é uma empresa de
            serviços especializada em Soluções de Engenharia e Manutenção em
            Sistemas e Equipamentos Elétrico. A SOS Service tem como foco a
            qualidade nos serviços prestados e segurança no trabalho como
            principio em todas as atividades, buscando sempre a total satisfação
            dos nossos clientes e parceiros. Com fortes políticas de Qualidade,
            Saúde, Segurança e Meio Ambiente, a SOS Service investe
            constantemente em treinamentos para aperfeiçoamento técnico,
            equipamentos e instrumentação de ponta, garantindo profissionais
            altamente especializados e excelencia nos serviços prestados.
          </p>
          <div>
            <Button color="danger" onPress={onOpen}>
              FALE CONOSCO
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
