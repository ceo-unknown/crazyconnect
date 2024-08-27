import React from "react";
import { Card, CardBody, CardFooter } from "../card.js";
import PostHeader from "./PostHeader.jsx";
import PostImage from "./PostImage.jsx";
import PostDescription from "./PostDescription.jsx";
import PostFooter from "./PostFooter.jsx";
import { imgData } from "@/app/dummyData.js";
import Spinner from "../../css/Spinner.jsx";

const PostCard = () => {
  return (
    <>
      {imgData ? (
        imgData.map((img) => (
          <Card className="mb-2">
            <PostHeader userName={"nuveshka"} />
            <CardBody className="p-0">
              <PostImage src={img.imgSrc} />
              {/* <PostDescription /> */}
            </CardBody>
            <CardFooter className="p-0">
              <PostFooter />
            </CardFooter>
          </Card>
        ))
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default PostCard;
