import { Link } from "@nextui-org/react";
import ContentOurServices from "./contentOurServices";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function OurServices() {
  return (
    <section>
      <div className="grid gap-5">
        <div className="flex justify-center">
          <div className="grid gap-3 text-center">
            <div className="flex items-center gap-1 font-bold text-3xl">
              Conheça nossos serviços
            </div>
            <span className="text-slate-500 text-sm">
              Confira todos os serviços que a SOS Service presta.
            </span>
          </div>
        </div>
        <div className="grid gap-5">
          <ContentOurServices />
          <div className="flex justify-end">
            <Link
              href="#"
              color="foreground"
              variant="flat"
              className="flex items-center gap-2"
            >
              Veja todos <FontAwesomeIcon icon={faChevronRight} size="xs" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
