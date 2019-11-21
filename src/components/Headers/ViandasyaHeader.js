import React from "react";

import { Container} from "reactstrap";
import {BusinessHeader} from "./BusinessHeader";



function ViandasyaHeader(props) {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth < 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div
        style={{
          backgroundImage:
            "url(" + require("../../assets/img/big-food-infographics-free-royalty3533.jpg") + ")"
          // "url(" + require("../../assets/img/cortar-rodajas-deliciosa-pizza-fresca-pepperoni_79782-17.jpg") + ")"
          // "url(" + require("../../assets/img/pizza-salchichones-sabrosa-fondo-concreto-negro_79782-102.jpg") + ")"
        }}
        className="page-header page-header-xs"
        data-parallax={true}
        ref={pageHeader}
      >
        <div className="filter" />
        <Container className="header-buyMenu navbar-transparent nav-front">
          <BusinessHeader business={props.business}></BusinessHeader>
        </Container>
      </div>
    </>
  );
}

export default ViandasyaHeader;
