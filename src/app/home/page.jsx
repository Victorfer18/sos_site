"use client";
import React from "react";
import HeaderHome from "../components/sections/home/headerHome/headerHome.jsx";
import OurServices from "../components/sections/home/ourServices/ourServices.jsx";
import ReportMaintenance from "../components/sections/home/reportMaintenance/reportMaintenance.jsx";
import Branchs from "../components/sections/home/branchs/brantchs.jsx";
import Certificates from "../components/sections/home/certificates/certificates.jsx";
import Template from "../components/template.jsx";
import { Spacer } from "@nextui-org/react";
import TemplateApp from "../components/templateApp.jsx";
export default function Home() {
  return (
    <div>
      <TemplateApp>
        <HeaderHome />
        <Spacer y={32} />
        <Template>
          <OurServices />
          <Spacer y={32} />
          <ReportMaintenance />
          <Spacer y={32} />
          <Branchs />
          <Spacer y={32} />
          <Certificates />
          <Spacer y={32} />
        </Template>
      </TemplateApp>
    </div>
  );
}
