import {
  Button,
  Card,
  CardBody,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Spacer,
  Tab,
  Tabs,
} from "@nextui-org/react";

export default function ModalServices({ isOpen, onOpenChange, modalContent }) {
  console.log(modalContent);
  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      size="4xl"
      placement="center"
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
                classNames={{
                  tabList:
                    " relative rounded-none p-0 border-b-2 border-divider",
                }}
              >
                {(item) => (
                  <Tab key={item.id} title={item.title}>
                    <Spacer y={7} />
                    <Card className="grid lg:grid-cols-3 bg-transparent shadow-none gap-5 place-items-center">
                      <img
                        src={item.photo}
                        alt={item.title}
                        className=" w-full h-full object-cover rounded-none "
                        loading="lazy"
                      />
                      <CardBody className="lg:col-span-2 p-0 grid place-content-start place-items-center gap-7">
                        <div className="grid gap-2 place-items-center p-1">
                          <h2 className="text-3xl font-bold leading-10 tracking-widest font-mono text-center text-redTheme uppercase">
                            {item.title}
                          </h2>
                          <p className="text-lg font-medium font-mono text-center text-slate-500">
                            {item.subTitle} {item.subTitle} {item.subTitle}{" "}
                            {item.subTitle} {item.subTitle} {item.subTitle}{" "}
                            {item.subTitle}
                          </p>
                        </div>
                        <ul className="list-disc">
                          {item.acting.map((acting) => (
                            <li
                              className="text-base md:text-lg xl:text-xl leading-8"
                              key={acting.id}
                            >
                              {acting.name} {acting.name} {acting.name}{" "}
                              {acting.name} {acting.name} {acting.name}{" "}
                              {acting.name} {acting.name}
                            </li>
                          ))}
                        </ul>
                      </CardBody>
                    </Card>
                  </Tab>
                )}
              </Tabs>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="solid" className="font-semibold">
                FALE CONOSCO
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
