"use client";
import React from "react";
import HeaderHome from "../components/sections/home/headerHome/headerHome.jsx";
import OurServicos from "../components/sections/home/ourServicos/ourServicos.jsx";
import ReportMaintenance from "../components/sections/home/reportMaintenance/reportMaintenance.jsx";
import Branchs from "../components/sections/home/branchs/branchs.jsx";
import Certificates from "../components/sections/home/certificates/certificates.jsx";
import OurCollaborator from "../components/sections/home/ourCollaborator/ourCollaborator.jsx";
import Template from "../components/template.jsx";
import { Spacer, useDisclosure } from "@nextui-org/react";
import TemplateContent from "../components/templateContent.jsx";
export default function Home() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div>
      <Template isOpen={isOpen} onOpen={onOpen} onOpenChange={onOpenChange}>
        <div id="startPage" />
        <HeaderHome onOpen={onOpen} />
        <Spacer y={24} />
        <TemplateContent>
          <div id="servicos" />
          <OurServicos />
          <Spacer y={32} />
          <ReportMaintenance />
          <div id="branhs" />
          <Spacer y={32} />
          <Branchs onOpen={onOpen} />
          <div id="certificate" />
          <Spacer y={32} />
          <Certificates />
          <Spacer y={32} />
          <OurCollaborator />
          <div id="blog" />
          <Spacer y={28} />
        </TemplateContent>
      </Template>
    </div>
  );
}
