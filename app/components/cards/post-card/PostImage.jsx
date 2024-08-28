"use client";
import React, { useState } from "react";
import { CardImg } from "../card";
import SkeltonLoader from "../../css/SkeltonLoader";
import Flex from "../../css/Flex";

const PostImage = ({ src }) => {
  const [isLoading, setIsLoading] = useState(false);
  if (!src) {
    setIsLoading(true);
  }
  const loaderStyle = {
    height: "400px",
  };
  return (
    <>
      {isLoading ? (
        <Flex
          className="justify-content-center align-items-center"
          style={loaderStyle}
        >
          <SkeltonLoader />
        </Flex>
      ) : (
        <CardImg src={src} alt="no image" className="rounded-0" />
      )}
    </>
  );
};

export default PostImage;
