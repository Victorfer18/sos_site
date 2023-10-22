import { faBuilding } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button,
  Card,
  CardBody,
  Divider,
  Image,
  Input,
  Link,
  Spacer,
} from "@nextui-org/react";

export default function Footer({ children }) {
  const dataCompanys = [
    {
      id: 1,
      estado: "São Paulo",
      endereco: "Av. Calil Mohamed Rahal, 459 Barueri - SP",
      telefone: "(11) 3977 - 5198",
    },
    {
      id: 2,
      estado: "São Paulo",
      endereco: "Av. Calil Mohamed Rahal, 459 Barueri - SP",
      telefone: "(11) 3977 - 5198",
    },
    {
      id: 3,
      estado: "São Paulo",
      endereco: "Av. Calil Mohamed Rahal, 459 Barueri - SP",
      telefone: "(11) 3977 - 5198",
    },
    {
      id: 4,
      estado: "São Paulo",
      endereco: "Av. Calil Mohamed Rahal, 459 Barueri - SP",
      telefone: "(11) 3977 - 5198",
    },
  ];
  return (
    <>
      {children}

      <footer className=" w-full  bg-white">
        <div className="p-7">
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
          <Divider className="bg-redTheme" />
          <div className="grid grid-cols-2 lg:grid-cols-4 ">
            {dataCompanys.map((company) => (
              <Card key={company.id} className="bg-transparent shadow-none">
                <CardBody>
                  <div className="grid gap-5">
                    <h4>
                      <span className="font-semibold text-redTheme">
                        {company.estado}
                      </span>
                    </h4>
                    <Link
                      href={`https://maps.google.com/?q=${company.endereco}`}
                      isExternal
                      color="foreground"
                      className="no-underline hover:underline flex gap-2 items-center text-sm"
                    >
                      <FontAwesomeIcon
                        icon={faBuilding}
                        className="text-redTheme"
                      />{" "}
                      {company.endereco}
                    </Link>
                    <Link
                      href={`tel:${company.telefone}`}
                      isExternal
                      color="foreground"
                      className="no-underline hover:underline flex gap-2 text-sm"
                    >
                      <FontAwesomeIcon
                        icon={faPhone}
                        className="text-redTheme"
                      />{" "}
                      {company.telefone}
                    </Link>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
        <Spacer y={12} />
        <div className="max-w-screen-xl mx-auto py-2">
          <div className="flex justify-center items-center">
            <p className="text-gray-500 text-xs">© 2023 DDC COMPANY, Inc.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
