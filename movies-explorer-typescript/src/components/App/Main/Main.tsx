import Navigation from "../Navigation/Navigation";
import Promo from "./Promo/Promo";
import AboutProject from "./AboutProject/AboutProject";
import Techs from "./Techs/Techs";
import AboutMe from "./AboutMe/AboutMe";
import Portfolio from "./Portfolio/Portfolio";
import Footer from "../Footer/Footer";

interface IMainProps {
  loggedIn: boolean;
  onToggleBurger: ()=> void;
  isToggleBurger: boolean;
  onCloseNav: ()=> void;
}

function Main({ loggedIn, onToggleBurger, isToggleBurger, onCloseNav }:IMainProps) {
  return (
    <>
      <Promo
        loggedIn={loggedIn}
        onToggleBurger={onToggleBurger}
        isToggleBurger={isToggleBurger}
      />
      <main className="content">
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
      </main>
      <Footer />
      <Navigation isToggleBurger={isToggleBurger} onCloseNav={onCloseNav} />
    </>
  );
}

export default Main;
