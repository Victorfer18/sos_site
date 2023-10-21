import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
} from "@nextui-org/react";
import { posts } from "./posts";

export default function BlogPosts() {
  return (
    <>
      {posts.map((post) => (
        <div key={post.id}>
          <Card shadow className="flex flex-wrap gap-4 p-4">
            <CardHeader className="grid gap-5">
              <Image
                removeWrapper
                alt={post.title}
                className="z-0 h-full w-full object-cover"
                src={post.image}
              />
              <span>{post.tag}</span>
              <h2>{post.title}</h2>
            </CardHeader>
            <CardBody>
              <p>{post.description}</p>
            </CardBody>
            <CardFooter>
              <Button>Leia mais</Button>
            </CardFooter>
          </Card>
        </div>
      ))}
    </>
  );
}
