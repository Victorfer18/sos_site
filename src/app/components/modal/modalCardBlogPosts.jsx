import {
  Button,
  Divider,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";

export default function ModalCardBlogPosts({
  isOpen,
  onOpenChange,
  modalContent,
  onOpen,
}) {
  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      size="4xl"
      placement="center"
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1"></ModalHeader>
            <ModalBody>
              <Image
                removeWrapper
                alt={modalContent.title}
                className="z-0 h-full w-full object-cover"
                src={modalContent.image}
              />
              <div className="grid gap-5">
                <h2 className="font-medium text-large">{modalContent.title}</h2>

                <small className="text-slate-400 text-xs">
                  {modalContent.created_at}
                </small>
              </div>
              <Divider className="bg-neutral-300" />

              <p className="text-slate-500 text-sm">
                {modalContent.description}
              </p>
            </ModalBody>
            <ModalFooter>
              <Button
                color="danger"
                variant="solid"
                className="font-semibold"
                onPress={onOpen}
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
