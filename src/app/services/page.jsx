"use client";
import React from "react";
import Template from "../components/template.jsx";
import { Spacer, useDisclosure } from "@nextui-org/react";
import TemplateContent from "../components/templateContent.jsx";
import ServicesHeader from "../components/sections/services/servicesHeader.jsx";
import ServicesContentPage from "../components/sections/services/servicesContentPage.jsx";
export default function Services() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div>
      <Template isOpen={isOpen} onOpen={onOpen} onOpenChange={onOpenChange}>
        <ServicesHeader onOpen={onOpen} />
        <TemplateContent>
          <Spacer y={20} />
          <ServicesContentPage onOpenModal={onOpen} />
          <Spacer y={28} />
        </TemplateContent>
      </Template>
    </div>
  );
}
