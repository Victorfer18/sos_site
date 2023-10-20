"use client";
import {
  Accordion,
  AccordionItem,
  Button,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Image,
  Link,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";
import { contentCardsCollaborator } from "./contentOurCollaborator.jsx";
import { motion } from "framer-motion";
import { useMemo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faSquarePhone } from "@fortawesome/free-solid-svg-icons";

const useCardsComponent = () => {
  const cardsComponent = useMemo(() => {
    return contentCardsCollaborator.map((card) => (
      <Card isFooterBlurred shadow="md" key={card.id}>
        <CardBody className="p-0 overflow-visible">
          <Image
            removeWrapper
            alt="Card example background"
            className="z-0 h-full w-full object-cover"
            src={card.photo}
          />
        </CardBody>
        <CardFooter className="absolute bg-black/40 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between p-0">
          <div className="grid gap-1 place-items-start text-white w-full">
            {/* <small className=" font-semibold text-tiny md:text-small lg:text-medium xl:text-large">
              {card.nome}
            </small> */}
            {/* <span className=" text-tiny lg:text-small xl:text-medium">
              {card.funcao}
            </span> */}
            <Accordion isCompact className="text-white">
              <AccordionItem
                key="1"
                aria-label={card.nome}
                title={
                  <h2 className="text-white font-semibold text-base xl:text-large">
                    {card.nome}
                  </h2>
                }
                className=" p-0 w-full"
              >
                <Divider />
                <div className="grid gap-2 py-1">
                  <div>
                    <span>{card.funcao}</span>
                  </div>
                  <div className="flex flex-wrap">
                    <Link
                      href={`mailto:${card.email}`}
                      color="foreground"
                      variant="flat"
                      key={card.id}
                      className="font-bold text-white no-underline hover:underline p-1"
                      target="_blank"
                    >
                      <small className="underline text-xs lg:text-sm">
                        <FontAwesomeIcon
                          icon={faEnvelope}
                          size="lg"
                          className="text-redTheme"
                        />{" "}
                        {card.email}
                      </small>
                    </Link>
                  </div>
                  <div className="flex flex-wrap">
                    <Link
                      href={`tel:${card.telephone}`}
                      color="foreground"
                      variant="flat"
                      key={card.id}
                      className="font-bold text-white no-underline hover:underline p-1"
                      target="_blank"
                    >
                      <small className="underline text-xs lg:text-sm">
                        <FontAwesomeIcon
                          icon={faSquarePhone}
                          style={{ color: "#25d366" }}
                          size="lg"
                        />{" "}
                        {card.telephone}
                      </small>
                    </Link>
                  </div>
                  <div className="flex flex-wrap">
                    <Link
                      href={`https://wa.me/${card.telephoneMessage}`}
                      color="foreground"
                      variant="flat"
                      key={card.id}
                      className="font-bold text-white no-underline hover:underline p-1"
                      target="_blank"
                    >
                      <small className="underline text-xs lg:text-sm">
                        <FontAwesomeIcon
                          icon={faWhatsapp}
                          style={{ color: "#25d366" }}
                          size="lg"
                        />{" "}
                        {card.telephoneMessage}
                      </small>
                    </Link>
                  </div>
                </div>
              </AccordionItem>
            </Accordion>
          </div>
        </CardFooter>
      </Card>
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
        <div className="grid  md:grid-cols-3 gap-5 bg-white rounded-large p-5 place-content-center place-items-center">
          {cardsComponent}
        </div>
      </div>
    </section>
  );
}
