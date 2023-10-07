"use client";
import React from "react";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Image,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const logo = {
    src: "https://www.sos-service.com.br/images/logo.png",
    alt: "Logotipo da SOS",
  };

  const navigationItems = [
    {
      label: "Início",
      href: "#",
    },
    {
      label: "Serviços",
      href: "#",
      children: [
        {
          label: "Manutenção de Ar Condicionado",
          href: "#",
          children: [
            {
              label: "Manutenção de Ar Condicionado",
              href: "#",
            },
            {
              label: "Manutenção de Geladeira",
              href: "#",
            },
            {
              label: "Manutenção de Lavadora de Roupas",
              href: "#",
            },
          ],
        },
        {
          label: "Manutenção de Geladeira",
          href: "#",
          children: [
            {
              label: "Manutenção de Ar Condicionado2",
              href: "#",
            },
            {
              label: "Manutenção de Geladeira",
              href: "#",
            },
            {
              label: "Manutenção de Lavadora de Roupas",
              href: "#",
            },
          ],
        },
        {
          label: "Manutenção de Lavadora de Roupas",
          href: "#",
        },
      ],
    },
    {
      label: "Certificações",
      href: "#",
      children: [
        {
          label: "Manutenção de Ar Condicionadossss",
          href: "#",
        },
        {
          label: "Manutenção de Geladeirassss",
          href: "#",
        },
        {
          label: "Manutenção de Lavadora de Roupasssss",
          href: "#",
        },
      ],
    },
    {
      label: "Filiais",
      href: "#",
    },
    {
      label: "Blog",
      href: "#",
    },
    {
      label: "Contato",
      href: "#",
    },
  ];

  return (
    <Navbar>
      <NavbarBrand>
        <Link href="https://www.sos-service.com.br/">
          <Image
            src={logo.src}
            alt={logo.alt}
            width={80}
            className="rounded-none"
          />
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-10">
        {navigationItems.map((item) => {
          if (item.children) {
            return (
              <>
                <Dropdown key={item.label}>
                  <NavbarItem>
                    <DropdownTrigger>
                      <Button
                        disableRipple
                        className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                        radius="sm"
                        variant="light"
                      >
                        {item.label}
                        <FontAwesomeIcon icon={faChevronDown} size="2xs" />
                      </Button>
                    </DropdownTrigger>
                  </NavbarItem>
                  <DropdownMenu
                    aria-label="ACME features"
                    className="w-[340px]"
                    itemClasses={{
                      base: "gap-4",
                    }}
                  >
                    {item.children.map((child) => (
                      <DropdownItem key={child.label}>
                        {child.label}
                      </DropdownItem>
                    ))}
                  </DropdownMenu>
                </Dropdown>
              </>
            );
          } else {
            return (
              <NavbarItem key={item.label}>
                <Link color="foreground" href={item.href}>
                  {item.label}
                </Link>
              </NavbarItem>
            );
          }
        })}
        <NavbarContent justify="end">
          <NavbarItem>
            <Button href="#" className="bg-redTheme text-white" variant="ghost">
              Sign Up
            </Button>
          </NavbarItem>
        </NavbarContent>
      </NavbarContent>
    </Navbar>
    // <Navbar>
    //   <NavbarContent className="hidden sm:flex gap-4" justify="center">
    //     <div className="flex justify-center">
    //       <div className="container mx-auto grid grid-cols-4 fixed w-full">
    //         <div className="logo">
    //           <div>
    //             <a href="https://www.sos-service.com.br/">
    //               <Image
    //                 src={logo.src}
    //                 alt={logo.alt}
    //                 width={100}
    //                 height={100}
    //                 className="rounded-none"
    //               />
    //             </a>
    //           </div>
    //         </div>
    //         <nav className="col-span-3">
    //           <ul className="flex justify-between items-center h-full text-center font-semibold text-lg">
    //             {navigationItems.map((item) => {
    //               if (item.children) {
    //                 return (
    //                   <NavbarItem>
    //                     <Dropdown key={item.label}>
    //                       <DropdownTrigger>
    //                         <Link
    //                           color="foreground"
    //                           href={item.href}
    //                           disableRipple
    //                           className="p-0 bg-transparent data-[hover=true]:bg-transparent"
    //                           radius="sm"
    //                         >
    //                           {item.label}
    //                         </Link>
    //                       </DropdownTrigger>
    //                       <DropdownMenu>
    //                         {item.children.map((child) => (
    //                           <DropdownItem key={child.label}>
    //                             <a href={child.href}>{child.label}</a>
    //                           </DropdownItem>
    //                         ))}
    //                       </DropdownMenu>
    //                     </Dropdown>
    //                   </NavbarItem>
    //                 );
    //               } else {
    //                 return (
    //                   <NavbarItem key={item.label}>
    //                     <Link color="foreground" href={item.href}>
    //                       {item.label}
    //                     </Link>
    //                   </NavbarItem>
    //                 );
    //               }
    //             })}
    //             <Button className={`bg-redTheme text-white px-3 py-1`}>
    //               Área Cliente
    //             </Button>
    //           </ul>
    //         </nav>
    //       </div>
    //     </div>
    //   </NavbarContent>
    // </Navbar>
  );
}
