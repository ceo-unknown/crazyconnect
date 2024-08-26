import React from "react";
import { Card, CardBody, CardFooter } from "../card.js";
import PostHeader from "./PostHeader.jsx";
import PostImage from "./PostImage.jsx";
import PostDescription from "./PostDescription.jsx";
import PostFooter from "./PostFooter.jsx";

const PostCard = () => {
  return (
    <>
      <Card className="mb-2">
        <PostHeader />
        <CardBody className="p-0">
          <PostImage />
          <PostDescription />
        </CardBody>
        <CardFooter className="p-0">
          <PostFooter />
        </CardFooter>
      </Card>
    </>
  );
};

export default PostCard;
