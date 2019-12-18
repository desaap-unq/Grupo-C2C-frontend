import React from "react";
import {FormattedHTMLMessage} from 'react-intl';

import { Row, Container } from "reactstrap";

function DemoFooter() {
  return (
    <footer className="footer footer-black footer-white">
      <Container>
        <Row className="d-flex justify-content-center">
          <div className="credits">
          © {new Date().getFullYear()},
                    <FormattedHTMLMessage id="app.madeWith"
                        defaultMessage=" Echo con "
                    />
                     
                    <i className="fa fa-heart heart" /> 
                    <FormattedHTMLMessage id="app.byVianda"
                        defaultMessage=" por Viandas Ya"
                    />
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default DemoFooter;
