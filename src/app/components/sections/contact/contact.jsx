import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Input,
  Select,
  SelectItem,
  Textarea,
} from "@nextui-org/react";
import contentBranchs from "../home/branchs/contentBranchs";
import { contentCardsCollaborator } from "../home/ourCollaborator/contentOurCollaborator";

export default function Contact() {
  return (
    <section>
      <Card
        radius="lg"
        className="border-none grid place-items-center bg-transparent shadow-none"
      >
        <CardBody className="w-1/2">
          <Card isBlurred className="bg-white border-none" radius="lg">
            <CardHeader className="flex justify-center">
              <h2 className="text-redTheme font-medium text-3xl text-center">
                GOSTARIA DE NOS CONHECER ?
              </h2>
            </CardHeader>
            <Divider className="bg-redTheme" />
            <form>
              <CardBody className="grid gap-5">
                <div className="grid grid-cols-2 gap-5">
                  <Select
                    isRequired
                    items={contentBranchs}
                    variant="underlined"
                    color="danger"
                    label={
                      <span className="text-redTheme font-semibold text-base">
                        Selecione a Unidade
                      </span>
                    }
                    className="text-redTheme"
                  >
                    {(contentBranchs) => (
                      <SelectItem key={contentBranchs.id}>
                        {contentBranchs.label}
                      </SelectItem>
                    )}
                  </Select>
                  <Select
                    isRequired
                    items={contentCardsCollaborator}
                    variant="underlined"
                    color="danger"
                    label={
                      <span className="text-redTheme font-semibold text-base">
                        Selecione o Contato
                      </span>
                    }
                    className="text-redTheme"
                  >
                    {(contentCardsCollaborator) => (
                      <SelectItem key={contentCardsCollaborator.id}>
                        {contentCardsCollaborator.nome +
                          " - " +
                          contentCardsCollaborator.funcao}
                      </SelectItem>
                    )}
                  </Select>
                  <Input
                    type="text"
                    isRequired
                    label={
                      <span className="text-redTheme font-semibold text-base">
                        Nome
                      </span>
                    }
                    color="danger"
                    className="w-full text-redTheme"
                    placeholder="Nome"
                    name="nome"
                    variant="underlined"
                  />
                  <Input
                    type="email"
                    isRequired
                    label={
                      <span className="text-redTheme font-semibold text-base">
                        Email
                      </span>
                    }
                    color="danger"
                    className="w-full text-redTheme"
                    placeholder="Email"
                    name="email"
                    variant="underlined"
                  />
                  <Input
                    type="tele"
                    isRequired
                    label={
                      <span className="text-redTheme font-semibold text-base">
                        Telefone
                      </span>
                    }
                    color="danger"
                    className="w-full text-redTheme"
                    placeholder="Telefone"
                    name="telefone"
                    variant="underlined"
                  />
                  <Input
                    type="text"
                    isRequired
                    label={
                      <span className="text-redTheme font-semibold text-base">
                        Empresa
                      </span>
                    }
                    color="danger"
                    className="w-full text-redTheme"
                    placeholder="Empresa"
                    name="company"
                    variant="underlined"
                  />
                </div>
                <Textarea
                  label={
                    <span className="text-redTheme font-semibold text-base">
                      Menssagem
                    </span>
                  }
                  name="message"
                  minRows={10}
                  isRequired
                  color="danger"
                  placeholder="Menssagem"
                  variant="underlined"
                  className="text-redTheme"
                />
              </CardBody>
              <CardFooter className="flex justify-center">
                <Button
                  className="w-1/3 font-semibold"
                  color="danger"
                  type="submit"
                >
                  Enviar
                </Button>
              </CardFooter>
            </form>
          </Card>
        </CardBody>
      </Card>
    </section>
  );
}
