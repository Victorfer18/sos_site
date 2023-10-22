import { faBuilding } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Card,
  CardBody,
  Divider,
  Image,
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
      <Divider className="bg-neutral-300" />
      <Spacer y={12} />
      <footer className=" w-full px-7">
        <div className="flex justify-end items-center gap-2">
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
