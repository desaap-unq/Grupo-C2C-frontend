// import React from "react";
import React, { Component } from 'react';

import { Container } from "reactstrap";

import IndexNavbar from "components/Navbars/IndexNavbar.js";



// core components
export default class HomePage extends Component{
    render() {
        return (
            <>
                <IndexNavbar />
                <div
                    className="page-header section-dark"
                    style={{
                        backgroundImage:
                            "url(" + require("assets/img/ingredientes-hamburguesas-planas-espacio-copia_23-2148235012.jpg") + ")"
                    }}
                >
                    <div className="filter" />
                    <div className="content-center">
                        <Container>
                            <div className="title-brand">
                                <h1 className="presentation-title">Viandas YA</h1>
                                <div className="fog-low">
                                    {/* <img alt="..." src={require("assets/img/fog-low.png")} /> */}
                                </div>
                                <div className="fog-low right">
                                    {/* <img alt="..." src={require("assets/img/fog-low.png")} /> */}
                                </div>
                            </div>
                            <h2 className="presentation-subtitle text-center">
                                Make your mark with a Free Bootstrap 4 (Reactstrap) UI Kit!
            </h2>
                        </Container>
                    </div>
                    <div
                        className="moving-clouds"
                        style={{
                            backgroundImage: "url(" + require("assets/img/clouds.png") + ")"
                        }}
                    />
                    <h6 className="category category-absolute">
                        Designed and coded by{" "}
                        <a
                            href="https://www.creative-tim.com?ref=pkr-index-page"
                            target="_blank"
                        >
                            <img
                                alt="..."
                                className="creative-tim-logo"
                                src={require("assets/img/creative-tim-white-slim2.png")}
                            />
                        </a>
                    </h6>
                </div>
            </>
        );
    }
}

