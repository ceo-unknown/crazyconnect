import React from "react";
import { Card, CardBody, CardHeader } from "../components/cards/card";
import Input from "../components/cards/input/Input";
import Button from "../components/css/Button";
import Flex from "../components/css/Flex";

const Search = () => {
  return (
    <>
      <Card className="mb-2">
        <CardBody>
          <Flex>
            <Input
              type={"text"}
              placeholder={"search..."}
              className="rounded-0 rounded-start"
            />
            <Button className="btn-primary rounded-0 rounded-end">
              search
            </Button>
          </Flex>
        </CardBody>
      </Card>
      <Card>
        <CardHeader>filters</CardHeader>
        <CardBody>image grid</CardBody>
      </Card>
    </>
  );
};

export default Search;
