import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Image,
  Link,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { posts } from "../../../blogPosts/posts";
import { useState } from "react";

export default function Blog() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [modalContent, setModalContent] = useState({});

  const openModal = (post) => {
    setModalContent(post);
    onOpen();
  };

  return (
    <section>
      <div className="grid gap-5">
        <div className="flex items-center justify-center gap-1 font-bold text-3xl text-center">
          <h2>Confira nossas novidades em nosso blog.</h2>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {posts.slice(0, 3).map((post) => (
            <div key={post.id}>
              <Card shadow className="flex flex-wrap h-full grid-rows-2">
                <CardHeader className="grid gap-5">
                  <Image
                    removeWrapper
                    alt={post.title}
                    className="z-0 h-full w-full object-cover"
                    src={"https://picsum.photos/seed/" + post.id + "/500/300"}
                  />
                  <div>
                    <h2 className="font-medium text-large">{post.title}</h2>
                    <small className="text-slate-400 text-xs">
                      {post.created_at}
                    </small>
                  </div>
                </CardHeader>
                <CardBody>
                  <p className="text-slate-500 text-sm">
                    {post.description.slice(0, 80) + "..."}
                  </p>
                </CardBody>
                <CardFooter className="grid place-content-end">
                  <Button
                    color="default"
                    variant="light"
                    onClick={() => openModal(post)}
                  >
                    Ver mais
                  </Button>
                </CardFooter>
              </Card>
            </div>
          ))}
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
                      <h2 className="font-medium text-large">
                        {modalContent.title}
                      </h2>

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
                    >
                      FALE CONOSCO
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
        </div>
        <div className="flex justify-end">
          <Link href="#" color="foreground">
            Veja todos
          </Link>
        </div>
        <Divider className="bg-neutral-300" />
      </div>
    </section>
  );
}
