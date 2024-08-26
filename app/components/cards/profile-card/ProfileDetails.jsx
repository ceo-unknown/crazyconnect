import Flex from "@/app/components/css/Flex";
import { CardText } from "../card";

import { TbPhoto, TbUserSquareRounded, TbUsers } from "react-icons/tb";

const ProfileDetails = () => {
  return (
    <>
      <Flex className={`justify-content-around`}>
        <Flex className="flex-column align-items-center">
          <CardText className="mb-0">
            <TbPhoto />
          </CardText>
          <CardText className="small">22</CardText>
        </Flex>
        <Flex className="flex-column">
          <CardText className="mb-0">
            <TbUserSquareRounded />
          </CardText>
          <CardText className="small">22</CardText>
        </Flex>
        <Flex className="flex-column">
          <CardText className="mb-0">
            <TbUsers />
          </CardText>
          <CardText className="small">22</CardText>
        </Flex>
      </Flex>
    </>
  );
};

export default ProfileDetails;
