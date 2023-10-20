import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Card,
  CardBody,
  CardHeader,
  Image,
  Tab,
  Tabs,
} from "@nextui-org/react";
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
              className="text-redTheme text-xs"
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
              <Card className="grid md:grid-cols-2 min-h-[400px] gap-5">
                <Image
                  loading="lazy"
                  src={item.src}
                  alt={item.label}
                  className=" w-full h-full object-cover order-2 rounded-none"
                />
                <CardBody className="grid gap-5">
                  <h3 className="text-3xl font-bold">{item.title}</h3>
                  <p className="text-base">{item.description}</p>
                  <div className="flex justify-end">
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
