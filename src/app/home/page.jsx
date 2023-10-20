"use client";
import React from "react";
import { motion } from "framer-motion";
import HeaderHome from "../components/sections/home/headerHome.jsx";
import OurServices from "../components/sections/home/ourServices/ourServices.jsx";
import Template from "../components/template.jsx";
export default function Home() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <HeaderHome />
        <div className="h-10" />
        <Template>
          <OurServices />
          <div className="h-10" />
          <div className="h-10" />
          <div className="h-10" />
          <div className="h-10" />
        </Template>
      </motion.div>
    </div>
  );
}
