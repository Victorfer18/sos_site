import {
  Card,
  CardBody,
  Divider,
  Spacer,
  useDisclosure,
} from "@nextui-org/react";
import { useMemo, useState } from "react";
import { posts } from "../../blog/contentPosts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import ModalCardBlogPosts from "../../modal/modalCardBlogPosts.jsx";
import CardsPosts from "../../blog/cardsPosts.jsx";
export default function Posts({}) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [modalContent, setModalContent] = useState({});

  const openModal = (post) => {
    setModalContent(post);
    onOpen();
  };
  const generationDots = useMemo(() => {
    var dots = [];
    for (let index = 0; index < 10; index++) {
      dots = [
        ...dots,
        <FontAwesomeIcon
          icon={faCircle}
          className="text-redTheme text-[7px] md:text-[10px] lg:block hidden"
          key={index}
        />,
      ];
    }
    return dots;
  }, []);
  return (
    <section>
      <div className="grid gap-5">
        <div className="flex items-center justify-center gap-1 font-bold text-3xl text-center">
          {generationDots}
          <h2>Últimas novidades</h2>
          {generationDots}
        </div>
        <div className=" grid gap-5">
          <Card>
            <CardBody>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
                {posts.slice(0, 3).map((post) => (
                  <div key={post.id}>
                    <CardsPosts openModal={openModal} post={post} />
                  </div>
                ))}
                <ModalCardBlogPosts
                  isOpen={isOpen}
                  modalContent={modalContent}
                  onOpenChange={onOpenChange}
                />
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
      <Spacer y={28} />
      <div className="grid gap-5">
        <div className="flex items-center justify-center gap-1 font-bold text-3xl text-center">
          {generationDots}
          <h2>Conteúdo</h2>
          {generationDots}
        </div>
        <Divider className="bg-redTheme" />
        <div className="grid gap-5">
          <Card>
            <CardBody>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
                {posts.slice(3, -11).map((post) => (
                  <div key={post.id}>
                    <CardsPosts openModal={openModal} post={post} />
                  </div>
                ))}
                <ModalCardBlogPosts
                  isOpen={isOpen}
                  modalContent={modalContent}
                  onOpenChange={onOpenChange}
                />
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </section>
  );
}
