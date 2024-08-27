import React from "react";
import { Card, CardBody, CardHeader, CardImg } from "../components/cards/card";
import Input from "../components/cards/input/Input";
import Button from "../components/css/Button";
import Flex from "../components/css/Flex";
import ImageGrid from "../components/css/ImageGrid";

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

const Search = () => {
  return (
    <>
      <Card className="mb-2">
        <CardBody>
          <Input
            type={"text"}
            placeholder={"search..."}
            className="form-control-lg"
          />
          <Flex className="justify-content-end">
            <Button className="btn-primary btn-sm ">search</Button>
          </Flex>
        </CardBody>
      </Card>
      <Card>
        <CardHeader>filters</CardHeader>
        <CardBody>
          <ImageGrid style={imageGridStyle}>
            {imgData.map((img) => (
              <CardImg
                src={img.imgSrc}
                alt="no image"
                key={img.id}
                className="object-fit w-100 h-100"
              />
            ))}
          </ImageGrid>
        </CardBody>
      </Card>
    </>
  );
};

export default Search;
