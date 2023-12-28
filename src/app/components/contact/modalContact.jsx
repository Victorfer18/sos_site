import React, { useState } from "react";
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
import { contentCardsCollaborator } from "../sections/home/ourCollaborator/contentOurCollaborator";
import contentBranchs from "../sections/home/branchs/contentBranchs";
import axios from "axios";

export default function ModalContact({ isOpen, onOpen, onOpenChange }) {
  const [name, setName] = useState("victor");
  const [email, setEmail] = useState("victorfernandomagalhaes@gmail.com");
  const [phone, setPhone] = useState("11 91560-1390");
  const [company, setCompany] = useState("DDCompany");
  const [message, setMessage] = useState("Sou o victor");
  const [selectedBranch, setSelectedBranch] = useState(null);
  const [selectedContacts, setSelectedContacts] = useState(new Set([]));

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
    event.preventDefault();
    const email_to = filteredContacts.filter(
      (item) => item.id === parseInt(selectedContacts.currentKey)
    )[0].email;
    try {
      console.log(email_to);
      // const response = await axios.post(
      //   "http://129.151.38.122/service_email/send_email",
      //   {
      //     to: "victorfernandomagalhaes@gmail.com",
      //     subject: name + " - " + company,
      //     message:
      //       "<html><head><title>" +
      //       name +
      //       " - " +
      //       company +
      //       "</title></head><body><h4>Empresa: " +
      //       company +
      //       "</h4><h4>Nome: " +
      //       name +
      //       "</h4><h4>Email: " +
      //       email +
      //       "</h4><h4>Telefone: " +
      //       phone +
      //       "</h4><p>" +
      //       message +
      //       "</p><br><br><br><br><br><br><br><p>Atenciosamente " +
      //       company +
      //       ".</p></body></html>",
      //   }
      // );
      const response = "";
      // const response = await fetch(
      //   "https://api.email.ddccompany.com.br/send_email",
      //   {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify({
      //       to: email_to,
      //       subject: name + " - " + company,
      //       message:
      //         "<html><head><title>" +
      //         name +
      //         " - " +
      //         company +
      //         "</title></head><body><h4>Empresa: " +
      //         company +
      //         "</h4><h4>Nome: " +
      //         name +
      //         "</h4><h4>Email: " +
      //         email +
      //         "</h4><h4>Telefone: " +
      //         phone +
      //         "</h4><p>" +
      //         message +
      //         "</p><br><br><br><br><br><br><br><p>Atenciosamente " +
      //         company +
      //         ".</p></body></html>",
      //     }),
      //   }
      // );
      if (response.status === 200) {
        alert("Email sent successfully.");
        setName("");
        setEmail("");
        setPhone("");
        setCompany("");
        setMessage("");
      } else {
        alert("Error sending email.");
      }
    } catch (error) {
      console.error(error);
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
            <Divider className="bg-redTheme" />
            <ModalBody>
              <form onSubmit={handleSubmit}>
                <div className="grid gap-10 p-5">
                  <div className="grid md:grid-cols-2 gap-10 gap-y-5">
                    <Select
                      items={contentBranchs}
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
                      label={
                        <span className="text-lg text-redTheme">
                          Selecione o Contato
                        </span>
                      }
                      variant=""
                      placeholder="Selecione"
                      className="w-full "
                      color="danger"
                      selectedKeys={selectedContacts}
                      onSelectionChange={setSelectedContacts}
                    >
                      {(item) => (
                        <SelectItem key={item.id}>{item.nome}</SelectItem>
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
                      value={name}
                      onValueChange={setName}
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
                      value={email}
                      onValueChange={setEmail}
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
                      value={phone}
                      onValueChange={setPhone}
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
                      value={company}
                      onValueChange={setCompany}
                    />
                  </div>
                  <Textarea
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
