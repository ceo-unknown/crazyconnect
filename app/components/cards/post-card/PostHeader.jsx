import React from "react";
import { CardHeader, CardImg, CardText } from "../card";
import Flex from "@/app/components/css/Flex";
import Button from "@/app/components/css/Button";

const cardHeaderImgStyle = {
  width: "4rem",
  height: "4rem",
  borderRadius: "50%",
  objectFit: "cover",
  padding: "10px",
};

const PostHeader = () => {
  return (
    <>
      <CardHeader className="p-1">
        <Flex className={`justify-content-between align-items-center`}>
          <CardImg
            src="https://d2e1hu1ktur9ur.cloudfront.net/wp-content/uploads/2023/10/Nuveksha-2.jpg"
            alt="no image"
            style={cardHeaderImgStyle}
          />
          <CardText className="mb-0">user name</CardText>
          <Button>...</Button>
        </Flex>
      </CardHeader>
    </>
  );
};

export default PostHeader;
