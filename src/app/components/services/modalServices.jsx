import {
  Button,
  Card,
  CardBody,
  Divider,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ScrollShadow,
  Spacer,
  Tab,
  Tabs,
} from "@nextui-org/react";

export default function ModalServices({
  isOpen,
  onOpenChange,
  modalContent,
  onOpenModal,
}) {
  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      size="4xl"
      placement="auto"
      scrollBehavior="inside"
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex justify-center text-3xl text-redTheme">
              <h2>{modalContent.title}</h2>
            </ModalHeader>
            <ModalBody>
              <Tabs
                aria-label={modalContent.title}
                items={modalContent.content}
                variant="underlined"
                color="danger"
                fullWidth={true}
                defaultSelectedKey={2}
                classNames={{
                  tabList:
                    " relative rounded-none p-0 border-b-2 border-divider",
                }}
              >
                {(item) => (
                  <Tab key={item.id} title={item.tab} checked={2}>
                    <Spacer y={7} />
                    <Card className="grid lg:grid-cols-7 bg-transparent shadow-none lg:gap-5 place-items-center">
                      <img
                        src={item.photo}
                        alt={item.title}
                        className=" w-full h-full object-cover rounded-none col-span-3"
                        loading="lazy"
                      />
                      <CardBody className="lg:col-span-4 p-0 grid place-content-start place-items-center w-full">
                        {item.title && (
                          <div className="h-full">
                            <h2 className="text-2xl font-bold leading-10 tracking-widest font-mono text-center text-redTheme uppercase">
                              {item.title}
                            </h2>
                          </div>
                        )}
                        <ScrollShadow className="w-full h-full lg:h-[350px] grid gap-5 py-5 scrollBar">
                          <div className="grid gap-2 p-1">
                            <p className=" font-medium font-mono text-center lg:text-start text-neutral-500">
                              {item.subTitle}
                            </p>
                          </div>
                          {item.acting && (
                            <ul className="list-none grid gap-5 place-content-start">
                              {item.acting.map((acting) => (
                                <li
                                  className=" text-sm leading-5"
                                  key={acting.name + "-" + acting.id}
                                >
                                  <span
                                    className={`${
                                      acting.content
                                        ? "font-bold"
                                        : "font-semibold"
                                    }`}
                                  >
                                    ⦁ {acting.name};
                                  </span>
                                  {acting.content && (
                                    <Divider className="bg-neutral-300" />
                                  )}
                                  {acting.content &&
                                    acting.content.map((content) => (
                                      <ul
                                        className="list-none grid gap-5 place-content-start"
                                        key={content.name + "-" + content.id}
                                      >
                                        <li className=" text-base leading-5">
                                          ⦁ {content.name};
                                        </li>
                                      </ul>
                                    ))}
                                </li>
                              ))}
                            </ul>
                          )}
                        </ScrollShadow>
                      </CardBody>
                    </Card>
                  </Tab>
                )}
              </Tabs>
            </ModalBody>
            <ModalFooter>
              <Button
                color="danger"
                variant="solid"
                className="font-semibold"
                onPress={onOpenModal}
              >
                FALE CONOSCO
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
