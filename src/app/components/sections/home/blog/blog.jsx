import { Link, useDisclosure } from "@nextui-org/react";
import { posts } from "../../../blog/contentPosts";
import ModalCardBlogPosts from "../../../modal/modalCardBlogPosts";
import CardsPosts from "../../../blog/cardsPosts";
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
        <div className="grid gap-5">
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
        </div>
        <div className="flex justify-end">
          <Link href="/blog" color="foreground">
            Veja todos
          </Link>
        </div>
      </div>
    </section>
  );
}
