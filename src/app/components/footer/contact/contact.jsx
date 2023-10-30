import {
  Button,
  Card,
  CardBody,
  Divider,
  Image,
  Input,
  Link,
} from "@nextui-org/react";

import ModalContact from "./modalContact";
export default function Contact({ isOpen, onOpen, onOpenChange }) {
  return (
    <>
      <div className="flex justify-between flex-col md:flex-row items-center md:items-end pb-5 ">
        <Card className="bg-transparent shadow-none">
          <CardBody>
            <Link href="/home#startPage" color="foreground">
              <Image
                loading="lazy"
                src={"./images/logo/logo_sos.png"}
                alt={"Logo SOS"}
                width={80}
                className="rounded-none min-w-unit-5"
              />
            </Link>
          </CardBody>
        </Card>
        <Card className="bg-transparent shadow-none">
          <CardBody>
            <div className="grid gap-5">
              <h2 className="text-redTheme font-medium text-2xl text-center">
                GOSTARIA DE NOS CONHECER ?
              </h2>
              <div className="grid place-items-center place-justify-center gap-2 ">
                <div>
                  <Button
                    type="submit"
                    color="danger"
                    className="w-full"
                    onPress={onOpen}
                  >
                    FALE CONOSCO
                  </Button>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
        <Card className="bg-transparent shadow-none">
          <CardBody>
            <div className="flex justify-end items-end gap-2">
              <Link
                isExternal
                href="https://www.linkedin.com/company/sos-service-com%C3%A9rcio-e-engenharia-ltda/"
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
                href="https://www.facebook.com/SOSServiceEngenhariaEletrica?mibextid=LQQJ4d"
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
