import Flex from "../css/Flex";
import Link from "next/link";
import { TbHome, TbPlus, TbSearch, TbUser, TbUserCircle } from "react-icons/tb";

const BottomNav = () => {
  return (
    <div className="container fixed-bottom d-lg-none px-0">
      <Flex className="bg-body-tertiary p-3  justify-content-between ">
        <Link className="nav-link" href={"/"}>
          <TbHome size={24} />
        </Link>
        <Link className="nav-link" href={"/search"}>
          <TbSearch size={24} />
        </Link>
        <Link className="nav-link" href={"/add-post"}>
          <TbPlus size={24} />
        </Link>
        <Link className="nav-link" href={"/profile"}>
          <TbUserCircle size={24} />
        </Link>
      </Flex>
    </div>
  );
};

export default BottomNav;
