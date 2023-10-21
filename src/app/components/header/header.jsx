"use client";
import React, { useMemo, useState } from "react";
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
  NavbarMenuToggle,
} from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "./itemsToHeader";
import { ItemsHeader } from "./itemsToHeader";
import { motion } from "framer-motion";

export default function Header({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = useMemo(() => ItemsHeader(), []);

  const logo = {
    src: "./images/logo/logo_sos.png",
    alt: "Logotipo da SOS",
  };

  return (
    <>
      <Navbar
        isBlurred={true}
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        style={{ position: "sticky", top: 0, zIndex: 1 }}
        className={`py-2 ${isMenuOpen ? "shadow-none" : "shadow-lg"}`}
      >
        <NavbarContent className="md:hidden" justify="start">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="md:hidden"
          />
        </NavbarContent>
        <NavbarContent justify={`center`}>
          <NavbarBrand>
            <Link href="https://www.sos-service.com.br/">
              <Image
                loading="lazy"
                src={logo.src}
                alt={logo.alt}
                width={80}
                className="rounded-none min-w-unit-5"
              />
            </Link>
          </NavbarBrand>
        </NavbarContent>
        <NavbarContent className="hidden md:flex gap-10" justify="end">
          {navigationItems.map((item, index) => {
            if (item.children) {
              return (
                <div key={index}>
                  <Dropdown>
                    <NavbarItem>
                      <DropdownTrigger>
                        <Button
                          disableRipple
                          className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                          radius="sm"
                          variant="light"
                        >
                          {item.label}
                        </Button>
                      </DropdownTrigger>
                    </NavbarItem>
                    <DropdownMenu
                      closeOnSelect={false}
                      aria-label={item.label}
                      className="w-[340px]"
                      itemClasses={{
                        base: "gap-4",
                      }}
                      variant="flat"
                      items={item.children}
                    >
                      {(item) => (
                        <DropdownItem textValue={item.label} key={item.label}>
                          <div>
                            {!item.href && (
                              <Dropdown placement="right">
                                <DropdownTrigger>
                                  <Link
                                    radius="sm"
                                    color="foreground"
                                    variant="flat"
                                    className="text-sm flex items-center justify-between"
                                  >
                                    {item.label}
                                    <FontAwesomeIcon
                                      icon={faChevronDown}
                                      size="2xs"
                                    />
                                  </Link>
                                </DropdownTrigger>
                                <DropdownMenu
                                  aria-label={item.label}
                                  className="w-[340px]"
                                  itemClasses={{
                                    base: "gap-4",
                                  }}
                                  variant="flat"
                                  items={item.children}
                                >
                                  {(item) => (
                                    <DropdownItem
                                      textValue={item.label}
                                      key={item.label}
                                    >
                                      <Link
                                        color="foreground"
                                        href={item.href}
                                        className="text-sm"
                                      >
                                        {item.label}
                                      </Link>
                                    </DropdownItem>
                                  )}
                                </DropdownMenu>
                              </Dropdown>
                            )}
                            {item.href && (
                              <Link
                                color="foreground"
                                href={item.href}
                                className="text-sm"
                              >
                                {item.label}
                              </Link>
                            )}
                          </div>
                        </DropdownItem>
                      )}
                    </DropdownMenu>
                  </Dropdown>
                </div>
              );
            } else {
              return (
                <div key={index}>
                  {!item.login && (
                    <NavbarItem>
                      <Link color="foreground" href={item.href}>
                        {item.label}
                      </Link>
                    </NavbarItem>
                  )}
                  <NavbarItem>
                    <Link color="foreground" href={item.href}>
                      {item.label}
                    </Link>
                  </NavbarItem>
                </div>
              );
            }
          })}

          <NavbarItem>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-redTheme p-2 rounded-xl hover:bg-redLightTheme transition-all text-white"
            >
              Área cliente
            </motion.button>
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu className="bg-white p-5">
          {navigationItems.map((item, index) => (
            <NavbarMenuItem key={`${item.label}-${index}`}>
              {item.login ? (
                <NavbarItem>
                  <Link color="danger" href={item.href}>
                    {item.label}
                  </Link>
                </NavbarItem>
              ) : (
                <NavbarItem>
                  <Link color="foreground" href={item.href}>
                    {item.label}
                  </Link>
                </NavbarItem>
              )}
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
      {children}
    </>
  );
}
