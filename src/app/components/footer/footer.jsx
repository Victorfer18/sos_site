import { faBuilding } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, CardBody, Chip, Divider, Spacer } from "@nextui-org/react";

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
      <footer className=" w-full">
        <Divider className="bg-neutral-300" />
        <div className="grid grid-cols-2 lg:grid-cols-4 px-7">
          {dataCompanys.map((company) => (
            <Card key={company.id} className="bg-transparent shadow-none">
              <CardBody>
                <div className="grid gap-5">
                  <h4>
                    <span className="font-semibold text-redTheme">
                      {company.estado}
                    </span>
                  </h4>
                  <small>
                    <FontAwesomeIcon
                      icon={faBuilding}
                      className="text-redTheme"
                    />{" "}
                    {company.endereco}
                  </small>
                  <small>
                    <FontAwesomeIcon icon={faPhone} className="text-redTheme" />{" "}
                    {company.telefone}
                  </small>
                </div>
              </CardBody>
            </Card>
          ))}
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
