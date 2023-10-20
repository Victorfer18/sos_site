"use client";
import {
  Card,
  CardBody,
  CardFooter,
  Divider,
  Image,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";
import { contentCardsCollaborator } from "./contentOurCollaborator.jsx";
import { motion } from "framer-motion";
import { useMemo } from "react";

const useCardsComponent = () => {
  const cardsComponent = useMemo(() => {
    return contentCardsCollaborator.map((card) => (
      <Popover key={card.id} showArrow offset={10} backdrop="transparent">
        <PopoverTrigger>
          <motion.button whileHover={{ scale: 0.9 }} whileTap={{ scale: 0.9 }}>
            <Card isFooterBlurred shadow="md">
              <CardBody className="p-0 overflow-visible">
                <Image
                  removeWrapper
                  alt="Card example background"
                  className="z-0 h-full w-full object-cover"
                  src={card.photo}
                />
              </CardBody>
              <CardFooter className="absolute bg-black/40 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between p-2">
                <div className="grid gap-1 place-items-start text-white">
                  <small className=" font-semibold text-tiny md:text-small lg:text-medium xl:text-large">
                    {card.nome}
                  </small>
                  <span className=" text-tiny lg:text-small xl:text-medium">
                    {card.funcao}
                  </span>
                </div>
              </CardFooter>
            </Card>
          </motion.button>
        </PopoverTrigger>
        <PopoverContent className="w-full text-white bg-redTheme/95 text-large grid place-items-start">
          <h2 className="font-semibold">{card.nome}</h2>
          <Divider className="bg-white/50" />
          <h3 className="font-medium">{card.descricao}</h3>
          <small>{card.email}</small>
          <small>{card.telephone}</small>
          <small>{card.telephoneMessage}</small>
        </PopoverContent>
      </Popover>
    ));
  }, [contentCardsCollaborator]);

  return cardsComponent;
};

export default function OurCollaborator() {
  const cardsComponent = useCardsComponent();

  return (
    <section>
      <div className="grid gap-5">
        <div className="flex items-center gap-5 font-bold text-3xl justify-start">
          <h2>Nossos Colaboradores</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 bg-white rounded-large p-5 place-content-center place-items-center">
          {cardsComponent}
        </div>
      </div>
    </section>
  );
}
