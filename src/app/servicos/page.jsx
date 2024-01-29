"use client";
import React from "react";
import Template from "../components/template.jsx";
import { Spacer, useDisclosure } from "@nextui-org/react";
import TemplateContent from "../components/templateContent.jsx";
import ServicosHeader from "../components/sections/servicos/servicosHeader.jsx";
import ServicosContentPage from "../components/sections/servicos/servicosContentPage.jsx";
export default function Servicos() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div>
      <Template isOpen={isOpen} onOpen={onOpen} onOpenChange={onOpenChange}>
        <ServicosHeader onOpen={onOpen} />
        <TemplateContent>
          <Spacer y={20} />
          <ServicosContentPage onOpenModal={onOpen} />
          <Spacer y={28} />
        </TemplateContent>
      </Template>
    </div>
  );
}
