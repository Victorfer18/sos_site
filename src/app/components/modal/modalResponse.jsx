import {
  Button,
  Divider,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { useEffect } from "react";

export default function ModalResponse({
  open,
  message,
  title,
  action = () => {},
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  useEffect(() => {
    if (open) {
      onOpen();
    }
  }, [open]);
  return (
    <Modal isOpen={isOpen} onClose={onClose} isDismissable={false}>
      <ModalContent>
        <ModalHeader className="flex justify-center text-xl text-redTheme">
          {title}
        </ModalHeader>
        <Divider className="bg-redTheme" />
        <ModalBody>
          <div className="p-5">
            <p>{message}</p>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            onClick={() => {
              onClose();
              action();
            }}
            color="danger"
          >
            Concluído
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
