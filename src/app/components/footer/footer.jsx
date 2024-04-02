import { faBuilding } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, CardBody, Link, Spacer } from "@nextui-org/react";
import Contact from "../contact/contact";

export default function Footer({ children, isOpen, onOpen, onOpenChange }) {
  const dataCompanys = [
    {
      id: 1,
      estado: "São Paulo",
      endereco: "Av. Calil Mohamed Rahal, 449 Barueri - SP",
      telefone: "(11) 3977 - 5198",
    },
    {
      id: 2,
      estado: "Paraná",
      endereco: "Rua Augusto Guerino, 1083 Londrina – PR",
      telefone: "(43) 3348 - 0606",
    },
    {
      id: 3,
      estado: "Bahia",
      endereco: "Av. Jorge Amado, s/nº Camaçari – BA",
      telefone: "(71) 3511-1330",
    },
    {
      id: 4,
      estado: "Minas Gerais",
      endereco: "Av. Palmeira Imperial, 447 Uberlândia – MG",
      telefone: "(34) 3232 - 1056",
    },
  ];
  return (
    <>
      {children}
      <div id="contatc" />
      <footer className=" w-full  bg-white">
        <div className="p-7">
          <Contact
            isOpen={isOpen}
            onOpen={onOpen}
            onOpenChange={onOpenChange}
          />
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
            <p className="text-gray-500 text-xs">
              &copy;© 2023 DDC COMPANY, Inc.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
