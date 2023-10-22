import {
  Button,
  Divider,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Select,
  SelectItem,
  Textarea,
} from "@nextui-org/react";
import { contentCardsCollaborator } from "../../sections/home/ourCollaborator/contentOurCollaborator";
import contentBranchs from "../../sections/home/branchs/contentBranchs";

export default function ModalContact({ isOpen, onOpen, onOpenChange }) {
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
              <h2>Fale conosco</h2>
            </ModalHeader>
            <Divider className="bg-redTheme" />
            <ModalBody>
              <form>
                <div className="grid gap-10 p-5">
                  <div className="grid md:grid-cols-2 gap-10 gap-y-5">
                    <Select
                      items={contentCardsCollaborator}
                      label={
                        <span className="text-lg text-redTheme">
                          Selecione a unidade
                        </span>
                      }
                      variant=""
                      placeholder="Selecione"
                      className="w-full "
                      color="danger"
                      isRequired
                    >
                      {(item) => (
                        <SelectItem key={item.id}>{item.nome}</SelectItem>
                      )}
                    </Select>
                    <Select
                      items={contentBranchs}
                      label={
                        <span className="text-lg text-redTheme">
                          Selecione o Contato
                        </span>
                      }
                      variant=""
                      className="w-full "
                      color="danger"
                      isRequired
                    >
                      {(item) => (
                        <SelectItem key={item.id}>{item.label}</SelectItem>
                      )}
                    </Select>
                    <Input
                      type="text"
                      label={
                        <span className="text-lg text-redTheme">Nome</span>
                      }
                      name="name"
                      isRequired
                      color="danger"
                      variant=""
                    />
                    <Input
                      type="email"
                      label={
                        <span className="text-lg text-redTheme">Email</span>
                      }
                      name="email"
                      isRequired
                      color="danger"
                      variant=""
                    />
                    <Input
                      type="text"
                      label={
                        <span className="text-lg text-redTheme">Telefone</span>
                      }
                      name="phone"
                      isRequired
                      color="danger"
                      variant=""
                    />
                    <Input
                      type="text"
                      label={
                        <span className="text-lg text-redTheme">Empresa</span>
                      }
                      name="company"
                      isRequired
                      color="danger"
                      variant=""
                    />
                  </div>
                  <Textarea
                    label={
                      <span className="text-lg text-redTheme">Menssagem</span>
                    }
                    className="w-full"
                    color="danger"
                    variant=""
                    isRequired
                    minRows={10}
                  />
                  <div className="flex justify-center">
                    <Button
                      type="submit"
                      color="danger"
                      variant="solid"
                      className="font-semibold"
                    >
                      FALE CONOSCO
                    </Button>
                  </div>
                </div>
              </form>
            </ModalBody>
            <ModalFooter></ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
