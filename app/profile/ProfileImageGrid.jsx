import React from "react";
import ImageGrid from "../components/css/ImageGrid";
import { Card, CardBody, CardImg } from "../components/cards/card";
import { imgData } from "../dummyData";
import Spinner from "../components/css/Spinner";
import SkeltonLoader from "../components/css/SkeltonLoader";

// image grid css
const imageGridStyle = {
  gridTemplateColumns: "repeat(3,1fr)",
  gap: 5,
};
const gridImageStyle = {
  width: "100%",
  height: "100%",
};
const ProfileImageGrid = () => {
  return (
    <Card>
      <CardBody className="p-1">
        <ImageGrid style={imageGridStyle}>
          {imgData ? (
            imgData.map((img) =>
              img.imgSrc ? (
                <CardImg
                  src={img.imgSrc}
                  key={img.id}
                  alt="no image"
                  style={gridImageStyle}
                />
              ) : (
                <SkeltonLoader />
              )
            )
          ) : (
            <Spinner />
          )}
        </ImageGrid>
      </CardBody>
    </Card>
  );
};

export default ProfileImageGrid;
