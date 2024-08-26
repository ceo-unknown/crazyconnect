import { Card, CardBody, CardHeader } from "../components/cards/card";
import Input from "../components/cards/input/Input";
import Button from "../components/css/Button";

const addPostInput = [
  {
    id: 1,
    label: "upload file",
    type: "file",
    placeholder: "choose file",
  },
  {
    id: 2,
    label: "title :",
    type: "text",
    placeholder: "enter your title",
  },
  {
    id: 3,
    label: "add description & tags :",
    type: "text",
    placeholder: "description & tags",
  },
];

const AddPost = () => {
  return (
    <>
      <Card>
        <CardHeader>add a post</CardHeader>
        <CardBody>
          {addPostInput.map((input) => (
            <Input
              type={input.type}
              placeholder={input.placeholder}
              key={input.id}
              className="mb-2"
              label={input.label}
            />
          ))}
          <Button className="btn-primary">Post</Button>
        </CardBody>
      </Card>
    </>
  );
};

export default AddPost;
