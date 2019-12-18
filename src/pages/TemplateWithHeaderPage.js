import React,{Component} from "react";
import ViandasNavBar from "../components/Navbars/ViandasNavBar.js";
import ViandasyaHeader from "../components/Headers/ViandasyaHeader.js";
import ViandasYaFooter from "../components/Footers/ViandasYaFooter.js";

export default class TemplateWithHeaderPage extends Component{
    
    render() {
        return (
            <div>
                <ViandasNavBar history={this.props.history}/>
                <ViandasyaHeader>
                    {React.Children.toArray(this.props.children)[0]}
                </ViandasyaHeader>
                    {React.Children.toArray(this.props.children)[1]}
                <ViandasYaFooter/>
            </div>
        );
    }
}
