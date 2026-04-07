import { Link, NavLink } from "react-router-dom";
import { ROUTES } from "../../routes/Routes";

const NavBar = () => {
  return (
    <section className="nav">
      <div className="container">
        <div className="nav_content">
          <div className="nav__leftSide">
            <div className="nav_leftsideLogo">
              <p>ERify</p>
            </div>
            <div className="nav_leftSideLinks">
              <NavLink to={ROUTES.HOME}>Home</NavLink>
              <NavLink to={ROUTES.SEARCH}>Search</NavLink>
            </div>
          </div>
        </div>
        <div className="nav_rightSide">
          <Link to={ROUTES.LOGIN}>Login</Link>
          <Link to={ROUTES.REGISTRATION}>Registration</Link>
        </div>
      </div>
    </section>
  );
};

export default NavBar;
