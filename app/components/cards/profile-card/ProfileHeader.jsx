import Flex from "@/app/components/css/Flex";
import { CardImg, CardText, CardTittle } from "../card";
import ProfileDetails from "./ProfileDetails";
import Col from "@/app/components/css/Col";
import BorderBottom from "../../css/BorderBottom";

const profileImageStyle = {
  width: "8em",
  height: "8em",
  objectFit: "cover",
  borderRadius: "50%",
};
const ProfileHeader = () => {
  return (
    <>
      <Flex className="flex-wrap justify-content-center justify-content-lg-start flex-lg-nowrap">
        <CardImg
          style={profileImageStyle}
          src="https://content.tupaki.com/h-upload/2024/05/06/379562-42w1kbok.webp"
          alt="anshuka"
          clas
        />
        <Flex className="flex-column w-100">
          <CardTittle className={`fw-bold  text-center my-2`}>
            Nuveksha
          </CardTittle>
          <div className="small mx-2">bio</div>
          <BorderBottom className="mb-2" />
          <ProfileDetails />
        </Flex>
      </Flex>
    </>
  );
};

export default ProfileHeader;
