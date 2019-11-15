import React, {Component} from "react";
import ViandasyaNavbar from "../components/Navbars/Viandasya-navbar.js";
import ViandasyaHeader from "../components/Headers/Viandasya-header.js";

import {Container} from "reactstrap";

export default class BuyMenuPage extends Component{
    business = {
        name = "Calchaqui",
        logo = logo,
        locality = "Quilmes",
        address = "Calchaqui 2345",
        location = "Quilmes",
        description = "parrilla familiar",
        link = "www.laEstancia.com.ar",
        email = "estancia_20119@gmail.com",
        phone = "42557845",
        schedule = "",
        days = [1,2,3,4,5,6],
        delivery = false,
        walletId = "46"
    }; 
    menus = []; 

    render(){
        return(
            <div>
            <ViandasyaNavbar/>
            <ViandasyaHeader/>
            <Container>
                
            </Container>
>            </div>
        );
    }
}