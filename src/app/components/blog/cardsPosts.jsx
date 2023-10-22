import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Image,
} from "@nextui-org/react";

export default function CardsPosts({ openModal, post }) {
  return (
    <Card shadow className="flex flex-wrap h-full grid-rows-2">
      <CardHeader className="grid gap-5">
        <Image
          removeWrapper
          alt={post.title}
          className="z-0 h-full w-full object-cover"
          src={"https://picsum.photos/seed/" + post.id + "/500/300"}
        />
      </CardHeader>
      <CardBody className="grid gap-2">
        <div>
          <h2 className="font-medium text-large">{post.title}</h2>
          <small className="text-slate-400 text-xs">{post.created_at}</small>
        </div>
        <Divider className="bg-neutral-300" />
        <p className="text-slate-500 text-sm">
          {post.description.slice(0, 80) + "..."}
        </p>
      </CardBody>
      <CardFooter className="grid place-content-end">
        <Button color="default" variant="light" onClick={() => openModal(post)}>
          Ver mais
        </Button>
      </CardFooter>
    </Card>
  );
}
