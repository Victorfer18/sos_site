import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, CardBody, Divider, Image, Link } from "@nextui-org/react";
import { useMemo } from "react";
import { certificates, companyInfo } from "./contentCertificates.jsx";

const contentCard = (companyInfo, start = 0, end = 0) =>
  companyInfo.slice(start, end).map((info) => (
    <div
      key={info.id}
      className="grid place-content-center place-items-center text-center gap-5"
    >
      <h4 className="text-redTheme font-semibold text-lg md:text-base">
        {info.title}
      </h4>
      <p className="text-slate-500 md:text-sm">{info.description}</p>
    </div>
  ));

export default function Certificates() {
  const generationDots = useMemo(() => {
    var dots = [];
    for (let index = 0; index < 10; index++) {
      dots = [
        ...dots,
        <FontAwesomeIcon
          icon={faCircle}
          className="text-redTheme text-[7px] md:text-[10px] lg:block hidden"
          key={index}
        />,
      ];
    }
    return dots;
  }, []);
  const sgiImage = "./images/utility/sgi.png";
  const contentInfos = [
    contentCard(companyInfo, 0, 3),
    <Image
      loading="lazy"
      src={sgiImage}
      alt="SGI"
      className="rounded-none w-full h-full"
    />,
    contentCard(companyInfo, 3, 6),
  ];
  return (
    <section>
      <div className="grid gap-5">
        <div className="flex items-center gap-5 font-bold text-3xl justify-center">
          {generationDots}
          <h2>Certificações</h2>
          {generationDots}
        </div>
        <div className="grid place-content-center text-center place-items-center gap-5">
          <span className="text-slate-500 text-sm">
            O objetivo do SGI é aumentar a eficiência e a produtividade da
            empresa, reduzir custos e riscos, melhorar a tomada de decisões.
          </span>
          <span>
            <b>Nossas Certificações:</b>{" "}
            {certificates.map((certificate) => (
              <Link
                href={certificate.link}
                color="foreground"
                variant="flat"
                key={certificate.id}
                className="font-bold text-redTheme no-underline hover:underline p-1"
                target="_blank"
              >
                {certificate.name}
              </Link>
            ))}
          </span>
        </div>
        <div>
          <Card>
            <CardBody className="grid grid-cols-1 lg:grid-cols-3 place-content-start place-items-center text-center gap-5">
              <div className="h-full grid place-content-between gap-5">
                {contentInfos[0]}
              </div>
              <div className="h-full grid place-content-center gap-5">
                {contentInfos[1]}
              </div>
              <div className="h-full grid place-content-between gap-5">
                {contentInfos[2]}
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </section>
  );
}
