import React, {Component} from "react";
import ViandasyaNavbar from "../components/Navbars/Viandasya-navbar.js";
import ViandasyaHeader from "../components/Headers/Viandasya-header.js";


export default class BuyMenuPage extends Component{
    render(){
        return(
            <div>
            <ViandasyaNavbar/>
            <ViandasyaHeader/>
            </div>
        );
    }
}