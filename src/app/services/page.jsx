"use client";
import React from "react";
import Template from "../components/template.jsx";
import { Spacer } from "@nextui-org/react";
import TemplateContent from "../components/templateContent.jsx";
import ServicesHeader from "../components/sections/services/servicesHeader.jsx";
import ServicesContentPage from "../components/sections/services/servicesContentPage.jsx";
export default function Services() {
  return (
    <div>
      <Template>
        <ServicesHeader />
        <TemplateContent>
          <Spacer y={32} />
          <ServicesContentPage />
          <Spacer y={28} />
        </TemplateContent>
      </Template>
    </div>
  );
}
