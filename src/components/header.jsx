"use client";
import React, { useCallback, useMemo, useState } from "react";
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
import "./header/itemsToHeader";
import { ItemsHeader } from "./header/itemsToHeader";
import { motion } from "framer-motion";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = useMemo(() => ItemsHeader(), []);

  const logo = {
    src: "https://www.sos-service.com.br/images/logo.png",
    alt: "Logotipo da SOS",
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
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
        <NavbarMenu className="bg-white">
          {navigationItems.map((item, index) => (
            <NavbarMenuItem key={`${item.label}-${index}`}>
              <Link
                color={"foreground"}
                className="w-full text-2xl"
                href="#"
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </motion.div>
  );
}
