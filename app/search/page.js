import React from "react";
import { Card, CardBody, CardHeader, CardImg } from "../components/cards/card";
import Input from "../components/cards/input/Input";
import Button from "../components/css/Button";
import Flex from "../components/css/Flex";
import ImageGrid from "../components/css/ImageGrid";
import Col from "../components/css/Col";

// image data

const imgData = [
  {
    id: 1,
    imgSrc:
      "https://d2e1hu1ktur9ur.cloudfront.net/wp-content/uploads/2023/10/Nuveksha-2.jpg",
    alt: "",
  },
  {
    id: 2,
    imgSrc:
      "https://d2e1hu1ktur9ur.cloudfront.net/wp-content/uploads/2023/10/Nuveksha-1.jpg",
    alt: "",
  },
  {
    id: 3,
    imgSrc:
      "https://www.mixindia.com/wp-content/uploads/2022/06/Nuveksha-Photos-3.jpg",
    alt: "",
  },
  {
    id: 4,
    imgSrc: "https://pbs.twimg.com/media/GEnt_ZjbUAAuKAV?format=jpg&name=large",
    alt: "",
  },
  {
    id: 5,
    imgSrc: "https://pbs.twimg.com/media/GEnt__qbIAA98Ba?format=jpg&name=large",
    alt: "",
  },
  {
    id: 6,
    imgSrc:
      "https://cdn.gulte.com/wp-content/uploads/2023/10/Yukti-Thareja-2.jpg",
    alt: "",
  },
];

// image grid css
const imageGridStyle = {
  gridTemplateColumns: "repeat(3,1fr)",
  gap: 5,
};
const gridImageStyle = {
  width: "100%",
  height: "100%",
};

const Search = () => {
  return (
    <>
      <Flex className="flex-column  align-items-lg-center">
        <Card className="mb-2 col-lg-6 ">
          <CardBody>
            <Input type={"text"} placeholder={"search..."} />
            <Flex className="justify-content-end">
              <Button className="btn-primary btn-sm ">search</Button>
            </Flex>
          </CardBody>
        </Card>
        <Col className="col-lg-6">
          <Card>
            <CardHeader>filters</CardHeader>
            <CardBody>
              <ImageGrid style={imageGridStyle}>
                {imgData.map((img) => (
                  <CardImg
                    src={img.imgSrc}
                    alt="no image"
                    key={img.id}
                    className="object-fit"
                    style={gridImageStyle}
                  />
                ))}
              </ImageGrid>
            </CardBody>
          </Card>
        </Col>
      </Flex>
    </>
  );
};

export default Search;
