import React, { Component } from 'react';

import {
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Input,
    Row,
    FormGroup,
    Container
} from "reactstrap";

import IndexNavbar from "../components/Navbars/IndexNavbar";

import SearchComponent from "../components/search/searchComponent";

export default class HomePage extends Component {
    render() {
        return (
            <>
                <IndexNavbar />
                <div
                    className="page-header section-dark"
                    style={{
                        backgroundImage:
                            "url(" + require("../assets/img/ingredientes-hamburguesas-planas-espacio-copia_23-2148235012.jpg") + ")"
                    }}
                >
                    <div className="filter" />
                    <div className="content-center">
                        <Container>
                            <div className="title-brand">
                                <h1 className="presentation-title">Viandas YA</h1>
                            </div>
                            <h2 className="presentation-subtitle text-center">
                                Make your mark with a Free Bootstrap 4 (Reactstrap) UI Kit!
            </h2>
                            {/* <Container>
                                <InputGroup>
                                    <Row>
                                    <InputGroupAddon addonType="append">
                                        <Input placeholder="Que comemos!" type="text" ></Input>
                                        <InputGroupText>
                                            <span className="glyphicon glyphicon-search">
                                                <i aria-hidden={true} className="fa fa-search" />
                                            </span>
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    </Row>
                                </InputGroup>
                            </Container> */}
                        <SearchComponent/>
                        </Container>
                    </div>
                    <h6 className="category category-absolute">
                        Designed and coded by{" "}
                        <a
                            href="https://www.creative-tim.com?ref=pkr-index-page"
                            target="_blank"
                        >
                            <img
                                alt="..."
                                className="creative-tim-logo"
                                src={require("../assets/img/creative-tim-white-slim2.png")}
                            />
                        </a>

                    </h6>

                </div>

            </>
        );
    }
}

