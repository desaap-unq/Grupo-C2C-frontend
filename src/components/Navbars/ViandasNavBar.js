import React from "react";
import classnames from "classnames";
import { useAuth0 } from "../../contexts/auth0-context";
import {
  Button,
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container
} from "reactstrap";

function ViandasNavBar(props) {
  const {isLoading, user, loginWithRedirect, logout} = useAuth0();

  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  const redirectBusiness = () => {
    props.history.push("/business/load");
  };

  const redirectMenu = () => {
    // props.history.push("/");
  };

  const redirectIndx = () => {
    console.log(props);
    props.history.push("/index");
  };

  const [dropdownOpen, setOpen] = React.useState(false);

  const toggle = () => setOpen(!dropdownOpen);

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor("navbar-transparent");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <Navbar className={classnames("fixed-top nav-front", navbarColor)} expand="lg">
      <Container>
        <div className="navbar-translate">
          <NavbarBrand
            data-placement="bottom"
            href="/index"
            target="_blank"
            title="Coded by Creative Tim"
          >
            Viandas YA
          </NavbarBrand>
          <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler navbar-toggler", {
              toggled: navbarCollapse
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
        >
          <Nav navbar>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://twitter.com/CreativeTim?ref=creativetim"
                target="_blank"
                title="Follow us on Twitter"
              >
                <i className="fa fa-twitter" />
                <p className="d-lg-none">Twitter</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://www.facebook.com/CreativeTim?ref=creativetim"
                target="_blank"
                title="Like us on Facebook"
              >
                <i className="fa fa-facebook-square" />
                <p className="d-lg-none">Facebook</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://www.instagram.com/CreativeTimOfficial?ref=creativetim"
                target="_blank"
                title="Follow us on Instagram"
              >
                <i className="fa fa-instagram" />
                <p className="d-lg-none">Instagram</p>
              </NavLink>
            </NavItem>
            
            <NavItem>

              {/* if there is no user. show the login button */}
              <div className="navbar-end">
              {!isLoading && !user && (
                <Button className="btn btn-danger" onClick={loginWithRedirect}>
                  Login
                </Button>
              )}

              {/* if there is a user. show user name and logout button */}
              {!isLoading && user && (
                <>
                  <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
                    <DropdownToggle caret color="primary">
                      {user.name}
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem onClick={redirectBusiness}>Carga tu Negocio</DropdownItem>
                      <DropdownItem divider/>
                      <DropdownItem onClick={redirectMenu}>Carga Menu</DropdownItem>
                      <DropdownItem divider/>
                      <DropdownItem onClick={redirectIndx}>Inicio</DropdownItem>
                    </DropdownMenu>
                  </ButtonDropdown>
                  <Button
                    className="btn btn-danger"
                    onClick={() => logout({ returnTo: "http://localhost:3000/index" })}
                  >
                    Logout
                  </Button>
                </>
              )}
              </div>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default ViandasNavBar;
