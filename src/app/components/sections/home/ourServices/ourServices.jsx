import { Divider, Link } from "@nextui-org/react";
import ContentOurServices from "./contentOurServices";

export default function OurServices() {
  return (
    <section>
      <div className="grid gap-5">
        <div className="flex justify-center">
          <div className="grid gap-3 text-center">
            <div className="flex items-center gap-1 font-bold text-3xl">
              <h2>Conheça nossos serviços</h2>
            </div>
            <span className="text-slate-500 text-sm">
              Confira todos os serviços que a SOS Service presta.
            </span>
          </div>
        </div>
        <div className="grid gap-5">
          <ContentOurServices />
          <div className="flex justify-end">
            <Link href="/services" color="foreground">
              Veja todos
            </Link>
          </div>
          <Divider className="bg-neutral-300" />
        </div>
      </div>
    </section>
  );
}
