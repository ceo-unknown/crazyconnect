"use client";
import ImageGrid from "../components/css/ImageGrid";
import { Card, CardBody, CardImg } from "../components/cards/card";
import Spinner from "../components/css/Spinner";
import SkeltonLoader from "../components/css/SkeltonLoader";
import { useState } from "react";
import Flex from "../components/css/Flex";

// image grid css
const imageGridStyle = {
  gridTemplateColumns: "repeat(3,1fr)",
  gap: 5,
};
const gridImageStyle = {
  width: "100%",
  height: "100%",
};
const ProfileImageGrid = ({ imgData }) => {
  // loading state
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  if (!imgData) {
    setLoading(true);
  }
  const loaderStyle = {
    height: `400px`,
  };

  return (
    <Card>
      <CardBody className="p-1">
        {loading ? (
          <Flex
            className="justify-content-center align-items-center h-100"
            style={loaderStyle}
          >
            <SkeltonLoader />
          </Flex>
        ) : (
          <ImageGrid style={imageGridStyle}>
            {imgData.map((img) => (
              <CardImg
                src={img.imgSrc}
                key={img.id}
                alt="no image"
                style={gridImageStyle}
              />
            ))}{" "}
          </ImageGrid>
        )}
      </CardBody>
    </Card>
  );
};

export default ProfileImageGrid;
