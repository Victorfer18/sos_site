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
import { ItemsHeader } from "./itemsToHeader";
import { motion } from "framer-motion";
import { storeServiceData } from "../../js/index";
export default function Header({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = useMemo(() => ItemsHeader(), []);
  const serviceData = storeServiceData((state) => state.setServiceData);
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
        className={`py-2`}
      >
        <NavbarContent className="lg:hidden" justify="start">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="lg:hidden"
          />
        </NavbarContent>
        <NavbarContent justify={`center`}>
          <NavbarBrand>
            <Link href="/home" color="foreground">
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
        <NavbarContent className="hidden lg:flex gap-10" justify="end">
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
                                    className="text-sm flex items-center justify-between w-full"
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
                                        className="text-sm w-full"
                                      >
                                        <div
                                          onClick={() =>
                                            serviceData(
                                              item.idRef === 10 ? null : item
                                            )
                                          }
                                          className="w-full"
                                        >
                                          <span
                                            onClick={() =>
                                              serviceData(
                                                item.idRef === 10 ? null : item
                                              )
                                            }
                                          >
                                            {item.label}
                                          </span>
                                        </div>
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
                                className="text-sm w-full"
                              >
                                <div
                                  onClick={() =>
                                    serviceData(item.idRef === 10 ? null : item)
                                  }
                                  className="w-full"
                                >
                                  <span
                                    onClick={() =>
                                      serviceData(
                                        item.idRef === 10 ? null : item
                                      )
                                    }
                                  >
                                    {item.label}
                                  </span>
                                </div>
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
                </div>
              );
            }
          })}

          <NavbarItem>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-redTheme p-2 rounded-xl hover:bg-redLightTheme transition-all text-white"
              onClick={() =>
                (window.location.href =
                  "https://www.sos-service.com.br/02/index.php/component/users/?view=login")
              }
            >
              Área cliente
            </motion.button>
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu className="p-5">
          {navigationItems.map((item, index) => (
            <NavbarMenuItem key={`${item.label}-${index}`}>
              <NavbarItem>
                {item.login ? (
                  <Link
                    color="danger"
                    href={item.href}
                    className="text-2xl"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <Link
                    color="foreground"
                    href={item.hrefMenu}
                    className="text-2xl"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </NavbarItem>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
      {children}
    </>
  );
}
