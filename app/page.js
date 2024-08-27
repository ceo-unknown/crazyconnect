import PostCard from "./components/cards/post-card/PostCard";
import ProfileCard from "./components/cards/profile-card/ProfileCard";
import TrendCard from "./components/cards/trend-card/TrendCard";
import Col from "./components/css/Col";
import Row from "./components/css/Row";

export default function Home() {
  return (
    <>
      <Row>
        <Col className="d-none d-md-block col-md-4 col-lg-3">
          <ProfileCard />
        </Col>
        <Col className="col-12 col-md-8 col-lg-5">
          <PostCard />
        </Col>
        <Col className="d-none d-lg-block col-lg-4">
          <TrendCard />
        </Col>
      </Row>
    </>
  );
}
