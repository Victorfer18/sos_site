import { Button } from "@nextui-org/react";

export default function ServicesHeader({ onOpen }) {
  return (
    <section>
      <div className="relative w-full mx-auto grid place-items-center">
        <img
          className="w-full max-h-[600px] mx-auto md:filter md:brightness-50 md:object-cover"
          loading="lazy"
          alt="Collaboradores da SOS"
          src={"./images/photosCarousel/image1.jpg"}
        />
        <div className=" md:absolute top-10 md:top-12 lg:top-32 flex justify-center ">
          <div className="flex flex-col items-center justify-center text-black md:text-white gap-6 text-xs md:text-base">
            <h2 className="text-redTheme md:text-white md:bg-redTheme/80 p-2 rounded-xl font-semibold  text-xl">
              SERVIÇOS
            </h2>
            <p className="text-sm md:text-lg leading-7 text-justify md:text-center">
              Conheça melhor os nossops serviços.
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
