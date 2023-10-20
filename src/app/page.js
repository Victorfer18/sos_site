"use client";
import { redirect } from "next/navigation";

export default function App() {
  return <div>{redirect("/home")}</div>;
}
