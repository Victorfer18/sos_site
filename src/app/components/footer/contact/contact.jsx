import {
  Button,
  Card,
  CardBody,
  Divider,
  Image,
  Input,
  Link,
  useDisclosure,
} from "@nextui-org/react";

import ModalContact from "./modalContact";
export default function Contact() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <div className="flex justify-between flex-col md:flex-row items-center md:items-end pb-5 ">
        <Card className="bg-transparent shadow-none">
          <CardBody>
            <Image
              loading="lazy"
              src={"./images/logo/logo_sos.png"}
              alt={"Logo SOS"}
              width={80}
              className="rounded-none min-w-unit-5"
            />
          </CardBody>
        </Card>
        <Card className="bg-transparent shadow-none">
          <CardBody>
            <div className="grid gap-5">
              <h2 className="text-redTheme font-medium text-2xl text-center">
                GOSTARIA DE NOS CONHECER ?
              </h2>
              <div className="grid place-items-center md:grid-cols-5 gap-2">
                <Input
                  type="email"
                  isRequired
                  color="danger"
                  className="w-full text-redTheme md:col-span-4"
                  placeholder="E-mail"
                  name="email"
                  variant=""
                />
                <Button
                  color="danger"
                  className="md:col-span-1 w-1/2 md:w-full"
                  onPress={onOpen}
                >
                  Enviar
                </Button>
              </div>
            </div>
          </CardBody>
        </Card>
        <Card className="bg-transparent shadow-none">
          <CardBody>
            <div className="flex justify-end items-end gap-2">
              <Link
                isExternal
                href="https://www.linkedin.com/seu-link-do-linkedin"
                color="foreground"
              >
                <Image
                  removeWrapper
                  alt="LinkedIn"
                  src="./images/icons/linkedin.png"
                  width={40}
                  height={40}
                />
              </Link>

              <Link
                isExternal
                href="https://www.facebook.com/seu-link-do-facebook"
                color="foreground"
              >
                <Image
                  removeWrapper
                  alt="Facebook"
                  src="./images/icons/facebook.png"
                  width={40}
                  height={40}
                />
              </Link>
            </div>
          </CardBody>
        </Card>
      </div>
      <ModalContact
        isOpen={isOpen}
        onOpen={onOpen}
        onOpenChange={onOpenChange}
      />
      <Divider className="bg-redTheme" />
    </>
  );
}
