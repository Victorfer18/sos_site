import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Card, CardBody, Image, Input } from "@nextui-org/react";

export default function Contact() {
  return (
    <section>
      <Card radius="lg" className="border-none grid place-items-center">
        <Image
          removeWrapper
          alt={"contato"}
          className="z-0 h-full w-full object-cover"
          src="./images/utility/image_contato.png"
        />
        <CardBody className="absolute z-10 flex items-center">
          <div className="w-1/3 text-center grid place-items-center gap-5">
            <FontAwesomeIcon icon={faEnvelope} style={{ color: "#ffffff" }} />
            <h2 className="text-redTheme font-medium">
              GOSTARIA DE NOS CONHECER ?
            </h2>
            <small className="text-white font-light leading-8 tracking-wider">
              Entre em contato com a gente e saiba mais sobre nossos serviços.
            </small>
            <Card className="grid grid-cols-4 p-1">
              <Input
                type="email"
                isRequired
                placeholder="you@example.com"
                name="email"
                className="col-span-3 bg-transparent border-none"
              />
              <Button auto size="small" color="danger" className="col-span-1">
                Enviar
              </Button>
            </Card>
          </div>
        </CardBody>
      </Card>
    </section>
  );
}
