import { Link, NavLink } from "react-router-dom";
import { ROUTES } from "../../routes/Routes";
import "./NavBar.scss";
const NavBar = () => {
  return (
    <section className="nav">
      <div className="container">
        <div className="nav_content">
          <div className="nav_leftSide">
            <div className="nav_leftsideLogo">
              <p>Erify Ecommerce</p>
            </div>
            <div className="nav_leftSideLinks">
              <NavLink to={ROUTES.HOME}>Home</NavLink>
              <NavLink to={ROUTES.SEARCH}>Search</NavLink>
            </div>
          </div>
          <div className="nav_rightSide">
            <Link to={ROUTES.LOGIN}>Login</Link>
            <Link to={ROUTES.REGISTRATION}>Registration</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NavBar;
