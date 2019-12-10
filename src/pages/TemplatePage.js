import React, {Component } from "react";
import ViandasNavBar from "../components/Navbars/ViandasNavBar";
import ViandasYaFooter from "../components/Footers/ViandasYaFooter";

export default class TemplatePage extends Component{
    render(){
        return(
            <>
              <ViandasNavBar  history={this.props.history} />
              <div
                className="page-header"
                style={{
                  backgroundImage: "url(" + require("../assets/img/pizza-margarita-fast-food-pizza-with-vegetables-pizza-without-meat.jpg") + ")"
                }}
              >
              <div className="filter" />
              {this.props.children}
              <ViandasYaFooter/>
              </div>
            </>
          
        );
    }
}