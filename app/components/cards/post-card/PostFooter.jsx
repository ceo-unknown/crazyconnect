import Button from "@/app/components/css/Button";
import Flex from "@/app/components/css/Flex";
import React from "react";

const PostFooter = () => {
  return (
    <>
      <Flex className={`justify-content-between`}>
        <Button>like</Button>
        <Button>comment</Button>
        <Button>share</Button>
      </Flex>
    </>
  );
};

export default PostFooter;
