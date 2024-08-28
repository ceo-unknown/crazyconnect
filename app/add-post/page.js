"use client";

import { useState } from "react";
import { Card, CardBody, CardHeader } from "../components/cards/card";
import Button from "../components/css/Button";
import Row from "../components/css/Row";
import Col from "../components/css/Col";

// const addPostInput = [
//   {
//     id: 1,
//     label: "upload file",
//     type: "file",
//     placeholder: "choose file",
//   },
//   {
//     id: 2,
//     label: "title :",
//     type: "text",
//     placeholder: "enter your title",
//   },
//   {
//     id: 3,
//     label: "add description & tags :",
//     type: "text",
//     placeholder: "description & tags",
//   },
// ];

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  function handelTitle(e) {
    e.preventDefault();
    console.log(title, desc);
    setDesc("");
    setTitle("");
  }
  return (
    <>
      <Row className="justify-content-center">
        <Col className={`col-12 col-md-6 col-lg-6`}>
          <Card>
            <CardHeader>add a post</CardHeader>
            <CardBody>
              <form onSubmit={handelTitle}>
                <div className="mb-2">
                  <label className="form-label small">Title : </label>
                  <input
                    type={"text"}
                    placeholder={"enter text"}
                    className={`form-control`}
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="mb-2">
                  <label className="form-label small">Desc : </label>
                  <input
                    type={"text"}
                    placeholder={"enter description"}
                    className={`form-control `}
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                  />
                </div>
                <Button type="submit" className="btn-primary my-2">
                  post
                </Button>
              </form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default AddPost;
