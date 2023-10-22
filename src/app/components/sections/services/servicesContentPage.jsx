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
import { useState } from "react";
export default function ServicesContentPage() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [modalContent, setModalContent] = useState({});
  const openModal = (post) => {
    setModalContent(post);
    onOpen();
  };
  return (
    <section>
      <Card>
        <CardBody className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {servicesContent.map((item) => (
            <Card key={item.id}>
              <Image
                loading="lazy"
                src={item.photo}
                alt={item.title}
                className="w-full rounded-none min-w-unit-5"
              />
              <CardHeader className="flex justify-between">
                <h2 className="font-medium text-large">{item.title}</h2>
                <Button onClick={() => openModal(item)} color="danger">
                  Abrir
                </Button>
              </CardHeader>
            </Card>
          ))}
        </CardBody>
      </Card>
      <ModalServices
        isOpen={isOpen}
        modalContent={modalContent}
        onOpenChange={onOpenChange}
      />
    </section>
  );
}
