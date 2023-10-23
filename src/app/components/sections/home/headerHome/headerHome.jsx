import { Button } from "@nextui-org/react";
import Carousel from "../../../home/Carousel.jsx";
export default function HeaderHome({ onOpen }) {
  return (
    <section className="relative">
      <Carousel />
      <div className=" md:absolute top-10 md:top-12 lg:top-32  flex justify-center">
        <div className="flex flex-col items-center justify-center w-5/6 text-black md:text-white gap-6 text-xs md:text-base">
          <h2 className="text-redTheme md:text-white md:bg-redTheme/80 p-2 rounded-xl font-semibold  text-xl">
            ENERGIZANDO PARCERIAS
          </h2>
          <p className="text-sm md:text-lg leading-7 text-justify md:text-center">
            A <b className="text-red-500">SOS SERVICE</b> iniciou suas
            atividades em 1995. Fundada por engenheiros tem como FOCO principal
            a QUALIDADE nos serviços prestados e como META a SATISFAÇÂO de
            nossos CLIENTES parceiros. Nossa política de constante treinamento
            para aperfeiçoamento técnico e humano, investimentos em
            instrumentação, software, recursos e dispositivos nos dão confiança
            e certeza que nossos trabalhos são de muita qualidade medida por
            pequisa de satisfação e também por demonstração expontânea de nossos
            clientes.
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
