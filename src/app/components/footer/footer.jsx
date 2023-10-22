import { faBuilding } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, CardBody, Link, Spacer } from "@nextui-org/react";
import Contact from "./contact/contact";

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
          <Contact />
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
