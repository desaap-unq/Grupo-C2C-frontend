import React from "react";

// reactstrap components
import { Button, Card, Form, Input, Container, Row, Col } from "reactstrap";

// core components
import ViandasNavBar from "../components/Navbars/ViandasNavBar.js";
import ViandasYaFooter from "../components/Footers/ViandasYaFooter";

function LoginPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("register-page");
    return function cleanup() {
      document.body.classList.remove("register-page");
    };
  });
  return (
    <>
      <ViandasNavBar onChangeLanguage={this.props.onChangeLanguage}/>
      <div
        className="page-header"
        style={{
          backgroundImage: "url(" + require("../assets/img/pizza-margarita-fast-food-pizza-with-vegetables-pizza-without-meat.jpg") + ")"
        }}

      >
        <div className="filter" />
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" lg="4">
              <Card className="login-page card-register ml-auto mr-auto">
                <h3 className="title mx-auto">BIENVENIDO</h3>
                <div className="social-line text-center">
                  <Button
                    className="btn-neutral btn-just-icon mr-1"
                    color="facebook"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-facebook-square" />
                  </Button>
                  <Button
                    className="btn-neutral btn-just-icon mr-1"
                    color="google"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-google-plus" />
                  </Button>
                  <Button
                    className="btn-neutral btn-just-icon"
                    color="twitter"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-twitter" />
                  </Button>
                </div>
                <Form className="register-form">
                  <label>Email</label>
                  <Input placeholder="Email" type="text" />
                  <label>Contraseña</label>
                  <Input placeholder="Password" type="password" />
                  <Button block className="btn-round" color="danger">
                    Ingresar
                  </Button>
                </Form>
                <div className="forgot">
                  <Button
                    className="btn-link"
                    color="danger"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    Olvidaste tu contraseña?
                  </Button>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
        <ViandasYaFooter/>
      </div>
    </>
  );
}

export default LoginPage;
