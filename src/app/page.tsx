"use client"
import Image from "next/image";
import { useTheme } from "next-themes"
import NavBar from "./ui/nav/nav";
export default function Home() {
  const { setTheme } = useTheme()
  return (
    <NavBar />

  );
}
