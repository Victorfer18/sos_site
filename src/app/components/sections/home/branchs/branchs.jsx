import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, CardBody, Image, Tab, Tabs } from "@nextui-org/react";
import contentBranchs from "./contentBranchs.jsx";
import { useMemo } from "react";
import Button from "../../../button.jsx";

export default function Branchs() {
  const contentTab = useMemo(() => contentBranchs, []);
  return (
    <section>
      <div>
        <div className="flex items-center gap-1 font-bold text-3xl">
          <h2>
            <FontAwesomeIcon
              icon={faCircle}
              className="text-redTheme text-[7px] md:text-[10px]"
            />
            Filiais
          </h2>
        </div>
        <Tabs
          aria-label="Filiais"
          items={contentTab}
          variant="underlined"
          color="danger"
          fullWidth={true}
        >
          {(item) => (
            <Tab key={item.id} title={item.label} className="">
              <Card className="grid grid-rows-3 sm:grid-rows-2 lg:grid-rows-1 min-h-[850px] lg:min-h-[550px] lg:grid-cols-2  gap-5">
                <Image
                  loading="lazy"
                  src={item.src}
                  alt={item.label}
                  className=" w-full h-full object-cover rounded-none min-h-[320px] md:min-h-[430px] lg:min-h-[530px]"
                />
                <CardBody className="grid place-content-between gap-5 row-span-2 sm:row-span-1">
                  <h3 className="text-3xl font-bold leading-10 tracking-widest font-mono text-start">
                    {item.title}
                  </h3>
                  <p className="text-base md:text-lg xl:text-xl leading-8 ">
                    {item.description}
                  </p>
                  <div className="flex justify-end items-center">
                    <Button>Fale Conosco</Button>
                  </div>
                </CardBody>
              </Card>
            </Tab>
          )}
        </Tabs>
      </div>
    </section>
  );
}
