import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button,
  Card,
  CardBody,
  Image,
  Spacer,
  Tab,
  Tabs,
} from "@nextui-org/react";
import contentBranchs from "./contentBranchs.jsx";
import { useMemo } from "react";

export default function Branchs({ onOpen }) {
  const contentTab = useMemo(() => contentBranchs, []);
  return (
    <section>
      <div className="grid gap-5">
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
          className="overflow-x-auto"
          classNames={{
            tabList: " relative rounded-none p-0 border-b-2 border-divider",
          }}
        >
          {(item) => (
            <Tab key={item.id} title={item.label}>
              <Spacer y={10} />
              <Card className="grid grid-rows-3 sm:grid-rows-2 lg:grid-rows-1 min-h-[900px] lg:min-h-[600px] lg:grid-cols-2 gap-5">
                <Image
                  loading="lazy"
                  src={item.src}
                  alt={item.label}
                  className=" w-full h-full object-cover rounded-none min-h-[420px] md:min-h-[430px] lg:min-h-[530px]"
                />
                <CardBody className="grid place-content-between gap-5 row-span-2 sm:row-span-1">
                  <h3 className="text-3xl font-bold leading-10 tracking-widest font-mono text-start">
                    {item.title}
                  </h3>
                  <p className="text-base md:text-lg xl:text-xl leading-8 ">
                    {item.description}
                  </p>
                  <div className="flex justify-end items-center">
                    <Button color="danger" onPress={onOpen}>
                      Fale Conosco
                    </Button>
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
