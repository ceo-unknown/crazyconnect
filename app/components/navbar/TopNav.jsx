import Link from "next/link";
import React from "react";
import Flex from "../css/Flex";

const TopNav = () => {
  return (
    <nav className="navbar bg-body-tertiary mb-2">
      <Link className="navbar-brand" href={"/"}>
        Crazy Connect
      </Link>
      <Flex className="d-none d-lg-inline-flex">
        <span className="nav-item mx-3">
          <Link className="nav-link active" href={"/"}>
            Home
          </Link>
        </span>
        <span className="nav-item mx-3">
          <Link className="nav-link active" href={"/"}>
            Search
          </Link>
        </span>
        <span className="nav-item mx-3">
          <Link className="nav-link active" href={"/"}>
            Add
          </Link>
        </span>
        <span className="nav-item mx-3">
          <Link className="nav-link active" href={"/profile"}>
            Profile
          </Link>
        </span>
      </Flex>
    </nav>
  );
};

export default TopNav;
