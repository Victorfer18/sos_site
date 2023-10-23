import React, { useState } from "react";
import Template from "../Template";
import SosService from "../components/sections/home/SosService/SosService";
import OurServices from "../components/sections/home/OurServices/OurServices";
import OurNumber from "../components/sections/home/OurNumber/OurNumber";
import ReportManitence from "../components/sections/home/ReportManitence/ReportManitence";
import Branchs from "../components/sections/home/Branchs/Branchs";
import ServiceManager from "../components/sections/home/ServiceManager/ServiceManager";
import OurCollaborator from "../components/sections/home/OurCollaborator/OurCollaborator";
import CardBlog from "../components/sections/home/CardBlog/CardBlog";
import ModalContact from "../components/modal/contact/ModalContact";

export default function Home() {
  const [open, setOpen] = useState(false);
  const handleCardClick = () => {
    setOpen(true);
  };
  return (
    <>
      <Template>
        <SosService handleCardClick={handleCardClick} />
        <div className="px-5 md:px-10 xl:px-24">
          <OurServices />
          <OurNumber />
          <div className="h-16" />
          <ReportManitence />
          <div className="h-16" />
        </div>
        <ServiceManager />
        <div className="h-16" />
        <Branchs handleCardClick={handleCardClick} />
        <div className="h-16" />
        <div className="px-5 md:px-10 xl:px-24">
          <OurCollaborator />
          <div className="h-16" />
          <CardBlog handleCardClick={handleCardClick} />
        </div>
        <div className="h-9">
          {open && <ModalContact open={open} setOpen={setOpen} />}
        </div>
      </Template>
    </>
  );
}
