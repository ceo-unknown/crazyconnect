import React from "react";
import { Card, CardBody, CardHeader, CardImg } from "../components/cards/card";
import Input from "../components/cards/input/Input";
import Button from "../components/css/Button";
import Flex from "../components/css/Flex";
import ImageGrid from "../components/css/ImageGrid";
import Col from "../components/css/Col";
import { imgData } from "../dummyData";
import Spinner from "../components/css/Spinner";

// image grid css
const imageGridStyle = {
  gridTemplateColumns: "repeat(3,1fr)",
  gap: 5,
};
const gridImageStyle = {
  width: "100%",
  height: "100%",
};
// overflow css
const scrollStyle = {};

const Search = () => {
  return (
    <>
      <Flex className="flex-column  align-items-lg-center">
        <Card className="mb-2 col-lg-6 ">
          <CardBody>
            <Input type={"text"} placeholder={"search..."} />
            <Flex className="justify-content-end">
              <Button className="btn-outline-secondary ">search</Button>
            </Flex>
          </CardBody>
        </Card>
        <Col className="col-lg-6">
          <Card>
            <CardHeader>filters</CardHeader>
            <CardBody style={scrollStyle} className="p-1">
              <ImageGrid style={imageGridStyle}>
                {imgData ? (
                  imgData.map((img) => (
                    <CardImg
                      src={img.imgSrc}
                      alt="no image"
                      key={img.id}
                      className="object-fit"
                      style={gridImageStyle}
                    />
                  ))
                ) : (
                  <Spinner />
                )}
              </ImageGrid>
            </CardBody>
          </Card>
        </Col>
      </Flex>
    </>
  );
};

export default Search;
