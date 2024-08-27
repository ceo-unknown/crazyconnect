import React from "react";
import { CardImg } from "../card";
import SkeltonLoader from "../../css/SkeltonLoader";

const PostImage = ({ src }) => {
  return (
    <>
      {src ? (
        <CardImg src={src} alt="no image" className="rounded-0" />
      ) : (
        <SkeltonLoader />
      )}
    </>
  );
};

export default PostImage;
