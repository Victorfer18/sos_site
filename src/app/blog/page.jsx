"use client";
import React from "react";
import Template from "../components/template.jsx";
import Posts from "../components/sections/blog/posts.jsx";
import { Spacer, useDisclosure } from "@nextui-org/react";
import TemplateContent from "../components/templateContent.jsx";
export default function Blog() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <div>
      <Template isOpen={isOpen} onOpen={onOpen} onOpenChange={onOpenChange}>
        <TemplateContent>
          <Spacer y={10} />
          <Posts onOpenModal={onOpen} />
          <Spacer y={28} />
        </TemplateContent>
      </Template>
    </div>
  );
}
