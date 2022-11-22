import { Link } from "react-router-dom";
import AuthLinks from "./AuthLinks/AuthLinks";
import NavLinks from "./NavLinks/NavLinks";

interface IHeaderProps{
  loggedIn: boolean;
  onToggleBurger: ()=> void;
  isToggleBurger: boolean;
}

function Header({ loggedIn, onToggleBurger, isToggleBurger }:IHeaderProps) {
  return (
    <section className="header">
      <Link to="/" className="header__logo"></Link>
      {loggedIn ? (
        <NavLinks
          onToggleBurger={onToggleBurger}
          isToggleBurger={isToggleBurger}
        />
      ) : (
        <AuthLinks />
      )}
    </section>
  );
}

export default Header;
