import { Card, CardBody } from "../card";
import ProfileHeader from "./ProfileHeader";

const ProfileCard = () => {
  return (
    <>
      <Card className="sticky-top">
        <CardBody>
          <ProfileHeader />
        </CardBody>
      </Card>
    </>
  );
};

export default ProfileCard;
