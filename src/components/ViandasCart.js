import React, { Component } from "react";
import { Card, CardTitle,ListGroup,ListGroupItem, CardBody, CardFooter, Button } from "reactstrap";
import {ItemMenu} from "../components/ItemMenu";

export default class ViandasCart extends Component {
    constructor(props){
        super(props) 
        this.state = {menusCart:[{quantity:1, menu:{id:1, name:"hamburguesa"}},{quantity:2, menu:{id:2, name:"hamburguesa"}}]}

        this.removeItem.bind(this);
}
        // this.menusCart=[{quantity:1, menu:{id:1, name:"hamburguesa"}},{quantity:2, menu:{id:2, name:"hamburguesa"}}];
    fun(){
        console.log("holaaaa")
    }    

    removeItem(id){
        console.log(id.currentTarget.id);
        
        // this.menusCart = this.menusCart.filter( orderItem => orderItem.menu.id !== id );
    }

    render() {
        return (
            <div className="viandas-cart col-md-12">
                <div className="header-cart row  justify-content-center mt-2 mb-2">
                    <h4 className="pl-3 mt-0" >Tu Vianda </h4>
                    
                </div>
                {this.state.menusCart.map(menu =>{return(<ItemMenu key={menu.menu.id} id={menu.menu.id} orderItem={menu} removeItem={this.removeItem}/>)})};
                
                <div className="row pt-4">
                    <h4 className="pl-3 mt-0 col-8 text-center" >TOTAL </h4>
                    <h4 className="pl-3 mt-0 col-4" >$680 </h4>
                    
                </div> 
                <div className="row">
                    <Button className="offset-2 col-8 mb-3 mt-4 btn-danger">Continuar</Button>   
                </div>
            </div>


        );
    }
}