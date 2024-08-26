import Flex from "../css/Flex";
import Link from "next/link";
import { TbHome, TbPlus, TbSearch, TbUser, TbUserCircle } from "react-icons/tb";

const BottomNav = () => {
  return (
    <div className="fixed-bottom d-lg-none ">
      <Flex className="bg-body-tertiary p-2 justify-content-between ">
        <Link className="nav-link" href={"/"}>
          <TbHome size={23} />
        </Link>
        <Link className="nav-link" href={"/search"}>
          <TbSearch size={23} />
        </Link>
        <Link className="nav-link" href={"/add-post"}>
          <TbPlus size={23} />
        </Link>
        <Link className="nav-link" href={"/profile"}>
          <TbUserCircle size={23} />
        </Link>
      </Flex>
    </div>
  );
};

export default BottomNav;
