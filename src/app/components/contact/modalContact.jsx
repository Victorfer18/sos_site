import React, { useState } from "react";
import {
  Button,
  Divider,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  Select,
  SelectItem,
  Textarea,
} from "@nextui-org/react";
import { contentCardsCollaborator } from "../sections/home/ourCollaborator/contentOurCollaborator";
import contentBranchs from "../sections/home/branchs/contentBranchs";
import { EmailSend } from "./EmailSend";
import Loading from "../../components/loading";
import ModalResponse from "../../components/modal/modalResponse";

export default function ModalContact({ isOpen, onOpen, onOpenChange }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [selectedBranch, setSelectedBranch] = useState(null);
  const [selectedContacts, setSelectedContacts] = useState(new Set([]));
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isOpenModalSucces, setIsOpenModalSucces] = useState(false);
  const handleBranchSelectionChange = (e) => {
    setSelectedBranch(parseInt(e.target.value));
  };

  const filteredContacts =
    selectedBranch !== null
      ? contentCardsCollaborator.filter(
          (item) => item.idRefBranch === selectedBranch
        )
      : contentCardsCollaborator;

  const handleSubmit = async (event) => {
    setIsLoading(true);
    setIsDisabled(true);
    event.preventDefault();
    const email_to = filteredContacts.filter(
      (item) => item.id === parseInt(selectedContacts.currentKey)
    )[0].email;
    const name_company = name + " - " + company;
    const messagetext =
      "<html><head><title>" +
      name +
      " - " +
      company +
      "</title></head><body><h4>Empresa: " +
      company +
      "</h4><h4>Nome: " +
      name +
      "</h4><h4>Email: " +
      email +
      "</h4><h4>Telefone: " +
      phone +
      "</h4><p>" +
      message +
      "</p><br><br><br><br><br><br><br><p>Atenciosamente " +
      company +
      ".</p></body></html>";
    try {
      await EmailSend(
        "victorfernandomagalhaes@gmail.com",
        name_company,
        messagetext
      );
      setName("");
      setEmail("");
      setPhone("");
      setCompany("");
      setMessage("");
      setSelectedContacts(new Set([]));
      setIsLoading(false);
      setIsDisabled(false);
      setIsOpenModalSucces(true);
    } catch (error) {
      onOpenChange(false);
      setIsLoading(false);
      alert("Error sending email.");
    }
  };
  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      size="4xl"
      placement="auto"
      scrollBehavior="inside"
    >
      <ModalContent>
        {() => (
          <>
            <ModalHeader className="flex justify-center text-3xl text-redTheme">
              <h2>Fale conosco</h2>
            </ModalHeader>
            <ModalResponse
              message={
                "A sua mensagem foi enviada com sucesso! Em breve estaremos em contato."
              }
              title={"Sucesso"}
              open={isOpenModalSucces}
              action={() => {
                onOpenChange(false);
                setIsOpenModalSucces(false);
              }}
            />
            <Loading isLoading={isLoading}>
              <Divider className="bg-redTheme" />
              <ModalBody>
                <form onSubmit={handleSubmit}>
                  <div className="grid gap-10 p-5">
                    <div className="grid md:grid-cols-2 gap-10 gap-y-5">
                      <Select
                        items={contentBranchs}
                        isDisabled={isDisabled}
                        label={
                          <span className="text-lg text-redTheme">
                            Selecione a Unidade
                          </span>
                        }
                        variant=""
                        placeholder="Selecione"
                        className="w-full "
                        color="danger"
                        onChange={handleBranchSelectionChange}
                      >
                        {(item) => (
                          <SelectItem key={item.id}>{item.label}</SelectItem>
                        )}
                      </Select>
                      <Select
                        autoFocus
                        items={filteredContacts}
                        isDisabled={isDisabled}
                        label={
                          <span className="text-lg text-redTheme">
                            Selecione o Contato
                          </span>
                        }
                        variant=""
                        placeholder="Selecione"
                        className="w-full "
                        color="danger"
                        isRequired
                        selectedKeys={selectedContacts}
                        onSelectionChange={setSelectedContacts}
                      >
                        {(item) => (
                          <SelectItem key={item.id}>{item.nome}</SelectItem>
                        )}
                      </Select>
                      <Input
                        type="text"
                        isDisabled={isDisabled}
                        label={
                          <span className="text-lg text-redTheme">Nome</span>
                        }
                        name="name"
                        isRequired
                        color="danger"
                        variant=""
                        value={name}
                        onValueChange={setName}
                      />
                      <Input
                        type="email"
                        isDisabled={isDisabled}
                        label={
                          <span className="text-lg text-redTheme">Email</span>
                        }
                        name="email"
                        isRequired
                        color="danger"
                        variant=""
                        value={email}
                        onValueChange={setEmail}
                      />
                      <Input
                        type="text"
                        isDisabled={isDisabled}
                        label={
                          <span className="text-lg text-redTheme">
                            Telefone
                          </span>
                        }
                        name="phone"
                        isRequired
                        color="danger"
                        variant=""
                        value={phone}
                        onValueChange={setPhone}
                      />
                      <Input
                        type="text"
                        isDisabled={isDisabled}
                        label={
                          <span className="text-lg text-redTheme">Empresa</span>
                        }
                        name="company"
                        isRequired
                        color="danger"
                        variant=""
                        value={company}
                        onValueChange={setCompany}
                      />
                    </div>
                    <Textarea
                      isDisabled={isDisabled}
                      label={
                        <span className="text-lg text-redTheme">Mensagem</span>
                      }
                      className="w-full"
                      color="danger"
                      variant=""
                      isRequired
                      minRows={10}
                      value={message}
                      onValueChange={setMessage}
                    />
                    <div className="flex justify-center">
                      <Button
                        disabled={isDisabled}
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
            </Loading>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
