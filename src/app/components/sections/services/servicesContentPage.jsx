import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Image,
  useDisclosure,
} from "@nextui-org/react";
import servicesContent from "../../services/servicesContent";
import ModalServices from "../../services/modalServices";
import { useEffect, useState } from "react";
import { storeServiceData } from "../../../js/index";

export default function ServicesContentPage({ onOpenModal }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [modalContent, setModalContent] = useState({});
  const openModal = (post) => {
    setModalContent(post);
    onOpen();
  };
  useEffect(() => {
    const serviceData = storeServiceData.getState();
    if (serviceData.serviceData) {
      openModal(
        servicesContent.filter(
          (item) => item.id === serviceData.serviceData.idRef
        )[0]
      );
    }
    serviceData.setServiceData(null);
  }, []);
  return (
    <section>
      <Card className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
        {servicesContent.map((item) => (
          <Card key={item.id} className="h-full">
            <Image
              loading="lazy"
              src={item.photo}
              alt={item.title}
              className="w-full rounded-none object-cover h-full"
            />
            <CardBody className="grid grid-cols-3 gap-1 place-content-center ">
              <div className="col-span-2 flex items-center">
                <h2 className="font-medium text-large">{item.title}</h2>
              </div>
              <div className="grid place-items-center col-span-1">
                <Button
                  onClick={() => openModal(item)}
                  color="danger"
                  fullWidth
                >
                  Abrir
                </Button>
              </div>
            </CardBody>
          </Card>
        ))}
      </Card>
      <ModalServices
        isOpen={isOpen}
        modalContent={modalContent}
        onOpenChange={onOpenChange}
        onOpenModal={onOpenModal}
      />
    </section>
  );
}
