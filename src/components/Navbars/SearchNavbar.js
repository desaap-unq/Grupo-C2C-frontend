import React from "react";
import { Link } from "react-router-dom";
// nodejs library that concatenates strings
// import classnames from "classnames";

// reactstrap components
import {
  // Collapse,
  NavbarBrand,
  UncontrolledCollapse,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container
} from "reactstrap";

function SearchNavbar(props) {
  const [bodyClick, setBodyClick] = React.useState(false);
  const businesses = props.businesses.length;
  return (
    <>
    {bodyClick ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setBodyClick(false);
          }}
        />
      ) : null}
    <Navbar color="info" expand="lg">
      <Navbar className="navbar bg-info">
          <Container>
            <h3>
                {businesses}
                <small className="text-muted"> locales para una direccion</small>
            </h3>
      
          </Container>
        </Navbar>
       
        <Container>
          <div className="navbar-translate">
            <NavbarBrand
            data-placement="bottom"
            to="/index"
            target="_blank"
            title="ViandasYa"
            tag={Link}
          >
            ViandasYa
          </NavbarBrand>
            <button
              className="navbar-toggler"
              id="navbar-primary"
              type="button"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setBodyClick(true);
              }}
            >
              <span className="navbar-toggler-bar bar1" />
              <span className="navbar-toggler-bar bar2" />
              <span className="navbar-toggler-bar bar3" />
            </button>
          </div>
          <UncontrolledCollapse navbar toggler="#navbar-primary">
            <Nav className="ml-auto" navbar>
              {/*<NavItem className="active">
                <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                  <i className="nc-icon nc-sun-fog-29" />
                  <p>Discover</p>
                </NavLink>
              </NavItem>*/}
              <NavItem>
                <NavLink to="/index" tag={Link}>
                  <i className="nc-icon nc-single-02" />
                  <p>Perfil</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/index" tag={Link}>
                  <i className="nc-icon nc-settings" />
                  <p>Configuraciones</p>
                </NavLink>
              </NavItem>
            </Nav>
          </UncontrolledCollapse>
        </Container>
      </Navbar>
    </>
  );
}

export default SearchNavbar;
