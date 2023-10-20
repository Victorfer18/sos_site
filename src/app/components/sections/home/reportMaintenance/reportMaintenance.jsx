import { Image, Link } from "@nextui-org/react";
import Button from "../../../button";

export default function ReportMaintenance() {
  const LogoLock = "./images/utility/logo_lock.png";
  return (
    <section>
      <div className="bg-white p-10 rounded-2xl">
        <div className="grid md:grid-cols-2 place-items-center gap-10">
          <Image
            loading="lazy"
            src={LogoLock}
            alt="Logo da SOS"
            className="rounded-none min-w-unit-5"
          />
          <div className="grid gap-10 text-justify">
            <h1 className="text-3xl text-start font-bold text-redTheme">
              Relatórios Técnicos De Manutenções
            </h1>
            <p className=" text-gray-500 italic">
              <Link color="foreground" variant="flat" href="#">
                <b className="no-underline hover:underline text-lg">
                  Faça seu login para acessar todos os relatórios realizados em
                  suas dependências.
                </b>
              </Link>{" "}
              Área destinada para acesso de relatórios de manutenção, tais como:
              Manutenção preventiva, Manutenção corretiva, Inspeções mensais,
              Inspeções por Ultrassom e termográfica, Laudos e outras...
            </p>
            <div className="grid grid-cols-1 place-items-end">
              <Button className="w-1/3">
                <Link
                  color="foreground"
                  variant="flat"
                  href="#"
                  className="text-white"
                >
                  Acessar
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
