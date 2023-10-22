"use client";
import React from "react";
import Template from "../components/template.jsx";
import { Spacer } from "@nextui-org/react";
import TemplateContent from "../components/templateContent.jsx";
export default function Blog() {
  return (
    <div>
      <Template>
        <TemplateContent>
          <div>blog</div>
          <Spacer y={28} />
        </TemplateContent>
      </Template>
    </div>
  );
}
