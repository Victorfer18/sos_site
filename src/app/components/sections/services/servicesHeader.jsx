import { Button } from "@nextui-org/react";

export default function ServicesHeader({ onOpen }) {
  return (
    <section>
      <div className="relative w-full mx-auto">
        <img
          className="w-full max-h-[600px] mx-auto md:filter md:brightness-50 md:object-cover"
          loading="lazy"
          alt="Collaboradores da SOS"
          src="./images/photosCarousel/image6.jpg"
        />
        <div className=" md:absolute top-10 md:top-12 lg:top-32 flex justify-center ">
          <div className="flex flex-col items-center justify-center w-5/6 xl:w-1/2 text-black md:text-white gap-6 text-xs md:text-base">
            <h2 className="text-redTheme md:text-white md:bg-redTheme/80 p-2 rounded-xl font-semibold  text-xl">
              SERVIÇOS
            </h2>
            <p className="text-sm md:text-lg leading-7 text-justify md:text-center">
              O serviço de campo <b className="text-red-500">NR10</b> refere-se
              a atividades de campo que estão em conformidade com a Norma
              Regulamentadora 10 (NR10) do Ministério do Trabalho do Brasil.
              Essa norma estabelece os requisitos mínimos para garantir a
              segurança e saúde dos trabalhadores que interagem com instalações
              elétricas e serviços em eletricidade.
            </p>
            <div>
              <Button color="danger" onPress={onOpen}>
                FALE CONOSCO
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
