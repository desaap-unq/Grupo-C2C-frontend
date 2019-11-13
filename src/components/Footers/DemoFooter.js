import React from "react";

// reactstrap components
import { Row, Container } from "reactstrap";

function DemoFooter() {
  return (
    <footer className="footer footer-black footer-white">
      <Container>
        <Row>
          <nav className="footer-nav">
            <ul>
              <li>
                <a
                  href="#pablo"
                  target="_blank"
                >
                  Viandas Ya
                </a>
              </li>
              <li>
                <a
                  href="#pablo"
                  target="_blank"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#pablo"
                  target="_blank"
                >
                  Licenses
                </a>
              </li>
            </ul>
          </nav>
          <div className="credits ml-auto">
            <span className="copyright">
              © {new Date().getFullYear()}, made with{" "}
              <i className="fa fa-heart heart" /> by Viandas Ya
            </span>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default DemoFooter;
