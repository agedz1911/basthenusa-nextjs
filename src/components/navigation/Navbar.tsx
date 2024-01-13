import ButtonLogo from "../ButtonLogo";
import MobileMenu from "./MobileMenu";
import NavMenu from "./NavMenu";
import NavScroll from "./NavScroll";
import UserNav from "./UserNav";

const Navbar = () => {
  return (
    <NavScroll>
      <div className="flex flex-row items-center justify-between md:px-10 lg:justify-around">
        <ButtonLogo />
        <NavMenu />
        <div className="flex items-center space-x-2">
          <UserNav className="lg:flex hidden lg:flex-row space-x-2 lg:items-center" />
          <MobileMenu />
        </div>
      </div>
    </NavScroll>
  );
};

export default Navbar;
