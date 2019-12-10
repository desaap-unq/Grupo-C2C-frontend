import React, {Component } from "react";
import TemplatePage from "../pages/TemplatePage";
import LoadMenuForm from "../components/forms/LoadMenuForm";

export default class LoadMenuPage extends Component{
    render(){
        return(
            <>
             <TemplatePage history={this.props.history}>
                 <LoadMenuForm props={this.props}/>
             </TemplatePage>
            </>
          
        );
    }
}