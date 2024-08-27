import React from "react";
import ProfileCard from "../components/cards/profile-card/ProfileCard";
import ProfileImageGrid from "./ProfileImageGrid";
import Flex from "../components/css/Flex";
import Col from "../components/css/Col";
import Row from "../components/css/Row";

const Profile = () => {
  return (
    <>
      <Row className="flex-wrap g-2">
        <Col className="col-12 col-md-4 col-lg-4">
          <ProfileCard />
        </Col>
        <Col className="col-12 col-md-8 col-lg-8 ">
          <ProfileImageGrid />
        </Col>
      </Row>
    </>
  );
};

export default Profile;
